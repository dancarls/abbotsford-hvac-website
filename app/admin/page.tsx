"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('areas');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [siteSettings, setSiteSettings] = useState({ phoneNumber: '', showTeamSection: false });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            fetch('/api/settings')
                .then(res => res.json())
                .then(data => setSiteSettings(data))
                .catch(console.error);
        }
    }, [isAuthenticated]);

    const handleSaveSettings = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            await fetch('/api/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(siteSettings)
            });
            alert('Settings saved successfully!');
        } catch (error) {
            console.error('Failed to save settings', error);
            alert('Error saving settings');
        } finally {
            setIsSaving(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Owner Login</h1>
                        <p className="text-gray-500 mt-2">Enter your password to manage Abbotsford HVAC</p>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (password === 'AbbyHVAC2026') {
                            setIsAuthenticated(true);
                        } else {
                            alert('Incorrect password');
                        }
                    }}>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                            Access Dashboard
                        </button>
                    </form>
                    <Link href="/" className="w-full mt-4 text-gray-500 font-semibold hover:underline" >
                        Back to Website
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-blue-600 p-8 text-white">
                        <h1 className="text-3xl font-bold">Website Owners Dashboard</h1>
                        <p className="mt-2 text-blue-100 italic">Manage your Abbotsford HVAC Geo-Service Empire</p>
                    </div>

                    <div className="flex border-b overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('areas')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'areas' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            Service Areas
                        </button>
                        <button
                            onClick={() => setActiveTab('leads')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'leads' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            Leads
                        </button>
                        <button
                            onClick={() => setActiveTab('seo')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'seo' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            SEO & Code
                        </button>
                        <button
                            onClick={() => setActiveTab('articles')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'articles' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            Articles
                        </button>
                        <button
                            onClick={() => setActiveTab('account')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'account' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            Account
                        </button>
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            Settings
                        </button>
                    </div>

                    <div className="p-8">
                        {activeTab === 'areas' && (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Manage Service Areas</h2>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                                        + Add New Area
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        'Abbotsford West', 'Abbotsford East', 'Clayburn Village', 'McMillan',
                                        'Auguston', 'Eagle Mountain', 'Sandy Hill', 'Clearbrook Centre',
                                        'Townline Hill', 'Mill Lake', 'West Clearbrook', 'South Clearbrook',
                                        'Aberdeen', 'South Poplar', 'Kilgard', 'Gifford', 'Mission',
                                        'Hatzic', 'Dewdney', 'Glen Valley', 'Silverhill'
                                    ].map(area => (
                                        <div key={area} className="p-4 border rounded-xl hover:border-blue-400 transition-all">
                                            <h3 className="font-bold">{area}</h3>
                                            <div className="mt-2 flex gap-2">
                                                <button
                                                    onClick={() => window.location.href = `/admin/edit-area/${area.toLowerCase().replace(/ /g, '-')}`}
                                                    className="text-blue-600 hover:underline text-xs font-semibold"
                                                >
                                                    Edit Content
                                                </button>
                                                <button
                                                    onClick={() => window.location.href = `/locations/${area.toLowerCase().replace(/ /g, '-')}`}
                                                    className="text-blue-600 hover:underline text-xs font-semibold"
                                                >
                                                    View Page
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'leads' && (
                            <div>
                                <h2 className="text-xl font-bold mb-6">Captured Leads</h2>
                                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed">
                                    <i className="ri-user-voice-line text-4xl text-gray-300 mb-2 block"></i>
                                    <p className="text-gray-500">No leads captured yet. Your AI agent is ready to start talking!</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'seo' && (
                            <div className="max-w-2xl">
                                <h2 className="text-xl font-bold mb-6">SEO & External Code</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Google Analytics ID</label>
                                        <input type="text" placeholder="G-XXXXXXXXXX" className="w-full p-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">AdSense Code Block</label>
                                        <textarea placeholder="Paste your AdSense script here..." className="w-full p-2 border rounded-lg h-24 font-mono text-xs"></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Custom Chatbot Script</label>
                                        <textarea placeholder="Paste external chatbot JS here..." className="w-full p-2 border rounded-lg h-24 font-mono text-xs"></textarea>
                                    </div>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Save SEO Settings</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'articles' && (
                            <div className="max-w-4xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Manage Blog Articles</h2>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                                        + Create New Article
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Winter Maintenance Tips', date: '2024-01-15', status: 'Published' },
                                        { title: 'Signs You Need AC Repair', date: '2024-01-10', status: 'Published' },
                                        { title: 'Energy Saving Upgrades', date: '2024-01-08', status: 'Draft' }
                                    ].map((article, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50">
                                            <div>
                                                <h3 className="font-bold">{article.title}</h3>
                                                <p className="text-xs text-gray-500">Last updated: {article.date} • <span className={article.status === 'Published' ? 'text-green-600' : 'text-orange-600'}>{article.status}</span></p>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="text-blue-600 text-sm font-semibold hover:underline">Edit</button>
                                                <button className="text-gray-400 text-sm font-semibold hover:text-red-600 transition-colors">Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'account' && (
                            <div className="max-w-md">
                                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">New Password</label>
                                        <input type="password" placeholder="••••••••" className="w-full p-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Confirm Password</label>
                                        <input type="password" placeholder="••••••••" className="w-full p-2 border rounded-lg" />
                                    </div>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Update Password</button>
                                    <div className="pt-6 border-t mt-6">
                                        <button className="text-red-600 font-semibold hover:underline">Manage Spam Email Filters</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div>
                                <h2 className="text-xl font-bold mb-6">Global Site Settings</h2>
                                <form onSubmit={handleSaveSettings} className="space-y-6 max-w-2xl">
                                    <div className="bg-gray-50 p-6 rounded-xl border">
                                        <h3 className="font-bold mb-4">Contact Information</h3>
                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Main Phone Number</label>
                                            <input
                                                type="text"
                                                value={siteSettings.phoneNumber}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, phoneNumber: e.target.value })}
                                                className="w-full p-3 border rounded-xl"
                                                placeholder="e.g. 123-456-7890"
                                            />
                                            <p className="text-xs text-gray-500 mt-2">This will update the phone number globally across the top header, footer, and service pages.</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-xl border">
                                        <h3 className="font-bold mb-4">About Us Page Integration</h3>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={siteSettings.showTeamSection}
                                                onChange={(e) => setSiteSettings({ ...siteSettings, showTeamSection: e.target.checked })}
                                                className="w-5 h-5 text-blue-600 rounded"
                                            />
                                            <span className="font-semibold text-gray-700">Show &quot;Meet Our Team&quot; Section</span>
                                        </label>
                                        <p className="text-xs text-gray-500 mt-2">Toggle this when you have gathered all team member photos and info. When off, the section is completely hidden from visitors.</p>
                                    </div>

                                    <button type="submit" disabled={isSaving} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50">
                                        {isSaving ? 'Saving...' : 'Save All Settings'}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
