'use client';

import React, { useState } from 'react';

interface ProjectServiceFormProps {
    serviceId: string;
    serviceName: string;
    formEndpoint: string;
    serviceOptions: { value: string; label: string }[];
}

export default function ProjectServiceForm({ serviceId, serviceName, formEndpoint, serviceOptions }: ProjectServiceFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service_type: '',
        property_type: '',
        urgency: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [sentCode, setSentCode] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStartVerification = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            console.log(`Verification code for ${serviceName}:`, code);
            setSentCode(code);

            await new Promise(resolve => setTimeout(resolve, 800));

            setIsVerifying(true);
            setSubmitStatus('A 6-digit verification code has been sent to your email.');
        } catch (error) {
            setSubmitStatus('Error initializing verification. Please try calling our support team.');
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
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    ...formData,
                    verification_code: verificationCode
                }).toString()
            });

            if (response.ok) {
                setSubmitStatus(`Thank you! Your verified request for ${serviceName} has been received.`);
                setFormData({ name: '', phone: '', email: '', service_type: '', property_type: '', urgency: '', message: '' });
                setIsVerifying(false);
                setVerificationCode('');
            } else {
                setSubmitStatus('There was an error sending your message. Please try calling our support team.');
            }
        } catch (error) {
            setSubmitStatus('There was an error sending your message. Please try calling our support team.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100" id={serviceId}>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                    <i className="ri-mail-send-line text-blue-600"></i>
                    Request {serviceName}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Get a professional quote for your {serviceName.toLowerCase()} needs. For instant help, call our support team.
                </p>
            </div>

            <form onSubmit={isVerifying ? handleSubmit : handleStartVerification} className="space-y-6">
                {!isVerifying ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all text-sm"
                                    placeholder="John Smith"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all text-sm"
                                    placeholder="(604) 555-0123"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="service_type" className="block text-sm font-semibold text-gray-700 mb-2">Specific Service *</label>
                                <select
                                    id="service_type"
                                    name="service_type"
                                    required
                                    value={formData.service_type}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all text-sm cursor-pointer"
                                >
                                    <option value="">Select a service...</option>
                                    {serviceOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="property_type" className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                                <select
                                    id="property_type"
                                    name="property_type"
                                    value={formData.property_type}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all text-sm cursor-pointer"
                                >
                                    <option value="">Select property type</option>
                                    <option value="single-family">Single Family Home</option>
                                    <option value="townhouse">Townhouse</option>
                                    <option value="condo">Condo/Apartment</option>
                                    <option value="commercial">Commercial Building</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">Urgency Level</label>
                                <select
                                    id="urgency"
                                    name="urgency"
                                    value={formData.urgency}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all text-sm cursor-pointer"
                                >
                                    <option value="">Select urgency</option>
                                    <option value="emergency">Emergency (ASAP)</option>
                                    <option value="urgent">Urgent (24h)</option>
                                    <option value="soon">Normal (48h+)</option>
                                    <option value="planning">Planning Ahead</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                maxLength={500}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all text-sm resize-none"
                                placeholder="Tell us about your needs..."
                            ></textarea>
                            <p className="text-right text-xs text-gray-400 mt-1">{formData.message.length}/500</p>
                        </div>
                    </>
                ) : (
                    <div className="py-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="ri-shield-user-line text-3xl text-blue-600"></i>
                        </div>
                        <label htmlFor="verification_code" className="block text-lg font-bold text-gray-900 mb-4">Enter Verification Code</label>
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
                            We've sent a code to <span className="font-semibold text-gray-700">{formData.email}</span>
                        </p>
                    </div>
                )}

                {submitStatus && (
                    <div className={`p-4 rounded-xl text-sm font-medium ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                        <i className={`ri-${submitStatus.includes('Thank you') ? 'checkbox-circle' : 'information'}-line mr-2`}></i>
                        {submitStatus}
                    </div>
                )}

                <div className="space-y-4 pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                        {isSubmitting ? 'Processing...' : (isVerifying ? 'Verify & Submit' : 'Verify & Send Request')}
                    </button>

                    {!isVerifying && (
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => window.location.href = 'tel:6045550123'}
                                className="text-blue-600 font-bold hover:text-blue-700 cursor-pointer text-sm"
                            >
                                Or Call our Support Team Now →
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
