# Transactional Email Implementation Guide for Abbotsford HVAC

To replace the simulated email verification and lead capture system with a production-ready transactional email service (like SendGrid or AWS SES), follow these steps.

## 1. Choose a Provider
We recommend **SendGrid** for its ease of use and generous free tier for new businesses.

## 2. Technical Architecture

### Infrastructure Needed:
1. **Edge Function / Backend Endpoint**: Since this is a Vite (frontend only) app, you need a serverless function to securely call the SendGrid API (to avoid exposing your API Keys).
2. **Supabase Edge Functions**: Ideal if you are already using Supabase.

### Implementation Pattern:

#### A. Backend Endpoint (Supabase / Node.js)
```typescript
// Example Supabase Edge Function: /functions/send-lead-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY')

serve(async (req) => {
  const { to, name, phone, service, message } = await req.json()

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: 'info@abbotsfordhvac.ca' }] }],
      from: { email: 'leads@abbotsfordhvac.ca' },
      subject: `New Lead: ${service} - ${name}`,
      content: [{
        type: 'text/plain',
        value: `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
      }]
    })
  })

  return new Response(JSON.stringify({ success: true }), { status: 200 })
})
```

#### B. Update Frontend Components
Update `Home/page.tsx`, `Contact/page.tsx`, and `ProjectServiceForm.tsx` to call your new endpoint.

```diff
- const response = await fetch('https://readdy.ai/api/form/...', {
+ const response = await fetch('https://your-project.supabase.co/functions/v1/send-lead-email', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
```

## 3. Recommended Workflow for Lead Verification
Instead of the current simulation, use a "double opt-in" flow:
1. User submits form.
2. Form is saved to Supabase `leads` table with `verified: false`.
3. Edge Function sends an email to the user with a 6-digit code.
4. User enters code on the site.
5. Frontend calls a `verify-lead` function to set `verified: true` and notify the admin.

## 4. DNS Configuration (Crucial for Delivery)
Ensure you set up **SPF, DKIM, and DMARC** records in your domain registrar (e.g., Namecheap or GoDaddy) as provided by SendGrid. This prevents your lead notifications from going to Spam.

vocal-business-website-seo.
