import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: "24/7 Emergency HVAC Service in Abbotsford, BC",
  description: "No heat, no AC, or gas smell? 24/7 emergency HVAC dispatch across Abbotsford and the Fraser Valley. Fast triage and honest pricing during real emergencies.",
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/emergency' },
  openGraph: {
    title: "24/7 Emergency HVAC Service in Abbotsford, BC | Abbotsford HVAC",
    description: "No heat, no AC, or gas smell? 24/7 emergency HVAC dispatch across Abbotsford and the Fraser Valley.",
    images: ['https://www.abbotsfordhvac.ca/images/ac-not-cooling-abbotsford-hero.png']
  }
};

const faqs = [
  {
    q: 'What counts as an HVAC emergency?',
    a: 'No heat when it\'s freezing outside, no AC during a heat wave (especially with seniors, infants, or medical conditions in the home), any gas smell, a CO alarm going off, water leaking from the furnace or air handler, or electrical burning smell. Anything safety-related is always an emergency — do not wait.'
  },
  {
    q: 'How fast do you respond?',
    a: 'True emergencies (no heat during cold, no cool during heat wave, safety issues) are prioritized. Response times depend on time of day and current workload, but urgent calls are triaged ahead of routine service. If you\'re calling for a real emergency, say so up front.'
  },
  {
    q: 'What should I do RIGHT NOW while I wait?',
    a: 'Gas smell: leave the house immediately, then call from outside. Also call FortisBC 1-800-663-9911. CO alarm: same — leave the house, then call 911 and a technician. No heat: close unused rooms, dress in layers, use safe supplemental heat (space heater — never a gas stove for heating). No AC in extreme heat: use fans, cool showers, hydrate, close blinds, seek air-conditioned shelter if needed.'
  },
  {
    q: 'Do you charge extra for weekends, evenings, or holidays?',
    a: 'Emergency after-hours calls typically carry a service call fee that reflects the after-hours dispatch, but pricing is disclosed before any work begins. No surprise charges after the fact.'
  },
  {
    q: 'Will you actually come out at 2 AM in January?',
    a: 'Yes — no-heat calls during cold snaps are exactly what 24/7 emergency service is for. That said, a diagnostic-only visit at 2 AM may end with a temporary fix and a full repair scheduled for the next day if parts aren\'t on the truck.'
  }
];

const emergencySchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "24/7 Emergency HVAC Service in Abbotsford, BC",
    "description": "Emergency furnace, AC, and heat pump repair across Abbotsford and the Fraser Valley — 24 hours a day, 365 days a year.",
    "provider": { "@type": "HVACBusiness", "@id": "https://www.abbotsfordhvac.ca/#business" },
    "areaServed": { "@type": "City", "name": "Abbotsford" },
    "serviceType": ["Emergency Heating Repair", "Emergency AC Repair", "Emergency HVAC Service", "24/7 HVAC Dispatch"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.abbotsfordhvac.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.abbotsfordhvac.ca/services/emergency" },
      { "@type": "ListItem", "position": 3, "name": "Emergency", "item": "https://www.abbotsfordhvac.ca/services/emergency" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }
];

