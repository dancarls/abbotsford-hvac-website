"use client";

import { useState } from 'react';

export default function HomeContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        preferred_time: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [sentCode, setSentCode] = useState('');

    const handleStartVerification = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email) return;

        setIsSubmitting(true);
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        setSentCode(code);
        setIsVerifying(true);
        setIsSubmitting(false);
        setSubmitStatus('A verification code has been sent to your email. Please enter it below to confirm.');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (verificationCode !== sentCode) {
            setSubmitStatus('Invalid verification code. Please check your email.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const formBody = new URLSearchParams();
            Object.entries(formData).forEach(([key, value]) => {
                formBody.append(key, value);
            });

            const response = await fetch('https://readdy.ai/api/form/d3aa5q7hm68tmmd6s6qg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody.toString(),
            });

            if (response.ok) {
                setSubmitStatus('Thank you! Your verified request has been received. Our team will contact you soon.');
                setFormData({ name: '', phone: '', email: '', service: '', preferred_time: '' });
                setIsVerifying(false);
                setSentCode('');
                setVerificationCode('');
            } else {
                setSubmitStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={isVerifying ? handleSubmit : handleStartVerification} data-readdy-form id="service-request-form" className="grid md:grid-cols-2 gap-6">
            {!isVerifying ? (
                <>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            aria-describedby="name-help"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            aria-describedby="phone-help"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            aria-describedby="email-help"
                        />
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Needed *
                        </label>
                        <div className="relative">
                            <select
                                id="service"
                                name="service"
                                required
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                                aria-describedby="service-help"
                            >
                                <option value="">Select HVAC service</option>
                                <option value="furnace-repair">Furnace Repair</option>
                                <option value="furnace-installation">Furnace Installation</option>
                                <option value="ac-repair">AC Repair</option>
                                <option value="ac-installation">AC Installation</option>
                                <option value="heat-pump">Heat Pump Service</option>
                                <option value="ductless">Ductless Mini-Split</option>
                                <option value="air-quality">Indoor Air Quality</option>
                                <option value="maintenance">Maintenance Service</option>
                                <option value="emergency">Emergency Service</option>
                                <option value="other">Other HVAC Service</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="ri-arrow-down-s-line text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Appointment Time
                        </label>
                        <input
                            type="text"
                            id="preferred_time"
                            name="preferred_time"
                            value={formData.preferred_time}
                            onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                            placeholder="e.g., Tomorrow morning, This weekend, ASAP"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            aria-describedby="time-help"
                        />
                    </div>
                </>
            ) : (
                <div className="md:col-span-2">
                    <label htmlFor="verification_code" className="block text-sm font-medium text-gray-700 mb-2">
                        Verification Code *
                    </label>
                    <input
                        type="text"
                        id="verification_code"
                        name="verification_code"
                        required
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="Enter 6-digit code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">
                        Check your email for the code to confirm your request.
                    </p>
                </div>
            )}
            <div className="md:col-span-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    {isSubmitting ? 'Processing...' : (isVerifying ? 'Verify & Submit Request' : 'Get Verified Quote')}
                </button>
                {submitStatus && (
                    <p className={`mt-4 text-center p-3 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`} role="status" aria-live="polite">
                        {submitStatus}
                    </p>
                )}
                {isVerifying && (
                    <button
                        type="button"
                        onClick={() => setIsVerifying(false)}
                        className="w-full mt-4 text-gray-500 hover:text-gray-700 text-sm font-medium cursor-pointer"
                    >
                        Back to Form
                    </button>
                )}
            </div>
        </form>
    );
}
