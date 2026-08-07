'use client';

import { useState, FormEvent } from 'react';
import settingsData from '../../lib/data/settings.json';

const PHONE = settingsData.phoneNumber || '(236) 477-3002';
const PHONE_RAW = settingsData.phoneRaw || PHONE.replace(/[^0-9]/g, '');

interface LeadFormProps {
  source?: string;
  compact?: boolean;
  heading?: string;
  subheading?: string;
}

/**
 * 3-field lead capture form.
 * Posts to /api/leads which emails the site owner + logs the lead.
 * Includes a honeypot field for spam protection.
 */
export default function LeadForm({
  source = 'inline',
  compact = false,
  heading = 'Get a callback in 30 minutes',
  subheading = "Fill in three quick details and we'll call you back. For emergencies, call directly.",
}: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      website: String(formData.get('website') || '').trim(), // honeypot
      source,
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    };

    // Basic validation
    if (!payload.name || !payload.phone) {
      setStatus('error');
      setErrorMsg('Please enter your name and phone.');
      return;
    }

    // Fire GA4 conversion event (safe if gtag not present)
    try {
      const w = window as any;
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'lead_form_submit', {
          event_category: 'lead',
          event_label: source,
        });
      }
    } catch {
      /* ignore analytics failures */
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Server returned ${res.status}`);
      }

      setStatus('ok');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Something went wrong. Please call us directly.');
    }
  }

  if (status === 'ok') {
    return (
      <div className={`bg-emerald-50 border border-emerald-200 rounded-2xl ${compact ? 'p-5' : 'p-8'}`}>
        <div className="flex items-start gap-3">
          <i className="ri-checkbox-circle-fill text-3xl text-emerald-600 flex-shrink-0"></i>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Thanks — we got it.</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We&apos;ll call you back shortly. For anything urgent, call{' '}
              <a href={`tel:${PHONE_RAW}`} className="text-blue-600 font-bold underline">
                {PHONE}
              </a>{' '}
              directly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
      {heading && (
        <div className="mb-5">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{heading}</h3>
          {subheading && <p className="text-sm text-gray-600">{subheading}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from users, bots often fill it */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="space-y-3">
          <div>
            <label htmlFor={`lead-name-${source}`} className="sr-only">
              Your name
            </label>
            <input
              id={`lead-name-${source}`}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-gray-900"
            />
          </div>
          <div>
            <label htmlFor={`lead-phone-${source}`} className="sr-only">
              Your phone
            </label>
            <input
              id={`lead-phone-${source}`}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone number"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-gray-900"
            />
          </div>
          <div>
            <label htmlFor={`lead-message-${source}`} className="sr-only">
              What&apos;s going on?
            </label>
            <textarea
              id={`lead-message-${source}`}
              name="message"
              rows={compact ? 2 : 3}
              placeholder="What's the problem? (Furnace not heating, AC not cooling, water leak…)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-gray-900 resize-none"
            />
          </div>
        </div>

        {status === 'error' && (
          <div className="mt-3 text-sm text-red-600 flex items-start gap-2">
            <i className="ri-error-warning-line flex-shrink-0 mt-0.5"></i>
            <span>{errorMsg}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          {status === 'sending' ? (
            <>
              <i className="ri-loader-4-line animate-spin"></i>
              Sending…
            </>
          ) : (
            <>
              Request Callback <i className="ri-arrow-right-line"></i>
            </>
          )}
        </button>

        <p className="mt-3 text-xs text-gray-500 text-center">
          Prefer to call?{' '}
          <a href={`tel:${PHONE_RAW}`} className="text-blue-600 font-semibold hover:underline">
            {PHONE}
          </a>{' '}
          — answered 24/7.
        </p>
      </form>
    </div>
  );
}
