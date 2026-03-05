import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: 'Abbotsford HVAC - Expert Heating, Cooling & Air Quality Services',
        template: '%s | Abbotsford HVAC',
    },
    description: 'Professional HVAC services in Abbotsford, BC. Expert heating, cooling, ventilation & air quality solutions. 24/7 emergency service. Licensed & insured.',
    metadataBase: new URL('https://abbotsfordhvac.ca'),
    openGraph: {
        siteName: 'Abbotsford HVAC',
        type: 'website',
        locale: 'en_CA',
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
            </body>
        </html>
    )
}
