import type { Metadata, Viewport } from 'next'
import { SITE } from '@/lib/site'
import { fontVars } from '@/lib/fonts-ar'
import '../globals.css'

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
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className={fontVars}>
      <body>{children}</body>
    </html>
  )
}
