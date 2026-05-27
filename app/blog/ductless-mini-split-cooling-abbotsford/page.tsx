import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { getSettings } from '../../../lib/getSettings';

export const metadata: Metadata = {
  title: 'Ductless Mini-Split Cooling Abbotsford: Cool Hot Rooms, Suites & Additions | AbbotsfordHVAC.ca',
  description: 'Is a room in your Abbotsford home always too hot? Learn when a ductless mini-split beats extending ductwork, what installation involves, costs, and how to get a free quote.',
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/blog/ductless-mini-split-cooling-abbotsford/' },
  openGraph: {
    title: 'Ductless Mini-Split Cooling in Abbotsford: Best Way to Cool Hot Rooms, Suites & Additions',
    description: "When a ductless mini-split beats extending ductwork, how installation works in Abbotsford homes, costs, and what to expect from a heat pump in BC's climate.",
    type: 'article',
    url: 'https://www.abbotsfordhvac.ca/blog/ductless-mini-split-cooling-abbotsford/',
    images: ['https://www.abbotsfordhvac.ca/images/ductless-mini-split-abbotsford-hero.png'],
    locale: 'en_CA'
  }
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.abbotsfordhvac.ca/blog/ductless-mini-split-cooling-abbotsford/#article',
      headline: 'Ductless Mini-Split Cooling in Abbotsford: Best Way to Cool Hot Rooms, Suites, and Additions',
      description: 'When a ductless mini-split outperforms extending ductwork, how installation works, Fraser Valley cooling performance, costs, and year-round heat pump benefits for Abbotsford homeowners.',
      image: 'https://www.abbotsfordhvac.ca/images/ductless-mini-split-abbotsford-hero.png',
      datePublished: '2025-06-01',
      dateModified: '2025-06-01',
      author: { '@type': 'Organization', name: 'AbbotsfordHVAC.ca' },
      publisher: {
        '@type': 'Organization',
        name: 'AbbotsfordHVAC.ca',
        logo: { '@type': 'ImageObject', url: 'https://www.abbotsfordhvac.ca/images/logo.png' }
      },
      mainEntityOfPage: 'https://www.abbotsfordhvac.ca/blog/ductless-mini-split-cooling-abbotsford/',
      keywords: ['ductless mini-split Abbotsford', 'heat pump installation BC', 'mini-split cooling Fraser Valley', 'ductless AC installation'],
      articleSection: 'Mini-Split Installation',
      wordCount: '1900'
    },
    {
      '@type': 'Service',
      '@id': 'https://www.abbotsfordhvac.ca#minisplit',
      name: 'Ductless Mini-Split Installation Abbotsford',
      provider: { '@type': 'LocalBusiness', name: 'AbbotsfordHVAC.ca' },
      areaServed: ['Abbotsford', 'Mission', 'Chilliwack', 'Langley', 'Fraser Valley'],
      serviceType: 'Ductless Mini-Split Heat Pump Installation'
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.abbotsfordhvac.ca#business',
      name: 'AbbotsfordHVAC.ca',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abbotsford',
        addressRegion: 'BC',
        addressCountry: 'CA'
      },
      areaServed: ['Abbotsford', 'Mission', 'Chilliwack', 'Langley', 'Fraser Valley'],
      serviceType: ['Mini-Split Installation', 'Heat Pump Installation', 'Ductless AC', 'AC Maintenance', 'HVAC Service']
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a ductless mini-split cost to install in Abbotsford?',
          acceptedAnswer: { '@type': 'Answer', text: 'A single-zone ductless mini-split system in Abbotsford typically ranges from $2,500 to $5,500 installed, depending on the brand, capacity, and installation complexity. Multi-zone systems covering 2–4 rooms run $5,000–$12,000+. BC and federal rebates through the CleanBC Better Homes program can offset $1,000–$6,000 of eligible heat pump installation costs.' }
        },
        {
          '@type': 'Question',
          name: 'How long does mini-split installation take?',
          acceptedAnswer: { '@type': 'Answer', text: 'A single-zone installation in an Abbotsford home is typically completed in one day. A multi-zone system with 2–4 indoor heads usually takes one to two days depending on the mounting locations, refrigerant line routing, and electrical work required.' }
        },
        {
          '@type': 'Question',
          name: 'Do ductless mini-splits work for heating in Abbotsford winters?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes — modern cold-climate heat pump mini-splits operate effectively down to -15°C to -25°C, well within Abbotsford's typical winter range. They provide both heating and cooling from a single system, making them a year-round solution. Many Abbotsford homeowners use a mini-split as their primary or supplemental heating source, particularly in suites and additions." }
        },
        {
          '@type': 'Question',
          name: 'Is a mini-split better than a window AC unit?',
          acceptedAnswer: { '@type': 'Answer', text: "For permanent installations, yes — a mini-split is significantly more efficient, quieter, provides both heating and cooling, offers precise temperature control, and doesn't require removing a window or blocking natural light. Window units are cheaper upfront but cost more to operate, are noisier, and only cool (not heat). Mini-splits also add to home value; window units don't." }
        },
        {
          '@type': 'Question',
          name: 'Are there BC rebates for mini-split heat pump installation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — the CleanBC Better Homes program offers rebates for qualifying heat pump installations in BC, including ductless mini-splits. Federal programs through the Canada Greener Homes Grant may also apply. Rebate amounts and eligibility requirements change periodically; your installer can confirm current incentives at the time of your quote.' }
        }
      ]
    }
  ]
};

const articleCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,600&display=swap');

  :root {
    --forest:      #166534;
    --forest-dark: #0F4823;
    --forest-deep: #052E16;
    --forest-lt:   #DCFCE7;
    --sage:        #4ADE80;
    --sage-mid:    #22C55E;
    --gold:        #CA8A04;
    --gold-lt:     #FEF9C3;
    --amber:       #F59E0B;
    --cool-white:  #F8FBF8;
    --mist:        #F0FDF4;
    --slate:       #334155;
    --cool-gray:   #64748B;
    --coal:        #0A1628;
    --white:       #FFFFFF;
    --border:      #D1FAE5;
    --font-display: 'Fraunces', Georgia, serif;
    --font-body:    'Crimson Pro', Georgia, serif;
    --font-ui:      'Plus Jakarta Sans', system-ui, sans-serif;
    --max-w:      800px;
    --max-w-wide: 1080px;
    --radius:     8px;
    --radius-lg:  14px;
    --radius-xl:  20px;
    --shadow-sm:  0 2px 12px rgba(22,101,52,.07);
    --shadow-md:  0 8px 32px rgba(22,101,52,.13);
    --shadow-lg:  0 20px 60px rgba(22,101,52,.18);
  }

  html { scroll-behavior: smooth; }

  .ms-article {
    font-family: var(--font-body);
    font-size: 18.5px;
    line-height: 1.78;
    color: var(--coal);
    background: var(--mist);
  }

  .ms-article img { max-width: 100%; display: block; border-radius: var(--radius); }
  .ms-article a { color: var(--forest); text-decoration: underline; text-underline-offset: 3px; }
  .ms-article a:hover { color: var(--forest-dark); }

  .ms-article .ms-container       { max-width: var(--max-w);      margin-inline: auto; padding-inline: 24px; }
  .ms-article .ms-container--wide { max-width: var(--max-w-wide); margin-inline: auto; padding-inline: 24px; }

  .ms-article h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 700; color: var(--forest-dark);
    margin-top: 60px; margin-bottom: 18px; line-height: 1.15;
    letter-spacing: -.01em;
  }
  .ms-article h3 {
    font-family: var(--font-ui);
    font-size: clamp(16px, 2.2vw, 19px);
    font-weight: 700; color: var(--slate);
    margin-top: 32px; margin-bottom: 10px; line-height: 1.3;
  }

  .ms-article .ms-lead {
    font-size: 20px; line-height: 1.72; color: var(--slate);
    border-left: 4px solid var(--forest);
    padding-left: 20px; margin-bottom: 2rem;
  }

  .ms-body { padding: 64px 24px 24px; }
  .ms-body p { margin-bottom: 1.5rem; color: var(--slate); }

  /* TOP BAR */
  .ms-topbar {
    background: var(--forest-deep);
    color: rgba(255,255,255,.6);
    font-family: var(--font-ui);
    font-size: 13px; font-weight: 500;
    padding: 10px 24px;
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
  }
  .ms-topbar a { color: var(--sage); text-decoration: none; font-weight: 600; }
  .ms-topbar a:hover { color: var(--white); }
  .ms-topbar__badge {
    background: var(--gold);
    color: var(--white);
    font-size: 11px; font-weight: 700;
    letter-spacing: .07em; text-transform: uppercase;
    padding: 3px 10px; border-radius: 20px;
  }

  /* HERO */
  .ms-hero {
    background: linear-gradient(135deg, var(--forest-deep) 0%, var(--forest-dark) 45%, #1A4731 100%);
    color: var(--white);
    padding: 84px 24px 80px;
    position: relative; overflow: hidden;
  }
  .ms-hero::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 480px; height: 480px;
    border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%;
    background: rgba(74,222,128,.08);
    pointer-events: none;
  }
  .ms-hero::after {
    content: '';
    position: absolute;
    bottom: -80px; left: -60px;
    width: 340px; height: 340px;
    border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%;
    background: rgba(202,138,4,.06);
    pointer-events: none;
  }
  .ms-hero__inner {
    position: relative; z-index: 1;
    max-width: var(--max-w); margin-inline: auto;
  }
  .ms-hero__eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--font-ui);
    font-size: 12px; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--sage); margin-bottom: 22px;
  }
  .ms-hero__eyebrow-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--sage); flex-shrink: 0;
  }
  .ms-hero h1 {
    font-family: var(--font-display);
    font-size: clamp(28px, 4.6vw, 50px);
    font-weight: 900; line-height: 1.07;
    margin-bottom: 24px; letter-spacing: -.02em;
  }
  .ms-hero h1 em { font-style: italic; color: var(--sage); font-weight: 600; }
  .ms-hero__sub {
    font-family: var(--font-ui);
    font-size: 17px; line-height: 1.68;
    color: rgba(255,255,255,.78);
    max-width: 560px; margin-bottom: 36px;
  }
  .ms-hero__meta {
    display: flex; flex-wrap: wrap; gap: 20px;
    font-family: var(--font-ui); font-size: 13px;
    color: rgba(255,255,255,.45); margin-bottom: 36px;
  }
  .ms-use-pills { display: flex; flex-wrap: wrap; gap: 10px; }
  .ms-use-pill {
    background: rgba(255,255,255,.1);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: var(--radius-xl);
    padding: 8px 16px;
    font-family: var(--font-ui); font-size: 13px; font-weight: 600;
    color: var(--white);
    display: flex; align-items: center; gap: 7px;
  }
  .ms-use-pill--highlight {
    background: var(--forest);
    border-color: var(--sage-mid);
    color: var(--sage);
  }

  /* HERO IMAGE */
  .ms-hero-image-block {
    max-width: var(--max-w-wide);
    margin-inline: auto; padding-inline: 24px; padding-top: 24px;
  }
  .ms-hero-image-block figcaption {
    font-family: var(--font-ui); font-size: 12.5px; color: #94a3b8;
    padding: 8px 4px; font-style: italic;
  }

  /* PULLQUOTE */
  .ms-pullquote {
    background: linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 100%);
    color: var(--white); padding: 36px 40px;
    border-radius: var(--radius-lg);
    margin: 40px 0; position: relative; overflow: hidden;
    box-shadow: var(--shadow-md);
  }
  .ms-pullquote::before {
    content: '\201C'; position: absolute;
    top: -10px; left: 24px;
    font-family: var(--font-display); font-size: 130px;
    color: rgba(255,255,255,.07); line-height: 1; pointer-events: none;
  }
  .ms-pullquote p {
    font-family: var(--font-display);
    font-size: clamp(17px, 2.3vw, 22px); font-weight: 600;
    font-style: italic; line-height: 1.5;
    color: var(--white); position: relative; margin-bottom: 0 !important;
  }
  .ms-pullquote cite {
    display: block; margin-top: 14px;
    font-family: var(--font-ui); font-size: 12px;
    letter-spacing: .08em; text-transform: uppercase;
    color: var(--sage); position: relative;
  }

  /* USE CASE GRID */
  .ms-use-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px; margin: 28px 0;
  }
  .ms-use-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 26px 22px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow .2s, transform .2s;
    position: relative; overflow: hidden;
  }
  .ms-use-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 3px; background: var(--forest);
  }
  .ms-use-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
  .ms-use-card__icon { font-size: 32px; margin-bottom: 12px; }
  .ms-use-card__title {
    font-family: var(--font-ui); font-size: 15px; font-weight: 700;
    color: var(--forest-dark); margin-bottom: 8px;
  }
  .ms-use-card p {
    font-family: var(--font-ui); font-size: 13.5px; line-height: 1.6;
    color: var(--cool-gray); margin-bottom: 0 !important;
  }
  .ms-use-card__tag {
    display: inline-block; margin-top: 10px;
    background: var(--forest-lt); color: var(--forest-dark);
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
    padding: 3px 9px; border-radius: 20px;
  }

  /* SYSTEM DIAGRAM */
  .ms-diagram {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 32px 28px;
    margin: 32px 0; box-shadow: var(--shadow-sm);
  }
  .ms-diagram__label {
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    letter-spacing: .09em; text-transform: uppercase;
    color: var(--forest); margin-bottom: 24px;
  }
  .ms-diagram-flow {
    display: flex; align-items: stretch; gap: 0; flex-wrap: wrap;
  }
  .ms-diagram-block {
    flex: 1; min-width: 160px;
    background: var(--mist); border: 1.5px solid var(--border);
    border-radius: var(--radius); padding: 20px 16px; text-align: center;
  }
  .ms-diagram-block--outdoor { background: var(--forest-lt); border-color: var(--forest); }
  .ms-diagram-block--indoor  { background: #EFF6FF; border-color: #93C5FD; }
  .ms-diagram-block__icon { font-size: 30px; margin-bottom: 8px; }
  .ms-diagram-block__name {
    font-family: var(--font-ui); font-size: 13px; font-weight: 700;
    margin-bottom: 4px; color: var(--coal);
  }
  .ms-diagram-block--outdoor .ms-diagram-block__name { color: var(--forest-dark); }
  .ms-diagram-block--indoor  .ms-diagram-block__name { color: #1D4ED8; }
  .ms-diagram-block__desc {
    font-family: var(--font-ui); font-size: 12px; line-height: 1.45; color: var(--cool-gray);
  }
  .ms-diagram-arrow {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; padding: 0 8px; flex-shrink: 0; gap: 4px;
  }
  .ms-diagram-arrow__line { width: 2px; height: 30px; background: var(--border); }
  .ms-diagram-arrow__icon { font-size: 18px; color: var(--forest); }
  .ms-diagram-arrow__label {
    font-family: var(--font-ui); font-size: 10.5px; font-weight: 600;
    color: var(--cool-gray); text-align: center; max-width: 80px; line-height: 1.3;
  }

  /* COST CARDS */
  .ms-cost-cards {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 16px; margin: 28px 0;
  }
  .ms-cost-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 24px 20px;
    text-align: center; box-shadow: var(--shadow-sm);
  }
  .ms-cost-card--highlight {
    background: var(--forest-dark); border-color: var(--forest);
    box-shadow: var(--shadow-lg);
  }
  .ms-cost-card__icon { font-size: 28px; margin-bottom: 10px; }
  .ms-cost-card__type {
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase; margin-bottom: 8px;
  }
  .ms-cost-card .ms-cost-card__type { color: var(--cool-gray); }
  .ms-cost-card--highlight .ms-cost-card__type { color: var(--sage); }
  .ms-cost-card__price {
    font-family: var(--font-display); font-size: 28px; font-weight: 900;
    line-height: 1.1; margin-bottom: 6px;
  }
  .ms-cost-card .ms-cost-card__price { color: var(--forest-dark); }
  .ms-cost-card--highlight .ms-cost-card__price { color: var(--white); }
  .ms-cost-card__desc { font-family: var(--font-ui); font-size: 12.5px; line-height: 1.5; }
  .ms-cost-card .ms-cost-card__desc { color: var(--cool-gray); }
  .ms-cost-card--highlight .ms-cost-card__desc { color: rgba(255,255,255,.75); }
  .ms-cost-card__note {
    margin-top: 8px; font-family: var(--font-ui);
    font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em;
  }
  .ms-cost-card--highlight .ms-cost-card__note { color: var(--sage); }

  /* REBATE BANNER */
  .ms-rebate {
    background: var(--gold-lt); border: 1.5px solid var(--amber);
    border-radius: var(--radius-lg); padding: 22px 26px;
    display: flex; gap: 16px; align-items: flex-start; margin: 24px 0;
  }
  .ms-rebate__icon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
  .ms-rebate__title {
    font-family: var(--font-ui); font-size: 15px; font-weight: 700;
    color: #78350F; margin-bottom: 5px;
  }
  .ms-rebate__text {
    font-family: var(--font-ui); font-size: 13.5px; line-height: 1.55; color: #92400E;
  }

  /* INSTALL STEPS */
  .ms-steps { display: flex; flex-direction: column; gap: 0; margin: 28px 0; }
  .ms-step {
    display: flex; gap: 18px; align-items: flex-start;
    padding: 18px 0; border-bottom: 1px solid var(--border);
  }
  .ms-step:last-child { border-bottom: none; }
  .ms-step__marker { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
  .ms-step__dot {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--forest-lt); border: 2px solid var(--forest);
    display: flex; align-items: center; justify-content: center; font-size: 16px;
  }
  .ms-step__connector {
    width: 2px; flex: 1; background: var(--border); min-height: 16px; margin-top: 4px;
  }
  .ms-step:last-child .ms-step__connector { display: none; }
  .ms-step__body { flex: 1; padding-top: 7px; }
  .ms-step__title {
    font-family: var(--font-ui); font-size: 15px; font-weight: 700;
    color: var(--forest-dark); margin-bottom: 4px;
  }
  .ms-step__desc {
    font-family: var(--font-ui); font-size: 13.5px; line-height: 1.6; color: var(--cool-gray);
  }
  .ms-step__badge {
    display: inline-block; margin-top: 6px;
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
    background: var(--forest-lt); color: var(--forest-dark);
    padding: 3px 9px; border-radius: 20px;
  }

  /* BENEFITS */
  .ms-benefits {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 28px 0;
  }
  .ms-benefit {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 22px 20px;
    display: flex; gap: 14px; align-items: flex-start; box-shadow: var(--shadow-sm);
  }
  .ms-benefit__icon {
    width: 40px; height: 40px; border-radius: var(--radius);
    background: var(--forest-lt);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .ms-benefit__title {
    font-family: var(--font-ui); font-size: 14px; font-weight: 700;
    color: var(--forest-dark); margin-bottom: 4px;
  }
  .ms-benefit__desc {
    font-family: var(--font-ui); font-size: 13px; line-height: 1.55; color: var(--cool-gray);
  }

  /* DECISION TABLE */
  .ms-decision {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius-lg); overflow: hidden; margin: 28px 0; box-shadow: var(--shadow-sm);
  }
  .ms-decision__header {
    background: var(--forest-dark); color: var(--white);
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase; padding: 14px 20px;
  }
  .ms-decision-subheader {
    display: flex; border-bottom: 1px solid var(--border); background: var(--cool-white);
  }
  .ms-decision-row {
    display: flex; gap: 0; border-bottom: 1px solid var(--border);
  }
  .ms-decision-row:last-child { border-bottom: none; }
  .ms-dcell {
    flex: 1; padding: 14px 16px;
    font-family: var(--font-ui); font-size: 13.5px; line-height: 1.5; color: var(--slate);
  }
  .ms-dcell--label {
    flex: 1.2; font-weight: 600; color: var(--coal);
    background: #fafffe; border-right: 1px solid var(--border);
  }
  .ms-dcell--ms { background: #F0FDF4; color: var(--forest-dark); font-weight: 600; }
  .ms-dcell--central { color: var(--cool-gray); }
  .ms-dcell--hdr {
    flex: 1; padding: 10px 16px;
    font-family: var(--font-ui); font-size: 11px; font-weight: 700;
    letter-spacing: .07em; text-transform: uppercase; color: var(--cool-gray);
  }
  .ms-dcell--hdr.ms-dcell--label { flex: 1.2; background: var(--cool-white); color: var(--cool-gray); border-right: 1px solid var(--border); }
  .ms-dcell--hdr.ms-dcell--ms { color: var(--forest); background: var(--forest-lt); }

  /* FAQ */
  .ms-faq { margin: 40px 0; }
  .ms-faq-item { border-bottom: 1px solid var(--border); padding: 20px 0; }
  .ms-faq-item:first-child { border-top: 1px solid var(--border); }
  .ms-faq-q {
    font-family: var(--font-ui); font-size: 16px; font-weight: 700;
    color: var(--forest-dark); margin-bottom: 8px;
  }
  .ms-faq-a {
    font-family: var(--font-ui); font-size: 15.5px; line-height: 1.68; color: var(--cool-gray);
  }

  /* IMAGE BLOCK */
  .ms-img-block { margin: 36px 0; }
  .ms-img-block figcaption {
    font-family: var(--font-ui); font-size: 12.5px; color: #94A3B8;
    margin-top: 8px; padding-left: 4px; font-style: italic;
  }

  /* INLINE CTA */
  .ms-inline-cta {
    background: var(--forest-lt); border: 1.5px solid var(--forest);
    border-radius: var(--radius-lg); padding: 24px 28px;
    display: flex; flex-wrap: wrap; gap: 16px;
    align-items: center; justify-content: space-between; margin: 40px 0;
  }
  .ms-inline-cta__text {
    font-family: var(--font-ui); font-size: 15px; color: var(--forest-dark); line-height: 1.5;
  }
  .ms-inline-cta__text strong { font-weight: 700; }
  .ms-btn-sm {
    display: inline-block; background: var(--forest);
    color: var(--white); font-family: var(--font-ui);
    font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    text-decoration: none; padding: 11px 22px; border-radius: var(--radius);
    white-space: nowrap; transition: background .2s;
  }
  .ms-btn-sm:hover { background: var(--forest-dark); color: var(--white); }

  /* MAIN CTA BOX */
  .ms-cta {
    background: linear-gradient(135deg, var(--forest-deep) 0%, var(--forest-dark) 50%, var(--forest) 100%);
    color: var(--white); border-radius: var(--radius-lg);
    padding: 56px 40px; text-align: center;
    margin: 56px 0 0; position: relative; overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  .ms-cta::before {
    content: '';
    position: absolute; top: -100px; right: -100px;
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(74,222,128,.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .ms-cta::after {
    content: '';
    position: absolute; bottom: -80px; left: -80px;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(202,138,4,.1) 0%, transparent 70%);
    pointer-events: none;
  }
  .ms-cta__eyebrow {
    font-family: var(--font-ui); font-size: 12px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    color: var(--sage); margin-bottom: 12px; position: relative; z-index: 1;
  }
  .ms-cta h2 {
    font-family: var(--font-display);
    font-size: clamp(22px, 3.2vw, 34px); font-weight: 900;
    color: var(--white); margin-top: 0; margin-bottom: 14px;
    position: relative; z-index: 1; letter-spacing: -.01em;
  }
  .ms-cta p {
    color: rgba(255,255,255,.82); font-family: var(--font-ui);
    font-size: 17px; max-width: 480px;
    margin-inline: auto; margin-bottom: 32px; position: relative; z-index: 1;
  }
  .ms-cta-btns { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; position: relative; z-index: 1; }
  .ms-btn-lg {
    display: inline-block;
    font-family: var(--font-ui); font-size: 14px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
    text-decoration: none; padding: 16px 36px; border-radius: var(--radius);
    transition: background .2s, transform .15s;
  }
  .ms-btn-lg--primary { background: var(--sage-mid); color: var(--white); }
  .ms-btn-lg--primary:hover { background: var(--forest-lt); color: var(--forest-dark); transform: translateY(-2px); }
  .ms-btn-lg--ghost { background: transparent; border: 2px solid rgba(255,255,255,.4); color: var(--white); }
  .ms-btn-lg--ghost:hover { border-color: var(--white); background: rgba(255,255,255,.1); color: var(--white); }

  /* RESPONSIVE */
  @media (max-width: 700px) {
    .ms-topbar { flex-direction: column; gap: 6px; text-align: center; }
    .ms-use-grid { grid-template-columns: 1fr; }
    .ms-cost-cards { grid-template-columns: 1fr; }
    .ms-benefits { grid-template-columns: 1fr; }
    .ms-diagram-flow { flex-direction: column; }
    .ms-diagram-arrow { flex-direction: row; padding: 8px 0; }
    .ms-diagram-arrow__line { width: 40px; height: 2px; }
    .ms-inline-cta { flex-direction: column; }
    .ms-pullquote { padding: 28px 22px; }
    .ms-cta { padding: 40px 22px; }
    .ms-cta-btns { flex-direction: column; align-items: center; }
  }
`;

export default function DuctlessMiniSplitPage() {
  const settings = getSettings();

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <style dangerouslySetInnerHTML={{ __html: articleCSS }} />
      <Header />
      <div className="ms-article">

        {/* TOP BAR */}
        <div className="ms-topbar">
          <span>📍 Abbotsford · Mission · Chilliwack · Fraser Valley</span>
          <span>
            <span className="ms-topbar__badge">Free In-Home Quotes</span>
            &nbsp;&nbsp;☎ <a href={`tel:${settings.phoneRaw}`}>{settings.phoneNumber}</a>
          </span>
        </div>

        {/* HERO */}
        <header className="ms-hero">
          <div className="ms-hero__inner">
            <div className="ms-hero__eyebrow">
              <span className="ms-hero__eyebrow-dot"></span>
              Ductless Mini-Split Installation — Abbotsford, BC
            </div>
            <h1>Ductless Mini-Split Cooling in Abbotsford:<br /><em>The Best Way to Cool Hot Rooms,<br />Suites &amp; Additions</em></h1>
            <p className="ms-hero__sub">
              One hot room. A basement suite with no ductwork. An addition that your central AC never quite reaches. There&apos;s a cleaner solution than ripping open walls — and it heats too.
            </p>
            <div className="ms-hero__meta">
              <span>🗓 Updated Summer 2025</span>
              <span>⏱ 9 min read</span>
              <span>🏠 AbbotsfordHVAC.ca</span>
            </div>
            <div className="ms-use-pills">
              <div className="ms-use-pill ms-use-pill--highlight">🏠 Hot Rooms</div>
              <div className="ms-use-pill ms-use-pill--highlight">🏡 Garden Suites</div>
              <div className="ms-use-pill ms-use-pill--highlight">🔨 Additions</div>
              <div className="ms-use-pill">🏚 No Ductwork</div>
              <div className="ms-use-pill">🛏 Bedrooms &amp; Offices</div>
              <div className="ms-use-pill">🏢 Older Homes</div>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="ms-hero-image-block">
          <figure>
            <img
              src="/images/ductless-mini-split-abbotsford-hero.png"
              alt="Sleek ductless mini-split wall unit installed above a sofa in a bright Abbotsford home with Fraser Valley views"
              style={{ width: '100%', height: 'auto', borderRadius: '14px' }}
            />
            <figcaption>
              Modern ductless mini-splits are slim, quiet, and fit naturally into any room — without the renovation a central AC extension requires.
            </figcaption>
          </figure>
        </div>

        {/* ARTICLE BODY */}
        <main>
          <article className="ms-body">
            <div className="ms-container">

              {/* INTRO */}
              <p className="ms-lead">
                You&apos;ve got a bedroom that turns into a sauna every July. Or a basement suite you&apos;re renting out — with no way to connect it to your home&apos;s central HVAC. Or an addition built three years ago that your existing system was never sized to handle. These are exactly the scenarios ductless mini-split systems were designed for, and they&apos;re one of the most popular HVAC upgrades Abbotsford homeowners are making right now.
              </p>

              <p>
                A ductless mini-split gives you precise, independent temperature control in a specific space — without tearing open ceilings, running new ductwork, or sizing up your entire system. Installation typically takes one day. And because it&apos;s a heat pump, not just an air conditioner, it handles Abbotsford winters too.
              </p>

              {/* SECTION 1 */}
              <h2>When a Ductless Mini-Split Beats Extending Your Existing Ductwork</h2>

              <p>
                Central AC is an excellent whole-home solution when the ductwork already exists and the system is properly sized. But for many Abbotsford homeowners, extending or adding ductwork to solve a specific problem is disproportionately expensive, invasive, and often technically impractical. Here&apos;s when a mini-split is simply the better call:
              </p>

              <div className="ms-use-grid">
                <div className="ms-use-card">
                  <div className="ms-use-card__icon">🔨</div>
                  <div className="ms-use-card__title">Home Additions &amp; Sunrooms</div>
                  <p>A new addition rarely connects cleanly to existing ductwork — running new ducts requires opening walls, rebalancing the system, and potentially upsizing the air handler. A mini-split handles the addition independently with a single refrigerant line through the exterior wall.</p>
                  <span className="ms-use-card__tag">Most Common Use</span>
                </div>

                <div className="ms-use-card">
                  <div className="ms-use-card__icon">🏡</div>
                  <div className="ms-use-card__title">Basement &amp; Garden Suites</div>
                  <p>Secondary suites need independent climate control for rental viability and tenant satisfaction. Running a separate duct system to a suite is a major renovation. A mini-split gives the suite its own system — with its own thermostat — without touching the main home&apos;s HVAC.</p>
                  <span className="ms-use-card__tag">High ROI</span>
                </div>

                <div className="ms-use-card">
                  <div className="ms-use-card__icon">🏚</div>
                  <div className="ms-use-card__title">Older Homes Without Ductwork</div>
                  <p>Abbotsford has a large inventory of pre-1980 homes heated by baseboard electric or hot water — with zero existing ductwork. Installing central ducted AC in these homes is a $15,000–$30,000 project. A multi-zone mini-split system covers the whole home for a fraction of that cost.</p>
                  <span className="ms-use-card__tag">No Ductwork Needed</span>
                </div>

                <div className="ms-use-card">
                  <div className="ms-use-card__icon">🛏</div>
                  <div className="ms-use-card__title">Hot Bedrooms &amp; Home Offices</div>
                  <p>Upper-floor and south-facing rooms in Abbotsford homes routinely overheat in summer even when the rest of the house is comfortable. A single-zone mini-split in the problem room solves it precisely — without overcooling the rest of the house or running the central system harder.</p>
                  <span className="ms-use-card__tag">Targeted Solution</span>
                </div>

                <div className="ms-use-card">
                  <div className="ms-use-card__icon">🏢</div>
                  <div className="ms-use-card__title">Upper Floors &amp; Far Wings</div>
                  <p>Heat rises, and duct runs lose efficiency over distance. The farthest rooms from your air handler often get inadequate airflow no matter how the system is balanced. A mini-split in a problem zone solves the comfort issue without re-engineering the whole duct system.</p>
                  <span className="ms-use-card__tag">Zoned Comfort</span>
                </div>

                <div className="ms-use-card">
                  <div className="ms-use-card__icon">🏗</div>
                  <div className="ms-use-card__title">Garages &amp; Detached Workshops</div>
                  <p>Detached structures are essentially impossible to connect to a home&apos;s central system cost-effectively. A single-zone mini-split with its own outdoor unit provides full heating and cooling for a garage, studio, or workshop with a clean, permanent installation.</p>
                  <span className="ms-use-card__tag">Fully Independent</span>
                </div>
              </div>

              {/* SECTION 2 */}
              <h2>How Ductless Mini-Splits Work — The Abbotsford Homeowner&apos;s Version</h2>

              <p>
                The mechanics are simpler than the name suggests. A mini-split system has two main components: an outdoor unit that handles the refrigerant compression cycle, and one or more sleek indoor wall units that deliver conditioned air directly into the room. The two are connected by a small refrigerant line and electrical cable that runs through a 3-inch hole in the exterior wall — no ductwork required.
              </p>

              <div className="ms-diagram">
                <div className="ms-diagram__label">⚙️ How a Mini-Split System Works</div>
                <div className="ms-diagram-flow">
                  <div className="ms-diagram-block ms-diagram-block--outdoor">
                    <div className="ms-diagram-block__icon">🏠</div>
                    <div className="ms-diagram-block__name">Outdoor Unit</div>
                    <div className="ms-diagram-block__desc">Compressor + condenser. Mounted outside the home. Extracts heat from indoor air (cooling) or from outdoor air (heating). One unit can power multiple indoor heads in a multi-zone system.</div>
                  </div>
                  <div className="ms-diagram-arrow">
                    <div className="ms-diagram-arrow__line"></div>
                    <div className="ms-diagram-arrow__icon">⇄</div>
                    <div className="ms-diagram-arrow__line"></div>
                    <div className="ms-diagram-arrow__label">Refrigerant line through 3&quot; wall hole</div>
                  </div>
                  <div className="ms-diagram-block ms-diagram-block--indoor">
                    <div className="ms-diagram-block__icon">🌡️</div>
                    <div className="ms-diagram-block__name">Indoor Wall Unit(s)</div>
                    <div className="ms-diagram-block__desc">Slim, wall-mounted air handler. Delivers cool or warm air directly into the room. Each unit has its own thermostat for independent zone control. Typically mounted high on the wall for optimal air distribution.</div>
                  </div>
                </div>
              </div>

              <p>
                In <strong>cooling mode</strong>, the system moves heat from inside your room to the outdoor unit and releases it outside — the same principle as a refrigerator, applied to your living space. In <strong>heating mode</strong>, it reverses: extracting heat energy from the outdoor air (even cold air contains usable heat energy) and moving it inside. This heat-transfer mechanism is why heat pumps are two to three times more energy-efficient than electric resistance heating.
              </p>

              <p>
                Modern cold-climate mini-splits — the type we install in Abbotsford — are rated to operate effectively at outdoor temperatures as low as -15°C to -25°C. Abbotsford&apos;s winter lows rarely approach that threshold, meaning a mini-split can serve as your primary heating source in a suite or addition, not just a cooling supplement.
              </p>

              {/* INLINE IMAGE 1 - outdoor condenser */}
              <figure className="ms-img-block">
                <img
                  src="/images/ductless-mini-split-outdoor-unit-abbotsford.png"
                  alt="Ductless mini-split outdoor condenser unit wall-mounted on a BC home with refrigerant line set visible"
                  style={{ width: '100%', height: 'auto' }}
                />
                <figcaption>The outdoor condenser is compact and bracket-mounted — typically installed in a few hours with minimal disruption to landscaping or the exterior wall.</figcaption>
              </figure>

              {/* SECTION 3 */}
              <h2>Cooling Performance in Fraser Valley Summers</h2>

              <p>
                Abbotsford sits in a geographic bowl that collects heat during summer. The mountains to the north and south limit air circulation, and urban heat effects in developed areas of the city mean summer temperatures regularly exceed those of Vancouver proper. During heat dome events — which BC has now experienced multiple times — temperatures in the Fraser Valley have reached 40°C+.
              </p>

              <div className="ms-pullquote">
                <p>&ldquo;Mini-splits don&apos;t just match window units on cooling capacity — they outperform them on efficiency, noise, and the ability to heat the same space in winter. For Abbotsford suites and additions, it&apos;s the obvious choice.&rdquo;</p>
                <cite>— AbbotsfordHVAC.ca Installation Team</cite>
              </div>

              <p>
                Air-source heat pumps and mini-splits are rated using SEER (Seasonal Energy Efficiency Ratio) for cooling. Modern systems typically achieve SEER ratings of 18–25+, compared to 13–16 for standard central AC and far lower for most window units. In practical terms: a high-efficiency mini-split uses significantly less electricity to deliver the same cooling capacity — directly reducing your BC Hydro bills during peak summer billing periods.
              </p>

              <p>
                For a single problem room or suite, this efficiency advantage compounds. A mini-split cooling only the rooms being used avoids the waste of conditioning your entire home when occupancy is concentrated — a central system&apos;s inherent inefficiency that doesn&apos;t exist with zoned mini-split cooling.
              </p>

              {/* SECTION 4 */}
              <h2>Cost and Installation: What to Expect in Abbotsford</h2>

              <p>
                Mini-split pricing varies based on system capacity (measured in BTUs), the number of indoor units (zones), brand tier, and installation complexity. Here&apos;s a realistic cost picture for Abbotsford homeowners:
              </p>

              <div className="ms-cost-cards">
                <div className="ms-cost-card">
                  <div className="ms-cost-card__icon">🪟</div>
                  <div className="ms-cost-card__type">Window AC Unit</div>
                  <div className="ms-cost-card__price">$300–$800</div>
                  <div className="ms-cost-card__desc">Cooling only. Loud. Blocks window. No home value impact. Annual reinstall. Inefficient at high temps.</div>
                </div>
                <div className="ms-cost-card ms-cost-card--highlight">
                  <div className="ms-cost-card__icon">❄️</div>
                  <div className="ms-cost-card__type">Single-Zone Mini-Split</div>
                  <div className="ms-cost-card__price">$2,500–$5,500</div>
                  <div className="ms-cost-card__desc">Installed. Heats and cools. Quiet. Permanent. Adds home value. Eligible for CleanBC rebates.</div>
                  <div className="ms-cost-card__note">⭐ Most Popular for Single Rooms</div>
                </div>
                <div className="ms-cost-card">
                  <div className="ms-cost-card__icon">🏠</div>
                  <div className="ms-cost-card__type">Multi-Zone (2–4 heads)</div>
                  <div className="ms-cost-card__price">$5,000–$12,000+</div>
                  <div className="ms-cost-card__desc">Covers multiple rooms or a whole floor. Independent control per zone. Best for older homes without ductwork.</div>
                </div>
              </div>

              <div className="ms-rebate">
                <div className="ms-rebate__icon">💰</div>
                <div>
                  <div className="ms-rebate__title">BC &amp; Federal Rebates Can Significantly Offset Your Cost</div>
                  <div className="ms-rebate__text">The CleanBC Better Homes program offers rebates on qualifying heat pump installations in BC, and federal programs through the Canada Greener Homes initiative may also apply. Rebates for eligible mini-split installations have ranged from $1,000 to $6,000+ depending on system type and efficiency rating. We confirm current applicable rebates at the time of your quote and handle paperwork where possible.</div>
                </div>
              </div>

              <h3>What Installation Involves</h3>

              <div className="ms-steps">
                <div className="ms-step">
                  <div className="ms-step__marker">
                    <div className="ms-step__dot">📐</div>
                    <div className="ms-step__connector"></div>
                  </div>
                  <div className="ms-step__body">
                    <div className="ms-step__title">Pre-Install Assessment &amp; Site Visit</div>
                    <div className="ms-step__desc">We confirm the right system size for your space, assess the best mounting location for the indoor head, identify the optimal outdoor unit placement, and verify the electrical panel has capacity for the new circuit.</div>
                    <div className="ms-step__badge">Free — no obligation</div>
                  </div>
                </div>
                <div className="ms-step">
                  <div className="ms-step__marker">
                    <div className="ms-step__dot">⚡</div>
                    <div className="ms-step__connector"></div>
                  </div>
                  <div className="ms-step__body">
                    <div className="ms-step__title">Electrical Preparation</div>
                    <div className="ms-step__desc">A dedicated 240V circuit is run from your electrical panel to the outdoor unit location. If your panel has capacity, this is straightforward. Older homes with limited panel space may need a sub-panel or panel upgrade — we identify this during the assessment.</div>
                    <div className="ms-step__badge">Day 1 or Pre-Work</div>
                  </div>
                </div>
                <div className="ms-step">
                  <div className="ms-step__marker">
                    <div className="ms-step__dot">🏠</div>
                    <div className="ms-step__connector"></div>
                  </div>
                  <div className="ms-step__body">
                    <div className="ms-step__title">Indoor Unit Mounting</div>
                    <div className="ms-step__desc">The wall bracket is secured into studs at the correct height. The indoor unit mounts to the bracket. A 3-inch core hole is made through the exterior wall for the refrigerant line set and electrical connection. Line set is routed neatly down the exterior wall inside a UV-resistant conduit.</div>
                    <div className="ms-step__badge">2–3 Hours</div>
                  </div>
                </div>
                <div className="ms-step">
                  <div className="ms-step__marker">
                    <div className="ms-step__dot">🌡️</div>
                    <div className="ms-step__connector"></div>
                  </div>
                  <div className="ms-step__body">
                    <div className="ms-step__title">Outdoor Unit Installation &amp; Refrigerant Connection</div>
                    <div className="ms-step__desc">The outdoor condenser is mounted on a wall bracket or concrete pad, levelled, and connected to the line set. The refrigerant connections are made and the system is pressure-tested and leak-checked before being charged to manufacturer specification.</div>
                    <div className="ms-step__badge">2–4 Hours</div>
                  </div>
                </div>
                <div className="ms-step">
                  <div className="ms-step__marker">
                    <div className="ms-step__dot">✅</div>
                  </div>
                  <div className="ms-step__body">
                    <div className="ms-step__title">System Commissioning &amp; Homeowner Walkthrough</div>
                    <div className="ms-step__desc">We power up the system, run it through all modes, verify temperatures and pressures, and walk you through the remote control or app setup. You leave knowing exactly how to operate your new system — and we register the warranty for you.</div>
                    <div className="ms-step__badge">30–45 Minutes</div>
                  </div>
                </div>
              </div>

              <p>
                A single-zone installation in an Abbotsford home is typically completed in one day. Multi-zone systems with 2–4 indoor heads generally take one to two days. Homes requiring electrical panel work may need a separate electrician visit before the HVAC installation day.
              </p>

              {/* MID-ARTICLE CTA */}
              <div className="ms-inline-cta">
                <div className="ms-inline-cta__text">
                  <strong>Ready to solve your hot room problem for good?</strong> We provide free, no-pressure in-home quotes for ductless mini-split installation anywhere in Abbotsford and the Fraser Valley.
                </div>
                <Link href="/contact" className="ms-btn-sm">Get a Free Quote →</Link>
              </div>

              {/* SECTION 5 */}
              <h2>Benefits Beyond Cooling: Why Mini-Splits Make Sense Year-Round</h2>

              <p>
                A window unit cools one room for one season and then comes down in October. A mini-split is a permanent, dual-purpose system that changes how the whole space lives — in every month of the year.
              </p>

              <div className="ms-benefits">
                <div className="ms-benefit">
                  <div className="ms-benefit__icon">🔄</div>
                  <div>
                    <div className="ms-benefit__title">Heating &amp; Cooling in One System</div>
                    <div className="ms-benefit__desc">A heat pump mini-split delivers both — no separate heating solution needed. For a suite or addition, it&apos;s a complete year-round climate system in a single install.</div>
                  </div>
                </div>
                <div className="ms-benefit">
                  <div className="ms-benefit__icon">🔇</div>
                  <div>
                    <div className="ms-benefit__title">Remarkably Quiet Operation</div>
                    <div className="ms-benefit__desc">Modern mini-splits run as low as 19–26 dB at low fan speed — quieter than a whisper. Compared to a window unit rattling in the frame, the difference in a bedroom is night and day.</div>
                  </div>
                </div>
                <div className="ms-benefit">
                  <div className="ms-benefit__icon">🎛️</div>
                  <div>
                    <div className="ms-benefit__title">Independent Zone Control</div>
                    <div className="ms-benefit__desc">Each indoor head has its own remote or app-based thermostat. The suite tenant controls their space independently. Your bedroom is 20°C while the living room runs at 22°C. No compromise, no argument.</div>
                  </div>
                </div>
                <div className="ms-benefit">
                  <div className="ms-benefit__icon">💧</div>
                  <div>
                    <div className="ms-benefit__title">Dehumidification Mode</div>
                    <div className="ms-benefit__desc">Fraser Valley summers are humid. Mini-splits include a dedicated dry mode that removes excess humidity without dramatically lowering temperature — critical for basement suites prone to feeling damp.</div>
                  </div>
                </div>
                <div className="ms-benefit">
                  <div className="ms-benefit__icon">🏡</div>
                  <div>
                    <div className="ms-benefit__title">Adds Real Property Value</div>
                    <div className="ms-benefit__desc">A mini-split is a permanent fixture that increases assessed value and makes a suite or addition significantly more marketable — especially as BC buyers increasingly expect climate control in every livable space.</div>
                  </div>
                </div>
                <div className="ms-benefit">
                  <div className="ms-benefit__icon">📱</div>
                  <div>
                    <div className="ms-benefit__title">Smart Home &amp; App Integration</div>
                    <div className="ms-benefit__desc">Most modern mini-splits offer Wi-Fi connectivity for scheduling, remote control from anywhere, and integration with smart home systems — set your suite to pre-cool before a tenant arrives, or your bedroom to reach temperature before you go to bed.</div>
                  </div>
                </div>
              </div>

              {/* SECTION 6 */}
              <h2>Mini-Split vs. Central AC Upgrade: Which Makes Sense?</h2>

              <p>
                This is the right question, and the honest answer is: it depends on the scope of the problem you&apos;re solving. Here&apos;s a clear decision framework:
              </p>

              <div className="ms-decision">
                <div className="ms-decision__header">🆚 Ductless Mini-Split vs. Central AC — Side-by-Side</div>
                <div className="ms-decision-subheader">
                  <div className="ms-dcell ms-dcell--hdr ms-dcell--label">Situation</div>
                  <div className="ms-dcell ms-dcell--hdr ms-dcell--ms">✓ Mini-Split Wins</div>
                  <div className="ms-dcell ms-dcell--hdr ms-dcell--central">Central AC / Duct Extension</div>
                </div>
                <div className="ms-decision-row">
                  <div className="ms-dcell ms-dcell--label">No ductwork exists in the space</div>
                  <div className="ms-dcell ms-dcell--ms">Ideal — no ductwork needed</div>
                  <div className="ms-dcell ms-dcell--central">Major renovation required</div>
                </div>
                <div className="ms-decision-row">
                  <div className="ms-dcell ms-dcell--label">One or two rooms are the problem</div>
                  <div className="ms-dcell ms-dcell--ms">Targeted solution, lower cost</div>
                  <div className="ms-dcell ms-dcell--central">Oversized fix for a specific problem</div>
                </div>
                <div className="ms-decision-row">
                  <div className="ms-dcell ms-dcell--label">Secondary suite needs independence</div>
                  <div className="ms-dcell ms-dcell--ms">Separate system, separate control</div>
                  <div className="ms-dcell ms-dcell--central">Difficult or impossible to separate</div>
                </div>
                <div className="ms-decision-row">
                  <div className="ms-dcell ms-dcell--label">New addition to the home</div>
                  <div className="ms-dcell ms-dcell--ms">Clean, self-contained install</div>
                  <div className="ms-dcell ms-dcell--central">System rebalance + duct extension</div>
                </div>
                <div className="ms-decision-row">
                  <div className="ms-dcell ms-dcell--label">Need heating AND cooling</div>
                  <div className="ms-dcell ms-dcell--ms">Year-round heat pump</div>
                  <div className="ms-dcell ms-dcell--central">Separate heating system still needed</div>
                </div>
                <div className="ms-decision-row">
                  <div className="ms-dcell ms-dcell--label">Cooling the whole home from scratch</div>
                  <div className="ms-dcell ms-dcell--ms">Multi-zone system viable</div>
                  <div className="ms-dcell ms-dcell--central">Central system may be preferable if ductwork exists</div>
                </div>
              </div>

              <p>
                If you&apos;re replacing a failing central AC system in a home with existing, well-maintained ductwork, a central AC replacement is typically the right call. But for everything in the list above — and for the majority of the &ldquo;hot room / problem space&rdquo; calls we receive in Abbotsford — a ductless mini-split is the correct, more cost-effective, less invasive solution.
              </p>

              {/* INLINE IMAGE 2 - multi-zone */}
              <figure className="ms-img-block">
                <img
                  src="/images/ductless-mini-split-multizone-abbotsford.png"
                  alt="Multi-zone mini-split showing independent wall units in two bedrooms and a thermostat display set to 22°C"
                  style={{ width: '100%', height: 'auto' }}
                />
                <figcaption>A multi-zone system lets each room — or each suite — maintain its own temperature independently from a single outdoor unit.</figcaption>
              </figure>

              {/* INTERNAL LINK CTA */}
              <div className="ms-inline-cta">
                <div className="ms-inline-cta__text">
                  <strong>Already have central AC that&apos;s not keeping up?</strong> Check our guide on why your AC isn&apos;t cooling and what to inspect before calling a tech.
                </div>
                <Link href="/blog/ac-not-cooling-abbotsford-repair" className="ms-btn-sm">AC Not Cooling? →</Link>
              </div>

              {/* FAQ */}
              <h2>Frequently Asked Questions</h2>

              <div className="ms-faq">
                <div className="ms-faq-item">
                  <div className="ms-faq-q">How much does a ductless mini-split cost to install in Abbotsford?</div>
                  <div className="ms-faq-a">A single-zone system typically ranges from $2,500 to $5,500 fully installed, depending on brand, capacity, and installation complexity. Multi-zone systems covering 2–4 rooms run $5,000–$12,000+. BC CleanBC Better Homes rebates and federal programs can offset $1,000–$6,000 of eligible heat pump installation costs — we confirm current applicable amounts at the time of your quote.</div>
                </div>
                <div className="ms-faq-item">
                  <div className="ms-faq-q">How long does installation take?</div>
                  <div className="ms-faq-a">A single-zone installation is typically completed in one day. Multi-zone systems with 2–4 indoor heads usually take one to two days. If electrical panel upgrades are needed, those may require a separate visit before installation day. We provide a clear timeline during the pre-install site visit.</div>
                </div>
                <div className="ms-faq-item">
                  <div className="ms-faq-q">Do mini-splits work for heating in Abbotsford winters?</div>
                  <div className="ms-faq-a">Yes — modern cold-climate heat pump mini-splits operate effectively to -15°C to -25°C, well within Abbotsford&apos;s typical winter range. They provide both heating and cooling from a single system. Many Abbotsford homeowners use a mini-split as the primary heating source in suites and additions, eliminating the need for separate electric baseboard heaters.</div>
                </div>
                <div className="ms-faq-item">
                  <div className="ms-faq-q">Is a mini-split worth it vs. a window AC unit?</div>
                  <div className="ms-faq-a">For a permanent installation, yes in almost every case. A mini-split is significantly quieter, more energy-efficient, provides both heating and cooling, doesn&apos;t block a window, offers precise temperature control, and adds to your home&apos;s value. Window units are cheaper upfront but cost more to operate, only cool, are noisier, and don&apos;t contribute to your home&apos;s value or rental appeal. For a suite or problem room you&apos;ll use for years, the mini-split math is straightforward.</div>
                </div>
                <div className="ms-faq-item">
                  <div className="ms-faq-q">Are there BC rebates available for mini-split installation?</div>
                  <div className="ms-faq-a">Yes — the CleanBC Better Homes program offers rebates on qualifying heat pump installations in BC, and federal programs through the Canada Greener Homes initiative may also apply. Rebate amounts and eligibility requirements change periodically. We confirm exactly what&apos;s available for your specific system at the time of your quote and assist with paperwork where applicable.</div>
                </div>
              </div>

              {/* MAIN CTA */}
              <div className="ms-cta">
                <div className="ms-cta__eyebrow">AbbotsfordHVAC.ca — Ductless Mini-Split Specialists</div>
                <h2>Ready to Cool That Hot Room<br />Once and For All?</h2>
                <p>Book a free, no-obligation in-home assessment. We&apos;ll confirm the right system for your space, walk you through current BC rebates, and give you a clear installed price — same day.</p>
                <div className="ms-cta-btns">
                  <Link href="/contact" className="ms-btn-lg ms-btn-lg--primary">Book Free In-Home Quote →</Link>
                  <Link href="/blog/ac-maintenance-abbotsford-summer-tune-up" className="ms-btn-lg ms-btn-lg--ghost">AC Maintenance Plans</Link>
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
