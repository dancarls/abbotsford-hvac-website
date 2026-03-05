import Link from 'next/link';
import { Metadata } from 'next';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import geoData from '../../../../lib/data/geo-service-data.json';
import { supabase } from '../../../../lib/supabase';
import { getSettings } from '@/lib/getSettings';

interface PageProps {
    params: { location: string; service: string };
}

export async function generateStaticParams() {
    const params: { location: string; service: string }[] = [];
    geoData.services.forEach(service => {
        geoData.areas.forEach(area => {
            params.push({ location: area.slug, service: service.slug });
        });
    });
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { location: area, service: category } = params;

    const areaData = geoData.areas.find((a: any) => a.slug === area);
    const serviceData = geoData.services.find((s: any) => s.slug === category);

    if (!areaData || !serviceData) return { title: 'Not Found' };

    let content: any = null;
    const contentKey = `${category}-${area}`;

    try {
        const { data, error } = await supabase
            .from('geo_service_content')
            .select('*')
            .eq('slug', contentKey)
            .single();

        if (data && !error) {
            content = data;
        } else {
            content = (geoData.content as any)[contentKey];
        }
    } catch {
        content = (geoData.content as any)[contentKey];
    }

    if (!content) {
        content = {
            hero_title: `Expert ${serviceData.name} in ${areaData.name}`,
            hero_subtitle: `Professional ${serviceData.name.toLowerCase()} solutions for residential and commercial properties in ${areaData.name}, BC.`,
            title: `Your Trusted ${serviceData.name} Partner in ${areaData.name}`,
            main_content: `Are you looking for reliable ${serviceData.name.toLowerCase()} services in the ${areaData.name} area? Our certified technicians specialize in handling the unique HVAC and plumbing needs of properties near ${areaData.landmark}. We offer 24/7 support, upfront pricing, and local expertise that ensures your home or business stays comfortable year-round.`
        };
    }

    return {
        title: content.hero_title,
        description: content.hero_subtitle,
        openGraph: {
            images: [`https://readdy.ai/api/search-image?query=${encodeURIComponent(`Professional ${serviceData.name} in ${areaData.name} Abbotsford`)}&width=1200&height=630&seq=seo-geo-1&orientation=landscape`],
            type: 'website',
            title: content.hero_title,
            description: content.hero_subtitle
        }
    };
}

