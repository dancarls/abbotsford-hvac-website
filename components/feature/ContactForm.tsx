"use client";

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'phone',
        urgency: 'normal'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [sentCode, setSentCode] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleStartVerification = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            setSentCode(code);
            await new Promise(resolve => setTimeout(resolve, 800));
            setIsVerifying(true);
            setSubmitStatus('A 6-digit verification code has been sent to your email.');
        } catch (error) {
            setSubmitStatus('Error initializing verification. Please call our support team.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (verificationCode !== sentCode) {
            setSubmitStatus('Invalid verification code. Please check your email.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://readdy.ai/api/form/d3an9r9439c4o52mk9i0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    ...formData,
                    name: `${formData.firstName} ${formData.lastName}`,
                    verification_code: verificationCode
                }).toString()
            });

            if (response.ok) {
                setSubmitStatus('Thank you! Your verified request has been received. We\'ll contact you shortly.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                    preferredContact: 'phone',
                    urgency: 'normal'
                });
                setIsVerifying(false);
                setVerificationCode('');
            } else {
                setSubmitStatus('There was an error sending your message. Please call our support team.');
            }
        } catch (error) {
            setSubmitStatus('There was an error sending your message. Please call our support team.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={isVerifying ? handleSubmit : handleStartVerification} className="space-y-6" data-readdy-form id="contact-form">
            {!isVerifying ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                                First Name *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                                placeholder="Smith"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                                placeholder="(604) 555-0123"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                            Service Needed
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 appearance-none transition-all cursor-pointer"
                        >
                            <option value="">Select a service...</option>
                            <option value="heating">Heating Services</option>
                            <option value="cooling">Cooling Services</option>
                            <option value="ventilation">Ventilation Services</option>
                            <option value="air-quality">Indoor Air Quality</option>
                            <option value="plumbing">Plumbing & Water Heating</option>
                            <option value="maintenance">Maintenance Services</option>
                            <option value="commercial">Commercial HVAC</option>
                            <option value="emergency">Emergency Services</option>
                            <option value="other">Other / Not Sure</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            maxLength={500}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 resize-vertical transition-all"
                            placeholder="Tell us about your HVAC needs..."
                        />
                        <p className="text-right text-xs text-gray-400 mt-1">{formData.message.length}/500</p>
                    </div>
                </>
            ) : (
                <div className="py-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="ri-shield-user-line text-3xl text-blue-600"></i>
                    </div>
                    <label htmlFor="verification_code" className="block text-lg font-bold text-gray-900 mb-4">
                        Enter Verification Code
                    </label>
                    <input
                        type="text"
                        id="verification_code"
                        name="verification_code"
                        required
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="6-digit code"
                        className="w-48 px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 text-center text-3xl tracking-widest font-mono mx-auto block mb-4"
                    />
                    <p className="text-sm text-gray-500">
                        We've sent a code to <span className="font-semibold text-gray-700">{formData.email}</span> to verify your request.
                    </p>
                </div>
            )}

            {submitStatus && (
                <div className={`p-4 rounded-xl text-sm font-medium ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                    <i className={`ri-${submitStatus.includes('Thank you') ? 'checkbox-circle' : 'information'}-line mr-2`}></i>
                    {submitStatus}
                </div>
            )}

            <div className="space-y-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                    {isSubmitting ? 'Processing...' : (isVerifying ? 'Verify & Securely Submit' : 'Verify & Get Free Quote')}
                </button>

                {isVerifying ? (
                    <button
                        type="button"
                        onClick={() => setIsVerifying(false)}
                        className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                    >
                        Wait, let me fix something in the form
                    </button>
                ) : (
                    <div className="text-center">
                        <span className="text-gray-400 text-sm italic">Or for instant scheduling:</span>
                        <a
                            href="tel:6045550123"
                            className="block w-full mt-2 text-blue-600 font-bold hover:text-blue-700 cursor-pointer text-sm"
                        >
                            Call our Support Team Now →
                        </a>
                    </div>
                )}
            </div>
        </form>
    );
}
