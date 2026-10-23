import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { getSettings } from '../lib/getSettings'
import MobileCallBar from '../components/feature/MobileCallBar'

const settings = getSettings();

const retellPublicKey = process.env.NEXT_PUBLIC_RETELL_PUBLIC_KEY;
const retellChatAgentId = process.env.NEXT_PUBLIC_RETELL_CHAT_AGENT_ID;
const retellVoicePublicKey = process.env.NEXT_PUBLIC_RETELL_VOICE_PUBLIC_KEY;
const retellVoiceAgentId = process.env.NEXT_PUBLIC_RETELL_VOICE_AGENT_ID;
const retellChatEnabled = Boolean(retellPublicKey && retellChatAgentId);

export const metadata: Metadata = {
    title: {
        default: 'HVAC Abbotsford BC — Furnace Repair, AC & Heat Pumps | Abbotsford HVAC',
        template: '%s | Abbotsford HVAC',
    },
    description: 'Local HVAC help in Abbotsford & the Fraser Valley. Furnace repair, AC repair, heat pump installs, and 24/7 emergency service — with real cost ranges and BC rebate info.',
    metadataBase: new URL('https://www.abbotsfordhvac.ca'),
    openGraph: {
        siteName: 'Abbotsford HVAC',
        type: 'website',
        locale: 'en_CA',
    },
    alternates: {
        canonical: '/',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {settings.googleAnalyticsId && (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`} />
                        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${settings.googleAnalyticsId}');` }} />
                    </>
                )}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Pacifico&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans antialiased">
                {/* Site-wide Organization schema — loads on every page, helps AI assistants (Perplexity, ChatGPT, Google AI Overviews) cite the business. */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [
                                {
                                    '@type': 'Organization',
                                    '@id': 'https://www.abbotsfordhvac.ca/#organization',
                                    name: 'Abbotsford HVAC',
                                    alternateName: ['AbbotsfordHVAC.ca', 'Abbotsford HVAC & Plumbing'],
                                    url: 'https://www.abbotsfordhvac.ca',
                                    logo: 'https://www.abbotsfordhvac.ca/logo.jpg',
                                    telephone: `+1-${settings.phoneRaw || '2364773002'}`,
                                    description:
                                        'Local HVAC help across Abbotsford and the Fraser Valley — furnace repair, AC repair, cold-climate heat pumps with BC rebate handling, water heaters, and 24/7 emergency dispatch. Real cost ranges, honest repair-vs-replace advice.',
                                    areaServed: [
                                        { '@type': 'City', name: 'Abbotsford', containedInPlace: { '@type': 'AdministrativeArea', name: 'British Columbia' } },
                                        { '@type': 'City', name: 'Mission' },
                                        { '@type': 'City', name: 'Chilliwack' },
                                        { '@type': 'AdministrativeArea', name: 'Fraser Valley Regional District' },
                                    ],
                                    knowsAbout: [
                                        'Furnace Repair',
                                        'Air Conditioning Repair',
                                        'Heat Pump Installation',
                                        'BC CleanBC Heat Pump Rebates',
                                        'FortisBC Gas-to-Electric Bonus',
                                        'Canada Greener Homes Grant',
                                        'Plumbing Repairs',
                                        'Water Heater Installation',
                                        'Tankless Water Heater',
                                        'Ductless Mini-Split Installation',
                                        'HVAC Emergency Service',
                                    ],
                                    contactPoint: [
                                        {
                                            '@type': 'ContactPoint',
                                            telephone: `+1-${settings.phoneRaw || '2364773002'}`,
                                            contactType: 'customer service',
                                            areaServed: 'CA',
                                            availableLanguage: ['English'],
                                            hoursAvailable: '24/7',
                                        },
                                        {
                                            '@type': 'ContactPoint',
                                            telephone: `+1-${settings.phoneRaw || '2364773002'}`,
                                            contactType: 'emergency',
                                            areaServed: 'CA',
                                            availableLanguage: ['English'],
                                            hoursAvailable: '24/7',
                                        },
                                    ],
                                },
                                {
                                    '@type': 'WebSite',
                                    '@id': 'https://www.abbotsfordhvac.ca/#website',
                                    url: 'https://www.abbotsfordhvac.ca',
                                    name: 'Abbotsford HVAC',
                                    publisher: { '@id': 'https://www.abbotsfordhvac.ca/#organization' },
                                    inLanguage: 'en-CA',
                                },
                            ],
                        }),
                    }}
                />
                {children}
                <MobileCallBar />
                {retellChatEnabled && (
                    <script
                        id="retell-widget"
                        src="https://dashboard.retellai.com/retell-widget-v2.js"
                        type="module"
                        async
                        data-public-key={retellPublicKey}
                        data-agent-id={retellChatAgentId}
                        {...(retellVoicePublicKey ? { 'data-voice-public-key': retellVoicePublicKey } : {})}
                        {...(retellVoiceAgentId ? { 'data-voice-agent-id': retellVoiceAgentId } : {})}
                        data-title="Abbotsford HVAC"
                        data-bot-name="Abbotsford HVAC Assistant"
                        data-color="#2563eb"
                        data-fab-text="Need HVAC service?"
                        data-popup-message="Ask about heating, cooling, or emergency service — I can also book a callback."
                    />
                )}
                {settings.aiReceptionistScript && (
                    <div dangerouslySetInnerHTML={{ __html: settings.aiReceptionistScript }} />
                )}
            </body>
        </html>
    )
}
