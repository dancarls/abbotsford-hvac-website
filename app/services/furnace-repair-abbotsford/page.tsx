import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import LeadForm from '../../../components/feature/LeadForm';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: 'Furnace Repair Abbotsford BC — 24/7 Emergency Furnace Service',
  description:
    'Local furnace repair in Abbotsford. Common problems, real cost ranges ($95–$150 service call, $200–$1,500 typical repair), and same-day dispatch across the Fraser Valley.',
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/furnace-repair-abbotsford' },
  openGraph: {
    title: 'Furnace Repair Abbotsford BC — 24/7 Emergency Furnace Service',
    description:
      'Local furnace repair in Abbotsford — real cost ranges, no-heat emergency dispatch, and honest repair vs. replace advice.',
    images: ['https://www.abbotsfordhvac.ca/images/hvac-maintenance-abbotsford-hero.png'],
  },
};

const faqs = [
  {
    q: 'How much does furnace repair cost in Abbotsford?',
    a: 'Diagnostic service call: $95–$150. Most common single-visit furnace repairs (ignitor, flame sensor, thermostat, capacitor, blower motor, control board) total $200–$1,500. Bigger issues (heat exchanger crack, gas valve, full blower assembly) run $1,000–$3,000 — often the decision point between repair and replacement.',
  },
  {
    q: 'My furnace isn\'t heating — what could it be?',
    a: 'Most common causes we see: (1) dirty flame sensor (10-minute clean, no parts), (2) failed ignitor ($200–$400 installed), (3) tripped high-limit switch from restricted airflow, (4) failed thermostat, (5) blown low-voltage fuse in the control board, (6) gas supply issue — always check other gas appliances if furnace has no gas. If you smell gas, leave and call FortisBC at 1-800-663-9911.',
  },
  {
    q: 'How fast can you respond to a no-heat call in Abbotsford?',
    a: 'Priority dispatch — no-heat calls during cold weather (Nov–Feb) get triaged. Same-day for most Abbotsford addresses, next-day worst case during a cold snap when everyone\'s furnace fails at once. Elderly, chronically ill, or infants in the home → tell dispatch, those calls jump the queue.',
  },
  {
    q: 'Is it worth repairing a furnace that\'s over 15 years old?',
    a: 'Rule of thumb: if the repair quote is over 50% of a new install AND the furnace is 15+ years old, replacement usually wins on 5-year cost. Also factor in efficiency — a 15-year-old 80% AFUE furnace costs meaningfully more to run than a modern 96% AFUE unit. And if you\'re replacing anyway, cost out a heat pump — BC rebates can cover $1,000–$6,000 of the install.',
  },
  {
    q: 'How much does a new furnace cost installed in Abbotsford?',
    a: 'Standard mid-efficiency gas furnace installed: $3,500–$5,500. High-efficiency (96% AFUE) condensing furnace installed: $5,500–$8,500. Costs vary based on size, ductwork condition, gas line changes, and venting requirements. Heat pump replacement (which also gives you summer AC): $8,000–$18,000 installed, before rebates.',
  },
  {
    q: 'How often should I service my furnace in the Fraser Valley?',
    a: 'Once a year — ideally September or October before heating season. Abbotsford\'s damp climate is harder on burners and heat exchangers than dry-climate cities, so annual inspections catch small issues before they become mid-winter emergencies. Tune-up cost: $150–$250.',
  },
  {
    q: 'What are signs my furnace needs immediate attention?',
    a: 'Call right away for: (1) any gas smell (leave the house first, call FortisBC), (2) yellow or orange burner flame instead of blue, (3) soot around the furnace, (4) booming sounds on startup, (5) recurring cracked heat exchanger warnings, (6) carbon monoxide detector alarm. CO issues are potentially fatal — evacuate and call 911.',
  },
  {
    q: 'Do you service Mission, Chilliwack, and Fraser Valley for furnace repair?',
    a: 'Yes — full Fraser Valley coverage: Abbotsford, Mission, Chilliwack, parts of Langley (Glen Valley), Hatzic, Dewdney, Silverhill. Call to confirm for outlying addresses.',
  },
];

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Furnace Repair in Abbotsford, BC',
    description:
      '24/7 furnace repair in Abbotsford — no-heat emergency, ignitor / flame sensor / blower motor / control board service, and high-efficiency furnace replacement.',
    provider: { '@type': 'HVACBusiness', '@id': 'https://www.abbotsfordhvac.ca/#business' },
    areaServed: [
      { '@type': 'City', name: 'Abbotsford' },
      { '@type': 'City', name: 'Mission' },
      { '@type': 'AdministrativeArea', name: 'Fraser Valley Regional District' },
    ],
    serviceType: [
      'Furnace Repair',
      'Emergency Furnace Service',
      'Gas Furnace Repair',
      'Furnace Installation',
      'Furnace Tune-Up',
      'No Heat Emergency',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CAD',
      lowPrice: '95',
      highPrice: '3000',
      offerCount: '6',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.abbotsfordhvac.ca' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.abbotsfordhvac.ca/services/heating' },
      { '@type': 'ListItem', position: 3, name: 'Furnace Repair Abbotsford', item: 'https://www.abbotsfordhvac.ca/services/furnace-repair-abbotsford' },
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

