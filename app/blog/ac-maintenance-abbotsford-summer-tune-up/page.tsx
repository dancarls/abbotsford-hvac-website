import { Metadata } from 'next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { getSettings } from '../../../lib/getSettings';

export const metadata: Metadata = {
  title: "AC Maintenance Abbotsford: What's Included in a Summer Tune-Up (and Why It Saves You Money)",
  description: "Abbotsford homeowners: discover what's included in a proper AC tune-up, how long it takes, how much it saves, and why booking before peak summer heat protects your system all season.",
  keywords: "AC maintenance Abbotsford, air conditioner tune-up Abbotsford BC, AC service Abbotsford, summer AC maintenance Fraser Valley, air conditioning maintenance Abbotsford, AC tune-up cost Abbotsford, HVAC maintenance plan Abbotsford",
  authors: [{ name: "AbbotsfordHVAC.ca" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.abbotsfordhvac.ca/blog/ac-maintenance-abbotsford-summer-tune-up/"
  },
  openGraph: {
    title: "AC Maintenance in Abbotsford: What's Included in a Summer Tune-Up",
    description: "What a proper AC tune-up includes, how it lowers your power bills, and why Abbotsford homeowners should book before the next heat wave.",
    type: "article",
    url: "https://www.abbotsfordhvac.ca/blog/ac-maintenance-abbotsford-summer-tune-up/",
    images: ["https://www.abbotsfordhvac.ca/images/ac-maintenance-abbotsford-hero.png"],
    locale: "en_CA"
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.abbotsfordhvac.ca/blog/ac-maintenance-abbotsford-summer-tune-up/#article",
      "headline": "AC Maintenance in Abbotsford: What's Included in a Summer Tune-Up (and Why It Saves You Money)",
      "description": "What a professional AC tune-up includes, how long it takes, how much it saves on energy bills, and why Abbotsford homeowners should book before peak summer heat.",
      "image": "https://www.abbotsfordhvac.ca/images/ac-maintenance-abbotsford-hero.png",
      "datePublished": "2025-06-01",
      "dateModified": "2025-06-01",
      "author": { "@type": "Organization", "name": "AbbotsfordHVAC.ca" },
      "publisher": {
        "@type": "Organization",
        "name": "AbbotsfordHVAC.ca",
        "logo": { "@type": "ImageObject", "url": "https://www.abbotsfordhvac.ca/images/logo.png" }
      },
      "mainEntityOfPage": "https://www.abbotsfordhvac.ca/blog/ac-maintenance-abbotsford-summer-tune-up/",
      "keywords": ["AC maintenance Abbotsford", "air conditioner tune-up", "summer AC service", "HVAC maintenance plan"],
      "articleSection": "AC Maintenance",
      "wordCount": "1800"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.abbotsfordhvac.ca#business",
      "name": "AbbotsfordHVAC.ca",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abbotsford",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "areaServed": ["Abbotsford", "Chilliwack", "Mission", "Langley", "Fraser Valley"],
      "serviceType": ["AC Maintenance", "Air Conditioner Tune-Up", "HVAC Maintenance Plan", "AC Repair"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should I get AC maintenance in Abbotsford?",
          "acceptedAnswer": { "@type": "Answer", "text": "Once per year is the standard recommendation — ideally in spring or early summer before Abbotsford's hottest weather arrives. Systems that run hard during BC's increasingly warm summers benefit from consistent annual service to maintain efficiency and catch wear before it becomes a breakdown." }
        },
        {
          "@type": "Question",
          "name": "How long does an AC tune-up take?",
          "acceptedAnswer": { "@type": "Answer", "text": "A standard AC maintenance visit typically takes 30 minutes to 2 hours depending on system condition, age, and whether any issues are discovered that require same-visit attention. A system that has been regularly maintained will usually be on the shorter end of that range." }
        },
        {
          "@type": "Question",
          "name": "What is included in an AC tune-up?",
          "acceptedAnswer": { "@type": "Answer", "text": "A professional AC tune-up includes filter inspection and replacement, evaporator and condenser coil cleaning, refrigerant level check, electrical component inspection (capacitors, contactors, wiring), thermostat calibration, blower and fan check, condensate drain flush, and a full safety and performance assessment." }
        },
        {
          "@type": "Question",
          "name": "Can AC maintenance lower my electricity bill?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes — a clean, properly tuned air conditioner runs more efficiently and consumes less power to achieve the same cooling. Dirty coils, low refrigerant, and worn components all force the system to work harder and longer, directly increasing your BC Hydro bill during peak summer months." }
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
    --warm-white: #F8FAFC;
    --success:    #15803D;
    --caution:    #D97706;
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

  .ac-article {
    font-family: var(--font-body);
    font-size: 18px;
    line-height: 1.78;
    color: var(--coal);
    background: var(--mist);
  }

  .ac-article img { max-width: 100%; display: block; border-radius: var(--radius); }
  .ac-article a { color: var(--sky); text-decoration: underline; text-underline-offset: 3px; }
  .ac-article a:hover { color: var(--sky-dark); }

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
    background: var(--teal);
    color: var(--white);
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
  .hero__label::before {
    content: '❄️'; font-size: 14px;
  }
  .ac-article .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(28px, 4.8vw, 50px);
    font-weight: 900; line-height: 1.06;
    margin-bottom: 22px;
    letter-spacing: -.02em;
  }
  .ac-article .hero h1 em { font-style: normal; color: var(--sky-lt); }
  .hero__sub {
    font-family: var(--font-ui);
    font-size: 18px; line-height: 1.65;
    color: rgba(255,255,255,.82);
    max-width: 580px; margin-bottom: 36px;
  }
  .hero__meta {
    display: flex; flex-wrap: wrap; gap: 20px;
    font-family: var(--font-ui); font-size: 13px;
    color: rgba(255,255,255,.5);
  }
  .hero__stats {
    display: flex; flex-wrap: wrap; gap: 16px;
    margin-top: 36px;
  }
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
  .stat-pill__icon { font-size: 16px; }

  .hero-image-block {
    max-width: var(--max-w-wide);
    margin-inline: auto; padding-inline: 24px;
    padding-top: 24px;
  }
  .hero-image-block img {
    width: 100%; border-radius: var(--radius-lg); overflow: hidden;
  }

  .article-body { padding: 64px 24px 24px; }
  .article-body p { margin-bottom: 1.5rem; color: var(--slate); }

  .ac-article h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3.2vw, 32px);
    font-weight: 700; color: var(--sky-dark);
    margin-top: 56px; margin-bottom: 18px; line-height: 1.15;
    letter-spacing: -.01em;
  }
  .ac-article h3 {
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
    line-height: 1.5; color: var(--white); position: relative;
    margin-bottom: 0 !important;
  }
  .pullquote cite {
    display: block; margin-top: 14px;
    font-family: var(--font-ui); font-size: 12px;
    letter-spacing: .08em; text-transform: uppercase;
    color: var(--teal-lt); position: relative;
  }

  .checklist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px; margin: 28px 0;
  }
  .check-item {
    background: var(--white);
    border: 1px solid #e2eaf3;
    border-radius: var(--radius);
    padding: 22px 20px;
    display: flex; gap: 16px; align-items: flex-start;
    box-shadow: var(--shadow-sm);
    transition: box-shadow .2s, transform .2s;
  }
  .check-item:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .check-item__icon {
    width: 42px; height: 42px; border-radius: 50%;
    background: var(--sky-lt);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; flex-shrink: 0;
  }
  .check-item__content { flex: 1; }
  .check-item__title {
    font-family: var(--font-ui); font-size: 14px; font-weight: 700;
    color: var(--sky-dark); margin-bottom: 4px;
  }
  .check-item__desc {
    font-family: var(--font-ui); font-size: 13.5px; line-height: 1.55;
    color: var(--cool-gray);
  }

  .benefits-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px; margin: 28px 0;
  }
  .benefit-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 28px 20px; text-align: center;
    box-shadow: var(--shadow-sm);
    border-top: 3px solid transparent;
    transition: box-shadow .2s, transform .2s;
  }
  .benefit-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
  .benefit-card:nth-child(1) { border-top-color: var(--sky); }
  .benefit-card:nth-child(2) { border-top-color: var(--teal); }
  .benefit-card:nth-child(3) { border-top-color: #8B5CF6; }
  .benefit-card__icon { font-size: 36px; margin-bottom: 12px; }
  .benefit-card__stat {
    font-family: var(--font-display);
    font-size: 36px; font-weight: 900;
    color: var(--sky-dark); line-height: 1;
    margin-bottom: 4px;
  }
  .benefit-card:nth-child(2) .benefit-card__stat { color: var(--teal); }
  .benefit-card:nth-child(3) .benefit-card__stat { color: #6D28D9; }
  .benefit-card__label {
    font-family: var(--font-ui); font-size: 13px; font-weight: 700;
    color: var(--slate); margin-bottom: 8px; text-transform: uppercase;
    letter-spacing: .05em;
  }
  .benefit-card__desc {
    font-family: var(--font-ui); font-size: 13px; line-height: 1.5;
    color: var(--cool-gray);
  }

  .timing-bar {
    background: var(--white); border: 1px solid #e2eaf3;
    border-radius: var(--radius-lg); padding: 28px 28px 24px;
    margin: 28px 0; box-shadow: var(--shadow-sm);
  }
  .timing-bar__label {
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    letter-spacing: .09em; text-transform: uppercase;
    color: var(--sky); margin-bottom: 20px;
  }
  .timing-track {
    display: flex; align-items: stretch;
    border-radius: var(--radius); overflow: hidden; height: 54px;
  }
  .timing-seg {
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    text-align: center; padding: 0 12px; line-height: 1.3;
  }
  .timing-seg--best  { background: var(--sky-dark); color: var(--white); flex: 3; }
  .timing-seg--good  { background: var(--sky);      color: var(--white); flex: 2; }
  .timing-seg--ok    { background: var(--sky-lt);   color: var(--sky-dark); flex: 2; }
  .timing-seg--late  { background: #FEF3C7;         color: #92400E; flex: 2; }
  .timing-labels { display: flex; margin-top: 8px; }
  .timing-label {
    font-family: var(--font-ui); font-size: 11px; color: var(--cool-gray);
    text-align: center; padding: 0 4px;
  }
  .timing-label--best  { flex: 3; }
  .timing-label--good  { flex: 2; }
  .timing-label--ok    { flex: 2; }
  .timing-label--late  { flex: 2; }

  .compare {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; margin: 28px 0;
  }
  .compare-col {
    border-radius: var(--radius-lg); padding: 28px 24px;
    box-shadow: var(--shadow-sm);
  }
  .compare-col--oneoff {
    background: var(--white); border: 1.5px solid #e2eaf3;
  }
  .compare-col--plan {
    background: linear-gradient(145deg, var(--sky-dark), var(--sky));
    color: var(--white);
    box-shadow: var(--shadow-lg);
    position: relative; overflow: hidden;
  }
  .compare-col--plan::after {
    content: '⭐ RECOMMENDED';
    position: absolute; top: 16px; right: -28px;
    background: var(--teal); color: var(--white);
    font-family: var(--font-ui); font-size: 10px; font-weight: 700;
    letter-spacing: .08em;
    padding: 5px 40px;
    transform: rotate(35deg);
  }
  .compare-col__label {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    margin-bottom: 8px;
  }
  .compare-col--oneoff .compare-col__label { color: var(--cool-gray); }
  .compare-col--plan   .compare-col__label { color: var(--sky-lt); }
  .compare-col__title {
    font-family: var(--font-display); font-size: 20px; font-weight: 700;
    margin-bottom: 16px; line-height: 1.2;
  }
  .compare-col--oneoff .compare-col__title { color: var(--coal); }
  .compare-col--plan   .compare-col__title { color: var(--white); }
  .compare-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .compare-list li {
    font-family: var(--font-ui); font-size: 14px; line-height: 1.5;
    display: flex; gap: 10px;
  }
  .compare-col--oneoff .compare-list li { color: var(--cool-gray); }
  .compare-col--plan   .compare-list li { color: rgba(255,255,255,.88); }
  .compare-col--oneoff .compare-list li::before { content: '○'; color: #94a3b8; flex-shrink: 0; }
  .compare-col--plan   .compare-list li::before { content: '✓'; color: var(--sky-lt); flex-shrink: 0; font-weight: 700; }

  .process { display: flex; flex-direction: column; gap: 0; margin: 28px 0; }
  .process-step {
    display: flex; gap: 20px; align-items: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid #e2eaf3;
    position: relative;
  }
  .process-step:last-child { border-bottom: none; }
  .process-step__left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
  .process-step__num {
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--sky); color: var(--white);
    font-family: var(--font-display); font-size: 18px; font-weight: 900;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .process-step__line {
    width: 2px; flex: 1; background: #e2eaf3;
    margin-top: 6px; min-height: 20px;
  }
  .process-step:last-child .process-step__line { display: none; }
  .process-step__content { flex: 1; padding-top: 8px; }
  .process-step__title {
    font-family: var(--font-ui); font-size: 15px; font-weight: 700;
    color: var(--sky-dark); margin-bottom: 4px;
  }
  .process-step__desc {
    font-family: var(--font-ui); font-size: 14px; line-height: 1.6;
    color: var(--cool-gray);
  }
  .process-step__time {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    color: var(--sky); letter-spacing: .06em; text-transform: uppercase;
    background: var(--sky-lt); padding: 3px 8px; border-radius: 20px;
    margin-top: 6px; display: inline-block;
  }

  .faq { margin: 40px 0; }
  .faq-item {
    border-bottom: 1px solid #e2eaf3; padding: 20px 0;
  }
  .faq-item:first-child { border-top: 1px solid #e2eaf3; }
  .faq-q {
    font-family: var(--font-ui); font-size: 16px; font-weight: 700;
    color: var(--sky-dark); margin-bottom: 8px;
  }
  .faq-a {
    font-family: var(--font-ui); font-size: 15.5px; line-height: 1.68;
    color: var(--cool-gray);
  }

  .img-block { margin: 36px 0; }
  .img-block figcaption {
    font-family: var(--font-ui); font-size: 12.5px; color: #94a3b8;
    margin-top: 8px; padding-left: 4px; font-style: italic;
  }

  .inline-cta {
    background: var(--sky-lt); border: 1.5px solid var(--sky);
    border-radius: var(--radius-lg); padding: 24px 28px;
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
    .topbar { flex-direction: column; gap: 6px; text-align: center; }
    .hero__stats { flex-direction: column; }
    .checklist-grid { grid-template-columns: 1fr; }
    .benefits-row { grid-template-columns: 1fr; }
    .compare { grid-template-columns: 1fr; }
    .inline-cta { flex-direction: column; }
    .pullquote { padding: 28px 22px; }
    .cta-box { padding: 40px 22px; }
    .timing-track { flex-direction: column; height: auto; }
    .timing-seg { padding: 12px; }
    .timing-labels { display: none; }
  }
`;

export default function ACMaintenancePage() {
  const settings = getSettings();

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: articleCSS }} />
      <Header />

      <div className="ac-article">

        {/* Topbar */}
        <div className="topbar">
          <span>📍 Serving Abbotsford, Mission, Chilliwack &amp; the Fraser Valley</span>
          <span>
            <span className="topbar__badge">Now Booking Summer Tune-Ups</span>
            &nbsp;&nbsp;☎ <a href={`tel:${settings.phoneRaw}`}>{settings.phoneNumber}</a>
          </span>
        </div>

        {/* Hero */}
        <header className="hero">
          <div className="hero__inner">
            <div className="hero__label">AC Maintenance — Abbotsford, BC</div>
            <h1>AC Maintenance in Abbotsford:<br /><em>{"What's Included in a Summer Tune-Up"}</em><br />and Why It Saves You Money</h1>
            <p className="hero__sub">
              {"Before the next heat wave hits the Fraser Valley, here's exactly what a professional AC tune-up involves, how long it takes, and what it protects you from all summer long."}
            </p>
            <div className="hero__meta">
              <span>🗓 Updated Summer 2025</span>
              <span>⏱ 7 min read</span>
              <span>🏠 AbbotsfordHVAC.ca</span>
            </div>
            <div className="hero__stats">
              <div className="stat-pill"><span className="stat-pill__icon">⚡</span> Up to 15% lower energy bills</div>
              <div className="stat-pill"><span className="stat-pill__icon">🔧</span> 30–90 min service visit</div>
              <div className="stat-pill"><span className="stat-pill__icon">📅</span> Book before peak heat</div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="hero-image-block">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ac-maintenance-abbotsford-hero.png"
              alt="Professional HVAC technician performing AC maintenance inspection at a residential condenser unit in Abbotsford BC with mountains in background"
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '14px' }}
            />
            <figcaption style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', color: '#94a3b8', padding: '8px 4px', fontStyle: 'italic' }}>
              A pre-season AC tune-up takes 30–90 minutes and can prevent hours of discomfort — and hundreds in emergency repair bills — during peak summer heat.
            </figcaption>
          </figure>
        </div>

        {/* Article Body */}
        <main>
          <article className="article-body">
            <div className="container">

              <p className="lead">
                Most Abbotsford homeowners don&apos;t think about their air conditioner until the temperature climbs into the mid-30s and the house stops cooling down. By then, every HVAC company in the Fraser Valley is booked solid, parts are on backorder, and you&apos;re sleeping with a fan pointed at your face for a week. Annual AC maintenance exists specifically to prevent that scenario — and it costs a fraction of what an emergency call-out does.
              </p>

              <p>
                This guide explains exactly what a professional AC tune-up involves, why {"Abbotsford's"} climate makes it worthwhile, what it costs compared to what it saves, and how to choose between a one-off summer service and a year-round maintenance plan.
              </p>

              <h2>Why Abbotsford Homes Need AC Maintenance Before Peak Summer</h2>

              <p>
                {"Abbotsford's"} climate is changing. What was once a mild Fraser Valley summer now regularly produces extended heat events — including the kind of extreme temperatures that sent BC hydro consumption records into the stratosphere during recent heat domes. Air conditioners that were sized and serviced for &ldquo;average&rdquo; summers are now running hard for weeks at a time.
              </p>

              <p>
                That sustained load accelerates wear on every component. Coils that are even slightly dirty lose heat transfer efficiency. A capacitor that&apos;s at 80% capacity during a cool spring becomes the part that fails at 2pm on the hottest Wednesday of the year. And refrigerant that&apos;s slightly low forces the compressor — the most expensive component in the system — to compensate by running longer cycles.
              </p>

              <div className="pullquote">
                <p>&ldquo;A well-maintained AC unit doesn&apos;t just keep you cooler — it runs fewer hours to achieve the same result. {"That's"} directly visible on your BC Hydro bill from June through September.&rdquo;</p>
                <cite>— AbbotsfordHVAC.ca Service Team</cite>
              </div>

              <p>
                {"Abbotsford's"} environment adds an extra layer. Fraser Valley pollen seasons are long and heavy — cottonwood fluff, agricultural dust, and seasonal pollen load air filters faster than in urban settings. Condenser units sitting in landscaped yards accumulate debris from the {"region's"} gardens and trees. A system that was clean last October is often running through a partially blocked filter by June without the homeowner being aware.
              </p>

              {/* Filter Image */}
              <figure className="img-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ac-filter-dirty-vs-clean-abbotsford.png"
                  alt="Side-by-side comparison of a heavily clogged dirty HVAC air filter versus a clean white filter showing the difference in debris accumulation"
                  width={900}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <figcaption>A clogged filter forces your AC to draw harder — reducing airflow, straining the blower motor, and making the whole system work longer to cool the same space.</figcaption>
              </figure>

              <h2>{"What's"} Included in a Professional AC Tune-Up</h2>

              <p>
                Not all &ldquo;tune-ups&rdquo; are equal. A proper AC maintenance visit covers the full system — not just a filter swap and a visual glance. {"Here's"} what should be on every {"technician's"} checklist when they service your Abbotsford home.
              </p>

              <div className="checklist-grid">
                <div className="check-item">
                  <div className="check-item__icon">🌬️</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Filter Inspection &amp; Replacement</div>
                    <div className="check-item__desc">The filter is the lungs of your system. We check the existing filter condition and replace it if needed. In {"Abbotsford's"} pollen-heavy environment, filters often need replacement more frequently than the package suggests.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">🧊</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Evaporator Coil Cleaning</div>
                    <div className="check-item__desc">The indoor evaporator coil absorbs heat from your {"home's"} air. Dust and biological buildup on the coil surface reduces heat transfer efficiency — meaning your system runs longer to achieve the same cooling.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">🌡️</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Condenser Coil Cleaning</div>
                    <div className="check-item__desc">The outdoor condenser unit releases the heat pulled from your home. Cottonwood seeds, grass clippings, and yard debris restrict airflow through the fins — cleaning the condenser is one of the highest-impact maintenance steps for Abbotsford homes.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">⚗️</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Refrigerant Level Check</div>
                    <div className="check-item__desc">Low refrigerant — typically from a slow leak — forces the compressor to work harder, reduces cooling capacity, and causes ice to form on the evaporator coil. We measure refrigerant levels against the manufacturer specification and check for signs of leak.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">⚡</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Electrical Component Inspection</div>
                    <div className="check-item__desc">Capacitors, contactors, and wiring connections are tested and inspected. A failing capacitor is one of the most common reasons for mid-summer AC breakdowns — catching it during a maintenance visit costs a fraction of an emergency service call.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">🌀</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Blower Motor &amp; Fan Check</div>
                    <div className="check-item__desc">We inspect the indoor blower motor and outdoor fan blade for wear, correct rotation speed, and proper airflow. Poor airflow from the blower is a leading cause of frozen evaporator coils and rooms that never quite cool down.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">💧</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Condensate Drain Flush</div>
                    <div className="check-item__desc">Your AC removes humidity from the air — that moisture exits through the condensate drain line. A clogged drain line causes water backup, which can trigger your {"system's"} safety shutoff or, worse, result in water damage to your ceiling or walls.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">🎛️</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Thermostat Calibration &amp; Controls Test</div>
                    <div className="check-item__desc">We verify the thermostat is reading and responding accurately, and confirm all system modes — cooling, fan, and any smart scheduling functions — are operating correctly. A miscalibrated thermostat can add significant hours of unnecessary runtime.</div>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-item__icon">🔍</div>
                  <div className="check-item__content">
                    <div className="check-item__title">Full Safety &amp; Performance Assessment</div>
                    <div className="check-item__desc">We measure supply and return air temperatures, check system pressures, and document overall performance — giving you a clear picture of your {"equipment's"} condition and any repairs worth considering before summer arrives in full force.</div>
                  </div>
                </div>
              </div>

              {/* Mid-article CTA */}
              <div className="inline-cta">
                <div className="inline-cta__text">
                  <strong>Ready to book your Abbotsford AC tune-up?</strong> {"We're"} scheduling summer maintenance visits now — spots fill fast once temperatures start climbing.
                </div>
                <a href="/contact" className="btn-sm">Book a Tune-Up →</a>
              </div>

              <h2>How Long Does an AC Tune-Up Take?</h2>

              <p>
                A standard AC maintenance visit for a typical Abbotsford home takes between 30 minutes and 2 hours. The range depends on system age, condition, and what the technician finds.
              </p>

              <div className="process">
                <div className="process-step">
                  <div className="process-step__left">
                    <div className="process-step__num">1</div>
                    <div className="process-step__line"></div>
                  </div>
                  <div className="process-step__content">
                    <div className="process-step__title">System Assessment &amp; Safety Check</div>
                    <div className="process-step__desc">Technician reviews system age, service history, and performs a visual inspection of all accessible components — looking for obvious wear, damage, or anything that needs immediate attention before the detailed work begins.</div>
                    <div className="process-step__time">~10 minutes</div>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__left">
                    <div className="process-step__num">2</div>
                    <div className="process-step__line"></div>
                  </div>
                  <div className="process-step__content">
                    <div className="process-step__title">Filter, Coil &amp; Drain Service</div>
                    <div className="process-step__desc">Filter inspection and replacement if needed, evaporator coil cleaning, condensate drain flush and clear. This is the cleaning phase — the work that most directly impacts system efficiency and air quality.</div>
                    <div className="process-step__time">~20–40 minutes</div>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__left">
                    <div className="process-step__num">3</div>
                    <div className="process-step__line"></div>
                  </div>
                  <div className="process-step__content">
                    <div className="process-step__title">Outdoor Unit Service</div>
                    <div className="process-step__desc">Condenser coil cleaning, debris removal from around and inside the unit, fan blade inspection, and electrical component checks at the condenser. Refrigerant pressure measurement.</div>
                    <div className="process-step__time">~15–30 minutes</div>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__left">
                    <div className="process-step__num">4</div>
                    <div className="process-step__line"></div>
                  </div>
                  <div className="process-step__content">
                    <div className="process-step__title">Electrical, Controls &amp; Performance Measurement</div>
                    <div className="process-step__desc">Capacitors and contactors tested, thermostat calibrated and verified, system run test with temperature differential measurements across supply and return air. Final performance report.</div>
                    <div className="process-step__time">~15–25 minutes</div>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__left">
                    <div className="process-step__num">5</div>
                  </div>
                  <div className="process-step__content">
                    <div className="process-step__title">Homeowner Debrief &amp; Recommendations</div>
                    <div className="process-step__desc">Your technician walks you through what was found, what was done, and any items to watch or plan for — without pressure. You leave with a clear picture of your {"system's"} summer readiness.</div>
                    <div className="process-step__time">~5–10 minutes</div>
                  </div>
                </div>
              </div>

              <p>
                A system that has been regularly maintained will typically be at the shorter end of that range. An older system or one that {"hasn't"} been serviced in several years may need additional work identified during the visit — your technician will always discuss any add-on repairs or recommendations before proceeding.
              </p>

              <h2>How Often Should You Schedule AC Maintenance in Abbotsford?</h2>

              <p>
                Once per year is the standard recommendation from equipment manufacturers and HVAC professionals alike — and the industry consensus in BC is to get it done before peak summer use, not after. Think of it the way you think about servicing a vehicle: you {"wouldn't"} wait until the engine light comes on.
              </p>

              <div className="timing-bar">
                <div className="timing-bar__label">📅 Best Time to Book Your Abbotsford AC Tune-Up</div>
                <div className="timing-track">
                  <div className="timing-seg timing-seg--best">March–April<br />Ideal</div>
                  <div className="timing-seg timing-seg--good">May<br />Good</div>
                  <div className="timing-seg timing-seg--ok">June<br />Book Fast</div>
                  <div className="timing-seg timing-seg--late">July–Aug<br />Limited Availability</div>
                </div>
                <div className="timing-labels">
                  <div className="timing-label timing-label--best">Best availability &amp; lowest wait times</div>
                  <div className="timing-label timing-label--good">Still comfortable — book soon</div>
                  <div className="timing-label timing-label--ok">Schedules filling up</div>
                  <div className="timing-label timing-label--late">Emergency priority only</div>
                </div>
              </div>

              <p>
                For homes with heat pumps that run year-round — increasingly common in Abbotsford as homeowners switch from gas furnaces — a spring AC service combined with a fall heating service gives you the most complete coverage. Some maintenance plans include both visits at a combined rate.
              </p>

              {/* Condenser Cleaning Image */}
              <figure className="img-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ac-condenser-cleaning-cottonwood-abbotsford.png"
                  alt="Close-up of gloved hands using a brush to clean cottonwood seeds and debris from residential AC condenser unit fins in Abbotsford BC"
                  width={900}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <figcaption>Condenser fin cleaning is one of the most impactful steps in Abbotsford — Fraser Valley cottonwood and agricultural dust loads outdoor units faster than in most BC cities.</figcaption>
              </figure>

              <h2>The Real Benefits: Fewer Breakdowns, Lower Bills, Longer Equipment Life</h2>

              <p>
                Annual maintenance {"isn't"} a cost — {"it's"} the cheapest insurance you can buy for an asset that typically runs $5,000–$12,000 to replace. {"Here's"} what consistent tune-ups actually deliver:
              </p>

              <div className="benefits-row">
                <div className="benefit-card">
                  <div className="benefit-card__icon">⚡</div>
                  <div className="benefit-card__stat">15%</div>
                  <div className="benefit-card__label">Energy Savings</div>
                  <div className="benefit-card__desc">A clean, properly tuned AC can use up to 15% less electricity to deliver the same cooling — directly reducing your BC Hydro bill during summer billing periods.</div>
                </div>
                <div className="benefit-card">
                  <div className="benefit-card__icon">🔧</div>
                  <div className="benefit-card__stat">80%</div>
                  <div className="benefit-card__label">Fewer Breakdowns</div>
                  <div className="benefit-card__desc">Most emergency AC failures are caused by components — capacitors, contactors, low refrigerant — that show warning signs during routine maintenance well before they fail.</div>
                </div>
                <div className="benefit-card">
                  <div className="benefit-card__icon">📅</div>
                  <div className="benefit-card__stat">5 yrs</div>
                  <div className="benefit-card__label">Extended Lifespan</div>
                  <div className="benefit-card__desc">Regularly maintained systems routinely outlast neglected ones by 5 or more years — delaying a $7,000–$12,000 replacement for nearly a decade with consistent service.</div>
                </div>
              </div>

              <p>
                {"There's"} also a comfort dimension that {"doesn't"} show up in statistics: a properly maintained system reaches setpoint faster, holds temperature more consistently, and dehumidifies more effectively on {"Abbotsford's"} humid summer days. The difference between a tuned and neglected system is often most noticeable on the hottest afternoons — when you most want it to perform.
              </p>

              <h2>Maintenance Plan vs. One-Off Summer Tune-Up: Which Is Right for You?</h2>

              <p>
                Both options deliver the same core service visit. The difference is what surrounds it — and what it means for your relationship with your HVAC system throughout the year.
              </p>

              <div className="compare">
                <div className="compare-col compare-col--oneoff">
                  <div className="compare-col__label">Single Visit</div>
                  <div className="compare-col__title">One-Off Summer Tune-Up</div>
                  <ul className="compare-list">
                    <li>Full AC maintenance visit, once per season</li>
                    <li>You book when you remember or when a problem prompts you</li>
                    <li>Standard scheduling — same wait as general public</li>
                    <li>No reminder system — easy to let it slip year to year</li>
                    <li>Standard service rate per visit</li>
                    <li>Best for: newer systems, rental properties, or one-time needs</li>
                  </ul>
                </div>
                <div className="compare-col compare-col--plan">
                  <div className="compare-col__label">Annual Plan</div>
                  <div className="compare-col__title">Maintenance Plan Member</div>
                  <ul className="compare-list">
                    <li>Spring AC tune-up + fall heating check every year</li>
                    <li>Automatic annual reminders — no booking to remember</li>
                    <li>Priority scheduling during peak demand periods</li>
                    <li>Discounted rates on repairs and parts identified during service</li>
                    <li>Consistent technician familiarity with your specific system</li>
                    <li>Best for: primary residences, heat pump owners, older systems</li>
                  </ul>
                </div>
              </div>

              <p>
                For most Abbotsford homeowners who rely on their AC through July and August, the maintenance plan pays for itself in priority access alone. When a heat wave arrives and every HVAC company in the Fraser Valley has a 5-day wait, maintenance plan members move to the front of the queue.
              </p>

              <h2>Frequently Asked Questions</h2>

              <div className="faq">
                <div className="faq-item">
                  <div className="faq-q">How often should I get AC maintenance in Abbotsford?</div>
                  <div className="faq-a">Once per year is the standard recommendation — ideally in spring or early summer before {"Abbotsford's"} hottest weather arrives. Systems running hard during {"BC's"} increasingly warm summers benefit from consistent annual service to maintain efficiency and catch wear before it becomes a breakdown.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">How long does an AC tune-up take?</div>
                  <div className="faq-a">A standard AC maintenance visit typically takes 30 minutes to 2 hours depending on system condition, age, and whether any issues are discovered during the visit. A regularly serviced system will usually be on the shorter end of that range. Your technician will always let you know if any additional work is needed before proceeding.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">{"What's"} actually included in a tune-up? {"Can't"} I just change the filter myself?</div>
                  <div className="faq-a">Changing the filter is a great DIY habit and we encourage it between professional visits. A professional tune-up covers the parts of the system you {"can't"} easily access or evaluate yourself — coil cleaning, refrigerant measurement, capacitor and contactor testing, condensate drain flushing, and a full system performance assessment. These are the steps that prevent unexpected mid-summer failures.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">Can AC maintenance actually lower my electricity bill?</div>
                  <div className="faq-a">Yes — a clean, properly tuned air conditioner runs more efficiently and consumes less power to achieve the same cooling. Dirty coils, low refrigerant, and worn components all force the system to work harder and run longer, directly increasing your BC Hydro bill during peak summer months. The efficiency gain from a clean system is measurable and consistent.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">{"What's"} the difference between a tune-up and a repair?</div>
                  <div className="faq-a">A tune-up is scheduled preventive maintenance performed on a working system — cleaning, testing, and optimizing performance. A repair addresses a specific failure or malfunction. Most repairs that happen during summer in Abbotsford could have been avoided or identified at a lower cost during a spring tune-up. If our technician finds something during a maintenance visit, {"they'll"} explain it clearly and quote any additional repair separately — {"there's"} no obligation.</div>
                </div>
              </div>

              {/* Main CTA */}
              <div className="cta-box">
                <div className="cta-box__eyebrow">AbbotsfordHVAC.ca — Serving the Fraser Valley</div>
                <h2>{"Don't"} Wait for the Heat Wave.<br />Book Your AC Tune-Up Now.</h2>
                <p>Summer slots fill fast in Abbotsford. Schedule your maintenance visit now and make sure your system is ready before the next stretch of 35-degree days.</p>
                <div className="cta-btns">
                  <a href="/contact" className="btn-lg btn-lg--primary">Book a Tune-Up →</a>
                  <a href="/services/maintenance" className="btn-lg btn-lg--ghost">View Maintenance Plans</a>
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
