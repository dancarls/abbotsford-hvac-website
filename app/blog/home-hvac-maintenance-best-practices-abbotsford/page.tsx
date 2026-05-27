import { Metadata } from 'next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export const metadata: Metadata = {
  title: 'Home HVAC Maintenance Best Practices for Abbotsford Homeowners',
  description: 'The complete HVAC maintenance guide for Abbotsford homes — seasonal DIY tasks, when to call a professional, what\'s included in a tune-up, and how a maintenance plan saves money over the long run.',
  keywords: 'HVAC maintenance Abbotsford, furnace maintenance Abbotsford BC, AC maintenance Fraser Valley, HVAC tune-up Abbotsford, home heating maintenance Abbotsford, annual HVAC service Abbotsford, HVAC maintenance plan Abbotsford',
  authors: [{ name: 'AbbotsfordHVAC.ca' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.abbotsfordhvac.ca/blog/home-hvac-maintenance-best-practices-abbotsford/'
  },
  openGraph: {
    title: 'Home HVAC Maintenance Best Practices for Abbotsford Homeowners',
    description: 'Seasonal DIY tasks, professional tune-up checklist, and the maintenance schedule every Abbotsford homeowner should follow to keep their HVAC running efficiently.',
    type: 'article',
    url: 'https://www.abbotsfordhvac.ca/blog/home-hvac-maintenance-best-practices-abbotsford/',
    images: ['https://www.abbotsfordhvac.ca/images/hvac-maintenance-abbotsford-hero.png'],
    locale: 'en_CA'
  }
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.abbotsfordhvac.ca/blog/home-hvac-maintenance-best-practices-abbotsford/#article',
      'headline': 'Home HVAC Maintenance Best Practices for Abbotsford Homeowners',
      'description': 'The complete seasonal HVAC maintenance guide for Abbotsford homes — what to do yourself, what to leave to the pros, and how a maintenance plan pays for itself.',
      'image': 'https://www.abbotsfordhvac.ca/images/hvac-maintenance-abbotsford-hero.png',
      'datePublished': '2025-07-01',
      'dateModified': '2025-07-01',
      'author': { '@type': 'Organization', 'name': 'AbbotsfordHVAC.ca' },
      'publisher': {
        '@type': 'Organization',
        'name': 'AbbotsfordHVAC.ca',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.abbotsfordhvac.ca/images/logo.png' }
      },
      'mainEntityOfPage': 'https://www.abbotsfordhvac.ca/blog/home-hvac-maintenance-best-practices-abbotsford/',
      'keywords': ['HVAC maintenance Abbotsford', 'furnace tune-up', 'AC maintenance Fraser Valley', 'HVAC maintenance plan'],
      'articleSection': 'HVAC Maintenance',
      'wordCount': '2000'
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.abbotsfordhvac.ca#business',
      'name': 'AbbotsfordHVAC.ca',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Abbotsford',
        'addressRegion': 'BC',
        'addressCountry': 'CA'
      },
      'areaServed': ['Abbotsford', 'Mission', 'Chilliwack', 'Langley', 'Fraser Valley'],
      'serviceType': ['HVAC Maintenance', 'Furnace Tune-Up', 'AC Maintenance', 'HVAC Maintenance Plan']
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How often should I service my HVAC system in Abbotsford?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Most HVAC systems should be serviced once per year per major component — furnaces in fall (before heating season), and air conditioners or heat pumps in spring (before cooling season). If you have a heat pump that runs year-round, bi-annual service is recommended. Annual maintenance keeps warranties valid, improves efficiency, and catches developing problems before they become emergency breakdowns.' }
        },
        {
          '@type': 'Question',
          'name': 'What happens if I skip furnace maintenance?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Skipping annual furnace maintenance leads to gradually declining efficiency (higher gas bills), accelerated wear on components like the heat exchanger, blower motor, and ignitor, and increased risk of breakdown — usually during the coldest periods when the system runs hardest. Studies show unmaintained systems fail at 3–4 times the rate of regularly serviced equipment, and a single emergency repair often costs more than several years of maintenance visits.' }
        },
        {
          '@type': 'Question',
          'name': 'How often should I change my furnace filter in Abbotsford?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'For a standard 1-inch filter, every 1–3 months depending on household dust load, pets, and whether you run the system year-round. During wildfire season (typically July–September in the Fraser Valley), check monthly — smoke particulates clog filters much faster than typical household dust. A clogged filter restricts airflow and can cause overheating, coil freeze, or blower motor failure.' }
        },
        {
          '@type': 'Question',
          'name': 'What does an HVAC maintenance plan include?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'A typical HVAC maintenance plan includes 1–2 annual tune-up visits (heating and cooling), priority scheduling for service calls, discounts on parts and labour, and in some cases, extended warranty coverage. Plans typically cost $150–$300 per year and pay for themselves if they prevent even one service call or extend equipment life by a year or two.' }
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
    --purple:     #7C3AED;
    --purple-lt:  #EDE9FE;
    --cool-gray:  #475569;
    --slate:      #334155;
    --coal:       #0F172A;
    --white:      #FFFFFF;
    --mist:       #F0F9FF;
    --warm-white: #F8FAFC;
    --success:    #15803D;
    --caution:    #D97706;
    --danger:     #DC2626;
    --font-display: 'Outfit', system-ui, sans-serif;
    --font-body:    'Lora', Georgia, serif;
    --font-ui:      'DM Sans', system-ui, sans-serif;
    --max-w:      800px;
    --max-w-wide: 1080px;
    --radius:     8px;
    --radius-lg:  14px;
    --shadow-sm:  0 2px 10px rgba(2,132,199,.08);
    --shadow-md:  0 8px 32px rgba(2,132,199,.14);
  }

  .maint-pg {
    font-family: var(--font-body);
    font-size: 18px; line-height: 1.78;
    color: var(--coal); background: var(--mist);
  }

  .maint-pg img { max-width: 100%; display: block; border-radius: var(--radius); }
  .maint-pg a { color: var(--sky); text-decoration: underline; text-underline-offset: 3px; }
  .maint-pg a:hover { color: var(--sky-dark); }

  .container       { max-width: var(--max-w);      margin-inline: auto; padding-inline: 24px; }
  .container--wide { max-width: var(--max-w-wide); margin-inline: auto; padding-inline: 24px; }

  .maint-hero {
    background: linear-gradient(150deg, var(--sky-deeper) 0%, var(--sky) 55%, var(--purple) 100%);
    color: var(--white); padding: 80px 24px 72px;
    position: relative; overflow: hidden;
  }
  .maint-hero::before {
    content: '';
    position: absolute; top: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,.10) 0%, transparent 65%);
    pointer-events: none;
  }
  .maint-hero::after {
    content: '';
    position: absolute; bottom: -2px; left: 0; right: 0; height: 48px;
    background: var(--mist); clip-path: ellipse(55% 100% at 50% 100%);
  }
  .maint-hero__inner {
    position: relative; z-index: 1;
    max-width: var(--max-w); margin-inline: auto;
  }
  .maint-hero__label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--sky-lt); margin-bottom: 20px;
  }
  .maint-pg .maint-hero h1 {
    font-family: var(--font-display);
    font-size: clamp(28px, 4.8vw, 50px); font-weight: 900;
    line-height: 1.06; margin-bottom: 22px; letter-spacing: -.02em;
  }
  .maint-hero__sub {
    font-family: var(--font-ui); font-size: 18px; line-height: 1.65;
    color: rgba(255,255,255,.82); max-width: 580px; margin-bottom: 36px;
  }
  .hero__meta {
    display: flex; flex-wrap: wrap; gap: 20px;
    font-family: var(--font-ui); font-size: 13px; color: rgba(255,255,255,.5);
  }
  .hero__stats { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 36px; }
  .stat-pill {
    background: rgba(255,255,255,.15); backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,.25); border-radius: 50px;
    padding: 10px 20px; font-family: var(--font-ui); font-size: 14px; font-weight: 600;
    color: var(--white); display: flex; align-items: center; gap: 8px;
  }

  .hero-image-block {
    max-width: var(--max-w-wide); margin-inline: auto; padding-inline: 24px; padding-top: 24px;
  }
  .hero-image-block img { width: 100%; border-radius: var(--radius-lg); }

  .article-body { padding: 64px 24px 24px; }
  .article-body p { margin-bottom: 1.5rem; color: var(--slate); }

  .maint-pg h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3.2vw, 32px); font-weight: 700;
    color: var(--sky-dark); margin-top: 56px; margin-bottom: 18px;
    line-height: 1.15; letter-spacing: -.01em;
  }
  .maint-pg h3 {
    font-family: var(--font-display);
    font-size: clamp(17px, 2.3vw, 20px); font-weight: 600;
    color: var(--slate); margin-top: 32px; margin-bottom: 10px; line-height: 1.3;
  }

  .lead {
    font-size: 20px; line-height: 1.72; color: var(--slate);
    border-left: 4px solid var(--sky); padding-left: 20px; margin-bottom: 2rem;
  }

  .pullquote {
    background: linear-gradient(135deg, var(--sky-dark), var(--purple));
    color: var(--white); padding: 36px 40px; border-radius: var(--radius-lg);
    margin: 40px 0; position: relative; overflow: hidden; box-shadow: var(--shadow-md);
  }
  .pullquote::before {
    content: '\\201C'; position: absolute; top: -10px; left: 22px;
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
    letter-spacing: .08em; text-transform: uppercase; color: var(--sky-lt); position: relative;
  }

  /* Seasonal calendar */
  .season-cal {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 16px; margin: 28px 0;
  }
  .season-block {
    background: var(--white); border-radius: var(--radius-lg); padding: 24px 20px;
    box-shadow: var(--shadow-sm); border-top: 4px solid transparent;
    transition: box-shadow .2s, transform .2s;
  }
  .season-block:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .season-block--spring { border-top-color: #22C55E; }
  .season-block--summer { border-top-color: #F59E0B; }
  .season-block--fall   { border-top-color: #F97316; }
  .season-block--winter { border-top-color: var(--sky); }
  .season-block__header {
    display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
  }
  .season-block__icon { font-size: 26px; }
  .season-block__name {
    font-family: var(--font-ui); font-size: 14px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .06em; color: var(--slate);
  }
  .season-block ul {
    list-style: none; padding: 0; margin: 0;
  }
  .season-block li {
    font-family: var(--font-ui); font-size: 13.5px; color: var(--cool-gray);
    padding: 5px 0 5px 20px; border-bottom: 1px solid #f1f5f9; line-height: 1.45;
    position: relative;
  }
  .season-block li:last-child { border-bottom: none; }
  .season-block li::before {
    content: '✓'; position: absolute; left: 0;
    color: var(--success); font-weight: 700; font-size: 13px;
  }

  /* Task cards (DIY) */
  .task-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px; margin: 28px 0;
  }
  .task-card {
    background: var(--white); border: 1px solid #e2eaf3;
    border-radius: var(--radius-lg); padding: 22px 18px;
    box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s;
  }
  .task-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .task-card__header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
  .task-card__icon { font-size: 26px; }
  .task-card__title {
    font-family: var(--font-ui); font-size: 14px; font-weight: 700; color: var(--sky-dark);
  }
  .task-card__desc {
    font-family: var(--font-ui); font-size: 13px; color: var(--cool-gray); line-height: 1.6;
  }
  .task-card__freq {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .08em;
    color: var(--sky); margin-top: 10px; padding-top: 10px; border-top: 1px solid #e2eaf3;
  }

  /* Pro tasks list */
  .pro-list {
    background: var(--white); border-radius: var(--radius-lg);
    padding: 28px 28px; margin: 28px 0; box-shadow: var(--shadow-sm);
  }
  .pro-list__title {
    font-family: var(--font-display); font-size: 18px; font-weight: 700;
    color: var(--sky-dark); margin-bottom: 18px;
  }
  .pro-list ul { list-style: none; padding: 0; margin: 0; }
  .pro-list li {
    font-family: var(--font-ui); font-size: 14px; color: var(--slate);
    padding: 10px 0 10px 28px; border-bottom: 1px solid #f1f5f9;
    position: relative; line-height: 1.5;
  }
  .pro-list li:last-child { border-bottom: none; }
  .pro-list li::before {
    content: '🔧'; position: absolute; left: 0; font-size: 14px;
  }
  .pro-list li strong { color: var(--sky-dark); }

  /* Plan split */
  .plan-split {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; margin: 28px 0;
  }
  .plan-card {
    background: var(--white); border-radius: var(--radius-lg); padding: 28px 24px;
    box-shadow: var(--shadow-sm); border-top: 4px solid transparent;
  }
  .plan-card--diy { border-top-color: var(--teal); }
  .plan-card--pro { border-top-color: var(--sky-dark); }
  .plan-card__label {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .1em;
    margin-bottom: 6px;
  }
  .plan-card--diy .plan-card__label { color: var(--teal); }
  .plan-card--pro .plan-card__label { color: var(--sky-dark); }
  .plan-card__title {
    font-family: var(--font-display); font-size: 18px; font-weight: 700;
    color: var(--coal); margin-bottom: 14px;
  }
  .plan-card__cost {
    font-family: var(--font-ui); font-size: 26px; font-weight: 900;
    margin-bottom: 6px;
  }
  .plan-card--diy .plan-card__cost { color: var(--teal); }
  .plan-card--pro .plan-card__cost { color: var(--sky-dark); }
  .plan-card__sub {
    font-family: var(--font-ui); font-size: 12px; color: var(--cool-gray); margin-bottom: 16px;
  }
  .plan-card ul { list-style: none; padding: 0; margin: 0; }
  .plan-card li {
    font-family: var(--font-ui); font-size: 13px; color: var(--slate);
    padding: 6px 0 6px 20px; position: relative;
  }
  .plan-card li::before { content: '✓'; position: absolute; left: 0; color: var(--success); font-weight: 700; }

  /* Warning box */
  .warn-box {
    background: #FEF2F2; border-left: 4px solid var(--danger);
    border-radius: 0 var(--radius) var(--radius) 0; padding: 20px 24px; margin: 28px 0;
  }
  .warn-box__label {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .1em; color: var(--danger); margin-bottom: 8px;
  }
  .warn-box p {
    font-family: var(--font-ui); font-size: 14.5px; color: #7F1D1D;
    margin-bottom: 0 !important; line-height: 1.6;
  }

  .tip-box {
    background: var(--sky-lt); border-left: 4px solid var(--sky);
    border-radius: 0 var(--radius) var(--radius) 0; padding: 20px 24px; margin: 28px 0;
  }
  .tip-box__label {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .1em; color: var(--sky-dark); margin-bottom: 8px;
  }
  .tip-box p {
    font-family: var(--font-ui); font-size: 14.5px; color: var(--sky-deeper);
    margin-bottom: 0 !important; line-height: 1.6;
  }

  .inline-image {
    margin: 40px 0; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md);
  }
  .inline-image img { width: 100%; display: block; }
  .inline-image figcaption {
    background: var(--warm-white); font-family: var(--font-ui); font-size: 13px;
    color: var(--cool-gray); padding: 12px 16px; text-align: center; font-style: italic;
  }

  .cta-banner {
    background: linear-gradient(135deg, var(--sky-deeper), var(--sky-dark));
    border-radius: var(--radius-lg); padding: 48px 40px;
    text-align: center; margin: 48px 0; box-shadow: var(--shadow-md);
  }
  .cta-banner h2 {
    font-family: var(--font-display); font-size: clamp(22px, 3vw, 30px);
    font-weight: 800; color: var(--white); margin-bottom: 14px; margin-top: 0; letter-spacing: -.01em;
  }
  .cta-banner p {
    font-family: var(--font-ui); font-size: 16px;
    color: rgba(255,255,255,.82); margin-bottom: 28px !important;
  }
  .cta-btn {
    display: inline-block; background: var(--white); color: var(--sky-dark);
    font-family: var(--font-ui); font-size: 16px; font-weight: 700;
    padding: 14px 36px; border-radius: 50px; text-decoration: none !important;
    transition: transform .15s, box-shadow .15s; box-shadow: 0 4px 20px rgba(0,0,0,.2); margin: 6px;
  }
  .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.3); color: var(--sky-dark) !important; }
  .cta-btn--outline {
    background: transparent; color: var(--white) !important; border: 2px solid rgba(255,255,255,.5);
  }
  .cta-btn--outline:hover { background: rgba(255,255,255,.1); color: var(--white) !important; }

  @media (max-width: 640px) {
    .season-cal { grid-template-columns: 1fr; }
    .task-grid { grid-template-columns: 1fr; }
    .plan-split { grid-template-columns: 1fr; }
    .cta-banner { padding: 32px 20px; }
  }
