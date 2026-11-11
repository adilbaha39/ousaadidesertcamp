import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import { SITE } from '@/lib/site'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-playfair', display: 'swap' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  formatDetection: { telephone: true, email: true },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#4a0c1a' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
