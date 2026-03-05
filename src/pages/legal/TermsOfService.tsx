
export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                    <p>Last Updated: February 25, 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the services provided by Abbotsford HVAC ("we," "us," or "our") via this website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. AI Assistant Disclaimer</h2>
                        <p>
                            Our website utilizes advanced AI technology to assist with initial diagnostic inquiries, ballpark quotes, and scheduling. While we strive for accuracy, AI-generated communications are for informational purposes only.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All AI-provided quotes are estimates and subject to on-site physical inspection.</li>
                            <li>AI diagnostics do not replace the professional judgment of a licensed technician.</li>
                            <li>In the event of a life-threatening emergency (e.g., gas leak), do not rely on the AI assistant; contact emergency services immediately.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Service Area & Estimates</h2>
                        <p>
                            We primarily serve Abbotsford, BC and the surrounding Fraser Valley regions. Travel surcharges may apply for locations outside our core service zones as identified on our Service Area pages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
                        <p>
                            Abbotsford HVAC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or AI assistant. Our maximum liability shall not exceed the amount paid for the specific service in question.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
                        <p>
                            For questions regarding these terms, please contact us at info@abbotsfordhvac.ca or 123 Main Street, Abbotsford, BC.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
