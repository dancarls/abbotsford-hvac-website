import { NextRequest, NextResponse } from 'next/server';

/**
 * Lead submission endpoint.
 *
 * Delivery strategy (in order):
 * 1. If RESEND_API_KEY + LEAD_NOTIFICATION_EMAIL are set → email via Resend
 * 2. If LEAD_WEBHOOK_URL is set → POST the lead to that webhook (Zapier/Make/n8n)
 * 3. Always logs to Vercel logs as fallback (searchable via Vercel dashboard)
 *
 * Configure in Vercel → Settings → Environment Variables:
 *   RESEND_API_KEY=re_...            # from https://resend.com (free tier ok)
 *   LEAD_NOTIFICATION_EMAIL=you@...  # where leads get sent
 *   RESEND_FROM_EMAIL=leads@abbotsfordhvac.ca  # verified sender (optional; falls back to onboarding@resend.dev in dev)
 *   LEAD_WEBHOOK_URL=https://...     # optional extra sink
 */

interface LeadPayload {
  name: string;
  phone: string;
  message?: string;
  website?: string; // honeypot
  source?: string;
  pageUrl?: string;
}

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

function sanitize(s: unknown, max = 500): string {
  if (typeof s !== 'string') return '';
  // Strip control chars and cap length
  return s
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, max);
}

function looksLikePhone(s: string): boolean {
  const digits = s.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // Honeypot — silently succeed for bots
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 200);
  const phone = sanitize(body.phone, 40);
  const message = sanitize(body.message, 2000);
  const source = sanitize(body.source, 100) || 'unknown';
  const pageUrl = sanitize(body.pageUrl, 500);

  if (!name || !phone) {
    return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
  }
  if (!looksLikePhone(phone)) {
    return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
  }

  const receivedAt = new Date().toISOString();
  const submittedFrom = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  // Always log — visible in Vercel logs as fallback
  console.log('[LEAD]', JSON.stringify({ receivedAt, source, pageUrl, name, phone, message, submittedFrom }));

  const notifyEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  const deliveryErrors: string[] = [];

  // 1. Resend email delivery
  if (resendKey && notifyEmail) {
    try {
      const subject = `New AbbotsfordHVAC lead: ${name} — ${phone}`;
      const html = `
        <div style="font-family:system-ui,-apple-system,sans-serif;color:#111;max-width:600px">
          <h2 style="color:#2563eb;margin-bottom:8px">New Lead — Abbotsford HVAC</h2>
          <p style="color:#666;margin-top:0">Received ${receivedAt}</p>
          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            <tr><td style="padding:8px;background:#f9fafb;font-weight:bold;width:120px">Name</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;background:#f9fafb;font-weight:bold">Phone</td><td style="padding:8px"><a href="tel:${escapeHtml(phone.replace(/\D/g, ''))}">${escapeHtml(phone)}</a></td></tr>
            <tr><td style="padding:8px;background:#f9fafb;font-weight:bold">Message</td><td style="padding:8px;white-space:pre-wrap">${escapeHtml(message) || '<em style="color:#999">none</em>'}</td></tr>
            <tr><td style="padding:8px;background:#f9fafb;font-weight:bold">Source</td><td style="padding:8px">${escapeHtml(source)}</td></tr>
            <tr><td style="padding:8px;background:#f9fafb;font-weight:bold">Page</td><td style="padding:8px"><a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a></td></tr>
            <tr><td style="padding:8px;background:#f9fafb;font-weight:bold">IP</td><td style="padding:8px">${escapeHtml(submittedFrom)}</td></tr>
          </table>
        </div>`;

      const resendRes = await fetch(RESEND_ENDPOINT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notifyEmail],
          reply_to: undefined,
          subject,
          html,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text().catch(() => '');
        deliveryErrors.push(`resend:${resendRes.status}:${errText.slice(0, 200)}`);
      }
    } catch (e: any) {
      deliveryErrors.push(`resend:exception:${e?.message || 'unknown'}`);
    }
  }

  // 2. Webhook delivery
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ receivedAt, source, pageUrl, name, phone, message, submittedFrom }),
      });
    } catch (e: any) {
      deliveryErrors.push(`webhook:exception:${e?.message || 'unknown'}`);
    }
  }

  if (deliveryErrors.length > 0) {
    console.warn('[LEAD-DELIVERY-ERRORS]', deliveryErrors.join(' | '));
  }

  // Always return success to the user — the lead is logged either way
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