export default function FurnaceRepairAbbotsford() {
  const settings = getSettings();

  const commonProblems = [
    { icon: 'ri-fire-line', title: 'No heat at all', body: 'Ignitor failure, flame sensor dirty, gas supply issue, or tripped high-limit switch. Diagnostic finds it fast — most no-heat calls resolve in one visit.' },
    { icon: 'ri-flashlight-line', title: "Furnace runs but doesn't heat", body: 'Blower running without ignition, gas valve issue, or cracked heat exchanger (safety concern). Get diagnosed — don\'t run it long.' },
    { icon: 'ri-volume-up-line', title: 'Loud bangs, booms, or squealing', body: 'Delayed ignition (dangerous — small explosion each start), blower bearings, or belt failure. Some are safety issues.' },
    { icon: 'ri-timer-flash-line', title: 'Short cycling (turns on/off constantly)', body: 'Thermostat placement, dirty filter restricting airflow, oversized furnace, or failing flame sensor. Wears the system faster.' },
    { icon: 'ri-thermometer-line', title: 'Cold spots or uneven heating', body: 'Ductwork issues, poor air balancing, or a furnace too small for the layout — often not a broken furnace at all.' },
    { icon: 'ri-alarm-warning-line', title: 'Yellow or orange flame', body: 'Should always be blue. Yellow/orange indicates incomplete combustion — potentially producing carbon monoxide. Get it inspected immediately.' },
    { icon: 'ri-error-warning-line', title: 'Furnace keeps tripping breaker', body: 'Blower motor drawing too much, short in wiring, or control board failure. Stop resetting — it\'s a symptom of a bigger issue.' },
    { icon: 'ri-money-dollar-circle-line', title: 'Rising heating bills', body: 'Old furnace losing efficiency, ductwork leaks, or oversized system short-cycling. Tune-up first, then consider efficiency upgrade.' },
  ];

  const costs = [
    { label: 'Diagnostic service call', range: '$95 – $150', note: 'Applied against total if you approve the repair' },
    { label: 'Flame sensor clean or replace', range: '$150 – $280', note: 'Most common furnace repair — often a 20-min visit' },
    { label: 'Hot surface ignitor replacement', range: '$200 – $400', note: 'Standard wear part, usually every 5–7 years' },
    { label: 'Blower motor replacement', range: '$400 – $900', note: 'Variable-speed ECM motors cost more but pay back on power' },
    { label: 'Control board replacement', range: '$500 – $1,000', note: 'When multiple symptoms don\'t point to one part' },
    { label: 'Gas valve replacement', range: '$500 – $1,200', note: 'Less common; requires certified gas tech' },
    { label: 'Furnace tune-up (annual)', range: '$150 – $250', note: 'Combustion analysis, cleaning, safety check — cheapest insurance in HVAC' },
    { label: 'Mid-efficiency furnace (installed)', range: '$3,500 – $5,500', note: '80% AFUE, standard homes; permit included' },
    { label: 'High-efficiency furnace (installed)', range: '$5,500 – $8,500', note: '96% AFUE condensing, gas savings 15–25% vs 80% unit' },
    { label: 'Emergency after-hours callout', range: '+$150 – $300', note: 'Added to normal repair; disclosed upfront' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-red-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('/images/hvac-maintenance-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-red-900/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="text-white lg:col-span-3">
              <p className="text-red-200 font-semibold uppercase tracking-wider text-sm mb-3">Abbotsford & Fraser Valley</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Furnace Repair in <span className="text-orange-300">Abbotsford, BC</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed">
                No heat, weird noises, or your furnace won&apos;t keep up on a cold morning? Get a local Abbotsford furnace tech dispatched today. 24/7 emergency line, real cost ranges, no surprise pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${settings.phoneRaw}`} className="bg-white text-red-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-50 transition-all shadow-xl inline-flex items-center justify-center gap-2">
                  <i className="ri-phone-fill text-2xl"></i>
                  Call {settings.phoneNumber}
                </a>
                <Link href="#furnace-costs" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                  <i className="ri-price-tag-3-line"></i>
                  See real furnace repair costs
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <LeadForm source="furnace-repair-abbotsford-hero" compact />
            </div>
          </div>
        </div>
      </section>

      {/* Gas safety */}
      <section className="py-6 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
            <i className="ri-alarm-warning-fill text-yellow-600 mr-2"></i>
            <span className="font-bold">Smell gas?</span> Leave the house immediately and call FortisBC 24/7 at <a href="tel:18006639911" className="text-yellow-700 font-bold underline">1-800-663-9911</a>. Don&apos;t use light switches or phones inside.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-red-50 border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">Local Abbotsford furnace repair</span> — 24/7 no-heat emergency dispatch, real diagnostic, no upsell tactics. Priority for vulnerable occupants.
          </p>
        </div>
      </section>

      {/* Common problems */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common Furnace Problems in Abbotsford Homes</h2>
            <p className="text-lg text-gray-600">What people actually call about — and what usually causes each one.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonProblems.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-red-200 transition-all">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${p.icon} text-2xl text-red-600`} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost transparency */}
      <section id="furnace-costs" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Furnace Work Actually Costs in Abbotsford</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real ranges from Fraser Valley quotes — not marketing "starting from" pricing.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {costs.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">{c.label}</div>
                <div className="text-2xl font-bold text-red-600 mb-2">{c.range}</div>
                <div className="text-xs text-gray-500">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic text-center mt-6">
            Ranges reflect typical Fraser Valley quotes in 2026. Get 2–3 comparisons for anything over $2,000.
          </p>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Repair or Replace Your Old Furnace?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When a $1,000+ furnace repair lands, the question is usually the same. A few honest factors decide it — including whether to consider a heat pump instead.
              </p>
              <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md">
                <i className="ri-phone-fill"></i>
                Talk it through: {settings.phoneNumber}
              </a>
            </div>
            <div className="space-y-3">
              {[
                { title: 'System age', body: 'Furnace past 15 years is a replacement candidate; past 20 it almost always wins.' },
                { title: 'The 50% rule', body: 'Repair quote over 50% of a new install cost, on a unit 15+ years old → replace.' },
                { title: 'Efficiency drift', body: 'A 15-year-old 80% AFUE furnace costs 15–25% more to run than a modern 96% unit. Adds up fast on Fraser Valley winters.' },
                { title: 'Consider heat pump', body: 'BC rebates cover $1,000–$6,000 on heat pumps. Gives you cooling too, and payback is often 5–8 years on utility savings.' },
                { title: 'Safety signals', body: 'Cracked heat exchanger, CO issues, or recurring safety trips = replace, don\'t patch. No repair is worth risking CO poisoning.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Furnace Repair Service Areas</h2>
            <p className="text-lg text-gray-600">Abbotsford neighbourhoods and nearby Fraser Valley communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {geoData.areas.map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center p-3 bg-white rounded-lg hover:bg-red-50 hover:text-red-700 transition-all group border border-transparent hover:border-red-200">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-red-700">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Furnace Repair FAQ (Abbotsford)</h2>
            <p className="text-lg text-gray-600">Real questions Fraser Valley homeowners ask about furnace work.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{f.q}</h3>
                  <i className="ri-add-line text-2xl text-red-600 group-open:rotate-45 transition-transform flex-shrink-0"></i>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">No-Heat Emergency in Abbotsford?</h2>
          <p className="text-lg text-red-100 mb-8">
            Cold snap, furnace down, vulnerable people in the home? Priority dispatch across Abbotsford and the Fraser Valley — 24/7.
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
