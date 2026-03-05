
export default function Disclaimer() {
    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Disclaimer</h1>
                <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                    <p>Last Updated: February 25, 2026</p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                        <h2 className="text-amber-800 font-bold mb-2">IMPORTANT SAFETY NOTICE</h2>
                        <p className="text-amber-700">
                            If you smell gas, see sparks, or suspect a carbon monoxide leak, immediately evacuate the premises and call your local emergency services or gas utility provider.
                        </p>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Professional Advice</h2>
                        <p>
                            The information provided on this website is for general informational purposes only. It is not intended as professional engineering, mechanical, or safety advice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quote Accuracy</h2>
                        <p>
                            Quotes provided via our website or over the phone are "ballpark" estimates based on standard industry data and your descriptions. They are not binding contracts. Final pricing is only determined after a physical inspection by a licensed Abbotsford HVAC technician.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warranty Disclaimer</h2>
                        <p>
                            Manufacturer warranties are subject to the terms provided by the equipment manufacturer. Abbotsford HVAC provides professional installation and labor warranties as specified in your individual service contract.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