export default async function GeoServicePage({ params }: PageProps) {
    const { location: area, service: category } = params;
    const settings = getSettings();

    const areaData = geoData.areas.find((a: any) => a.slug === area);
    const serviceData = geoData.services.find((s: any) => s.slug === category);

    if (!areaData || !serviceData) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="py-24 text-center">
                    <h1 className="text-4xl font-bold mb-4">Service or Area Not Listed</h1>
                    <p className="text-gray-600 mb-8">We couldn't find the specific combination of {category} and {area} you're looking for.</p>
                    <Link href="/" className="text-blue-600 font-semibold hover:underline">Return to Homepage</Link>
                </div>
                <Footer />
            </div>
        );
    }

    let content: any = null;
    const contentKey = `${category}-${area}`;

    try {
        const { data, error } = await supabase
            .from('geo_service_content')
            .select('*')
            .eq('slug', contentKey)
            .single();

        if (data && !error) {
            content = data;
        } else {
            content = (geoData.content as any)[contentKey];
        }
    } catch {
        content = (geoData.content as any)[contentKey];
    }

    if (!content) {
        content = {
            hero_title: `Expert ${serviceData.name} in ${areaData.name}`,
            hero_subtitle: `Professional ${serviceData.name.toLowerCase()} solutions for residential and commercial properties in ${areaData.name}, BC.`,
            title: `Your Trusted ${serviceData.name} Partner in ${areaData.name}`,
            main_content: `Are you looking for reliable ${serviceData.name.toLowerCase()} services in the ${areaData.name} area? Our certified technicians specialize in handling the unique HVAC and plumbing needs of properties near ${areaData.landmark}. We offer 24/7 support, upfront pricing, and local expertise that ensures your home or business stays comfortable year-round.`
        };
    }

    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${serviceData.name} in ${areaData.name}`,
            "description": content.hero_subtitle,
            "areaServed": {
                "@type": "Place",
                "name": areaData.name
            },
            "provider": {
                "@type": "LocalBusiness",
                "@id": "https://abbotsfordhvac.ca"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": `How quickly can you respond to a ${serviceData.name.toLowerCase()} call in ${areaData.name}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `We generally provide same-day response for all ${serviceData.name.toLowerCase()} inquiries in ${areaData.name}. For emergencies, we can often have a technician at your property within 1-2 hours depending on your proximity to landmarks like ${areaData.landmark}.`
                    }
                },
                {
                    "@type": "Question",
                    "name": `Are your technicians familiar with the specific ${serviceData.name.toLowerCase()} requirements in ${areaData.name}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `Yes, all our staff are trained specifically for the building codes and environmental conditions of the Fraser Valley and ${areaData.name}. We ensure every ${serviceData.name.toLowerCase()} job is compliant and optimized for local efficiency.`
                    }
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            <Header />

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-gray-900">
                {/* Blurred Background Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 blur-[8px] opacity-60"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=${encodeURIComponent(`Professional ${serviceData.name} service in ${areaData.name} residential area, HVAC technician at work`)}&width=1920&height=1000&seq=geo-hero-1&orientation=landscape')`
                    }}
                />

                {/* Content Overlay */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                            {content.hero_title}
                        </h1>
                        <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
                            {content.hero_subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href={`tel:${settings.phoneNumber}`}
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

            {/* Main Content */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Left Column: Extensive Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600 inline-block">
                                    {content.title || `${serviceData.name} Solutions in ${areaData.name}`}
                                </h2>
                                <div className="prose prose-xl text-gray-600 max-w-none">
                                    <p className="mb-8 leading-relaxed text-lg">
                                        {content.main_content || `Are you looking for professional ${serviceData.name.toLowerCase()} services in ${areaData.name}? Our team of certified technicians is dedicated to providing top-quality solutions tailored to the unique climate and residential needs of the ${areaData.name} community. From routine maintenance to complex installations, we ensure your home or business stays comfortable year-round.`}
                                    </p>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        We understand that ${serviceData.name.toLowerCase()} issues can be stressful and disruptive. That's why we prioritize efficiency, transparency, and high-quality workmanship in every project we undertake in ${areaData.name}. Our local expertise allows us to recommend the most effective systems and parts for the specific environmental conditions found near landmarks like ${areaData.landmark}.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert {serviceData.name} Service Standards</h3>
                                <p className="text-gray-600 text-lg mb-6">
                                    When you choose us for your {serviceData.name.toLowerCase()} needs in {areaData.name}, you're partnering with a team that values your comfort and safety above all else. Our standards include:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Comprehensive system diagnostics',
                                        'Upfront, transparent pricing',
                                        'High-efficiency equipment recommendations',
                                        'Eco-friendly and sustainable practices',
                                        'Post-service safety inspections',
                                        'Local code compliance and permitting'
                                    ].map((standard, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <i className="ri-checkbox-circle-fill text-blue-600 text-xl flex-shrink-0 mt-1"></i>
                                            <span className="font-medium text-lg">{standard}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Local {areaData.name} Residents Trust Us</h3>
                                <p className="text-gray-600 text-lg mb-8">
                                    Living in {areaData.name} means dealing with a variety of weather conditions—from damp, cool winters to warm summers. Your {serviceData.name.toLowerCase()} system needs to be robust enough to handle these fluctuations. Our technicians are not just experts in HVAC; they are experts in {areaData.name} HVAC. We know the common issues faced by properties near {areaData.landmark} and provide proactive solutions to prevent downtime.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <i className="ri-community-line text-2xl text-blue-600"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Community Focused</h4>
                                            <p className="text-gray-600">We live and work in Abbotsford, ensuring we treat every customer like a neighbor.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <i className="ri-medal-line text-2xl text-blue-600"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Technical Excellence</h4>
                                            <p className="text-gray-600">Continuous training on the latest {serviceData.name.toLowerCase()} technologies and safety protocols.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Dynamic Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Need Urgent {serviceData.name} Support?</h3>
                                <p className="text-blue-50 mb-8 relative z-10 text-lg">
                                    Our technicians are standby in the {areaData.name} area. Get a professional consultation right now.
                                </p>
                                <a
                                    href={`tel:${settings.phoneNumber}`}
                                    className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    <i className="ri-phone-fill text-2xl"></i>
                                    Call {settings.phoneNumber}
                                </a>
                                <Link
                                    href="/contact"
                                    className="block mt-4 text-center bg-blue-700/50 backdrop-blur-sm border-2 border-white/20 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all w-full flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    Book Online
                                </Link>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <i className="ri-map-pin-2-fill text-blue-600"></i>
                                    Serving {areaData.name}
                                </h4>
                                <p className="text-gray-600 mb-6">
                                    We provide primary coverage to all residences and businesses in the {areaData.name} sector, with rapid response times near {areaData.landmark}.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                                        <i className="ri-time-fill text-blue-600"></i>
                                        <span>24/7 Emergency Response</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                                        <i className="ri-truck-fill text-blue-600"></i>
                                        <span>Fully Stocked Vehicles</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                                        <i className="ri-user-star-fill text-blue-600"></i>
                                        <span>Local {areaData.name} Specialists</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service FAQ Section (Increases content density) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions about {serviceData.name} in {areaData.name}</h2>
                        <p className="text-xl text-gray-600">Everything you need to know about our local services.</p>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                q: `How quickly can you respond to a ${serviceData.name.toLowerCase()} call in ${areaData.name}?`,
                                a: `We generally provide same-day response for all ${serviceData.name.toLowerCase()} inquiries in ${areaData.name}. For emergencies, we can often have a technician at your property within 1-2 hours depending on your proximity to landmarks like ${areaData.landmark}.`
                            },
                            {
                                q: `Are your technicians familiar with the specific ${serviceData.name.toLowerCase()} requirements in ${areaData.name}?`,
                                a: `Yes, all our staff are trained specifically for the building codes and environmental conditions of the Fraser Valley and ${areaData.name}. We ensure every ${serviceData.name.toLowerCase()} job is compliant and optimized for local efficiency.`
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
