import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { getSettings } from '@/lib/getSettings';

export const metadata: Metadata = {
  title: 'BC Heat Pump Rebates 2026: What Abbotsford Homeowners Can Actually Get',
  description: 'CleanBC, FortisBC, and Canada Greener Homes heat pump rebates for Abbotsford homeowners. Real dollar amounts, stacking rules, and how to qualify — updated for 2026.',
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/blog/bc-heat-pump-rebates-abbotsford' },
  openGraph: {
    title: 'BC Heat Pump Rebates 2026: What Abbotsford Homeowners Can Get',
    description: 'CleanBC, FortisBC, and Canada Greener Homes heat pump rebates for Abbotsford. Real amounts, stacking rules, how to qualify.',
    type: 'article',
    url: 'https://www.abbotsfordhvac.ca/blog/bc-heat-pump-rebates-abbotsford',
    images: ['https://www.abbotsfordhvac.ca/images/heat-pump-vs-furnace-abbotsford-hero.png'],
    locale: 'en_CA'
  }
};

const faqs = [
  {
    q: 'Can I stack BC Hydro and FortisBC rebates?',
    a: 'Yes, in most cases — CleanBC Better Homes rebates and FortisBC gas-to-electric fuel switching rebates stack, and Canada Greener Homes federal rebates can layer on top. The combined amount for a whole-home cold-climate heat pump commonly reaches $6,000–$11,000+ depending on income eligibility and equipment tier.'
  },
  {
    q: 'Do I need to be an income-qualified household to get rebates?',
    a: 'No — base rebates are available to all BC homeowners. Income-qualified households (under a set threshold) qualify for enhanced amounts that can roughly double the base rebate. Both streams exist under CleanBC.'
  },
  {
    q: 'What equipment qualifies?',
    a: 'The heat pump must meet a minimum HSPF (heating efficiency) rating and be installed by a program-registered contractor. Not every unit on the market qualifies. Cold-climate air-source heat pumps and geothermal systems generally qualify; older or budget-tier units often don\'t.'
  },
  {
    q: 'How long does the rebate application take?',
    a: 'Pre-approval isn\'t required for most base rebates, but the application is submitted after installation and typically pays out within 6–12 weeks. A program-registered installer usually handles the paperwork.'
  },
  {
    q: 'Are rebate amounts locked in for 2026?',
    a: 'No — CleanBC and FortisBC rebate amounts have shifted several times in the past few years. Confirm current amounts before signing an install contract. A local Abbotsford installer registered with the programs will know current values.'
  }
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.abbotsfordhvac.ca/blog/bc-heat-pump-rebates-abbotsford#article',
      'headline': 'BC Heat Pump Rebates 2026: What Abbotsford Homeowners Can Actually Get',
      'description': 'CleanBC, FortisBC, and Canada Greener Homes heat pump rebates for Abbotsford — real amounts, stacking rules, how to qualify.',
      'image': 'https://www.abbotsfordhvac.ca/images/heat-pump-vs-furnace-abbotsford-hero.png',
      'datePublished': '2026-07-25',
      'dateModified': '2026-07-25',
      'author': { '@type': 'Organization', 'name': 'AbbotsfordHVAC.ca' },
      'publisher': {
        '@type': 'Organization',
        'name': 'AbbotsfordHVAC.ca',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.abbotsfordhvac.ca/images/logo.png' }
      }
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
      }))
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.abbotsfordhvac.ca' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.abbotsfordhvac.ca/blog' },
        { '@type': 'ListItem', 'position': 3, 'name': 'BC Heat Pump Rebates', 'item': 'https://www.abbotsfordhvac.ca/blog/bc-heat-pump-rebates-abbotsford' }
      ]
    }
  ]
};

