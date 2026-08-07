import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import LeadForm from '../../../components/feature/LeadForm';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: 'AC Repair Abbotsford BC — Same-Day Air Conditioning Repair',
  description:
    'Local AC repair in Abbotsford. Common problems, real cost ranges ($95–$150 service call, $200–$1,600 typical repair), and same-day dispatch across the Fraser Valley.',
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/ac-repair-abbotsford' },
  openGraph: {
    title: 'AC Repair Abbotsford BC — Same-Day Air Conditioning Repair',
    description:
      'Local AC repair in Abbotsford — real cost ranges, common problems, and 24/7 emergency dispatch across the Fraser Valley.',
    images: ['https://www.abbotsfordhvac.ca/images/ac-not-cooling-abbotsford-hero.png'],
  },
};

const faqs = [
  {
    q: 'How much does AC repair cost in Abbotsford?',
    a: "Standard diagnostic service call in the Fraser Valley: $95–$150. Most common single-visit AC repairs (capacitor, contactor, thermostat, cleaning coils, small refrigerant top-up) total $200–$800. Bigger repairs (compressor, evaporator coil, condenser fan motor) run $900–$2,500. Full AC replacement runs $4,500–$9,000 installed depending on size and efficiency.",
  },
  {
    q: 'Why is my AC not cooling in Abbotsford?',
    a: "Most common causes we see: (1) dirty air filter blocking airflow, (2) low refrigerant from a leak — never just 'top it up' without finding the leak, (3) frozen evaporator coil from restricted airflow, (4) failed capacitor stopping the compressor, (5) tripped breaker or blown thermostat fuse, (6) undersized system for the actual heat load — a real problem in Fraser Valley homes originally built without AC in mind.",
  },
  {
    q: 'How fast can you get to an AC breakdown during a heat wave?',
    a: 'Priority dispatch — during BC heat waves (like the 2021 heat dome and every summer since) AC calls get triaged. Same-day for most Abbotsford addresses, next-day worst case. If someone in the home is elderly, chronically ill, or has infants, tell dispatch — those calls jump the queue.',
  },
  {
    q: 'Is it worth repairing an AC that\'s over 12 years old?',
    a: 'Case by case. General rule: if the repair quote is over 50% of a new install AND the unit is 12+ years old, replacement usually wins on 5-year cost. Older R-22 refrigerant systems (pre-2010) are especially bad — R-22 is phased out and expensive to replenish. Modern R-410A / R-32 systems are much cheaper to service.',
  },
  {
    q: 'What size AC do I need for my Abbotsford home?',
    a: 'Sizing depends on square footage, insulation, window area, and orientation — not just square footage. A rough rule for Fraser Valley homes: 1 ton (12,000 BTU) per 500–600 sq ft, but bump up for west-facing homes, poor insulation, or lots of glass. Oversized ACs short-cycle and dehumidify poorly. A proper Manual J load calculation is worth the small extra cost.',
  },
  {
    q: 'What about ductless mini-splits vs central AC?',
    a: 'Mini-splits are great for: homes without existing ductwork, adding cooling to a suite or bonus room, or replacing baseboard heat with a heat pump / cooling combo. Central AC wins when you already have good ductwork and want whole-house cooling from one system. Cost: 1-zone mini-split $4,000–$6,500 installed; 3–4 zone mini-split $9,000–$18,000; central AC add-on to existing furnace $4,500–$9,000.',
  },
  {
    q: 'Do you handle emergency AC repair after hours in Abbotsford?',
    a: 'Yes — 24/7 dispatch for AC failures during heat waves and any situation involving heat-vulnerable occupants. After-hours callout adds $150–$300 to the standard repair cost, disclosed before any work.',
  },
  {
    q: 'Do you service Mission, Chilliwack, Langley for AC repair?',
    a: 'Yes — full Fraser Valley coverage: Abbotsford, Mission, Chilliwack, parts of Langley (Glen Valley), Hatzic, Dewdney. Call to confirm for outlying addresses.',
  },
];

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AC Repair in Abbotsford, BC',
    description:
      'Same-day air conditioning repair in Abbotsford — diagnostic, refrigerant, capacitor, compressor, and full AC service across the Fraser Valley.',
    provider: { '@type': 'HVACBusiness', '@id': 'https://www.abbotsfordhvac.ca/#business' },
    areaServed: [
      { '@type': 'City', name: 'Abbotsford' },
      { '@type': 'City', name: 'Mission' },
      { '@type': 'AdministrativeArea', name: 'Fraser Valley Regional District' },
    ],
    serviceType: [
      'AC Repair',
      'Air Conditioning Repair',
      'Central AC Service',
      'Refrigerant Leak Repair',
      'Emergency AC Service',
      'AC Replacement',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CAD',
      lowPrice: '95',
      highPrice: '2500',
      offerCount: '6',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.abbotsfordhvac.ca' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.abbotsfordhvac.ca/services/cooling' },
      { '@type': 'ListItem', position: 3, name: 'AC Repair Abbotsford', item: 'https://www.abbotsfordhvac.ca/services/ac-repair-abbotsford' },
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

