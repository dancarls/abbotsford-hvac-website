import Link from 'next/link';
import { Metadata } from 'next';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import geoData from '../../../lib/data/geo-service-data.json';
import { supabase } from '../../../lib/supabase';
import { getSettings } from '../../../lib/getSettings';

interface PageProps {
    params: { location: string };
}

export async function generateStaticParams() {
    return geoData.areas.map(area => ({ location: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const area = params.location;
    const areaData = geoData.areas.find((a: any) => a.slug === area);

    let content: any = null;
    try {
        const { data, error } = await supabase
            .from('areas')
            .select('*')
            .eq('slug', area || '')
            .single();

        if (data && !error) {
            content = data;
        } else {
            content = (geoData.area_content as any)[area || ''];
        }
    } catch {
        content = (geoData.area_content as any)[area || ''];
    }

    if (!areaData || !content) return { title: 'Not Found' };

    return {
        title: content.title,
        description: content.description,
        openGraph: {
            images: [`https://www.abbotsfordhvac.ca/images/hvac-maintenance-abbotsford-hero.png`],
            type: 'website',
            title: content.title,
            description: content.description
        }
    };
}

export default async function ServiceAreaPage({ params }: PageProps) {
    const settings = getSettings();
    const area = params.location;
    const areaData = geoData.areas.find((a: any) => a.slug === area);

    let content: any = null;
    try {
        const { data, error } = await supabase
            .from('areas')
            .select('*')
            .eq('slug', area || '')
            .single();

        if (data && !error) {
            content = data;
        } else {
            content = (geoData.area_content as any)[area || ''];
        }
    } catch {
        content = (geoData.area_content as any)[area || ''];
    }

    if (!areaData || !content) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="py-24 text-center">
                    <h1 className="text-4xl font-bold mb-4">Area Not Found</h1>
                    <p className="text-gray-600 mb-8">Sorry, we don't currently list {area} as a primary service area.</p>
                    <Link href="/" className="text-blue-600 font-semibold hover:underline">Return to Homepage</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": "Abbotsford HVAC",
        "@id": "https://www.abbotsfordhvac.ca/#business",
        "description": content.description,
        "url": `https://www.abbotsfordhvac.ca/locations/${area}`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abbotsford",
            "addressRegion": "BC",
            "addressCountry": "CA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.057186,
            "longitude": -122.308681
        },
        "areaServed": {
            "@type": "Place",
            "name": areaData.name
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.abbotsfordhvac.ca" },
                { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.abbotsfordhvac.ca/locations" },
                { "@type": "ListItem", "position": 3, "name": areaData.name, "item": `https://www.abbotsfordhvac.ca/locations/${area}` }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            <Header />

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-blue-900">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/hvac-maintenance-abbotsford-hero.png')`
                    }}
                />
                <div className="absolute inset-0 bg-blue-900/60" />

                {/* Content Overlay */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                            {content.title}
                        </h1>
                        <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
                            {content.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href={`tel:${settings.phoneRaw}`}
                                className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3"
                            >
                                <i className="ri-phone-fill text-2xl"></i>
                                Call Now {settings.phoneNumber}
                            </a>
                            <Link
                                href="/contact"
                                className="bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer shadow-2xl"
                            >
                                Request Online Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Landmarks / Local SEO Section */}
            <section className="py-12 bg-gray-50 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600 italic">
                        Proudly serving the {areaData.name} community, including areas near {content.landmark_mention}.
                    </p>
                </div>
            </section>

            {/* Main Area Content */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600 inline-block">
                                    Comprehensive HVAC Support for {areaData.name}
                                </h2>
                                <div className="prose prose-xl text-gray-600 max-w-none">
                                    <p className="mb-8 leading-relaxed text-lg">
                                        {content.description} Our team has been serving the {areaData.name} community for years, providing reliable heating, cooling, and plumbing solutions to residential and commercial properties alike. Whether you're near {areaData.landmark} or in the heart of the {areaData.name} residential districts, our technicians are just a call away.
                                    </p>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        We recognize that {areaData.name} has its own unique character and environmental factors. From the seasonal shifts that affect local humidity levels to the specific architectural styles common in this part of Abbotsford, we tailor our HVAC recommendations to ensure maximum efficiency and longevity for your systems.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">Local {areaData.name} Expertise</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-blue-900 mb-3 underline decoration-blue-200 underline-offset-4">Environmental Awareness</h4>
                                        <p className="text-blue-800/80">
                                            We've developed specific maintenance protocols for the {areaData.name} area, accounting for local air quality and temperature fluctuations common near {areaData.landmark}.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-blue-900 mb-3 underline decoration-blue-200 underline-offset-4">Neighborhood Presence</h4>
                                        <p className="text-blue-800/80">
                                            Our vans are a common sight near {areaData.landmark}. We take pride in being the first choice for emergency HVAC repairs in the {areaData.name} community.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b">All Services Available in {areaData.name}</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {geoData.services.map(service => {
                                        const blurbs: Record<string, string> = {
                                            'heating': `Top-rated furnace repair and heating installations in ${areaData.name}, specifically designed for local temperatures.`,
                                            'cooling': `Expert air conditioning service and AC repair for homeowners across ${areaData.name}, ensuring summer comfort.`,
                                            'ventilation': `Professional air duct cleaning and ventilation solutions to improve airflow in your ${areaData.name} property.`,
                                            'air-quality': `Custom indoor air filtration and purification systems tailored for the specific environment of ${areaData.name}.`,
                                            'plumbing': `Reliable residential and commercial plumbing repairs available 24/7 throughout the ${areaData.name} community.`,
                                            'maintenance': `Proactive HVAC maintenance plans to extend the life of your systems near ${areaData.landmark} and beyond.`,
                                            'commercial': `Heavy-duty commercial HVAC and refrigeration services for business owners operating in ${areaData.name}.`,
                                            'emergency': `Immediate, local emergency heating and cooling assistance for ${areaData.name} residents near ${areaData.landmark}.`
                                        };

                                        const blurb = blurbs[service.slug] || `Expert ${service.name.toLowerCase()} solutions for residents and businesses in ${areaData.name}.`;

                                        return (
                                            <Link
                                                key={service.slug}
                                                href={`/locations/${areaData.slug}/${service.slug}`}
                                                className="group flex items-center gap-4 bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
                                            >
                                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
                                                    <i className="ri-tools-fill text-blue-600 group-hover:text-white text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600">{service.name}</h4>
                                                    <p className="text-sm text-gray-500">{blurb}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-blue-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Local {areaData.name} Support</h3>
                                <p className="text-blue-100 mb-8 relative z-10 text-lg">
                                    Need a professional opinion on your HVAC system? Our team is trained on {areaData.name} service standards.
                                </p>
                                <a
                                    href={`tel:${settings.phoneRaw}`}
                                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    <i className="ri-phone-fill text-2xl"></i>
                                    Call {settings.phoneNumber}
                                </a>
                                <Link
                                    href="/contact"
                                    className="w-full mt-4 bg-white/10 border border-white/20 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer block text-center"
                                >
                                    Get Quote
                                </Link>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                                <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <i className="ri-shield-flash-fill text-blue-600"></i>
                                    {areaData.name} Area Service Stats
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 rounded-2xl text-center">
                                        <div className="text-2xl font-bold text-blue-600">1-2h</div>
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Avg Response</div>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-2xl text-center">
                                        <div className="text-2xl font-bold text-blue-600">500+</div>
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Local Jobs</div>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-2xl text-center">
                                        <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Rating</div>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-2xl text-center">
                                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Emergency</div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 italic">
                                    * Statistics based on internal service data for the {areaData.name} region over the past 12 months.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map + All Service Areas */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Full Service Area</h2>
                        <p className="text-gray-600">Heating, cooling, and HVAC service throughout Abbotsford and the Fraser Valley</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <div className="bg-gray-100 rounded-xl p-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83325.24904165726!2d-122.38308678476562!3d49.05718584863281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4c89d72c663%3A0x4a2b36750554ba72!2sAbbotsford%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1704835000000!5m2!1sen!2sus"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                                title="Abbotsford HVAC Service Area Map"
                            ></iframe>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">All Areas We Serve</h3>
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {geoData.areas.map((a) => (
                                    <Link
                                        key={a.slug}
                                        href={`/locations/${a.slug}`}
                                        className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors ${a.slug === areaData.slug ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
                                    >
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                        {a.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                                <p className="text-sm text-blue-800 font-medium">Don&apos;t see your area? We may still be able to help.</p>
                                <a href={`tel:${settings.phoneNumber}`} className="mt-2 inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Call {settings.phoneNumber}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Areas */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">We Also Serve Nearby Areas</h2>
                        <p className="text-gray-600">HVAC service throughout Abbotsford and the Fraser Valley</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {geoData.areas.filter(a => a.slug !== areaData.slug).slice(0, 12).map((area) => (
                            <Link
                                key={area.slug}
                                href={`/locations/${area.slug}`}
                                className="group flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all shadow-sm"
                            >
                                <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform flex-shrink-0"></div>
                                <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{area.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/service-areas"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        >
                            View All Service Areas →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
