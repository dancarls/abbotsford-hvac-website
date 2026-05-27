import { Metadata } from 'next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export const metadata: Metadata = {
  title: 'Heat Pump vs Furnace: Which Is Right for Your Abbotsford Home?',
  description: 'Comparing heat pumps vs gas furnaces for Abbotsford\'s climate. Efficiency, cost to operate, BC rebates, and which system makes sense for your home — explained by local HVAC experts.',
  keywords: 'heat pump vs furnace Abbotsford, heat pump Abbotsford BC, gas furnace vs heat pump Fraser Valley, heat pump rebates BC, dual fuel heat pump Abbotsford, best heating system Abbotsford, CleanBC heat pump rebate',
  authors: [{ name: 'AbbotsfordHVAC.ca' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.abbotsfordhvac.ca/blog/heat-pump-vs-furnace-abbotsford/'
  },
  openGraph: {
    title: 'Heat Pump vs Furnace: Which Is Right for Your Abbotsford Home?',
    description: 'Efficiency ratings, operating costs, BC rebates, and the climate case for each system — so you can make the right call for your Abbotsford home.',
    type: 'article',
    url: 'https://www.abbotsfordhvac.ca/blog/heat-pump-vs-furnace-abbotsford/',
    images: ['https://www.abbotsfordhvac.ca/images/heat-pump-vs-furnace-abbotsford-hero.png'],
    locale: 'en_CA'
  }
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.abbotsfordhvac.ca/blog/heat-pump-vs-furnace-abbotsford/#article',
      'headline': 'Heat Pump vs Furnace: Which Is Right for Your Abbotsford Home?',
      'description': 'Comparing heat pumps and gas furnaces for Abbotsford\'s climate — efficiency, cost, rebates, and the right call for your situation.',
      'image': 'https://www.abbotsfordhvac.ca/images/heat-pump-vs-furnace-abbotsford-hero.png',
      'datePublished': '2025-07-01',
      'dateModified': '2025-07-01',
      'author': { '@type': 'Organization', 'name': 'AbbotsfordHVAC.ca' },
      'publisher': {
        '@type': 'Organization',
        'name': 'AbbotsfordHVAC.ca',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.abbotsfordhvac.ca/images/logo.png' }
      },
      'mainEntityOfPage': 'https://www.abbotsfordhvac.ca/blog/heat-pump-vs-furnace-abbotsford/',
      'keywords': ['heat pump Abbotsford', 'gas furnace Abbotsford', 'heat pump rebates BC', 'dual fuel heat pump', 'CleanBC rebate'],
      'articleSection': 'Heating',
      'wordCount': '2200'
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
      'serviceType': ['Heat Pump Installation', 'Furnace Installation', 'Dual Fuel System Installation', 'HVAC Replacement']
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Is a heat pump efficient enough for Abbotsford winters?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Modern cold-climate heat pumps (rated to -25°C or lower) perform efficiently throughout Abbotsford\'s typical winter temperatures, which rarely dip below -10°C for sustained periods. During the coldest snaps, a dual fuel system that switches to a gas furnace backup provides reliable warmth with the efficiency of a heat pump for the majority of the heating season.' }
        },
        {
          '@type': 'Question',
          'name': 'How much is the BC heat pump rebate?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The BC CleanBC Better Homes program offers up to $6,000 in rebates for qualifying cold-climate heat pump installations. Additional federal Greener Homes Grant funding may also be available depending on your eligibility. Combined, BC homeowners can receive $6,000–$10,000+ in rebates for a heat pump installation — significantly reducing the upfront cost difference vs. a gas furnace.' }
        },
        {
          '@type': 'Question',
          'name': 'What is a dual fuel heat pump system?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'A dual fuel system pairs an electric heat pump with a gas furnace backup. The heat pump handles heating at its most efficient range (typically above -5°C to -10°C), then the gas furnace takes over during the coldest periods. This gives you the year-round cooling capability and high efficiency of a heat pump for most of the season, with the reliable cold-weather performance of gas for the days it\'s needed.' }
        },
        {
          '@type': 'Question',
          'name': 'Can a heat pump also cool my home in summer?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — a heat pump is essentially a reversible air conditioner. In summer it extracts heat from inside and moves it outdoors, exactly like a central air conditioner. If you\'re currently running a furnace with a separate AC unit, replacing both with a heat pump can consolidate your system and often reduce combined operating costs.' }
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
    --orange:     #EA580C;
    --orange-lt:  #FFF7ED;
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

  .hp-pg {
    font-family: var(--font-body);
    font-size: 18px;
    line-height: 1.78;
    color: var(--coal);
    background: var(--mist);
  }

  .hp-pg img { max-width: 100%; display: block; border-radius: var(--radius); }
  .hp-pg a { color: var(--sky); text-decoration: underline; text-underline-offset: 3px; }
  .hp-pg a:hover { color: var(--sky-dark); }

  .container       { max-width: var(--max-w);      margin-inline: auto; padding-inline: 24px; }
  .container--wide { max-width: var(--max-w-wide); margin-inline: auto; padding-inline: 24px; }

  .hp-hero {
    background: linear-gradient(150deg, var(--sky-deeper) 0%, var(--sky) 40%, var(--orange) 100%);
    color: var(--white);
    padding: 80px 24px 72px;
    position: relative; overflow: hidden;
  }
  .hp-hero::before {
    content: '';
    position: absolute; top: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,.10) 0%, transparent 65%);
    pointer-events: none;
  }
  .hp-hero::after {
    content: '';
    position: absolute; bottom: -2px; left: 0; right: 0; height: 48px;
    background: var(--mist);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .hp-hero__inner {
    position: relative; z-index: 1;
    max-width: var(--max-w); margin-inline: auto;
  }
  .hp-hero__label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--sky-lt); margin-bottom: 20px;
  }
  .hp-pg .hp-hero h1 {
    font-family: var(--font-display);
    font-size: clamp(28px, 4.8vw, 50px);
    font-weight: 900; line-height: 1.06;
    margin-bottom: 22px; letter-spacing: -.02em;
  }
  .hp-hero__sub {
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

  .hp-pg h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3.2vw, 32px); font-weight: 700;
    color: var(--sky-dark); margin-top: 56px; margin-bottom: 18px;
    line-height: 1.15; letter-spacing: -.01em;
  }
  .hp-pg h3 {
    font-family: var(--font-display);
    font-size: clamp(17px, 2.3vw, 20px); font-weight: 600;
    color: var(--slate); margin-top: 32px; margin-bottom: 10px; line-height: 1.3;
  }

  .lead {
    font-size: 20px; line-height: 1.72; color: var(--slate);
    border-left: 4px solid var(--sky); padding-left: 20px; margin-bottom: 2rem;
  }

  .pullquote {
    background: linear-gradient(135deg, var(--sky-dark), var(--sky));
    color: var(--white); padding: 36px 40px;
    border-radius: var(--radius-lg); margin: 40px 0;
    position: relative; overflow: hidden; box-shadow: var(--shadow-md);
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

  /* Efficiency bars */
  .eff-section { margin: 28px 0; }
  .eff-row {
    display: flex; align-items: center; gap: 16px; margin-bottom: 16px;
  }
  .eff-label {
    font-family: var(--font-ui); font-size: 14px; font-weight: 700;
    color: var(--slate); width: 140px; flex-shrink: 0;
  }
  .eff-bar-track {
    flex: 1; height: 28px; background: #e2eaf3; border-radius: 50px; overflow: hidden;
  }
  .eff-bar {
    height: 100%; border-radius: 50px;
    display: flex; align-items: center; justify-content: flex-end; padding-right: 14px;
    font-family: var(--font-ui); font-size: 12px; font-weight: 700; color: var(--white);
    transition: width .5s ease;
  }
  .eff-bar--hp    { background: linear-gradient(90deg, var(--sky), var(--sky-mid)); }
  .eff-bar--df    { background: linear-gradient(90deg, var(--teal), #34D399); }
  .eff-bar--furn  { background: linear-gradient(90deg, var(--orange), #FBB040); }

  /* Comparison table */
  .comp-table {
    width: 100%; border-collapse: collapse; margin: 28px 0;
    border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);
  }
  .comp-table thead th {
    font-family: var(--font-ui); font-size: 13px; font-weight: 700;
    letter-spacing: .05em; padding: 16px; text-align: left;
  }
  .comp-table thead th:first-child { background: var(--slate); color: var(--white); }
  .comp-table thead th:nth-child(2) { background: var(--sky-dark); color: var(--white); }
  .comp-table thead th:nth-child(3) { background: var(--orange); color: var(--white); }
  .comp-table td {
    font-family: var(--font-ui); font-size: 13.5px; color: var(--slate);
    padding: 12px 16px; border-bottom: 1px solid #e2eaf3; vertical-align: top;
  }
  .comp-table td:first-child { font-weight: 700; color: var(--cool-gray); }
  .comp-table tr:nth-child(even) td { background: var(--mist); }
  .comp-table tr:last-child td { border-bottom: none; }
  .win { color: var(--success); font-weight: 700; }
  .lose { color: var(--cool-gray); }

  /* Scenario cards */
  .scenario-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px; margin: 28px 0;
  }
  .scenario-card {
    background: var(--white); border: 1px solid #e2eaf3;
    border-radius: var(--radius-lg); padding: 24px 20px;
    box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s;
  }
  .scenario-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .scenario-card__header {
    display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
  }
  .scenario-card__icon { font-size: 28px; }
  .scenario-card__title {
    font-family: var(--font-ui); font-size: 15px; font-weight: 700; color: var(--sky-dark);
  }
  .scenario-card__rec {
    display: inline-block; padding: 3px 12px; border-radius: 20px;
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    margin-bottom: 10px;
  }
  .scenario-card__rec--hp   { background: var(--sky-lt); color: var(--sky-dark); }
  .scenario-card__rec--df   { background: var(--teal-lt); color: #065F46; }
  .scenario-card__rec--furn { background: var(--orange-lt); color: var(--orange); }
  .scenario-card__desc {
    font-family: var(--font-ui); font-size: 13.5px; color: var(--cool-gray); line-height: 1.6;
  }

  /* Rebate banner */
  .rebate-banner {
    background: linear-gradient(135deg, #14532D, var(--success));
    border-radius: var(--radius-lg); padding: 32px 36px;
    margin: 36px 0; display: flex; gap: 24px; align-items: center;
    box-shadow: var(--shadow-md);
  }
  .rebate-banner__icon { font-size: 48px; flex-shrink: 0; }
  .rebate-banner__content {}
  .rebate-banner__title {
    font-family: var(--font-display); font-size: 22px; font-weight: 800;
    color: var(--white); margin-bottom: 8px;
  }
  .rebate-banner__text {
    font-family: var(--font-ui); font-size: 15px; color: rgba(255,255,255,.85); line-height: 1.6;
    margin-bottom: 0;
  }
  .rebate-banner__amount {
    font-family: var(--font-display); font-size: 32px; font-weight: 900;
    color: #86EFAC;
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
    background: linear-gradient(135deg, var(--sky-deeper), var(--sky));
    border-radius: var(--radius-lg); padding: 48px 40px;
    text-align: center; margin: 48px 0; box-shadow: var(--shadow-md);
  }
  .cta-banner h2 {
    font-family: var(--font-display); font-size: clamp(22px, 3vw, 30px);
    font-weight: 800; color: var(--white);
    margin-bottom: 14px; margin-top: 0; letter-spacing: -.01em;
  }
  .cta-banner p {
    font-family: var(--font-ui); font-size: 16px;
    color: rgba(255,255,255,.82); margin-bottom: 28px !important;
  }
  .cta-btn {
    display: inline-block; background: var(--white); color: var(--sky-dark);
    font-family: var(--font-ui); font-size: 16px; font-weight: 700;
    padding: 14px 36px; border-radius: 50px; text-decoration: none !important;
    transition: transform .15s, box-shadow .15s;
    box-shadow: 0 4px 20px rgba(0,0,0,.2); margin: 6px;
  }
  .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.3); color: var(--sky-dark) !important; }
  .cta-btn--outline {
    background: transparent; color: var(--white) !important;
    border: 2px solid rgba(255,255,255,.5);
  }
  .cta-btn--outline:hover { background: rgba(255,255,255,.1); color: var(--white) !important; }

  @media (max-width: 640px) {
    .scenario-grid { grid-template-columns: 1fr; }
    .rebate-banner { flex-direction: column; }
    .eff-label { width: 100px; font-size: 12px; }
    .cta-banner { padding: 32px 20px; }
  }
`;

export default function HeatPumpVsFurnaceArticlePage() {
  return (
    <div className="hp-pg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <style dangerouslySetInnerHTML={{ __html: articleCSS }} />
      <Header />

      {/* Hero */}
      <section className="hp-hero">
        <div className="hp-hero__inner">
          <div className="hp-hero__label">🔥 Heating Decision Guide — Abbotsford BC</div>
          <h1>Heat Pump vs Furnace: Which Is Right for Your <em style={{ fontStyle: 'normal', color: '#BAE6FD' }}>Abbotsford Home?</em></h1>
          <p className="hp-hero__sub">
            Both systems heat your home. Only one also cools it, qualifies for up to $6,000 in BC rebates, and cuts your carbon footprint. Here&apos;s the honest comparison.
          </p>
          <div className="hero__meta">
            <span>By AbbotsfordHVAC.ca</span>
            <span>·</span>
            <span>July 2025</span>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <div className="hero__stats">
            <div className="stat-pill"><span>⚡</span> Heat pumps: 200–400% efficiency</div>
            <div className="stat-pill"><span>💰</span> Up to $6,000 BC CleanBC rebate</div>
            <div className="stat-pill"><span>❄️</span> Cold-climate models rated to -25°C</div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="hero-image-block">
        <img
          src="/images/heat-pump-vs-furnace-abbotsford-hero.png"
          alt="Split frame comparison of heat pump outdoor unit and gas furnace — heating options for Abbotsford BC homes"
          width={1080}
          height={540}
          style={{ width: '100%', borderRadius: '14px' }}
        />
      </div>

      {/* Article Body */}
      <article className="article-body">
        <div className="container">

          <p className="lead">
            The most common question Abbotsford homeowners ask when their old furnace is due for replacement: should I replace it with another furnace, or switch to a heat pump? The answer depends on your home, your budget, and how you weigh upfront cost vs. long-term operating savings — but for most Abbotsford homes in 2025, the numbers increasingly favour the heat pump.
          </p>

          <p>
            Fraser Valley winters are milder than much of Canada, which works in the heat pump&apos;s favour. Abbotsford rarely sees sustained temperatures below -10°C, and modern cold-climate heat pumps maintain high efficiency well below -20°C. Meanwhile, BC Hydro&apos;s electricity rates remain among the lowest in North America, and the CleanBC rebate program has dramatically reduced the upfront cost gap between systems.
          </p>

          <p>
            That said, there are real situations where a furnace — or a dual fuel hybrid — is the smarter call. Here&apos;s the full picture.
          </p>

          <h2>Efficiency: Where Heat Pumps Win by a Wide Margin</h2>

          <p>
            A gas furnace converts fuel to heat at roughly 80–98% efficiency (AFUE rating). That sounds impressive — until you compare it to how a heat pump works. Instead of generating heat, a heat pump moves heat from outdoors to indoors, which means it delivers 2–4 units of heat energy for every unit of electricity consumed. In efficiency terms, that&apos;s 200–400% — something no combustion system can match.
          </p>

          <div className="eff-section">
            <div className="eff-row">
              <div className="eff-label">Heat Pump (HSPF 10)</div>
              <div className="eff-bar-track">
                <div className="eff-bar eff-bar--hp" style={{ width: '92%' }}>300% COP</div>
              </div>
            </div>
            <div className="eff-row">
              <div className="eff-label">Dual Fuel System</div>
              <div className="eff-bar-track">
                <div className="eff-bar eff-bar--df" style={{ width: '78%' }}>240% avg</div>
              </div>
            </div>
            <div className="eff-row">
              <div className="eff-label">Gas Furnace 98%</div>
              <div className="eff-bar-track">
                <div className="eff-bar eff-bar--furn" style={{ width: '32%' }}>98% AFUE</div>
              </div>
            </div>
          </div>

          <p>
            In practical terms: for every $100 you spend heating with a high-efficiency heat pump in BC, you&apos;d spend roughly $180–$250 to achieve the same result with a 96% AFUE gas furnace — because while BC Hydro rates are low, gas prices have climbed significantly. The efficiency advantage compounds over a 15–20 year equipment lifespan.
          </p>

          <h2>Head-to-Head Comparison</h2>

          <table className="comp-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Heat Pump</th>
                <th>Gas Furnace</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heating Efficiency</td>
                <td className="win">200–400% COP ✓</td>
                <td className="lose">80–98% AFUE</td>
              </tr>
              <tr>
                <td>Cooling Included?</td>
                <td className="win">Yes — built-in AC ✓</td>
                <td className="lose">No (add AC separately)</td>
              </tr>
              <tr>
                <td>Cold Weather (-15°C)</td>
                <td>Good (cold-climate models)</td>
                <td className="win">Excellent ✓</td>
              </tr>
              <tr>
                <td>BC CleanBC Rebate</td>
                <td className="win">Up to $6,000 ✓</td>
                <td className="lose">Not eligible</td>
              </tr>
              <tr>
                <td>Annual Operating Cost*</td>
                <td className="win">Lower (BC Hydro rates) ✓</td>
                <td>Higher (gas price increases)</td>
              </tr>
              <tr>
                <td>Upfront Cost</td>
                <td>$5,000–$12,000 installed</td>
                <td className="win">$3,000–$6,000 installed ✓</td>
              </tr>
              <tr>
                <td>Carbon Footprint</td>
                <td className="win">Low (BC grid is 98% clean) ✓</td>
                <td className="lose">Higher (gas combustion)</td>
              </tr>
              <tr>
                <td>Lifespan</td>
                <td>15–20 years</td>
                <td>15–25 years</td>
              </tr>
              <tr>
                <td>Fuel Independence</td>
                <td className="win">No gas line required ✓</td>
                <td>Gas line required</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '12px', color: 'var(--cool-gray)', fontFamily: 'var(--font-ui)' }}>
            * Based on Abbotsford average heating loads and current BC Hydro / FortisBC rates. Individual results vary by home size, insulation, and system configuration.
          </p>

          <h2>The Dual Fuel Option: Best of Both Worlds</h2>

          <p>
            If you&apos;re hesitant to rely entirely on a heat pump during Abbotsford&apos;s coldest winter nights, a dual fuel system may be the right answer. A dual fuel setup pairs a heat pump with a gas furnace backup. The heat pump handles all heating above a configurable outdoor temperature threshold (typically -5°C to -10°C), then the furnace takes over automatically when it gets colder.
          </p>

          <figure className="inline-image">
            <img
              src="/images/dual-fuel-heat-pump-installation-abbotsford.png"
              alt="Dual fuel heat pump and gas furnace installation in Abbotsford home utility room"
              width={800}
              height={450}
            />
            <figcaption>A dual fuel installation uses the heat pump for the majority of the heating season and the gas furnace as a backup — combining the efficiency of electric heat with the reliability of gas during extreme cold.</figcaption>
          </figure>

          <p>
            Because Abbotsford temperatures drop below -10°C for only a handful of nights per year, the furnace backup rarely runs — meaning you capture most of the heat pump&apos;s efficiency advantage across the season. Many homeowners installing a dual fuel system see 60–75% of their heating loads handled by the heat pump even in a colder-than-average winter.
          </p>

          <div className="pullquote">
            <p>
              &ldquo;In Abbotsford&apos;s climate, a dual fuel system typically runs in heat pump mode 85–90% of the season. The furnace provides insurance — you pay for it when you need it, and you usually don&apos;t.&rdquo;
            </p>
            <cite>— AbbotsfordHVAC.ca Technical Team</cite>
          </div>

          <h2>Which System Is Right for Your Situation?</h2>

          <div className="scenario-grid">
            <div className="scenario-card">
              <div className="scenario-card__header">
                <div className="scenario-card__icon">🏡</div>
                <div className="scenario-card__title">Replacing aging furnace + no AC</div>
              </div>
              <div className="scenario-card__rec scenario-card__rec--hp">→ Heat Pump</div>
              <div className="scenario-card__desc">
                You&apos;re buying both heating and cooling with one system. The rebate makes the cost competitive, and you eliminate future AC replacement costs.
              </div>
            </div>
            <div className="scenario-card">
              <div className="scenario-card__header">
                <div className="scenario-card__icon">🌡️</div>
                <div className="scenario-card__title">Want heat pump efficiency but nervous about extreme cold</div>
              </div>
              <div className="scenario-card__rec scenario-card__rec--df">→ Dual Fuel System</div>
              <div className="scenario-card__desc">
                Best of both: heat pump efficiency for 85–90% of the season, gas furnace reliability for the coldest nights. Higher upfront cost, lower long-term risk.
              </div>
            </div>
            <div className="scenario-card">
              <div className="scenario-card__header">
                <div className="scenario-card__icon">💸</div>
                <div className="scenario-card__title">Budget-constrained emergency replacement</div>
              </div>
              <div className="scenario-card__rec scenario-card__rec--furn">→ Furnace (for now)</div>
              <div className="scenario-card__desc">
                If the furnace failed mid-winter and budget is tight, a high-efficiency gas furnace gets you through. Plan to add a heat pump for cooling within a few years.
              </div>
            </div>
            <div className="scenario-card">
              <div className="scenario-card__header">
                <div className="scenario-card__icon">🏗️</div>
                <div className="scenario-card__title">New construction or major renovation</div>
              </div>
              <div className="scenario-card__rec scenario-card__rec--hp">→ Heat Pump</div>
              <div className="scenario-card__desc">
                Designing the system from scratch means you can right-size a heat pump from the ground up — and BC building codes are increasingly favouring electric-ready systems.
              </div>
            </div>
            <div className="scenario-card">
              <div className="scenario-card__header">
                <div className="scenario-card__icon">🏚️</div>
                <div className="scenario-card__title">Older home, no gas line, oil or electric baseboards</div>
              </div>
              <div className="scenario-card__rec scenario-card__rec--hp">→ Heat Pump</div>
              <div className="scenario-card__desc">
                Replacing electric baseboards or oil heat with a heat pump almost always produces significant savings. No gas line installation required.
              </div>
            </div>
            <div className="scenario-card">
              <div className="scenario-card__header">
                <div className="scenario-card__icon">📊</div>
                <div className="scenario-card__title">Long-term investment focus</div>
              </div>
              <div className="scenario-card__rec scenario-card__rec--hp">→ Heat Pump</div>
              <div className="scenario-card__desc">
                Over a 15-year lifespan, operating cost savings typically exceed the upfront premium — especially after rebates. And resale value increasingly reflects energy efficiency.
              </div>
            </div>
          </div>

          <h2>BC Heat Pump Rebates: The Numbers in 2025</h2>

          <div className="rebate-banner">
            <div className="rebate-banner__icon">💰</div>
            <div className="rebate-banner__content">
              <div className="rebate-banner__title">BC CleanBC + Federal Greener Homes</div>
              <div className="rebate-banner__amount">Up to $10,000+</div>
              <p className="rebate-banner__text">
                CleanBC Better Homes offers up to $6,000 for qualifying cold-climate heat pumps. Stack federal Greener Homes incentives and you can significantly offset the upfront cost difference vs. a gas furnace. Your contractor handles the paperwork.
              </p>
            </div>
          </div>

          <p>
            The rebate program has specific requirements — the heat pump must meet minimum cold-climate HSPF ratings, and installation must be completed by a licensed HVAC contractor. Eligibility can also depend on your current heating fuel and home energy audit status. Contact us and we&apos;ll confirm your eligibility before you commit to anything.
          </p>

          <div className="tip-box">
            <div className="tip-box__label">💡 Abbotsford Tip</div>
            <p>
              BC Hydro&apos;s PowerSmart program also offers financing options for heat pump installations — allowing eligible homeowners to spread the cost over several years with interest rates below typical financing. Ask your contractor about stacking this with CleanBC rebates.
            </p>
          </div>

          <h2>FAQ: Heat Pumps in Abbotsford</h2>

          <h3>Does a heat pump work in BC winters?</h3>
          <p>
            Yes — Abbotsford&apos;s climate is among the most heat-pump-friendly in Canada. Modern cold-climate models (like the Mitsubishi Hyper-Heat or Daikin Fit) maintain full heating capacity down to -15°C and continue operating (at reduced capacity) to -25°C or lower. Abbotsford temperatures drop below -10°C for only a handful of days per year.
          </p>

          <h3>How long does a heat pump installation take?</h3>
          <p>
            A standard heat pump replacement takes one to two days. If ductwork modifications, electrical panel upgrades, or refrigerant line extensions are required, add another half to full day. A dual fuel retrofit on an existing forced-air system typically takes one day.
          </p>

          <h3>Can I keep my gas fireplace if I install a heat pump?</h3>
          <p>
            Absolutely. A heat pump replaces your primary heating system — gas fireplaces are supplemental and can stay in place. Many homeowners with dual fuel systems or heat pumps keep their gas fireplace for ambiance and as an emergency backup.
          </p>

          <div className="cta-banner">
            <h2>Not Sure Which System Is Right for Your Home?</h2>
            <p>Our licensed technicians will assess your home&apos;s heating load, current system, and budget — then give you a clear recommendation with pricing for both options.</p>
            <a href="/contact" className="cta-btn">Book a Free Quote</a>
            <a href="/services/heating" className="cta-btn cta-btn--outline">View Heating Services</a>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}
