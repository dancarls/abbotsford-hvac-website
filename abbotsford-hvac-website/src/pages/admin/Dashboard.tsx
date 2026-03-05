
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('areas');

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
                            onClick={() => setActiveTab('ai-agent')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'ai-agent' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            AI Agent
                        </button>
                        <button
                            onClick={() => setActiveTab('account')}
                            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === 'account' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                        >
                            Account
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
                                                <button className="text-blue-600 hover:underline text-xs font-semibold">Edit Content</button>
                                                <button className="text-blue-600 hover:underline text-xs font-semibold">View Page</button>
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

                        {activeTab === 'ai-agent' && (
                            <div className="max-w-2xl">
                                <h2 className="text-xl font-bold mb-6">AI Agent Configuration</h2>
                                <div className="space-y-6">
                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-blue-800 text-sm italic">"I am your HVAC assistant. How can I help you today?"</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Agent Personality / Instructions</label>
                                        <textarea className="w-full p-2 border rounded-lg h-32 text-sm" defaultValue="You are a professional HVAC assistant for Abbotsford HVAC. Your goal is to help visitors book services, get quotes, and gather their contact information for our team. Be friendly, knowledgeable, and focus on capturing leads."></textarea>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked readOnly />
                                            <span className="text-sm font-medium">Enable Voice Interaction</span>
                                        </label>
                                    </div>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Update Agent</button>
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
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