export default function BCHeatPumpRebatesGuide() {
  const settings = getSettings();

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-emerald-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/images/heat-pump-vs-furnace-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-emerald-900/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-emerald-900 px-4 py-1.5 rounded-full font-bold text-xs mb-6 uppercase tracking-wider">
            Updated for 2026
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            BC Heat Pump Rebates 2026: What Abbotsford Homeowners Can Actually Get
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed">
            Between CleanBC, FortisBC, and the federal Canada Greener Homes program, a full heat pump install in Abbotsford can qualify for $6,000–$11,000+ in stacked rebates. Here&apos;s how the numbers actually work — and what tends to trip homeowners up.
          </p>
        </div>
      </section>

      {/* TOC / Summary */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">What&apos;s in this guide</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              ['#programs', 'The three rebate programs'],
              ['#how-much', 'How much you can actually get'],
              ['#stacking', 'Rebate stacking — the math'],
              ['#qualifying', 'What qualifies (and what doesn\'t)'],
              ['#application', 'How the application works'],
              ['#gotchas', 'Common gotchas & mistakes'],
              ['#worth-it', 'Is it worth it for your Abbotsford home?'],
              ['#faq', 'FAQ']
            ].map(([href, label], i) => (
              <li key={i}>
                <a href={href} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                  <i className="ri-arrow-right-line"></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Body */}
      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate max-w-none">

          <p className="text-lg text-gray-700 leading-relaxed">
            Heat pumps have become the default replacement conversation for aging furnaces in Abbotsford — not because everyone wants one, but because the BC rebate math has gotten hard to ignore. The catch: the rebate landscape shifts regularly, program amounts change year to year, and installers who aren&apos;t program-registered can&apos;t process the paperwork. This guide walks through what&apos;s actually available in 2026 for Abbotsford and Fraser Valley homeowners.
          </p>

          <p className="text-sm text-gray-500 italic">
            One caveat up front: rebate amounts change. Everything below reflects current program structure but always confirm exact dollar values with your installer or the program websites before signing anything.
          </p>

          <h2 id="programs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">The three rebate programs Abbotsford homeowners can use</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. CleanBC Better Homes program (BC Hydro / FortisBC administered)</h3>
          <p>
            The provincial rebate program. Covers air-source heat pumps, ductless mini-splits (when they replace primary heating), and geothermal. Base rebates are available to all BC homeowners; enhanced amounts are available to income-qualified households.
          </p>
          <p>
            Program website: <a href="https://betterhomesbc.ca" target="_blank" rel="noopener" className="text-blue-600 hover:underline">betterhomesbc.ca</a>
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. FortisBC gas-to-electric fuel switching rebate</h3>
          <p>
            Specifically for homes replacing a gas furnace with a heat pump. FortisBC pays a bonus rebate on top of the CleanBC base amount when you switch away from natural gas. If you&apos;re on FortisBC gas and heating with it, this is real money.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Canada Greener Homes Grant / Loan</h3>
          <p>
            Federal program. The <em>grant</em> portion for new applicants closed earlier, but the <em>interest-free loan</em> (up to $40,000 amortized over 10 years) remains available for qualifying energy retrofits including heat pumps. Program details can change — worth checking <a href="https://www.canada.ca/en/services/environment/greener-homes.html" target="_blank" rel="noopener" className="text-blue-600 hover:underline">canada.ca/greener-homes</a> for current status.
          </p>

          <h2 id="how-much" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How much can you actually get?</h2>

          <p>
            The number that matters is <strong>combined stacked value</strong>, not any single program. Typical Abbotsford scenarios:
          </p>

          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-2xl p-6 my-6">
            <h4 className="font-bold text-gray-900 mb-4">Standard household, ductless mini-split (single-zone)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• CleanBC base: <strong>~$1,000–$2,000</strong></li>
              <li>• Federal Greener Homes loan: interest-free financing up to $40k</li>
              <li className="pt-2 border-t border-emerald-200 mt-3"><strong>Typical net offset: $1,000–$3,000</strong></li>
            </ul>
          </div>

          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-2xl p-6 my-6">
            <h4 className="font-bold text-gray-900 mb-4">Standard household, whole-home ducted heat pump (gas-to-electric)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• CleanBC base: <strong>~$3,000–$5,000</strong></li>
              <li>• FortisBC gas-to-electric bonus: <strong>~$1,000–$2,000</strong></li>
              <li>• Federal Greener Homes loan for anything above rebate value</li>
              <li className="pt-2 border-t border-emerald-200 mt-3"><strong>Typical net offset: $4,000–$7,000</strong></li>
            </ul>
          </div>

          <div className="not-prose bg-yellow-50 border border-yellow-200 rounded-2xl p-6 my-6">
            <h4 className="font-bold text-gray-900 mb-4">Income-qualified household, whole-home heat pump</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• CleanBC income-qualified enhanced rebate: <strong>~$8,000–$11,000</strong></li>
              <li>• FortisBC gas-to-electric bonus (if applicable): <strong>~$1,000–$2,000</strong></li>
              <li className="pt-2 border-t border-yellow-200 mt-3"><strong>Typical net offset: $9,000–$13,000+</strong></li>
            </ul>
            <p className="text-xs text-gray-600 italic mt-4">
              Income thresholds vary by household size. Roughly, single-person households under ~$60k and family households under ~$100k tend to qualify — but check current cutoffs.
            </p>
          </div>

          <h2 id="stacking" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rebate stacking — how it actually works</h2>
          <p>
            The programs are designed to stack, but not automatically. Order matters:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Confirm eligibility for each program <em>before</em> signing the install contract.</li>
            <li>Use a program-registered installer — non-registered installers can&apos;t process paperwork.</li>
            <li>Keep every invoice and equipment spec sheet — CleanBC and FortisBC require documentation.</li>
            <li>Submit CleanBC and FortisBC applications first (they cover the equipment cost).</li>
            <li>Apply for federal Greener Homes financing separately if using it for the balance.</li>
          </ol>

          <h2 id="qualifying" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What qualifies (and what doesn&apos;t)</h2>
          <p>
            Not every heat pump on the market gets rebate money. Rough rules:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Cold-climate air-source heat pumps</strong> — most qualify if they meet minimum HSPF ratings.</li>
            <li><strong>Ductless mini-splits</strong> — qualify when they replace primary heating (not as supplemental cooling).</li>
            <li><strong>Geothermal / ground-source</strong> — usually higher rebates but higher install cost.</li>
            <li><strong>Budget-tier or older-generation heat pumps</strong> — often don&apos;t meet efficiency thresholds.</li>
            <li><strong>DIY or unlicensed install</strong> — automatic disqualification.</li>
          </ul>

          <h2 id="application" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the application actually works</h2>
          <p>
            For most Abbotsford homeowners:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Get quotes from 2–3 program-registered installers.</li>
            <li>Ask each installer for the model&apos;s AHRI certificate and specs before signing.</li>
            <li>Complete the install.</li>
            <li>Installer submits (or helps you submit) the CleanBC/FortisBC application with invoices and specs.</li>
            <li>Rebate typically arrives 6–12 weeks after submission.</li>
          </ol>

          <h2 id="gotchas" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common gotchas</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Using an installer who isn&apos;t program-registered.</strong> The equipment may qualify, but without a registered installer&apos;s paperwork, you&apos;re typically out of luck.</li>
            <li><strong>Missing the fuel-switching bonus.</strong> Some installers don&apos;t flag the FortisBC gas-to-electric bonus for you.</li>
            <li><strong>Assuming rebate amounts from articles that are 12+ months old.</strong> Numbers move. Always confirm current values.</li>
            <li><strong>Buying the cheapest heat pump quoted.</strong> Cheaper units often don&apos;t meet HSPF thresholds and cost you the rebate — cancelling out the savings.</li>
            <li><strong>Not asking about the income-qualified stream.</strong> The enhanced rebate can be roughly double the base — worth checking eligibility.</li>
          </ul>

          <h2 id="worth-it" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Is a heat pump actually worth it for your Abbotsford home?</h2>
          <p>
            Roughly, the case is strongest when at least three of these are true:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Your furnace is over 12–15 years old</li>
            <li>You don&apos;t currently have AC and want it</li>
            <li>Your ductwork is in reasonable condition</li>
            <li>You&apos;re on FortisBC gas (unlocks the fuel-switching bonus)</li>
            <li>You&apos;re staying in the home for 5+ years</li>
            <li>You qualify (or nearly qualify) for the income-enhanced rebate</li>
          </ul>
          <p>
            If most of those don&apos;t apply — say, a 5-year-old high-efficiency furnace in a home you might sell in two years — a straight furnace replacement or repair may make more sense.
          </p>

          <p className="mt-8">
            A local Abbotsford installer can walk through the specific numbers for your home in under an hour — including which rebate amounts apply today and whether ductwork changes would push the project outside the sweet spot.
          </p>

          <div className="not-prose bg-blue-600 text-white rounded-2xl p-8 my-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Talk through your heat pump options</h3>
            <p className="text-blue-100 mb-6">
              Get real numbers for your home — including which rebates apply — before you commit.
            </p>
            <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">
              <i className="ri-phone-fill text-xl"></i>
              Call {settings.phoneNumber}
            </a>
          </div>

          <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently asked questions</h2>
          <div className="not-prose space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 p-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-bold text-gray-900 pr-4">{f.q}</h3>
                  <i className="ri-add-line text-xl text-blue-600 group-open:rotate-45 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="not-prose mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/heat-pump-vs-furnace-abbotsford" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="font-bold text-gray-900 mb-1">Heat Pump vs Furnace: Which Fits Your Abbotsford Home?</div>
                <div className="text-sm text-gray-600">The head-to-head comparison for Fraser Valley homeowners.</div>
              </Link>
              <Link href="/blog/ductless-mini-split-cooling-abbotsford" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="font-bold text-gray-900 mb-1">Ductless Mini-Splits in Abbotsford</div>
                <div className="text-sm text-gray-600">When mini-splits make sense — and when they don&apos;t.</div>
              </Link>
              <Link href="/services/heating" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="font-bold text-gray-900 mb-1">Heating Services in Abbotsford</div>
                <div className="text-sm text-gray-600">Real cost ranges and common repair issues.</div>
              </Link>
              <Link href="/services/cooling" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="font-bold text-gray-900 mb-1">AC & Cooling in Abbotsford</div>
                <div className="text-sm text-gray-600">Central AC, mini-splits, and heat waves.</div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
