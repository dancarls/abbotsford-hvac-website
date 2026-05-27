import { Metadata } from 'next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { getSettings } from '../../../lib/getSettings';

export const metadata: Metadata = {
  title: "AC Not Cooling in Abbotsford? 7 Quick Checks Before You Call for AC Repair",
  description: "AC stopped working in Abbotsford? Run these 7 safe checks first, then learn the most common repair causes, what it costs, and when to replace instead of repair.",
  keywords: "AC not cooling Abbotsford, air conditioner repair Abbotsford BC, AC broken Abbotsford, AC stopped working Abbotsford, emergency AC repair Abbotsford, air conditioner not working Fraser Valley, AC repair cost Abbotsford, HVAC repair Abbotsford BC",
  authors: [{ name: "AbbotsfordHVAC.ca" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.abbotsfordhvac.ca/blog/ac-not-cooling-abbotsford-repair/"
  },
  openGraph: {
    title: "AC Not Cooling in Abbotsford? 7 Quick Checks Before You Call for Repair",
    description: "Safe DIY checks to run before calling a tech, the most common AC repair causes in Abbotsford, repair costs, and when replacement makes more sense.",
    type: "article",
    url: "https://www.abbotsfordhvac.ca/blog/ac-not-cooling-abbotsford-repair/",
    images: ["https://www.abbotsfordhvac.ca/images/ac-not-cooling-abbotsford-hero.png"],
    locale: "en_CA"
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.abbotsfordhvac.ca/blog/ac-not-cooling-abbotsford-repair/#article",
      "headline": "AC Not Cooling in Abbotsford? 7 Quick Checks Before You Call for Air Conditioner Repair",
      "description": "Safe checks to run before calling a tech, common AC repair causes, repair costs, and when replacement makes more sense than another repair bill.",
      "image": "https://www.abbotsfordhvac.ca/images/ac-not-cooling-abbotsford-hero.png",
      "datePublished": "2025-06-01",
      "dateModified": "2025-06-01",
      "author": { "@type": "Organization", "name": "AbbotsfordHVAC.ca" },
      "publisher": { "@type": "Organization", "name": "AbbotsfordHVAC.ca",
        "logo": { "@type": "ImageObject", "url": "https://www.abbotsfordhvac.ca/images/logo.png" }
      },
      "mainEntityOfPage": "https://www.abbotsfordhvac.ca/blog/ac-not-cooling-abbotsford-repair/",
      "keywords": ["AC not cooling Abbotsford", "air conditioner repair Abbotsford", "AC broken BC", "HVAC repair Fraser Valley"],
      "articleSection": "AC Repair",
      "wordCount": "1950"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.abbotsfordhvac.ca#business",
      "name": "AbbotsfordHVAC.ca",
      "address": { "@type": "PostalAddress", "addressLocality": "Abbotsford", "addressRegion": "BC", "addressCountry": "CA" },
      "areaServed": ["Abbotsford", "Mission", "Chilliwack", "Langley", "Fraser Valley"],
      "serviceType": ["AC Repair", "Emergency AC Repair", "Air Conditioner Service", "HVAC Repair"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Why is my AC running but not cooling?",
          "acceptedAnswer": { "@type": "Answer", "text": "The most common causes are low refrigerant from a slow leak, a dirty condenser coil, a failed capacitor, a severely clogged air filter, or a frozen evaporator coil. Run through the 7 checks in this article first — a dirty filter or thermostat setting solves the problem more often than you'd expect." }
        },
        { "@type": "Question", "name": "How much does AC repair cost in Abbotsford?",
          "acceptedAnswer": { "@type": "Answer", "text": "A diagnostic service call typically runs $80–$150. Capacitor or contactor replacement is $150–$500. Refrigerant recharge with leak repair runs $300–$900. Coil cleaning or blower motor work is $600–$1,800. Compressor failures ($1,500–$3,500+) often make replacement more cost-effective on older systems." }
        },
        { "@type": "Question", "name": "How quickly can I get AC repair in Abbotsford?",
          "acceptedAnswer": { "@type": "Answer", "text": "During heat waves, most Abbotsford HVAC companies have 1–3 day waits for non-emergency calls. Same-day service is often available, especially when booked early. Maintenance plan members receive priority scheduling." }
        },
        { "@type": "Question", "name": "Should I repair or replace my AC in Abbotsford?",
          "acceptedAnswer": { "@type": "Answer", "text": "The $5,000 rule is a useful guide: multiply the system's age by the repair cost. If the result exceeds $5,000, replacement deserves serious consideration. Systems over 12–15 years facing major repairs are usually better replaced, especially given BC CleanBC heat pump rebates." }
        }
      ]
    }
  ]
};

const articleCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

  :root {
    --sky:        #0284C7;
    --sky-dark:   #075985;
    --sky-deeper: #0C4A6E;
    --sky-lt:     #E0F2FE;
    --sky-mid:    #38BDF8;
    --teal:       #0D9488;
    --teal-lt:    #CCFBF1;
    --cool-gray:  #475569;
    --slate:      #334155;
    --coal:       #0F172A;
    --white:      #FFFFFF;
    --mist:       #F0F9FF;
    --border:     #BAE6FD;
    --success-lt: #DCFCE7;
    --danger:     #B91C1C;
    --danger-lt:  #FEE2E2;
    --caution-lt: #FEF9C3;
    --font-display: 'Outfit', system-ui, sans-serif;
    --font-body:    'Lora', Georgia, serif;
    --font-ui:      'DM Sans', system-ui, sans-serif;
    --max-w:      800px;
    --max-w-wide: 1080px;
    --radius:     8px;
    --radius-lg:  14px;
    --shadow-sm:  0 2px 10px rgba(2,132,199,.08);
    --shadow-md:  0 8px 32px rgba(2,132,199,.14);
    --shadow-lg:  0 20px 60px rgba(2,132,199,.18);
  }

  .ac-repair-article {
    font-family: var(--font-body);
    font-size: 18px;
    line-height: 1.78;
    color: var(--coal);
    background: var(--mist);
  }
  .ac-repair-article img { max-width: 100%; display: block; border-radius: var(--radius); }
  .ac-repair-article a { color: var(--sky); text-decoration: underline; text-underline-offset: 3px; }
  .ac-repair-article a:hover { color: var(--sky-dark); }

  .container       { max-width: var(--max-w);      margin-inline: auto; padding-inline: 24px; }
  .container--wide { max-width: var(--max-w-wide); margin-inline: auto; padding-inline: 24px; }

  .topbar {
    background: var(--sky-deeper);
    color: rgba(255,255,255,.65);
    font-family: var(--font-ui);
    font-size: 13px; font-weight: 500;
    letter-spacing: .05em;
    padding: 10px 24px;
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
  }
  .topbar a { color: var(--sky-mid); text-decoration: none; font-weight: 600; }
  .topbar a:hover { color: var(--white); }
  .topbar__badge {
    background: var(--teal); color: var(--white);
    font-size: 11px; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase;
    padding: 3px 9px; border-radius: 20px;
  }

  .hero {
    background: linear-gradient(150deg, var(--sky-deeper) 0%, var(--sky) 50%, var(--sky-mid) 100%);
    color: var(--white);
    padding: 80px 24px 72px;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,.12) 0%, transparent 65%);
    pointer-events: none;
  }
  .hero::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0; right: 0;
    height: 48px;
    background: var(--mist);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .hero__inner {
    position: relative; z-index: 1;
    max-width: var(--max-w); margin-inline: auto;
  }
  .hero__label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--font-ui);
    font-size: 12px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--sky-lt); margin-bottom: 20px;
  }
  .hero__label::before { content: '🔧'; font-size: 14px; }
  .ac-repair-article .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(30px, 4.8vw, 50px);
    font-weight: 900; line-height: 1.08;
    margin-bottom: 22px; letter-spacing: -.02em;
  }
  .ac-repair-article .hero h1 em { font-style: normal; color: var(--sky-lt); }
  .hero__sub {
    font-family: var(--font-ui);
    font-size: 18px; line-height: 1.65;
    color: rgba(255,255,255,.82);
    max-width: 580px; margin-bottom: 36px;
  }
  .hero__meta {
    display: flex; flex-wrap: wrap; gap: 20px;
    font-family: var(--font-ui); font-size: 13px;
    color: rgba(255,255,255,.5); margin-bottom: 36px;
  }
  .hero__stats { display: flex; flex-wrap: wrap; gap: 16px; }
  .stat-pill {
    background: rgba(255,255,255,.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 50px;
    padding: 10px 20px;
    font-family: var(--font-ui); font-size: 14px; font-weight: 600;
    color: var(--white);
    display: flex; align-items: center; gap: 8px;
  }

  .hero-image-block {
    max-width: var(--max-w-wide);
    margin-inline: auto; padding-inline: 24px; padding-top: 24px;
  }
  .hero-image-block img { width: 100%; border-radius: var(--radius-lg); }

  .article-body { padding: 64px 24px 24px; }
  .article-body p { margin-bottom: 1.5rem; color: var(--slate); }

  .ac-repair-article h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3.2vw, 32px);
    font-weight: 700; color: var(--sky-dark);
    margin-top: 56px; margin-bottom: 18px; line-height: 1.2;
    letter-spacing: -.01em;
  }
  .ac-repair-article h3 {
    font-family: var(--font-display);
    font-size: clamp(17px, 2.3vw, 20px);
    font-weight: 600; color: var(--slate);
    margin-top: 32px; margin-bottom: 10px; line-height: 1.3;
  }

  .lead {
    font-size: 20px; line-height: 1.72; color: var(--slate);
    border-left: 4px solid var(--sky);
    padding-left: 20px; margin-bottom: 2rem;
  }

  .pullquote {
    background: linear-gradient(135deg, var(--sky-dark), var(--teal));
    color: var(--white); padding: 36px 40px;
    border-radius: var(--radius-lg);
    margin: 40px 0; position: relative; overflow: hidden;
    box-shadow: var(--shadow-md);
  }
  .pullquote::before {
    content: '\\201C'; position: absolute;
    top: -10px; left: 22px;
    font-family: var(--font-display); font-size: 130px;
    color: rgba(255,255,255,.08); line-height: 1; pointer-events: none;
  }
  .pullquote p {
    font-family: var(--font-display);
    font-size: clamp(17px, 2.3vw, 22px); font-weight: 600;
    line-height: 1.5; color: var(--white); position: relative; margin-bottom: 0 !important;
  }
  .pullquote cite {
    display: block; margin-top: 14px;
    font-family: var(--font-ui); font-size: 12px;
    letter-spacing: .08em; text-transform: uppercase;
    color: var(--teal-lt); position: relative;
  }

  .symptoms {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 14px; margin: 28px 0;
  }
  .symptom {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 20px 18px;
    display: flex; gap: 14px; align-items: flex-start;
    box-shadow: var(--shadow-sm);
  }
  .symptom--red   { border-left: 4px solid #DC2626; }
  .symptom--amber { border-left: 4px solid #D97706; }
  .symptom--blue  { border-left: 4px solid var(--sky); }
  .symptom__icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
  .symptom__title {
    font-family: var(--font-ui); font-size: 14px; font-weight: 700;
    color: var(--coal); margin-bottom: 4px;
  }
  .symptom__desc {
    font-family: var(--font-ui); font-size: 13px; line-height: 1.55; color: var(--cool-gray);
  }

  .checks { display: flex; flex-direction: column; gap: 16px; margin: 28px 0; }
  .check-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    display: grid; grid-template-columns: 64px 1fr;
    overflow: hidden; box-shadow: var(--shadow-sm);
    transition: box-shadow .2s;
  }
  .check-card:hover { box-shadow: var(--shadow-md); }
  .check-card__num {
    background: var(--sky); color: var(--white);
    font-family: var(--font-display); font-size: 28px; font-weight: 900;
    display: flex; align-items: center; justify-content: center;
  }
  .check-card__body { padding: 20px 22px; }
  .check-card__title {
    font-family: var(--font-ui); font-size: 15px; font-weight: 700;
    color: var(--coal); margin-bottom: 6px;
    display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  }
  .badge {
    font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase;
    padding: 2px 8px; border-radius: 20px;
  }
  .badge--diy { background: var(--success-lt); color: #166534; }
  .badge--pro { background: var(--danger-lt);  color: #991B1B; }
  .check-card__desc {
    font-family: var(--font-ui); font-size: 13.5px; line-height: 1.65; color: var(--cool-gray);
  }
  .check-card__tip {
    margin-top: 12px; background: var(--sky-lt);
    border-left: 3px solid var(--sky);
    border-radius: 0 var(--radius) var(--radius) 0;
    padding: 10px 14px;
    font-family: var(--font-ui); font-size: 12.5px; line-height: 1.5; color: var(--sky-dark);
  }

  .boundary-box {
    background: var(--danger-lt); border: 1.5px solid #FCA5A5;
    border-radius: var(--radius-lg); padding: 24px 28px; margin: 32px 0;
  }
  .boundary-box__heading {
    font-family: var(--font-ui); font-size: 13px; font-weight: 700;
    letter-spacing: .07em; text-transform: uppercase;
    color: var(--danger); margin-bottom: 14px;
  }
  .boundary-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .boundary-list li {
    font-family: var(--font-ui); font-size: 15px; line-height: 1.55;
    display: flex; gap: 10px; color: var(--coal);
  }
  .boundary-list li::before { content: '🚫'; flex-shrink: 0; }

  .issues-table-wrap {
    overflow-x: auto; margin: 28px 0;
    border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
  }
  .issues-table {
    width: 100%; border-collapse: collapse;
    font-family: var(--font-ui); font-size: 14px;
    background: var(--white);
  }
  .issues-table thead tr { background: var(--sky-dark); color: var(--white); }
  .issues-table th {
    padding: 13px 16px; text-align: left;
    font-size: 12px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
  }
  .issues-table td {
    padding: 13px 16px; border-bottom: 1px solid #E0F2FE;
    color: var(--slate); vertical-align: top;
  }
  .issues-table tbody tr:last-child td { border-bottom: none; }
  .issues-table tbody tr:hover td { background: var(--mist); }
  .sev {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 12px; font-weight: 700;
    padding: 3px 9px; border-radius: 20px;
  }
  .sev-low  { background: var(--success-lt); color: #166534; }
  .sev-mid  { background: var(--caution-lt); color: #92400E; }
  .sev-high { background: var(--danger-lt);  color: #991B1B; }

  .cost-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 14px; margin: 28px 0;
  }
  .cost-item {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 20px 18px;
    box-shadow: var(--shadow-sm);
  }
  .cost-item--diag  { border-top: 3px solid var(--sky-mid); }
  .cost-item--minor { border-top: 3px solid var(--teal); }
  .cost-item--mid   { border-top: 3px solid #F59E0B; }
  .cost-item--high  { border-top: 3px solid #EA580C; }
  .cost-item--major { border-top: 3px solid #DC2626; }
  .cost-item--plan  { border-top: 3px solid var(--sky); }
  .cost-item__type {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    letter-spacing: .07em; text-transform: uppercase;
    color: var(--cool-gray); margin-bottom: 6px;
  }
  .cost-item__price {
    font-family: var(--font-display); font-size: 26px; font-weight: 700;
    color: var(--sky-dark); line-height: 1.1; margin-bottom: 5px;
  }
  .cost-item__label {
    font-family: var(--font-ui); font-size: 13px; font-weight: 600;
    color: var(--slate); margin-bottom: 5px;
  }
  .cost-item__desc {
    font-family: var(--font-ui); font-size: 12.5px; line-height: 1.5; color: var(--cool-gray);
  }

  .rr-split {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; margin: 28px 0;
  }
  .rr-col { border-radius: var(--radius-lg); padding: 26px 22px; }
  .rr-col--repair  { background: var(--success-lt); border: 1.5px solid #86EFAC; }
  .rr-col--replace { background: var(--sky-lt); border: 1.5px solid var(--sky); }
  .rr-col__label {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    letter-spacing: .09em; text-transform: uppercase; margin-bottom: 6px;
  }
  .rr-col--repair  .rr-col__label { color: #15803D; }
  .rr-col--replace .rr-col__label { color: var(--sky-dark); }
  .rr-col__title {
    font-family: var(--font-display); font-size: 19px; font-weight: 700;
    margin-bottom: 14px; line-height: 1.2;
  }
  .rr-col--repair  .rr-col__title { color: #14532D; }
  .rr-col--replace .rr-col__title { color: var(--sky-deeper); }
  .rr-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
  .rr-list li {
    font-family: var(--font-ui); font-size: 13.5px; line-height: 1.5;
    display: flex; gap: 9px;
  }
  .rr-col--repair  .rr-list li { color: #166534; }
  .rr-col--replace .rr-list li { color: var(--sky-dark); }
  .rr-col--repair  .rr-list li::before { content: '✓'; font-weight: 700; flex-shrink: 0; color: #16A34A; }
  .rr-col--replace .rr-list li::before { content: '→'; font-weight: 700; flex-shrink: 0; color: var(--sky); }

  .five-k-rule {
    background: var(--sky-deeper); color: var(--white);
    border-radius: var(--radius-lg); padding: 24px 28px;
    margin: 24px 0; display: flex; gap: 20px; align-items: flex-start;
    box-shadow: var(--shadow-md);
  }
  .five-k-rule__icon { font-size: 32px; flex-shrink: 0; }
  .five-k-rule__title {
    font-family: var(--font-display); font-size: 17px; font-weight: 700;
    color: var(--sky-mid); margin-bottom: 6px;
  }
  .five-k-rule__body {
    font-family: var(--font-ui); font-size: 14px; line-height: 1.6;
    color: rgba(255,255,255,.82);
  }

  .inline-cta {
    background: var(--sky-lt); border: 1.5px solid var(--sky);
    border-radius: var(--radius-lg); padding: 22px 26px;
    display: flex; flex-wrap: wrap; gap: 16px;
    align-items: center; justify-content: space-between;
    margin: 40px 0;
  }
  .inline-cta__text {
    font-family: var(--font-ui); font-size: 15px;
    color: var(--sky-dark); line-height: 1.5;
  }
  .inline-cta__text strong { font-weight: 700; }
  .btn-sm {
    display: inline-block; background: var(--sky);
    color: var(--white); font-family: var(--font-ui);
    font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    text-decoration: none; padding: 11px 22px; border-radius: var(--radius);
    white-space: nowrap; transition: background .2s;
  }
  .btn-sm:hover { background: var(--sky-dark); color: var(--white); }

  .faq { margin: 40px 0; }
  .faq-item { border-bottom: 1px solid var(--border); padding: 20px 0; }
  .faq-item:first-child { border-top: 1px solid var(--border); }
  .faq-q {
    font-family: var(--font-ui); font-size: 16px; font-weight: 700;
    color: var(--sky-dark); margin-bottom: 8px;
  }
  .faq-a {
    font-family: var(--font-ui); font-size: 15.5px; line-height: 1.68; color: var(--cool-gray);
  }

  .img-block { margin: 36px 0; }
  .img-block figcaption {
    font-family: var(--font-ui); font-size: 12.5px; color: #94a3b8;
    margin-top: 8px; padding-left: 4px; font-style: italic;
  }

  .cta-box {
    background: linear-gradient(135deg, var(--sky-deeper) 0%, var(--sky) 60%, var(--sky-mid) 100%);
    color: var(--white); border-radius: var(--radius-lg);
    padding: 56px 40px; text-align: center;
    margin: 56px 0 0; position: relative; overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  .cta-box::before {
    content: '❄️';
    position: absolute; font-size: 200px; opacity: .06;
    right: -30px; bottom: -40px; pointer-events: none;
  }
  .cta-box::after {
    content: '';
    position: absolute; top: -80px; left: -80px;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,.1) 0%, transparent 70%);
    pointer-events: none;
  }
  .cta-box__eyebrow {
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    color: var(--sky-lt); margin-bottom: 12px; position: relative; z-index: 1;
  }
  .cta-box h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3.2vw, 34px); font-weight: 900;
    color: var(--white); margin-top: 0; margin-bottom: 14px;
    position: relative; z-index: 1; letter-spacing: -.01em;
  }
  .cta-box p {
    color: rgba(255,255,255,.82); font-family: var(--font-ui);
    font-size: 17px; max-width: 480px;
    margin-inline: auto; margin-bottom: 32px;
    position: relative; z-index: 1;
  }
  .cta-btns { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; position: relative; z-index: 1; }
  .btn-lg {
    display: inline-block;
    font-family: var(--font-ui); font-size: 14px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
    text-decoration: none; padding: 16px 36px; border-radius: var(--radius);
    transition: background .2s, transform .15s;
  }
  .btn-lg--primary { background: var(--white); color: var(--sky-dark); }
  .btn-lg--primary:hover { background: var(--sky-lt); color: var(--sky-dark); transform: translateY(-2px); }
  .btn-lg--ghost {
    background: transparent;
    border: 2px solid rgba(255,255,255,.45); color: var(--white);
  }
  .btn-lg--ghost:hover { border-color: var(--white); background: rgba(255,255,255,.1); color: var(--white); }

  @media (max-width: 700px) {
    .topbar { flex-direction: column; gap: 5px; text-align: center; }
    .symptoms { grid-template-columns: 1fr; }
    .check-card { grid-template-columns: 54px 1fr; }
    .check-card__num { font-size: 22px; }
    .cost-grid { grid-template-columns: 1fr 1fr; }
    .rr-split { grid-template-columns: 1fr; }
    .inline-cta { flex-direction: column; }
    .pullquote { padding: 28px 22px; }
    .cta-box { padding: 40px 22px; }
    .cta-btns { flex-direction: column; align-items: center; }
  }
`;

export default function ACNotCoolingPage() {
  const settings = getSettings();

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <style dangerouslySetInnerHTML={{ __html: articleCSS }} />
      <Header />

      <div className="ac-repair-article">

        <div className="topbar">
          <span>📍 Serving Abbotsford, Mission, Chilliwack &amp; the Fraser Valley</span>
          <span>
            <span className="topbar__badge">Same-Day Repair Available</span>
            &nbsp;&nbsp;<a href={`tel:${settings.phoneRaw}`}>{settings.phoneNumber}</a>
          </span>
        </div>

        <header className="hero">
          <div className="hero__inner">
            <div className="hero__label">AC Repair — Abbotsford, BC</div>
            <h1>AC Not Cooling in Abbotsford?<br /><em>7 Quick Checks</em> Before You<br />Call for Air Conditioner Repair</h1>
            <p className="hero__sub">
              Before you wait on hold during a heat wave, run through these safe checks. Some fixes take five minutes. Others definitely need a tech — and {"we'll"} tell you which is which.
            </p>
            <div className="hero__meta">
              <span>🗓 Updated Summer 2025</span>
              <span>⏱ 8 min read</span>
              <span>🔧 AbbotsfordHVAC.ca</span>
            </div>
            <div className="hero__stats">
              <div className="stat-pill"><span>🔍</span> 7 safe DIY checks</div>
              <div className="stat-pill"><span>⚡</span> Most common repair causes</div>
              <div className="stat-pill"><span>💰</span> Repair vs. replace guidance</div>
            </div>
          </div>
        </header>

        <div className="hero-image-block">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ac-not-cooling-abbotsford-hero.png"
              alt="Homeowner in a warm stuffy living room in Abbotsford BC checking a wall thermostat showing 29 degrees Celsius with AC vent visible but not cooling"
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '14px' }}
            />
            <figcaption style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12.5px', color: '#94a3b8', padding: '8px 4px', fontStyle: 'italic' }}>
              An AC running but not cooling is almost always a fixable problem — once you know what to check.
            </figcaption>
          </figure>
        </div>

        <main>
          <article className="article-body">
            <div className="container">

              <p className="lead">
                {"It's"} 32°C in Abbotsford, the Fraser Valley sun is hammering your roof, and your AC is running — but the air from the vents is warm. Before you call for repair and wait in a queue behind every other homeowner with the same problem, there are several safe checks you can do yourself that might get your system running again in minutes.
              </p>

              <p>
                This guide walks you through exactly what to check and what those checks mean, the most common repair causes Abbotsford technicians deal with every summer, what repairs typically cost, and how to decide whether your system is worth repairing or whether this breakdown is the sign to replace it.
              </p>

              <h2>Signs Your AC Needs Repair — Not Just a Settings Tweak</h2>

              <p>
                First, confirm {"you're"} dealing with an actual system problem rather than a settings issue. These are the symptoms that indicate something is genuinely wrong:
              </p>

              <div className="symptoms">
                <div className="symptom symptom--red">
                  <div className="symptom__icon">🌡️</div>
                  <div>
                    <div className="symptom__title">Warm Air from Vents</div>
                    <div className="symptom__desc">System is running but air {"isn't"} noticeably cooler than room temperature. Points to refrigerant, compressor, or coil problems.</div>
                  </div>
                </div>
                <div className="symptom symptom--red">
                  <div className="symptom__icon">💨</div>
                  <div>
                    <div className="symptom__title">Weak or No Airflow</div>
                    <div className="symptom__desc">Barely any air from vents despite the system running. Usually a failing blower motor, severely clogged filter, or frozen evaporator coil.</div>
                  </div>
                </div>
                <div className="symptom symptom--amber">
                  <div className="symptom__icon">🔁</div>
                  <div>
                    <div className="symptom__title">Short Cycling</div>
                    <div className="symptom__desc">System kicks on for a few minutes, shuts off, then repeats continuously. Often caused by low refrigerant, a dirty filter, or an oversized system.</div>
                  </div>
                </div>
                <div className="symptom symptom--amber">
                  <div className="symptom__icon">🔊</div>
                  <div>
                    <div className="symptom__title">Unusual Noises</div>
                    <div className="symptom__desc">Banging suggests loose components. Grinding points to motor bearing wear. Hissing or bubbling often means refrigerant is escaping a leak.</div>
                  </div>
                </div>
                <div className="symptom symptom--blue">
                  <div className="symptom__icon">🧊</div>
                  <div>
                    <div className="symptom__title">Ice on Refrigerant Lines</div>
                    <div className="symptom__desc">Visible ice on the copper lines or indoor unit means the evaporator coil is freezing. Turn the system off and call a tech — running it damages the compressor.</div>
                  </div>
                </div>
                <div className="symptom symptom--blue">
                  <div className="symptom__icon">💧</div>
                  <div>
                    <div className="symptom__title">High Indoor Humidity</div>
                    <div className="symptom__desc">AC removes moisture as it cools. A sticky, humid house despite the system running indicates the system {"isn't"} completing proper cooling cycles.</div>
                  </div>
                </div>
              </div>

              <h2>7 Safe Checks to Try Before Calling an Abbotsford AC Technician</h2>

              <p>
                These checks are safe for any homeowner. None require opening electrical panels, touching refrigerant lines, or accessing internal components. Work through them in order — one of these solves the problem more often than {"you'd"} expect.
              </p>

              <div className="checks">
                <div className="check-card">
                  <div className="check-card__num">1</div>
                  <div className="check-card__body">
                    <div className="check-card__title">Check the Thermostat Mode and Setpoint <span className="badge badge--diy">DIY ✓</span></div>
                    <div className="check-card__desc">Confirm the thermostat is set to COOL (not FAN or HEAT), the setpoint is below the current room temperature, and no scheduling or &ldquo;away&rdquo; mode is overriding your settings. If you have a smart thermostat, open the app — sometimes a firmware update or someone {"else's"} adjustment is the entire problem.</div>
                    <div className="check-card__tip">💡 Smart thermostats can show the system as &ldquo;satisfied&rdquo; even when the room feels warm, if the sensor is in a cooler part of the home. Check the actual room temperature reading against the thermostat sensor location.</div>
                  </div>
                </div>

                <div className="check-card">
                  <div className="check-card__num">2</div>
                  <div className="check-card__body">
                    <div className="check-card__title">Check the Breaker Panel <span className="badge badge--diy">DIY ✓</span></div>
                    <div className="check-card__desc">Your AC uses at least two breakers — one for the indoor air handler and one for the outdoor condenser. Locate both and check if either has tripped to the middle position. Flip it fully off, then back on. If it trips again immediately, stop — a repeatedly tripping breaker indicates an electrical fault that needs a technician.</div>
                    <div className="check-card__tip">💡 The outdoor unit breaker is often in a separate disconnect box on the exterior wall near the condenser — {"don't"} miss it. After a power surge or BC Hydro outage, both breakers should be checked.</div>
                  </div>
                </div>

                <div className="check-card">
                  <div className="check-card__num">3</div>
                  <div className="check-card__body">
                    <div className="check-card__title">Check and Replace the Air Filter <span className="badge badge--diy">DIY ✓</span></div>
                    <div className="check-card__desc">A severely clogged filter is one of the most common causes of poor cooling and frozen coils in Abbotsford homes during peak summer. Hold the filter up to a light — if you {"can't"} see light through it, replace it. A $10 filter from any hardware store may restore your system to full performance immediately.</div>
                    <div className="check-card__tip">💡 In the Fraser Valley — with agricultural dust, cottonwood fluff, and heavy pollen seasons — filters often need replacement every 30–45 days in summer, not the 90 days printed on the packaging.</div>
                  </div>
                </div>

                <div className="check-card">
                  <div className="check-card__num">4</div>
                  <div className="check-card__body">
                    <div className="check-card__title">Check the Outdoor Condenser Unit <span className="badge badge--diy">DIY ✓</span></div>
                    <div className="check-card__desc">Go outside and look at the condenser. Is the fan spinning? Check whether grass clippings, cottonwood seeds, or yard debris have packed against the fins. Clear the area and maintain at least two feet of clearance on all sides. You can gently rinse the fin surfaces with a garden hose on low pressure to remove surface buildup.</div>
                    <div className="check-card__tip">💡 If the outdoor unit is running but the fan blade {"isn't"} spinning, a failed capacitor is the likely cause. {"That's"} a tech job — but knowing this when you call helps the dispatcher send the right parts.</div>
                  </div>
                </div>

                <div className="check-card">
                  <div className="check-card__num">5</div>
                  <div className="check-card__body">
                    <div className="check-card__title">Check Indoor Vents and Return Registers <span className="badge badge--diy">DIY ✓</span></div>
                    <div className="check-card__desc">Walk through the home and confirm all supply vents are fully open and unobstructed by furniture, rugs, or curtains. Check the return air grille — usually a larger, slotted grille in a hallway wall or ceiling — and make sure it {"isn't"} blocked. Return air restriction is as damaging to system performance as a clogged filter.</div>
                  </div>
                </div>

                <div className="check-card">
                  <div className="check-card__num">6</div>
                  <div className="check-card__body">
                    <div className="check-card__title">Check the Condensate Drain Line <span className="badge badge--diy">DIY ✓</span></div>
                    <div className="check-card__desc">Most AC systems have a safety float switch that shuts the system off if the condensate drain backs up. Look for standing water in the drain pan below your indoor air handler. If the pan is full, the drain line is blocked. A wet-dry vacuum on the drain line end can often clear it.</div>
                    <div className="check-card__tip">💡 If the pan is overflowing or you see water damage on the ceiling below the air handler, stop using the system and call a tech. Water damage repair is far more expensive than drain clearing.</div>
                  </div>
                </div>

                <div className="check-card">
                  <div className="check-card__num">7</div>
                  <div className="check-card__body">
                    <div className="check-card__title">Power Cycle the System <span className="badge badge--diy">DIY ✓</span></div>
                    <div className="check-card__desc">Turn the system off at the thermostat, flip both AC breakers off at the panel, wait a full five minutes, then restore power and set the thermostat back to cool. Modern AC control boards can get stuck in a fault state — a full power cycle clears it. This solves the problem more often than most homeowners expect.</div>
                    <div className="check-card__tip">💡 After restoring power, give the system 10–15 minutes before concluding {"it's"} still not working. The compressor has a built-in timed delay after power-up to protect it from immediately short cycling.</div>
                  </div>
                </div>
              </div>

              <div className="boundary-box">
                <div className="boundary-box__heading">🚫 Stop Here — These Require a Certified HVAC Technician</div>
                <ul className="boundary-list">
                  <li>Opening the electrical disconnect box at the outdoor unit or accessing any internal electrical panels</li>
                  <li>Touching refrigerant lines, Schrader valve ports, or anything related to the refrigerant circuit — refrigerant handling requires TECA certification and specialized equipment</li>
                  <li>{"Attempting"} to add refrigerant yourself — {"it's"} illegal in Canada without certification, and incorrect charging destroys compressors</li>
                  <li>Disassembling the indoor air handler or outdoor condenser unit housing</li>
                  <li>Any repair involving capacitors, contactors, or internal wiring</li>
                </ul>
              </div>

              <figure className="img-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ac-clogged-filter-frozen-coil-abbotsford.png"
                  alt="Split photo showing a badly clogged dirty HVAC air filter on the left and a frozen evaporator coil covered in ice on the right"
                  width={960}
                  height={460}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <figcaption>A clogged filter (left) is a 5-minute DIY fix. A frozen coil (right) means the system must be shut off — running it in that state can destroy the compressor.</figcaption>
              </figure>

              <h2>Common AC Issues Abbotsford Technicians Fix Every Summer</h2>

              <p>
                If the seven checks above {"didn't"} resolve the problem, one of the following is almost certainly what your technician will find. Understanding the likely issue helps you have a more informed conversation when you call.
              </p>

              <div className="issues-table-wrap">
                <table className="issues-table">
                  <thead>
                    <tr>
                      <th>Problem</th>
                      <th>What You&apos;ll Notice</th>
                      <th>Severity</th>
                      <th>DIY?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Failed Capacitor</strong></td>
                      <td>Outdoor unit hums but fan {"won't"} start; system clicks on then immediately shuts off</td>
                      <td><span className="sev sev-mid">Moderate</span></td>
                      <td>No — electrical</td>
                    </tr>
                    <tr>
                      <td><strong>Low Refrigerant / Leak</strong></td>
                      <td>Warm air, ice on lines, hissing sound, long run times with no cooling</td>
                      <td><span className="sev sev-high">High</span></td>
                      <td>No — certified only</td>
                    </tr>
                    <tr>
                      <td><strong>Dirty Condenser Coils</strong></td>
                      <td>System runs constantly but {"can't"} keep up; outdoor unit runs very hot</td>
                      <td><span className="sev sev-mid">Moderate</span></td>
                      <td>Surface rinse only</td>
                    </tr>
                    <tr>
                      <td><strong>Frozen Evaporator Coil</strong></td>
                      <td>Little or no airflow; ice on indoor unit; water dripping</td>
                      <td><span className="sev sev-mid">Moderate</span></td>
                      <td>Shut off — call tech</td>
                    </tr>
                    <tr>
                      <td><strong>Failed Contactor</strong></td>
                      <td>Outdoor unit {"won't"} start; clicking sound at condenser with no engagement</td>
                      <td><span className="sev sev-mid">Moderate</span></td>
                      <td>No — electrical</td>
                    </tr>
                    <tr>
                      <td><strong>Blower Motor Failure</strong></td>
                      <td>Outdoor unit running but very little air from indoor vents</td>
                      <td><span className="sev sev-high">High</span></td>
                      <td>No — motor replacement</td>
                    </tr>
                    <tr>
                      <td><strong>Thermostat Fault</strong></td>
                      <td>Inconsistent cooling, system ignoring setpoint, display errors</td>
                      <td><span className="sev sev-low">Lower</span></td>
                      <td>Check settings first</td>
                    </tr>
                    <tr>
                      <td><strong>Compressor Failure</strong></td>
                      <td>Outdoor unit {"won't"} run; loud grinding or silence where the compressor should be</td>
                      <td><span className="sev sev-high">Critical</span></td>
                      <td>No — consider replacement</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pullquote">
                <p>&ldquo;The two most common calls we get during Abbotsford heat waves are failed capacitors and low refrigerant. Both are repairable in a single visit — and both would have been caught during an annual tune-up.&rdquo;</p>
                <cite>— AbbotsfordHVAC.ca Service Team</cite>
              </div>

              <div className="inline-cta">
                <div className="inline-cta__text">
                  <strong>Still not cooling after the 7 checks?</strong> Our Abbotsford technicians offer same-day diagnosis and repair — with a clear quote before any work begins.
                </div>
                <a href="/contact" className="btn-sm">Book Same-Day Repair →</a>
              </div>

              <h2>What AC Repair Costs in Abbotsford</h2>

              <p>
                Repair costs vary based on {"what's"} failed and the age of the system. {"Here's"} a realistic breakdown for the most common repairs Abbotsford HVAC companies handle:
              </p>

              <div className="cost-grid">
                <div className="cost-item cost-item--diag">
                  <div className="cost-item__type">Diagnostic Visit</div>
                  <div className="cost-item__price">$80–$150</div>
                  <div className="cost-item__label">Service Call</div>
                  <div className="cost-item__desc">Usually applied toward repair cost. Includes system assessment and diagnosis of the root cause.</div>
                </div>
                <div className="cost-item cost-item--minor">
                  <div className="cost-item__type">Minor Repair</div>
                  <div className="cost-item__price">$150–$500</div>
                  <div className="cost-item__label">Capacitor / Contactor / Thermostat</div>
                  <div className="cost-item__desc">Fast fixes — typically completed same visit. Capacitors are among the most common mid-summer failures.</div>
                </div>
                <div className="cost-item cost-item--mid">
                  <div className="cost-item__type">Moderate Repair</div>
                  <div className="cost-item__price">$300–$900</div>
                  <div className="cost-item__label">Refrigerant Recharge + Leak Repair</div>
                  <div className="cost-item__desc">Includes leak detection, repair, and recharge with R-410A. Leak location determines scope.</div>
                </div>
                <div className="cost-item cost-item--high">
                  <div className="cost-item__type">Larger Repair</div>
                  <div className="cost-item__price">$600–$1,800</div>
                  <div className="cost-item__label">Coil Cleaning / Blower Motor</div>
                  <div className="cost-item__desc">Multi-hour labour jobs. Parts availability for older systems can affect scheduling.</div>
                </div>
                <div className="cost-item cost-item--major">
                  <div className="cost-item__type">Major Repair</div>
                  <div className="cost-item__price">$1,500–$3,500+</div>
                  <div className="cost-item__label">Compressor Replacement</div>
                  <div className="cost-item__desc">Most expensive single repair. On systems over 10 years old, replacement is usually more cost-effective.</div>
                </div>
                <div className="cost-item cost-item--plan">
                  <div className="cost-item__type">Maintenance Plan</div>
                  <div className="cost-item__price">Priority</div>
                  <div className="cost-item__label">Plan Members</div>
                  <div className="cost-item__desc">Priority scheduling during peak demand, discounted repair rates, no separate diagnostic fee on covered visits.</div>
                </div>
              </div>

              <p>
                Most diagnostic visits take 30–90 minutes. If common parts like capacitors or contactors are needed, many repairs are completed in the same visit. Larger parts orders may require a return visit within 1–3 business days.
              </p>

              <figure className="img-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ac-capacitor-diagnosis-abbotsford.png"
                  alt="HVAC technician crouching beside an open residential air conditioner outdoor unit using a digital multimeter to test a capacitor in a BC residential backyard"
                  width={900}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <figcaption>A capacitor test takes minutes with a multimeter — {"it's"} one of the first components a tech checks when an outdoor unit {"won't"} start properly.</figcaption>
              </figure>

              <h2>When to Repair — and When to Replace</h2>

              <p>
                Not every AC breakdown is worth repairing. Sometimes the honest answer is that the system has run its course. {"Here's"} a clear framework for making that decision:
              </p>

              <div className="five-k-rule">
                <div className="five-k-rule__icon">🧮</div>
                <div>
                  <div className="five-k-rule__title">The $5,000 Rule: A Simple Decision Framework</div>
                  <div className="five-k-rule__body">Multiply the {"system's"} age in years by the repair cost in dollars. If the result exceeds $5,000, replacement is worth serious consideration. A 12-year-old system facing a $500 capacitor repair = $6,000 — borderline. A 14-year-old system facing a $1,200 coil repair = $16,800 — replacement is the clear call.</div>
                </div>
              </div>

              <div className="rr-split">
                <div className="rr-col rr-col--repair">
                  <div className="rr-col__label">Repair Makes Sense When</div>
                  <div className="rr-col__title">Fix It and Keep Going</div>
                  <ul className="rr-list">
                    <li>System is under 10 years old</li>
                    <li>First significant breakdown on an otherwise reliable system</li>
                    <li>Failed component is minor — capacitor, contactor, thermostat</li>
                    <li>Repair cost is less than 30% of replacement cost</li>
                    <li>System uses current refrigerant (R-410A or newer)</li>
                    <li>No other performance complaints beyond the current failure</li>
                  </ul>
                </div>
                <div className="rr-col rr-col--replace">
                  <div className="rr-col__label">Replacement Makes Sense When</div>
                  <div className="rr-col__title">Cut Your Losses</div>
                  <ul className="rr-list">
                    <li>System is 12–15+ years old</li>
                    <li>Second or third major repair in recent seasons</li>
                    <li>Compressor failure on an older unit</li>
                    <li>System uses R-22 refrigerant (discontinued — recharge is expensive)</li>
                    <li>Energy bills have been steadily climbing despite &ldquo;working&rdquo; AC</li>
                    <li>New heat pump system qualifies for CleanBC rebates</li>
                  </ul>
                </div>
              </div>

              <p>
                If replacement is the direction, a modern high-efficiency system will use significantly less electricity than an older unit — often enough to offset a monthly financing payment. And upgrading to a heat pump means your new cooling system also handles your heating. We walk through both options honestly at the time of diagnosis, with no pressure in either direction.
              </p>

              <h2>Frequently Asked Questions</h2>

              <div className="faq">
                <div className="faq-item">
                  <div className="faq-q">Why is my AC running but not cooling?</div>
                  <div className="faq-a">The most common causes are low refrigerant from a slow leak, a dirty condenser coil, a failed capacitor, a severely clogged air filter, or a frozen evaporator coil. Work through the 7 checks in this article first — a dirty filter or thermostat issue solves the problem more often than most homeowners expect. If those checks {"don't"} resolve it, a {"technician's"} diagnosis will pinpoint the root cause quickly.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">How much does AC repair cost in Abbotsford?</div>
                  <div className="faq-a">A diagnostic service call runs $80–$150, typically applied toward repair cost. Capacitor or contactor replacement is $150–$500. Refrigerant recharge with leak repair runs $300–$900. Coil or blower motor work ranges $600–$1,800. Compressor failures on older systems ($1,500–$3,500+) often make replacement more cost-effective. We provide a clear itemized quote before any work begins.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">How quickly can I get AC repair in Abbotsford?</div>
                  <div className="faq-a">During heat waves, most Abbotsford HVAC companies have 1–3 day waits for standard calls. Same-day service is often available, especially when booked early in the day. Customers on maintenance plans receive priority scheduling — during peak summer demand, that priority can mean the difference between same-day service and waiting several days.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">Should I repair or replace my AC?</div>
                  <div className="faq-a">The $5,000 rule is a useful guide: multiply the {"system's"} age by the repair cost. If the result exceeds $5,000, replacement deserves serious consideration. A system over 12–15 years old facing a major repair is usually better replaced — particularly given the efficiency gains of modern systems and BC CleanBC rebates available for heat pump installations. We present both options honestly at the time of diagnosis.</div>
                </div>
              </div>

              <div className="cta-box">
                <div className="cta-box__eyebrow">AbbotsfordHVAC.ca — AC Repair Specialists</div>
                <h2>AC Still Not Cooling After the Checks?<br />{"Let's"} Fix It Today.</h2>
                <p>Book a same-day service visit online or call us directly. We serve all of Abbotsford, Mission, Chilliwack, and the Fraser Valley — with honest diagnosis and upfront pricing before we start any work.</p>
                <div className="cta-btns">
                  <a href="/contact" className="btn-lg btn-lg--primary">Book a Repair Visit →</a>
                  <a href="/blog/ac-maintenance-abbotsford-summer-tune-up" className="btn-lg btn-lg--ghost">Prevent This Next Year →</a>
                </div>
              </div>

            </div>
          </article>
        </main>

      </div>

      <Footer />
    </div>
  );
}
