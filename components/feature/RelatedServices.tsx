import Link from 'next/link';

/**
 * RelatedServices — internal linking block pointing to the 3 money-keyword
 * landing pages. Rendered at the bottom of homepage, blog posts, area pages,
 * and non-money service pages to consolidate PageRank into the ranking winners.
 *
 * Do NOT render on the money pages themselves (they shouldn't link to themselves).
 *
 * Pass `exclude` with a slug to omit that card when the component sits on
 * (or near) a money page — e.g. on /services/cooling we exclude 'ac-repair' etc.
 */

type MoneySlug = 'ac-repair' | 'furnace-repair' | 'heat-pump';

interface RelatedServicesProps {
  /** Heading above the block. */
  heading?: string;
  /** Subheading / lead-in copy. */
  subheading?: string;
  /** Optional array of money page slugs to omit (e.g. the page you're on). */
  exclude?: MoneySlug[];
  /** Background tone — 'light' (default) for white sections, 'tinted' for gray-50. */
  tone?: 'light' | 'tinted';
}

const CARDS: Array<{
  slug: MoneySlug;
  href: string;
  title: string;
  anchor: string; // the actual SEO anchor text — varied across the site
  body: string;
  icon: string;
  accentBg: string;
  accentText: string;
  ring: string;
}> = [
  {
    slug: 'ac-repair',
    href: '/services/ac-repair-abbotsford',
    title: 'AC Repair in Abbotsford',
    anchor: 'AC repair in Abbotsford',
    body: 'Same-day air conditioning repair across the Fraser Valley — $95 diagnostic, real cost ranges on capacitor, refrigerant, and compressor jobs.',
    icon: 'ri-snowflake-line',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-700',
    ring: 'hover:border-blue-200',
  },
  {
    slug: 'furnace-repair',
    href: '/services/furnace-repair-abbotsford',
    title: 'Furnace Repair in Abbotsford',
    anchor: 'Furnace repair in Abbotsford',
    body: '24/7 no-heat emergency furnace service — ignitor, flame sensor, blower motor, control board. Real Fraser Valley cost ranges.',
    icon: 'ri-fire-line',
    accentBg: 'bg-red-50',
    accentText: 'text-red-700',
    ring: 'hover:border-red-200',
  },
  {
    slug: 'heat-pump',
    href: '/services/heat-pump-abbotsford',
    title: 'Heat Pump Install in Abbotsford',
    anchor: 'Heat pump install in Abbotsford',
    body: 'Cold-climate heat pump installs with BC + federal rebates stacking to $1,000–$11,000+. Honest sizing, real 10-year cost math.',
    icon: 'ri-leaf-line',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    ring: 'hover:border-emerald-200',
  },
];

export default function RelatedServices({
  heading = 'Popular HVAC Services in Abbotsford',
  subheading = 'Our most-requested repairs and installs across the Fraser Valley — real cost ranges and local dispatch.',
  exclude = [],
  tone = 'light',
}: RelatedServicesProps) {
  const cards = CARDS.filter((c) => !exclude.includes(c.slug));
  if (cards.length === 0) return null;

  const bg = tone === 'tinted' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-14 ${bg} border-t border-gray-100`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{heading}</h2>
          <p className="text-base text-gray-600">{subheading}</p>
        </div>

        <div className={`grid gap-5 ${cards.length === 3 ? 'md:grid-cols-3' : cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
          {cards.map((card) => (
            <Link
              key={card.slug}
              href={card.href}
              className={`group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all ${card.ring}`}
            >
              <div className={`w-12 h-12 ${card.accentBg} rounded-xl flex items-center justify-center mb-4`}>
                <i className={`${card.icon} text-2xl ${card.accentText}`} aria-hidden="true"></i>
              </div>
              <h3 className={`font-bold text-gray-900 mb-2 group-hover:${card.accentText} transition-colors`}>
                {card.anchor}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{card.body}</p>
              <span className={`text-sm font-semibold ${card.accentText} inline-flex items-center gap-1`}>
                Read full guide <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
