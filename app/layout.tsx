import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { getSettings } from '../lib/getSettings'

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
                {children}
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