export default function ACRepairAbbotsford() {
  const settings = getSettings();

  const commonProblems = [
    { icon: 'ri-snowflake-line', title: "AC blowing warm air", body: "Usually low refrigerant (a leak, never 'just top it up'), a failed compressor, or a stuck reversing valve on a heat pump. Needs diagnostic — don't run it long, damages the compressor." },
    { icon: 'ri-flashlight-line', title: 'AC won\'t turn on at all', body: 'Tripped breaker, blown low-voltage fuse in the air handler, failed capacitor, or bad thermostat. Cheap fixes usually — capacitor swap is $150–$300 installed.' },
    { icon: 'ri-drop-line', title: 'Water leaking from indoor unit', body: 'Blocked condensate drain (most common) or frozen evaporator coil thawing. Turn AC off, thaw fully, check drain line before running again.' },
    { icon: 'ri-loader-line', title: 'AC runs but house won\'t cool', body: 'Undersized system, dirty coil, low refrigerant, or a home that leaks conditioned air. Sometimes the AC is fine — the house is the problem.' },
    { icon: 'ri-volume-up-line', title: 'Loud grinding or screeching', body: 'Compressor bearings, fan motor failure, or debris in the condenser. Shut it down and call — running it damages more expensive parts.' },
    { icon: 'ri-flashlight-line', title: 'AC keeps tripping the breaker', body: 'Compressor drawing too much current — often a failing capacitor or a compressor near end-of-life. Don\'t keep resetting; get it diagnosed.' },
    { icon: 'ri-timer-flash-line', title: 'Short cycling (on/off every few minutes)', body: 'Thermostat placement, refrigerant charge issue, or oversized system. Uses more power and wears the system faster.' },
    { icon: 'ri-error-warning-line', title: 'Frozen coils / ice on the line set', body: 'Restricted airflow (filter, blower, ductwork) or low refrigerant. Thaw fully before running; run for short cycles first after thaw.' },
  ];

  const costs = [
    { label: 'Diagnostic service call', range: '$95 – $150', note: 'Applied against total if you approve the repair' },
    { label: 'Capacitor replacement', range: '$150 – $300', note: 'Most common AC repair; 30-minute fix' },
    { label: 'Contactor replacement', range: '$200 – $400', note: 'Common wear part after 8–12 years' },
    { label: 'Refrigerant leak search + repair + recharge', range: '$400 – $1,400', note: 'Highly variable — depends on leak location and refrigerant type' },
    { label: 'Compressor replacement', range: '$1,600 – $2,800', note: 'If under warranty, parts covered; labor still applies. Often replacement math wins on old units.' },
    { label: 'Full AC replacement (central, installed)', range: '$4,500 – $9,000', note: 'Size, efficiency (SEER rating), and ductwork condition drive cost' },
    { label: '1-zone ductless mini-split installed', range: '$4,000 – $6,500', note: 'Good for suites, bonus rooms, or homes without ducts' },
    { label: 'Emergency after-hours callout', range: '+$150 – $300', note: 'Added to normal repair; disclosed upfront' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('/images/ac-not-cooling-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="text-white lg:col-span-3">
              <p className="text-blue-200 font-semibold uppercase tracking-wider text-sm mb-3">Abbotsford & Fraser Valley</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AC Repair in <span className="text-blue-300">Abbotsford, BC</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed">
                AC not cooling, blowing warm air, or making noise it shouldn&apos;t? Get a local Abbotsford air conditioning tech dispatched today. Real cost ranges below — no surprises after diagnostic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${settings.phoneRaw}`} className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl inline-flex items-center justify-center gap-2">
                  <i className="ri-phone-fill text-2xl"></i>
                  Call {settings.phoneNumber}
                </a>
                <Link href="#ac-costs" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                  <i className="ri-price-tag-3-line"></i>
                  See real AC repair costs
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <LeadForm source="ac-repair-abbotsford-hero" compact />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">Local Abbotsford AC repair</span> — same-day service for most Fraser Valley addresses, real diagnostic first, no upsell tactics. Heat-vulnerable occupants get priority dispatch.
          </p>
        </div>
      </section>

      {/* Common problems */}
      <section id="common-ac-problems" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common AC Problems in Abbotsford Homes</h2>
            <p className="text-lg text-gray-600">
              These are what people actually call about — and what tends to cause each one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonProblems.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${p.icon} text-2xl text-blue-600`} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost transparency */}
      <section id="ac-costs" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What AC Repair Actually Costs in Abbotsford</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real ranges from Fraser Valley quotes — not "starting from" marketing pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {costs.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">{c.label}</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{c.range}</div>
                <div className="text-xs text-gray-500">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic text-center mt-6">
            Ranges reflect typical Fraser Valley quotes in 2026. Get 2–3 comparisons for anything over $2,000.
          </p>
        </div>
      </section>

      {/* AC replace decision */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Repair or Replace? Deciding on Your Old AC</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When an AC over 10 years old needs a big-ticket repair, replacement often wins on 5-year cost. Here&apos;s how the decision usually breaks down for Abbotsford homeowners.
              </p>
              <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md">
                <i className="ri-phone-fill"></i>
                Talk it through: {settings.phoneNumber}
              </a>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Age of unit', body: 'AC past 12 years is a replacement candidate; past 15 it usually wins over any major repair.' },
                { title: 'Refrigerant type', body: 'Pre-2010 systems often use R-22 (phased out). Repair costs stay high; replacement pays back faster.' },
                { title: 'The 50% rule', body: 'Repair quote over 50% of a new install cost, on a unit 10+ years old → replace.' },
                { title: 'Consider heat pump instead', body: 'Adding cooling? A cold-climate heat pump gives you AC + winter heating in one system. BC rebates cover $1,000–$6,000.' },
                { title: 'Warranty coverage', body: 'If parts are still under warranty, repair may win even on older units. Check before deciding.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AC Repair Service Areas</h2>
            <p className="text-lg text-gray-600">Abbotsford neighbourhoods and nearby Fraser Valley communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {geoData.areas.map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all group border border-transparent hover:border-blue-200">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AC Repair FAQ (Abbotsford)</h2>
            <p className="text-lg text-gray-600">Real questions Fraser Valley homeowners ask about air conditioning repair.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{f.q}</h3>
                  <i className="ri-add-line text-2xl text-blue-600 group-open:rotate-45 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <i className="ri-alarm-warning-fill text-5xl mb-4 block"></i>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">AC Emergency in Abbotsford?</h2>
          <p className="text-lg text-red-100 mb-8">
            No cooling during a heat wave, or heat-vulnerable people in the home? Priority dispatch across Abbotsford and the Fraser Valley.
          </p>
          <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-50 transition-all shadow-xl">
            <i className="ri-phone-fill text-2xl"></i>
            Call {settings.phoneNumber}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