`;

export default function HVACMaintenanceArticlePage() {
  return (
    <div className="maint-pg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <style dangerouslySetInnerHTML={{ __html: articleCSS }} />
      <Header />

      {/* Hero */}
      <section className="maint-hero">
        <div className="maint-hero__inner">
          <div className="maint-hero__label">🔧 HVAC Maintenance Guide — Abbotsford BC</div>
          <h1>Home HVAC Maintenance Best Practices for <em style={{ fontStyle: 'normal', color: '#BAE6FD' }}>Abbotsford Homeowners</em></h1>
          <p className="maint-hero__sub">
            The seasonal maintenance checklist that keeps your furnace, AC, or heat pump running efficiently — and prevents the expensive breakdowns that happen to neglected systems.
          </p>
          <div className="hero__meta">
            <span>By AbbotsfordHVAC.ca</span>
            <span>·</span>
            <span>July 2025</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <div className="hero__stats">
            <div className="stat-pill"><span>📅</span> Annual tune-up: $100–$180</div>
            <div className="stat-pill"><span>⚠️</span> Unmaintained systems fail 3–4× more often</div>
            <div className="stat-pill"><span>💡</span> DIY tasks take under 30 min/season</div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="hero-image-block">
        <img
          src="/images/hvac-maintenance-abbotsford-hero.png"
          alt="HVAC technician with clipboard inspecting furnace with homeowner observing, Abbotsford BC"
          width={1080}
          height={540}
          style={{ width: '100%', borderRadius: '14px' }}
        />
      </div>

      {/* Article Body */}
      <article className="article-body">
        <div className="container">

          <p className="lead">
            Your HVAC system is the most expensive mechanical system in your home — and the one most homeowners ignore until it stops working. In Abbotsford, that usually means an emergency call on the coldest January night or the hottest August afternoon. A simple annual maintenance routine prevents most of those failures.
          </p>

          <p>
            The good news: basic HVAC maintenance isn&apos;t complicated. There&apos;s a short list of things you can do yourself and a once-a-year professional tune-up that covers everything else. Together, they extend equipment life by years, maintain peak efficiency, and keep your warranty valid.
          </p>

          <h2>Your Seasonal HVAC Maintenance Calendar</h2>

          <p>
            Break your HVAC maintenance into four seasonal checkpoints. The tasks are quick — most homeowners spend 20–30 minutes per season on the DIY portion.
          </p>

          <div className="season-cal">
            <div className="season-block season-block--spring">
              <div className="season-block__header">
                <div className="season-block__icon">🌸</div>
                <div className="season-block__name">Spring (March–May)</div>
              </div>
              <ul>
                <li>Replace furnace filter after heating season</li>
                <li>Clear debris from outdoor AC/heat pump unit</li>
                <li>Test AC before summer — run for 15 min and check for cooling</li>
                <li>Check condensate drain isn&apos;t blocked from winter</li>
                <li>Book spring AC tune-up with a technician</li>
              </ul>
            </div>
            <div className="season-block season-block--summer">
              <div className="season-block__header">
                <div className="season-block__icon">☀️</div>
                <div className="season-block__name">Summer (June–August)</div>
              </div>
              <ul>
                <li>Check filter monthly (wildfire smoke clogs fast)</li>
                <li>Keep outdoor unit clear of grass, weeds, and leaves</li>
                <li>Monitor for unusual noises or reduced cooling output</li>
                <li>Ensure vents are unobstructed by furniture or rugs</li>
                <li>Check thermostat batteries if using a smart thermostat</li>
              </ul>
            </div>
            <div className="season-block season-block--fall">
              <div className="season-block__header">
                <div className="season-block__icon">🍂</div>
                <div className="season-block__name">Fall (September–November)</div>
              </div>
              <ul>
                <li>Replace filter before heating season starts</li>
                <li>Test furnace before first cold night — don&apos;t wait until December</li>
                <li>Check/clear furnace flue and exhaust venting</li>
                <li>Book annual fall furnace tune-up</li>
                <li>Check CO detector batteries and expiry date</li>
              </ul>
            </div>
            <div className="season-block season-block--winter">
              <div className="season-block__header">
                <div className="season-block__icon">❄️</div>
                <div className="season-block__name">Winter (December–February)</div>
              </div>
              <ul>
                <li>Check filter mid-winter (monthly if running continuously)</li>
                <li>Keep outdoor heat pump clear of snow/ice buildup</li>
                <li>Monitor for short-cycling or unusual heating behaviour</li>
                <li>Ensure all vents and returns are open and unblocked</li>
                <li>Know the signs of a failing heat exchanger (cracking or rusting)</li>
              </ul>
            </div>
          </div>

          <h2>DIY Tasks: What Every Homeowner Can Do</h2>

          <p>
            These tasks require no tools, no HVAC experience, and take only minutes. They account for a significant portion of preventable system failures when neglected.
          </p>

          <div className="task-grid">
            <div className="task-card">
              <div className="task-card__header">
                <div className="task-card__icon">🔲</div>
                <div className="task-card__title">Change the Air Filter</div>
              </div>
              <div className="task-card__desc">
                The single most impactful DIY maintenance task. A clogged filter restricts airflow, causes overheating, and makes your system work significantly harder — raising energy bills and accelerating component wear.
              </div>
              <div className="task-card__freq">Every 1–3 months (monthly during wildfire season)</div>
            </div>
            <div className="task-card">
              <div className="task-card__header">
                <div className="task-card__icon">🌿</div>
                <div className="task-card__title">Clear Outdoor Unit Area</div>
              </div>
              <div className="task-card__desc">
                Keep a 2-foot clearance around your outdoor AC or heat pump unit. Remove leaves, grass clippings, and debris from the coil fins. Never use a pressure washer — a garden hose rinse is fine if needed.
              </div>
              <div className="task-card__freq">Each spring; check monthly in summer</div>
            </div>
            <div className="task-card">
              <div className="task-card__header">
                <div className="task-card__icon">🌡️</div>
                <div className="task-card__title">Test Heating/Cooling Before Season</div>
              </div>
              <div className="task-card__desc">
                Run the furnace for 15–20 minutes in September before you actually need it. Run the AC for 15 minutes in spring. If you catch a problem in advance, you avoid emergency pricing and wait times.
              </div>
              <div className="task-card__freq">Once per season (spring + fall)</div>
            </div>
            <div className="task-card">
              <div className="task-card__header">
                <div className="task-card__icon">💨</div>
                <div className="task-card__title">Check Vents and Returns</div>
              </div>
              <div className="task-card__desc">
                Make sure all supply vents and return air grilles are open and unobstructed by furniture, rugs, or drapes. Closed vents increase static pressure and reduce system efficiency — they don&apos;t save energy.
              </div>
              <div className="task-card__freq">Every season</div>
            </div>
            <div className="task-card">
              <div className="task-card__header">
                <div className="task-card__icon">🔋</div>
                <div className="task-card__title">Check Thermostat Batteries</div>
              </div>
              <div className="task-card__desc">
                A dead thermostat means no heating or cooling, full stop. Replace batteries annually — typically in fall when setting the heating schedule. Many smart thermostats show low-battery warnings in the app.
              </div>
              <div className="task-card__freq">Annually (fall)</div>
            </div>
            <div className="task-card">
              <div className="task-card__header">
                <div className="task-card__icon">🚨</div>
                <div className="task-card__title">Test CO Detectors</div>
              </div>
              <div className="task-card__desc">
                Gas furnaces produce carbon monoxide. Test CO detectors monthly, replace batteries annually, and replace the entire unit every 7 years (the sensor degrades over time regardless of battery status).
              </div>
              <div className="task-card__freq">Test monthly; replace batteries annually</div>
            </div>
          </div>

          <figure className="inline-image">
            <img
              src="/images/hvac-filter-replacement-abbotsford.png"
              alt="Side-by-side comparison of dirty vs clean HVAC filter replacement in Abbotsford home"
              width={800}
              height={450}
            />
            <figcaption>A filter replacement takes 30 seconds and costs $5–$30. Leaving a clogged filter like the one on the left causes restricted airflow, higher bills, and accelerated component wear.</figcaption>
          </figure>

          <h2>Professional Tune-Up: What a Technician Does That You Can&apos;t</h2>

          <p>
            Annual professional service goes well beyond what any homeowner can check with a flashlight and a filter. Here&apos;s what a licensed HVAC technician covers during a full tune-up:
          </p>

          <div className="pro-list">
            <div className="pro-list__title">Annual Furnace Tune-Up Checklist</div>
            <ul>
              <li><strong>Heat exchanger inspection</strong> — cracks or rust allow carbon monoxide to enter living space. This is the most safety-critical check.</li>
              <li><strong>Burner cleaning and flame pattern check</strong> — ensures complete combustion, proper ignition, and correct flame colour</li>
              <li><strong>Gas pressure measurement</strong> — confirms correct input pressure for efficient combustion</li>
              <li><strong>Flue and exhaust venting inspection</strong> — checks for blockages, back-drafting, or deterioration</li>
              <li><strong>Electrical component check</strong> — inspects capacitors, contactors, wiring connections, and control board</li>
              <li><strong>Blower motor and belt inspection</strong> — checks airflow rate, belt tension, and motor condition</li>
              <li><strong>Ignitor test</strong> — verifies the hot surface ignitor or spark ignitor fires reliably</li>
              <li><strong>Safety control test</strong> — verifies limit switches, pressure switches, and rollout switches operate correctly</li>
              <li><strong>Filter check and replacement recommendation</strong></li>
              <li><strong>Full operational test</strong> — measures supply and return air temperatures, confirms proper temperature rise</li>
            </ul>
          </div>

          <div className="pullquote">
            <p>
              &ldquo;The heat exchanger inspection is why annual furnace maintenance isn&apos;t optional — it&apos;s the only way to detect a crack before it starts leaking carbon monoxide into your home. No homeowner can check this themselves.&rdquo;
            </p>
            <cite>— AbbotsfordHVAC.ca Technical Team</cite>
          </div>

          <div className="warn-box">
            <div className="warn-box__label">⚠️ Safety Warning</div>
            <p>
              If your furnace is more than 15 years old and hasn&apos;t been serviced in several years, schedule a tune-up before this heating season — not after. Heat exchanger cracks are undetectable without a professional inspection, and a cracked exchanger is a carbon monoxide risk. Don&apos;t wait for symptoms; CO is odourless.
            </p>
          </div>

          <h2>DIY vs. Professional: What&apos;s the Right Split?</h2>

          <div className="plan-split">
            <div className="plan-card plan-card--diy">
              <div className="plan-card__label">DIY</div>
              <div className="plan-card__title">What You Manage</div>
              <div className="plan-card__cost">$30–$100</div>
              <div className="plan-card__sub">per year in filters + minimal time</div>
              <ul>
                <li>Filter replacement every 1–3 months</li>
                <li>Outdoor unit clearance checks</li>
                <li>Pre-season test runs</li>
                <li>Vent and return checks</li>
                <li>Thermostat battery replacement</li>
                <li>CO detector testing</li>
              </ul>
            </div>
            <div className="plan-card plan-card--pro">
              <div className="plan-card__label">Professional</div>
              <div className="plan-card__title">Annual Tune-Up</div>
              <div className="plan-card__cost">$100–$180</div>
              <div className="plan-card__sub">per system (furnace + AC separately)</div>
              <ul>
                <li>Heat exchanger inspection</li>
                <li>Burner cleaning and gas pressure check</li>
                <li>Refrigerant level verification</li>
                <li>Electrical component inspection</li>
                <li>Flue and venting inspection</li>
                <li>Full safety and performance test</li>
              </ul>
            </div>
          </div>

          <h2>Should You Sign Up for an HVAC Maintenance Plan?</h2>

          <p>
            Most HVAC contractors in Abbotsford offer annual maintenance plans — typically $150–$300/year — that bundle one or two tune-up visits with priority scheduling and parts discounts. They&apos;re worth considering if:
          </p>

          <ul style={{ paddingLeft: '24px', lineHeight: '2.2', color: 'var(--slate)', fontFamily: 'var(--font-ui)' }}>
            <li>Your system is 8+ years old and approaching the age when problems become more common</li>
            <li>You have both a furnace and central AC (plans often cover both)</li>
            <li>You want the peace of mind of priority emergency service during peak seasons</li>
            <li>You frequently forget to schedule annual service on your own</li>
          </ul>

          <div className="tip-box">
            <div className="tip-box__label">💡 Abbotsford Tip</div>
            <p>
              Book furnace tune-ups in September and AC tune-ups in March or April. These are the off-peak windows — you get faster scheduling, and any problems found are addressed before you actually need the system. Wait until November or June and you&apos;re competing with everyone else whose equipment just failed.
            </p>
          </div>

          <h2>FAQ: HVAC Maintenance in Abbotsford</h2>

          <h3>Will skipping maintenance void my warranty?</h3>
          <p>
            For most equipment manufacturers, yes. Annual professional maintenance is typically required to keep the manufacturer&apos;s warranty valid. Check your equipment documentation — most require documented annual service. This is another reason a maintenance plan with a record of visits is valuable.
          </p>

          <h3>How do I know if my system needs repair vs. just maintenance?</h3>
          <p>
            Signs that go beyond normal maintenance and indicate a repair is needed: unusual noises (banging, squealing, rattling), short-cycling (the system turns on and off every few minutes), significant efficiency drops (much higher energy bills), visible water around the air handler or furnace, or the system failing to reach the thermostat setpoint on a mild day.
          </p>

          <h3>How long does a furnace last with proper maintenance?</h3>
          <p>
            A gas furnace that receives annual professional service and regular filter changes typically lasts 18–25 years. Without maintenance, the same furnace may fail in 12–15 years — and the last few years of a neglected system&apos;s life usually involve escalating repair costs. The math on maintenance is straightforward.
          </p>

          <div className="cta-banner">
            <h2>Book Your Annual HVAC Tune-Up in Abbotsford</h2>
            <p>Licensed technicians, transparent pricing, and same-week availability. Book now and beat the seasonal rush.</p>
            <a href="/contact" className="cta-btn">Schedule a Tune-Up</a>
            <a href="/services/maintenance" className="cta-btn cta-btn--outline">View Maintenance Services</a>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}
