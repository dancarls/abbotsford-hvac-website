import { Metadata } from 'next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export const metadata: Metadata = {
  title: 'Indoor Air Quality Solutions for Fraser Valley Allergies | Abbotsford HVAC',
  description: 'Fraser Valley has some of the worst seasonal allergy air in BC. Learn which HVAC solutions — HEPA filters, ERVs, UV purifiers, humidifiers — actually improve indoor air quality and reduce allergy symptoms.',
  keywords: 'indoor air quality Abbotsford, Fraser Valley allergies HVAC, air purifier Abbotsford BC, HEPA filter HVAC Abbotsford, ERV ventilation Abbotsford, IAQ solutions Fraser Valley, air quality improvement Abbotsford',
  authors: [{ name: 'AbbotsfordHVAC.ca' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.abbotsfordhvac.ca/blog/indoor-air-quality-fraser-valley-allergies/'
  },
  openGraph: {
    title: 'Indoor Air Quality Solutions for Fraser Valley Allergies',
    description: 'Which HVAC upgrades actually reduce allergens and improve air quality in Fraser Valley homes — filters, purifiers, ventilation, and humidity control explained.',
    type: 'article',
    url: 'https://www.abbotsfordhvac.ca/blog/indoor-air-quality-fraser-valley-allergies/',
    images: ['https://www.abbotsfordhvac.ca/images/indoor-air-quality-abbotsford-hero.png'],
    locale: 'en_CA'
  }
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.abbotsfordhvac.ca/blog/indoor-air-quality-fraser-valley-allergies/#article',
      'headline': 'Indoor Air Quality Solutions for Fraser Valley Allergies',
      'description': 'Which HVAC upgrades actually reduce allergens and improve indoor air quality in Abbotsford and Fraser Valley homes.',
      'image': 'https://www.abbotsfordhvac.ca/images/indoor-air-quality-abbotsford-hero.png',
      'datePublished': '2025-07-01',
      'dateModified': '2025-07-01',
      'author': { '@type': 'Organization', 'name': 'AbbotsfordHVAC.ca' },
      'publisher': {
        '@type': 'Organization',
        'name': 'AbbotsfordHVAC.ca',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.abbotsfordhvac.ca/images/logo.png' }
      },
      'mainEntityOfPage': 'https://www.abbotsfordhvac.ca/blog/indoor-air-quality-fraser-valley-allergies/',
      'keywords': ['indoor air quality Abbotsford', 'Fraser Valley allergies', 'HEPA filter', 'ERV ventilation', 'air purifier'],
      'articleSection': 'Air Quality',
      'wordCount': '2100'
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
      'serviceType': ['Indoor Air Quality', 'HVAC Installation', 'Air Purifier Installation', 'ERV Installation']
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What causes poor indoor air quality in Fraser Valley homes?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Fraser Valley homes face high pollen counts from surrounding agricultural land and forests, smoke infiltration during wildfire season, and elevated humidity from the valley climate. Older homes with poor sealing can pull in outdoor allergens whenever windows or doors open, while stagnant indoor air concentrates dust mites, pet dander, and mould spores year-round.' }
        },
        {
          '@type': 'Question',
          'name': 'What MERV rating filter should I use for allergies?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'For allergy sufferers in Abbotsford, a MERV 11–13 filter is the standard recommendation. These capture pollen, mould spores, and fine dust particles without restricting airflow enough to strain most residential HVAC systems. MERV 14+ and true HEPA filters offer even finer filtration but may require a system check to ensure your blower can handle the added resistance.' }
        },
        {
          '@type': 'Question',
          'name': 'Does an ERV help with allergies?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. An Energy Recovery Ventilator (ERV) continuously exchanges stale indoor air with fresh outdoor air through a heat-and-moisture exchanger, while filtering incoming air. This dilutes concentrated indoor allergens like pet dander and dust mites without losing the heating or cooling energy already in your home — making it one of the most effective whole-home IAQ upgrades available.' }
        },
        {
          '@type': 'Question',
          'name': 'How much does an indoor air quality assessment cost in Abbotsford?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'A professional IAQ assessment in Abbotsford typically runs $150–$300 and includes testing for particulate levels, CO2, humidity, and sometimes VOCs and mould spores depending on the package. Many HVAC companies offer free assessments when bundled with a system installation quote.' }
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
  }

  .iaq-pg {
    font-family: var(--font-body);
    font-size: 18px;
    line-height: 1.78;
    color: var(--coal);
    background: var(--mist);
  }

  .iaq-pg img { max-width: 100%; display: block; border-radius: var(--radius); }
  .iaq-pg a { color: var(--sky); text-decoration: underline; text-underline-offset: 3px; }
  .iaq-pg a:hover { color: var(--sky-dark); }

  .container       { max-width: var(--max-w);      margin-inline: auto; padding-inline: 24px; }
  .container--wide { max-width: var(--max-w-wide); margin-inline: auto; padding-inline: 24px; }

  .iaq-hero {
    background: linear-gradient(150deg, #065F46 0%, var(--teal) 50%, var(--sky-mid) 100%);
    color: var(--white);
    padding: 80px 24px 72px;
    position: relative; overflow: hidden;
  }
  .iaq-hero::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,.12) 0%, transparent 65%);
    pointer-events: none;
  }
  .iaq-hero::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0; right: 0;
    height: 48px;
    background: var(--mist);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .iaq-hero__inner {
    position: relative; z-index: 1;
    max-width: var(--max-w); margin-inline: auto;
  }
  .iaq-hero__label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--font-ui);
    font-size: 12px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--teal-lt); margin-bottom: 20px;
  }
  .iaq-pg .iaq-hero h1 {
    font-family: var(--font-display);
    font-size: clamp(28px, 4.8vw, 50px);
    font-weight: 900; line-height: 1.06;
    margin-bottom: 22px;
    letter-spacing: -.02em;
  }
  .iaq-hero__sub {
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

  .iaq-pg h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3.2vw, 32px);
    font-weight: 700; color: var(--sky-dark);
    margin-top: 56px; margin-bottom: 18px; line-height: 1.15;
    letter-spacing: -.01em;
  }
  .iaq-pg h3 {
    font-family: var(--font-display);
    font-size: clamp(17px, 2.3vw, 20px);
    font-weight: 600; color: var(--slate);
    margin-top: 32px; margin-bottom: 10px; line-height: 1.3;
  }

  .lead {
    font-size: 20px; line-height: 1.72; color: var(--slate);
    border-left: 4px solid var(--teal);
    padding-left: 20px; margin-bottom: 2rem;
  }

  .pullquote {
    background: linear-gradient(135deg, #065F46, var(--teal));
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

  .season-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px; margin: 28px 0;
  }
  .season-card {
    background: var(--white);
    border-radius: var(--radius-lg); padding: 20px 16px;
    text-align: center; box-shadow: var(--shadow-sm);
    border-top: 4px solid transparent;
    transition: box-shadow .2s, transform .2s;
  }
  .season-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
  .season-card--spring { border-top-color: #22C55E; }
  .season-card--summer { border-top-color: #F59E0B; }
  .season-card--fall   { border-top-color: #F97316; }
  .season-card--winter { border-top-color: var(--sky); }
  .season-card__icon { font-size: 32px; margin-bottom: 10px; }
  .season-card__name {
    font-family: var(--font-ui); font-size: 13px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .06em;
    color: var(--slate); margin-bottom: 8px;
  }
  .season-card__threat {
    font-family: var(--font-ui); font-size: 12px;
    color: var(--cool-gray); line-height: 1.45;
  }

  .solution-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 18px; margin: 28px 0;
  }
  .solution-card {
    background: var(--white);
    border: 1px solid #e2eaf3;
    border-radius: var(--radius-lg); padding: 26px 22px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow .2s, transform .2s;
  }
  .solution-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .solution-card__icon { font-size: 34px; margin-bottom: 12px; }
  .solution-card__title {
    font-family: var(--font-ui); font-size: 16px; font-weight: 700;
    color: var(--sky-dark); margin-bottom: 8px;
  }
  .solution-card__desc {
    font-family: var(--font-ui); font-size: 13.5px;
    color: var(--cool-gray); line-height: 1.6;
  }
  .solution-card__cost {
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    color: var(--teal); margin-top: 12px;
    padding-top: 12px; border-top: 1px solid #e2eaf3;
  }

  .merv-table {
    width: 100%; border-collapse: collapse;
    margin: 28px 0; border-radius: var(--radius-lg); overflow: hidden;
    box-shadow: var(--shadow-sm);
  }
  .merv-table th {
    background: var(--sky-dark); color: var(--white);
    font-family: var(--font-ui); font-size: 13px; font-weight: 700;
    letter-spacing: .05em; padding: 14px 16px; text-align: left;
  }
  .merv-table td {
    font-family: var(--font-ui); font-size: 13.5px;
    color: var(--slate); padding: 12px 16px;
    border-bottom: 1px solid #e2eaf3;
  }
  .merv-table tr:nth-child(even) td { background: var(--mist); }
  .merv-table tr:last-child td { border-bottom: none; }
  .merv-badge {
    display: inline-block;
    padding: 2px 10px; border-radius: 20px;
    font-size: 12px; font-weight: 700;
  }
  .merv-badge--basic    { background: #FEF3C7; color: #92400E; }
  .merv-badge--mid      { background: var(--sky-lt); color: var(--sky-dark); }
  .merv-badge--high     { background: var(--teal-lt); color: #065F46; }
  .merv-badge--hepa     { background: #EDE9FE; color: #5B21B6; }

  .tip-box {
    background: var(--teal-lt);
    border-left: 4px solid var(--teal);
    border-radius: 0 var(--radius) var(--radius) 0;
    padding: 20px 24px; margin: 28px 0;
  }
  .tip-box__label {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .1em;
    color: #065F46; margin-bottom: 8px;
  }
  .tip-box p {
    font-family: var(--font-ui); font-size: 14.5px;
    color: #064E3B; margin-bottom: 0 !important; line-height: 1.6;
  }

  .inline-image {
    margin: 40px 0; border-radius: var(--radius-lg); overflow: hidden;
    box-shadow: var(--shadow-md);
  }
  .inline-image img { width: 100%; display: block; }
  .inline-image figcaption {
    background: var(--warm-white);
    font-family: var(--font-ui); font-size: 13px; color: var(--cool-gray);
    padding: 12px 16px; text-align: center; font-style: italic;
  }

  .cta-banner {
    background: linear-gradient(135deg, var(--sky-deeper), var(--teal));
    border-radius: var(--radius-lg); padding: 48px 40px;
    text-align: center; margin: 48px 0;
    box-shadow: var(--shadow-md);
  }
  .cta-banner h2 {
    font-family: var(--font-display); font-size: clamp(22px, 3vw, 30px);
    font-weight: 800; color: var(--white);
    margin-bottom: 14px; margin-top: 0;
    letter-spacing: -.01em;
  }
  .cta-banner p {
    font-family: var(--font-ui); font-size: 16px;
    color: rgba(255,255,255,.82); margin-bottom: 28px !important;
  }
  .cta-btn {
    display: inline-block;
    background: var(--white); color: var(--sky-dark);
    font-family: var(--font-ui); font-size: 16px; font-weight: 700;
    padding: 14px 36px; border-radius: 50px;
    text-decoration: none !important;
    transition: transform .15s, box-shadow .15s;
    box-shadow: 0 4px 20px rgba(0,0,0,.2);
    margin: 6px;
  }
  .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.3); color: var(--sky-dark) !important; }
  .cta-btn--outline {
    background: transparent; color: var(--white) !important;
    border: 2px solid rgba(255,255,255,.5);
  }
  .cta-btn--outline:hover { background: rgba(255,255,255,.1); color: var(--white) !important; }

  @media (max-width: 640px) {
    .season-row { grid-template-columns: repeat(2, 1fr); }
    .solution-grid { grid-template-columns: 1fr; }
    .cta-banner { padding: 32px 20px; }
  }
`;

export default function IAQArticlePage() {
  return (
    <div className="iaq-pg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <style dangerouslySetInnerHTML={{ __html: articleCSS }} />
      <Header />

      {/* Hero */}
      <section className="iaq-hero">
        <div className="iaq-hero__inner">
          <div className="iaq-hero__label">🌿 Air Quality Guide — Abbotsford &amp; Fraser Valley</div>
          <h1>Indoor Air Quality Solutions for <em style={{ fontStyle: 'normal', color: '#99F6E4' }}>Fraser Valley Allergies</em></h1>
          <p className="iaq-hero__sub">
            The valley that grows some of BC&apos;s best produce also produces some of BC&apos;s worst seasonal pollen. Here&apos;s what actually works inside your home.
          </p>
          <div className="hero__meta">
            <span>By AbbotsfordHVAC.ca</span>
            <span>·</span>
            <span>July 2025</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <div className="hero__stats">
            <div className="stat-pill"><span>🌸</span> High Pollen Season: March–October</div>
            <div className="stat-pill"><span>🏠</span> Indoor air is 2–5× more polluted than outdoor</div>
            <div className="stat-pill"><span>✅</span> BC CleanBC rebates available</div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="hero-image-block">
        <img
          src="/images/indoor-air-quality-abbotsford-hero.png"
          alt="Clean modern living room with ductless mini-split and Fraser Valley view — indoor air quality Abbotsford"
          width={1080}
          height={540}
          style={{ width: '100%', borderRadius: '14px' }}
        />
      </div>

      {/* Article Body */}
      <article className="article-body">
        <div className="container">

          <p className="lead">
            If you or your family suffer from seasonal allergies in Abbotsford, the pollen counts blowing in from the surrounding agricultural land and forests are only half the story. The other half is what&apos;s already circulating inside your home — and your HVAC system is either making it better or worse.
          </p>

          <p>
            Fraser Valley residents face a longer and more intense allergy season than most of Metro Vancouver. Agricultural fields, berry farms, tree nurseries, and the mountain foliage that makes the area beautiful also release enormous amounts of pollen from March through October. Add wildfire smoke during summer months, elevated moisture that encourages mould growth, and the typical dust mite populations in older Abbotsford housing stock — and the case for taking indoor air quality seriously becomes clear.
          </p>

          <p>
            The good news: the right HVAC upgrades can dramatically reduce allergens inside your home without compromising comfort or skyrocketing your energy bills.
          </p>

          <h2>Why Fraser Valley Air Quality Is Uniquely Challenging</h2>

          <p>
            The geography that makes Abbotsford beautiful also traps pollutants. The Fraser Valley acts as a natural bowl — surrounded by mountains on three sides — and during certain weather conditions, particulate matter, smoke, and pollen accumulate rather than dispersing. Environment Canada regularly issues air quality advisories for the valley during wildfire season, and local pollen counts often rank among the highest in the province.
          </p>

          <div className="season-row">
            <div className="season-card season-card--spring">
              <div className="season-card__icon">🌸</div>
              <div className="season-card__name">Spring</div>
              <div className="season-card__threat">Tree pollen: birch, alder, maple. Mould spores from thawing soil. High humidity indoors.</div>
            </div>
            <div className="season-card season-card--summer">
              <div className="season-card__icon">☀️</div>
              <div className="season-card__name">Summer</div>
              <div className="season-card__threat">Grass &amp; crop pollen. Wildfire smoke PM2.5. Valley inversions trapping pollutants.</div>
            </div>
            <div className="season-card season-card--fall">
              <div className="season-card__icon">🍂</div>
              <div className="season-card__name">Fall</div>
              <div className="season-card__threat">Ragweed, mould from damp leaves, dust as heating systems restart for the season.</div>
            </div>
            <div className="season-card season-card--winter">
              <div className="season-card__icon">❄️</div>
              <div className="season-card__name">Winter</div>
              <div className="season-card__threat">Dry indoor air, dust mites, pet dander, VOCs from sealed homes with limited ventilation.</div>
            </div>
          </div>

          <p>
            Most Fraser Valley residents are surprised to learn that indoor air quality is typically two to five times worse than outdoor air — even on a high-pollen day. This is because allergens, dust, and pollutants accumulate inside a sealed home with no mechanism to remove them.
          </p>

          <h2>The 6 HVAC Solutions That Actually Move the Needle</h2>

          <p>
            Not all IAQ products are created equal. Here&apos;s an honest look at the solutions that deliver measurable results for allergy sufferers in Abbotsford homes.
          </p>

          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-card__icon">🔲</div>
              <div className="solution-card__title">High-MERV Filters (MERV 11–13)</div>
              <div className="solution-card__desc">
                The easiest upgrade. A higher-rated filter on your furnace or air handler captures fine particles that standard filters miss — including pollen, mould spores, and pet dander. Replace every 60–90 days during peak season.
              </div>
              <div className="solution-card__cost">Investment: $20–$50/year in filters</div>
            </div>
            <div className="solution-card">
              <div className="solution-card__icon">💨</div>
              <div className="solution-card__title">Energy Recovery Ventilator (ERV)</div>
              <div className="solution-card__desc">
                An ERV continuously exchanges stale, allergen-heavy indoor air with fresh outdoor air — while recovering 70–85% of the heat or cool you&apos;ve already paid for. The single most effective whole-home IAQ upgrade for airtight modern homes.
              </div>
              <div className="solution-card__cost">Investment: $1,500–$3,500 installed</div>
            </div>
            <div className="solution-card">
              <div className="solution-card__icon">💡</div>
              <div className="solution-card__title">UV-C Air Purifier (In-Duct)</div>
              <div className="solution-card__desc">
                Installed inside your ductwork, a UV-C lamp neutralizes mould spores, bacteria, and viruses that pass through the air handler. Especially valuable in homes with central AC where mould can grow on the evaporator coil.
              </div>
              <div className="solution-card__cost">Investment: $400–$900 installed</div>
            </div>
            <div className="solution-card">
              <div className="solution-card__icon">🌫️</div>
              <div className="solution-card__title">Whole-Home Air Purifier (Media / HEPA)</div>
              <div className="solution-card__desc">
                Installed in the return air duct, a whole-home media or HEPA purifier filters all air passing through your system to a much finer level than a standard filter. Far more effective than portable room purifiers.
              </div>
              <div className="solution-card__cost">Investment: $600–$1,800 installed</div>
            </div>
            <div className="solution-card">
              <div className="solution-card__icon">💧</div>
              <div className="solution-card__title">Whole-Home Humidifier</div>
              <div className="solution-card__desc">
                Dry winter air irritates airways and makes allergy symptoms worse. A furnace-mounted humidifier maintains 35–50% relative humidity — the ideal range for comfort and for suppressing dust mite reproduction and mould growth.
              </div>
              <div className="solution-card__cost">Investment: $500–$1,200 installed</div>
            </div>
            <div className="solution-card">
              <div className="solution-card__icon">📊</div>
              <div className="solution-card__title">IAQ Monitor + Smart Thermostat</div>
              <div className="solution-card__desc">
                A connected IAQ monitor tracks PM2.5, CO2, VOCs, and humidity in real time. Paired with a smart thermostat, it can automatically trigger fresh air ventilation or purification cycles when indoor quality drops.
              </div>
              <div className="solution-card__cost">Investment: $200–$600 for hardware</div>
            </div>
          </div>

          <h2>Choosing the Right Filter: The MERV Rating Guide</h2>

          <p>
            The MERV (Minimum Efficiency Reporting Value) rating on your HVAC filter is the most direct lever you have on indoor allergen levels. But higher isn&apos;t always better — a filter that&apos;s too restrictive for your system&apos;s blower motor can reduce airflow, lower efficiency, and even cause the system to overheat.
          </p>

          <table className="merv-table">
            <thead>
              <tr>
                <th>MERV Rating</th>
                <th>What It Captures</th>
                <th>Best For</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="merv-badge merv-badge--basic">MERV 1–6</span></td>
                <td>Dust, pollen, carpet fibres</td>
                <td>Equipment protection only</td>
                <td>Not effective for allergy relief</td>
              </tr>
              <tr>
                <td><span className="merv-badge merv-badge--mid">MERV 7–10</span></td>
                <td>+ Mould spores, pet dander, dust mites</td>
                <td>Mild allergy households</td>
                <td>Good balance of cost &amp; filtration</td>
              </tr>
              <tr>
                <td><span className="merv-badge merv-badge--high">MERV 11–13</span></td>
                <td>+ Fine particles, smoke, bacteria</td>
                <td>Allergy sufferers (recommended)</td>
                <td>Check system specs before upgrading</td>
              </tr>
              <tr>
                <td><span className="merv-badge merv-badge--hepa">MERV 14–16 / HEPA</span></td>
                <td>+ Ultra-fine particles, viruses</td>
                <td>Medical-grade air quality</td>
                <td>Requires system assessment — may need dedicated bypass unit</td>
              </tr>
            </tbody>
          </table>

          <div className="tip-box">
            <div className="tip-box__label">💡 Abbotsford Tip</div>
            <p>
              During wildfire season, increase filter check frequency to every 3–4 weeks. PM2.5 from smoke will clog filters much faster than typical household dust, and a clogged filter is worse than no filter — it can cause the system to overheat and shut down.
            </p>
          </div>

          <h2>ERVs: The Most Underrated IAQ Upgrade in BC</h2>

          <p>
            If your home was built or retrofitted after 2010, it&apos;s likely well-sealed. That&apos;s great for energy efficiency but terrible for indoor air quality — the same airtightness that keeps cold air out also traps CO2, VOCs, moisture, and allergens inside. Without mechanical ventilation, the only fresh air coming in is infiltrating through gaps in the building envelope.
          </p>

          <p>
            An Energy Recovery Ventilator solves this by continuously cycling fresh outdoor air in and stale indoor air out, without wasting the energy you&apos;ve already used to heat or cool your home. In BC&apos;s mild but damp climate, an ERV (rather than an HRV) is typically recommended because it also recovers moisture — preventing the air from becoming too dry in winter.
          </p>

          <div className="pullquote">
            <p>
              &ldquo;An ERV can reduce indoor allergen concentrations by 40–60% in well-sealed homes by continuously diluting stale air with filtered fresh air — without sacrificing the energy efficiency of a tight building envelope.&rdquo;
            </p>
            <cite>— AbbotsfordHVAC.ca Technical Team</cite>
          </div>

          <figure className="inline-image">
            <img
              src="/images/iaq-assessment-abbotsford.png"
              alt="HVAC technician conducting IAQ assessment with air quality monitor and homeowner, Abbotsford BC"
              width={800}
              height={450}
            />
            <figcaption>A professional IAQ assessment measures PM2.5, CO2, humidity, and VOCs — giving you a clear picture of where your home&apos;s air quality stands before investing in solutions.</figcaption>
          </figure>

          <h2>What to Expect from a Professional IAQ Assessment</h2>

          <p>
            Before investing in any equipment, a professional IAQ assessment gives you a baseline — so you can target the right solution rather than guessing. A good assessment includes:
          </p>

          <ul style={{ paddingLeft: '24px', lineHeight: '2', color: 'var(--slate)', fontFamily: 'var(--font-ui)' }}>
            <li><strong>Particulate matter (PM2.5 and PM10)</strong> — fine particles from pollen, smoke, and dust</li>
            <li><strong>CO2 concentration</strong> — a proxy for ventilation adequacy</li>
            <li><strong>Relative humidity</strong> — both too high (&gt;55%, mould risk) and too low (&lt;30%, airway irritation) are problems</li>
            <li><strong>VOC levels</strong> — from off-gassing furniture, paint, cleaning products</li>
            <li><strong>Visual mould inspection</strong> of the air handler, coils, and ductwork where accessible</li>
            <li><strong>Filter condition assessment</strong> and recommendation for appropriate MERV rating</li>
          </ul>

          <p>
            Based on the results, a technician can recommend a prioritized set of upgrades. Many Abbotsford homeowners are surprised to find that a simple filter upgrade and ERV installation provides most of the benefit at a fraction of the cost of a full purification system.
          </p>

          <h2>BC Rebates for IAQ Upgrades</h2>

          <p>
            Several IAQ improvements qualify for BC CleanBC incentives, particularly when tied to heat pump or ERV installations. The CleanBC Better Homes program offers rebates on ERV/HRV systems and qualifying heat pumps that include enhanced filtration. Your HVAC contractor can confirm current rebate eligibility and help with paperwork.
          </p>

          <h2>FAQ: Indoor Air Quality in Abbotsford</h2>

          <h3>How do I know if my home&apos;s air quality is poor?</h3>
          <p>
            Common signs include persistent allergy or asthma symptoms that worsen indoors, stale or musty odours, visible dust accumulation on surfaces within a day or two of cleaning, condensation on windows, or a CO2 monitor reading above 1,000 ppm regularly. A professional IAQ test removes the guesswork.
          </p>

          <h3>Can my existing HVAC system handle a better filter?</h3>
          <p>
            Most systems built in the last 15 years can handle a MERV 11–13 filter without issue. Older systems with smaller blower motors may struggle with high-resistance filters — a technician can check your system&apos;s static pressure rating before recommending a filter upgrade.
          </p>

          <h3>Are portable air purifiers worth buying?</h3>
          <p>
            For a single room, a quality portable HEPA purifier (with a CADR rating appropriate for the room size) can be effective. For whole-home coverage, a ducted whole-home solution is more efficient and consistent than multiple portable units.
          </p>

          <div className="cta-banner">
            <h2>Breathe Better in Your Abbotsford Home</h2>
            <p>Our licensed technicians can assess your current air quality and recommend the right solution — from a simple filter upgrade to a full ERV installation.</p>
            <a href="/contact" className="cta-btn">Book an IAQ Assessment</a>
            <a href="/services/heating" className="cta-btn cta-btn--outline">View All HVAC Services</a>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}
