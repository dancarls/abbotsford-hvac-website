import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import LeadForm from '../../../components/feature/LeadForm';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: 'Heat Pump Abbotsford BC — Install, Rebates & Cost Guide',
  description:
    'Heat pump installation in Abbotsford — cold-climate systems, BC + federal rebates stacking to $1,000–$11,000+, real cost ranges, and honest sizing advice for Fraser Valley homes.',
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/heat-pump-abbotsford' },
  openGraph: {
    title: 'Heat Pump Abbotsford BC — Install, Rebates & Cost Guide',
    description:
      'Cold-climate heat pump install for Abbotsford homes — real BC rebate stacking, cost ranges $8,000–$18,000 installed, and sizing advice for the Fraser Valley climate.',
    images: ['https://www.abbotsfordhvac.ca/images/ductless-mini-split-abbotsford-hero.png'],
  },
};

const faqs = [
  {
    q: 'How much does a heat pump cost installed in Abbotsford?',
    a: 'Ducted central heat pump (replaces or adds to existing furnace): $8,000–$18,000 installed depending on size (2–5 ton), efficiency rating, and ductwork condition. 1-zone ductless mini-split: $4,000–$6,500. 3–4 zone ductless system: $9,000–$18,000. BC + federal rebates typically knock $1,000–$11,000+ off the total.',
  },
  {
    q: 'Do heat pumps actually work in Abbotsford\'s climate?',
    a: 'Yes — modern cold-climate heat pumps (Mitsubishi H2i, Daikin Aurora, LG Extreme, etc.) rated for -25°C or colder work well below Abbotsford\'s coldest winter temperatures. Fraser Valley rarely drops below -10°C, so any modern cold-climate heat pump handles it comfortably. Older heat pumps (pre-2015) struggled below -5°C — not a concern with current equipment.',
  },
  {
    q: 'What rebates are available for heat pumps in BC right now (2026)?',
    a: 'CleanBC Better Homes: up to $6,000 for qualifying central heat pump installs, more for income-qualified households. FortisBC gas-to-electric bonus: additional $1,000–$3,000 for replacing a gas furnace. Canada Greener Homes Grant (federal): up to $5,000. Interest-free Canada Greener Homes Loan: up to $40,000. Rebates stack — but eligibility rules matter. See the full BC heat pump rebate guide on the blog.',
  },
  {
    q: 'Should I replace my old furnace with a heat pump or a new furnace?',
    a: 'Depends on: (1) whether you also want cooling — heat pump gives you both, (2) your gas cost trajectory (BC is raising carbon tax annually), (3) whether rebates apply to your situation, (4) home efficiency — a leaky home cancels out heat pump gains. For most Fraser Valley homes with reasonable insulation, a cold-climate heat pump wins on 10-year cost. For older leaky homes, insulate first.',
  },
  {
    q: 'Heat pump vs ductless mini-split — which for my Abbotsford home?',
    a: 'Have existing ductwork in good condition → ducted central heat pump. No ducts (electric baseboard heat, radiant, or hot water) → ductless mini-split. Adding cooling to a suite, basement, or bonus room only → single-zone mini-split. Multi-storey with different needs per floor → multi-zone mini-split system.',
  },
  {
    q: 'How long does a heat pump last in Abbotsford\'s climate?',
    a: 'Cold-climate heat pumps typically last 15–20 years with annual maintenance. Compressor is the wear part — a good installation, correct sizing, and annual service extend life significantly. Coastal humidity (Fraser Valley is moderate, not coastal-severe) doesn\'t materially reduce lifespan.',
  },
  {
    q: 'Will a heat pump lower my heating bill?',
    a: 'Usually yes, but depends on your current fuel. Switching from oil or propane to heat pump: dramatic savings, often 40–60% off heating cost. Switching from natural gas: modest savings (10–25%) but you also get cooling and rebate money upfront. Switching from electric baseboards: significant savings, often 50%+. Run the numbers with a local installer.',
  },
  {
    q: 'Do you install heat pumps in Mission and outlying Fraser Valley?',
    a: 'Yes — full Fraser Valley coverage for heat pump installs: Abbotsford, Mission, Chilliwack, Hatzic, Dewdney, Glen Valley, Silverhill. Rebate applications handled as part of install. Call to confirm for outlying addresses.',
  },
];

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Heat Pump Installation in Abbotsford, BC',
    description:
      'Cold-climate heat pump installation for Abbotsford homes — ducted central and ductless mini-split, with BC + federal rebate applications handled.',
    provider: { '@type': 'HVACBusiness', '@id': 'https://www.abbotsfordhvac.ca/#business' },
    areaServed: [
      { '@type': 'City', name: 'Abbotsford' },
      { '@type': 'City', name: 'Mission' },
      { '@type': 'AdministrativeArea', name: 'Fraser Valley Regional District' },
    ],
    serviceType: [
      'Heat Pump Installation',
      'Cold-Climate Heat Pump',
      'Ductless Mini-Split Installation',
      'Ducted Central Heat Pump',
      'Heat Pump Service',
      'BC Rebate Application',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CAD',
      lowPrice: '4000',
      highPrice: '18000',
      offerCount: '4',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.abbotsfordhvac.ca' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.abbotsfordhvac.ca/services/heating' },
      { '@type': 'ListItem', position: 3, name: 'Heat Pump Abbotsford', item: 'https://www.abbotsfordhvac.ca/services/heat-pump-abbotsford' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export default function HeatPumpAbbotsford() {
  const settings = getSettings();

  const benefits = [
    { icon: 'ri-temp-hot-line', title: 'Heating + Cooling in One', body: 'One system handles both winter heat and summer cooling. Simpler than furnace + AC, less to maintain, one contractor.' },
    { icon: 'ri-plant-line', title: 'Lower Carbon Footprint', body: 'Modern heat pumps produce 60–70% less CO2 than gas furnaces on BC\'s (mostly hydro) grid. Matters for future resale.' },
    { icon: 'ri-money-euro-circle-line', title: '$1,000–$11,000+ in Rebates', body: 'BC CleanBC + FortisBC gas-to-electric bonus + Canada Greener Homes stack together. Handled at install time.' },
    { icon: 'ri-flashlight-line', title: '3–4× More Efficient Than Electric Baseboards', body: 'For every 1 kWh of electricity in, a heat pump moves 3–4 kWh of heat. Baseboards are 1:1. Massive winter bill drop.' },
    { icon: 'ri-shield-check-line', title: 'Rated for -25°C Cold', body: 'Modern cold-climate models work well below Fraser Valley\'s coldest winter. No backup heat needed for typical Abbotsford weather.' },
    { icon: 'ri-time-line', title: '15–20 Year Lifespan', body: 'Comparable to furnace + AC combined. Annual maintenance keeps efficiency and lifespan on track.' },
  ];

  const rebates = [
    { name: 'CleanBC Better Homes — Heat Pump', amount: 'Up to $6,000', details: 'For qualifying ducted central or ductless heat pump installs. More for income-qualified.', link: 'https://betterhomesbc.ca/rebates/' },
    { name: 'FortisBC Gas-to-Electric Bonus', amount: '$1,000 – $3,000 extra', details: 'Bonus for replacing a gas furnace with a heat pump (removes gas heat).', link: 'https://www.fortisbc.com/rebates' },
    { name: 'Canada Greener Homes Grant (Federal)', amount: 'Up to $5,000', details: 'Federal grant for qualifying heat pump installs; stacks with BC rebates.', link: 'https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-initiative' },
    { name: 'Canada Greener Homes Loan (Federal)', amount: 'Up to $40,000 interest-free', details: '10-year interest-free loan to cover the balance after rebates. Optional.', link: 'https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-initiative' },
  ];

  const costs = [
    { label: '1-zone ductless mini-split (installed)', range: '$4,000 – $6,500', note: 'Great for suites, bonus rooms, or homes without ducts' },
    { label: '2–3 zone ductless system', range: '$7,000 – $12,000', note: 'Multiple indoor heads sharing one outdoor unit' },
    { label: '4+ zone ductless system', range: '$12,000 – $18,000', note: 'Whole-house ductless for larger homes without ductwork' },
    { label: 'Ducted central heat pump (2–3 ton)', range: '$8,000 – $12,000', note: 'Replaces or supplements furnace + AC in typical Abbotsford homes' },
    { label: 'Ducted central heat pump (4–5 ton)', range: '$12,000 – $18,000', note: 'Larger homes; higher efficiency = higher upfront but bigger rebates' },
    { label: 'Backup electric heat strip', range: '+$500 – $1,200', note: 'Optional; adds resilience for extreme cold snaps' },
    { label: 'Annual heat pump service', range: '$200 – $350', note: 'Filter, coil clean, refrigerant check, drain flush' },
    { label: 'Panel upgrade (if needed)', range: '+$2,000 – $4,500', note: 'Older homes with 60–100A panels may need upgrade for heat pump load' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-emerald-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('/images/ductless-mini-split-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-emerald-900/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="text-white lg:col-span-3">
              <p className="text-emerald-200 font-semibold uppercase tracking-wider text-sm mb-3">Abbotsford & Fraser Valley</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Heat Pump Install in <span className="text-emerald-300">Abbotsford, BC</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed">
                One system for heating and cooling. Cold-climate heat pumps handle Abbotsford winters, and BC + federal rebates typically stack to <span className="text-emerald-300 font-bold">$1,000–$11,000+</span>. Real cost ranges, no-pressure sizing advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${settings.phoneRaw}`} className="bg-white text-emerald-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-50 transition-all shadow-xl inline-flex items-center justify-center gap-2">
                  <i className="ri-phone-fill text-2xl"></i>
                  Call {settings.phoneNumber}
                </a>
                <Link href="#rebates" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                  <i className="ri-gift-line"></i>
                  See BC rebate stacking
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <LeadForm source="heat-pump-abbotsford-hero" compact heading="Get a heat pump quote" subheading="Includes rebate math and honest sizing advice." />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-emerald-50 border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">Cold-climate heat pump specialists in Abbotsford</span> — honest sizing (no oversized systems), BC rebate applications handled as part of install, and real 10-year cost math before you commit.
          </p>
        </div>
      </section>

      {/* Why heat pump */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Abbotsford Homeowners Are Choosing Heat Pumps</h2>
            <p className="text-lg text-gray-600">Six reasons the math has changed in the last 5 years — and one where it hasn&apos;t.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${b.icon} text-2xl text-emerald-600`} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">Honest caveat:</span> heat pumps aren&apos;t right for every home. If your insulation is poor or your electrical panel is undersized, insulate first or budget for a panel upgrade. A good installer will walk you through this before quoting.
            </p>
          </div>
        </div>
      </section>

      {/* Rebates */}
      <section id="rebates" className="py-16 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">BC + Federal Heat Pump Rebates (2026)</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These programs stack. A typical Abbotsford heat pump install can qualify for $6,000–$11,000+ in combined rebates plus optional interest-free financing.
            </p>
          </div>
          <div className="space-y-4">
            {rebates.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <i className="ri-money-dollar-circle-fill text-2xl text-emerald-600"></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="font-bold text-gray-900 text-lg">{r.name}</h3>
                      <span className="text-emerald-700 font-bold">{r.amount}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{r.details}</p>
                    <a href={r.link} target="_blank" rel="noopener noreferrer" className="inline-block text-emerald-600 hover:text-emerald-700 text-sm font-semibold mt-2">
                      Official program details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog/bc-heat-pump-rebates-abbotsford" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-md">
              Full BC heat pump rebate guide <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Cost transparency */}
      <section id="heat-pump-costs" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Real Heat Pump Install Costs in Abbotsford</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Before rebates. Subtract $6,000–$11,000 for typical rebate stacking on qualifying installs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {costs.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">{c.label}</div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">{c.range}</div>
                <div className="text-xs text-gray-500">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic text-center mt-6">
            Ranges reflect typical Fraser Valley quotes in 2026. Get 2–3 comparisons — heat pump pricing varies more than furnace pricing.
          </p>
        </div>
      </section>

      {/* Decision framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Is a Heat Pump Right for Your Abbotsford Home?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Heat pumps aren&apos;t universal — they&apos;re great for most Fraser Valley homes but not every one. Here&apos;s the honest checklist a good installer runs.
              </p>
              <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-md">
                <i className="ri-phone-fill"></i>
                Talk it through: {settings.phoneNumber}
              </a>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Existing ductwork', body: 'Good ductwork → ducted central heat pump. No ducts or bad ducts → ductless mini-split. Both work in Abbotsford.' },
                { title: 'Electrical panel', body: 'Older homes with 60–100A panels often need an upgrade (+$2,000–$4,500). Factor this in.' },
                { title: 'Home efficiency', body: 'Leaky, poorly insulated homes cancel out heat pump gains. Insulate + air-seal first if the basics are missing.' },
                { title: 'Current fuel', body: 'Oil/propane/electric baseboard: dramatic savings. Natural gas: modest savings + cooling. Run the math for your exact bill.' },
                { title: 'Cooling need', body: 'If you also want AC, heat pump wins the versatility comparison — it\'s one system doing both jobs.' },
                { title: 'Rebate eligibility', body: 'Existing gas furnace being replaced → maximum rebate stack. Already electric → smaller rebate but bigger operational savings.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-emerald-100">
                  <i className="ri-check-line text-emerald-600 text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Heat Pump Install Service Areas</h2>
            <p className="text-lg text-gray-600">Abbotsford neighbourhoods and nearby Fraser Valley communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {geoData.areas.map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-all group border border-transparent hover:border-emerald-200">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Heat Pump FAQ (Abbotsford)</h2>
            <p className="text-lg text-gray-600">Real questions Fraser Valley homeowners ask about heat pump installs.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{f.q}</h3>
                  <i className="ri-add-line text-2xl text-emerald-600 group-open:rotate-45 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for a Heat Pump Quote?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get a real Abbotsford installer to size the system, run the rebate math, and give you honest 10-year cost — before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${settings.phoneRaw}`} className="bg-white text-emerald-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-50 transition-all shadow-xl inline-flex items-center justify-center gap-3">
              <i className="ri-phone-fill text-2xl"></i>
              Call {settings.phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
