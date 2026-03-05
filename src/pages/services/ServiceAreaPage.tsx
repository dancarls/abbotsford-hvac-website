import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import geoData from '../../data/geo-service-data.json';
import { supabase } from '../../lib/supabase';
import SEO from '../../components/common/SEO';

export default function ServiceAreaPage() {
    const { area } = useParams<{ area: string }>();
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const areaData = geoData.areas.find(a => a.slug === area);

    useEffect(() => {
        async function fetchArea() {
            setLoading(true);

            // 1. Try Supabase
            try {
                const { data, error } = await supabase
                    .from('areas')
                    .select('*')
                    .eq('slug', area || '')
                    .single();

                if (data && !error) {
                    setContent(data);
                } else {
                    // 2. Fallback to JSON
                    const fallback = (geoData.area_content as any)[area || ''];
                    setContent(fallback);
                }
            } catch (err) {
                const fallback = (geoData.area_content as any)[area || ''];
                setContent(fallback);
            }
            setLoading(false);
        }

        if (area) {
            fetchArea();
        }
    }, [area]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!areaData || !content) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="py-24 text-center">
                    <h1 className="text-4xl font-bold mb-4">Area Not Found</h1>
                    <p className="text-gray-600 mb-8">Sorry, we don't currently list {area} as a primary service area.</p>
                    <Link to="/" className="text-blue-600 font-semibold hover:underline">Return to Homepage</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={content.title}
                description={content.description}
                ogImage={`https://readdy.ai/api/search-image?query=${encodeURIComponent(`${areaData.name} BC landscape, community landmarks`)}&width=1200&height=630&seq=seo-area-1&orientation=landscape`}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-gray-900">
                {/* Blurred Background Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 blur-[6px] opacity-60"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=${encodeURIComponent(`${areaData.name} BC landscape, community landmarks, suburban area`)}&width=1920&height=1000&seq=area-hero-1&orientation=landscape')`
                    }}
                />

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
                            <button
                                onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
                                className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3"
                            >
                                <i className="ri-user-voice-fill text-2xl"></i>
                                Talk to Our AI HVAC Assistant
                            </button>
                            <button
                                onClick={() => window.REACT_APP_NAVIGATE?.('/contact')}
                                className="bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer shadow-2xl"
                            >
                                Request Online Quote
                            </button>
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
                                        // Dynamic, SEO-friendly blurbs for each service-area combination
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
                                                to={`/services/${service.slug}/${areaData.slug}`}
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
                            <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Local {areaData.name} Support</h3>
                                <p className="text-gray-400 mb-8 relative z-10 text-lg">
                                    Need a professional opinion on your HVAC system? Our AI Assistant is trained on {areaData.name} service standards.
                                </p>
                                <button
                                    onClick={() => window.location.href = 'tel:123-456-7890'}
                                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    <i className="ri-phone-fill text-2xl"></i>
                                    Call (123) 456-7890
                                </button>
                                <button
                                    onClick={() => window.REACT_APP_NAVIGATE?.('/contact')}
                                    className="w-full mt-4 bg-white/10 border border-white/20 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    Get Quote
                                </button>
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

            <Footer />
        </div>
    );
}