export default function EmergencyServices() {
  const settings = getSettings();

  const emergencyTypes = [
    { icon: 'ri-fire-line', border: 'border-red-500', iconBg: 'bg-red-50', iconColor: 'text-red-600', title: 'No heat / furnace down', body: 'Cold snap and the house won\'t stay warm. Priority dispatch — especially with kids, elderly residents, or pets.' },
    { icon: 'ri-snowflake-line', border: 'border-blue-500', iconBg: 'bg-blue-50', iconColor: 'text-blue-600', title: 'No AC in extreme heat', body: 'Fraser Valley heat waves can be a health emergency for seniors and young kids. Priority triage.' },
    { icon: 'ri-alarm-warning-line', border: 'border-orange-500', iconBg: 'bg-orange-50', iconColor: 'text-orange-600', title: 'Gas smell or CO alarm', body: 'Leave the house immediately, call from outside. Gas: FortisBC 1-800-663-9911. CO: call 911. Then call an HVAC tech.' },
    { icon: 'ri-flashlight-line', border: 'border-yellow-500', iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600', title: 'Electrical / burning smell', body: 'Turn off the system at the breaker if safe. Do not restart. Call for diagnostic before running again.' },
    { icon: 'ri-drop-line', border: 'border-sky-500', iconBg: 'bg-sky-50', iconColor: 'text-sky-600', title: 'Water leaking from HVAC', body: 'Clogged condensate line, cracked heat exchanger, or ruptured pipe — some are cosmetic, some are urgent.' },
    { icon: 'ri-error-warning-line', border: 'border-red-500', iconBg: 'bg-red-50', iconColor: 'text-red-600', title: 'Booming or violent noises', body: 'Delayed ignition on a gas furnace can crack the heat exchanger — real safety issue. Don\'t wait.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }} />
      <Header />

      {/* Emergency Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-red-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ac-not-cooling-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-red-900/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
            <i className="ri-alarm-warning-fill animate-pulse"></i>
            24/7 Emergency Dispatch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            HVAC Emergency in Abbotsford?
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-red-100 leading-relaxed max-w-2xl mx-auto">
            No heat during a cold snap. No AC during a heat wave. Gas smell. CO alarm. Call now for priority emergency dispatch across Abbotsford and the Fraser Valley.
          </p>
          <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-3 bg-yellow-400 text-red-900 px-10 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition-all shadow-2xl hover:scale-105 active:scale-95">
            <i className="ri-phone-fill text-2xl"></i>
            Call {settings.phoneNumber}
          </a>
          <p className="mt-6 text-sm text-red-200">
            Gas smell? Leave the house first. Then call from outside.
          </p>
        </div>
      </section>

      {/* Emergency triage */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Is This an Emergency? Quick Triage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">These are the situations that qualify for after-hours priority dispatch. If you&apos;re unsure, call anyway — dispatch will triage.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyTypes.map((e, i) => (
              <div key={i} className={`bg-white border-l-4 ${e.border} rounded-r-2xl p-6 shadow-sm hover:shadow-md transition-all`}>
                <div className={`w-12 h-12 ${e.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${e.icon} text-2xl ${e.iconColor}`}></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{e.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety-first callouts */}
      <section className="py-14 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Before You Call — Safety First</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-fire-fill text-2xl text-red-600"></i>
                <h3 className="font-bold text-gray-900">Gas Smell</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Leave the house immediately. Don&apos;t flip switches, don&apos;t use the phone inside. Call <a href="tel:18006639911" className="font-bold text-red-600 underline">FortisBC 1-800-663-9911</a> from outside, then call your HVAC tech.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-alarm-warning-fill text-2xl text-orange-600"></i>
                <h3 className="font-bold text-gray-900">CO Alarm</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Get everyone outside. Call <a href="tel:911" className="font-bold text-red-600 underline">911</a> first. CO poisoning is fast and serious. Do not re-enter until first responders clear the house.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-flashlight-fill text-2xl text-yellow-600"></i>
                <h3 className="font-bold text-gray-900">Electrical Smell</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Turn the system off at the breaker if you can do it safely. Don&apos;t restart it. If there are flames or visible smoke, get out and call 911 first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">24/7 Emergency Coverage Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Emergency HVAC dispatch across Abbotsford and nearby Fraser Valley communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {geoData.areas.map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all group">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-red-700">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Emergency HVAC FAQ</h2>
            <p className="text-lg text-gray-600">Straight answers about how emergency dispatch actually works.</p>
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

      {/* Final CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <i className="ri-phone-fill text-5xl mb-4 block"></i>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Don&apos;t Wait — Call Now</h2>
          <p className="text-lg text-red-100 mb-8">
            HVAC emergencies get worse the longer you wait. Cracked heat exchangers, frozen coils, and refrigerant leaks all escalate quickly.
          </p>
          <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-red-50 transition-all shadow-xl">
            <i className="ri-phone-fill text-2xl"></i>
            Call {settings.phoneNumber}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
