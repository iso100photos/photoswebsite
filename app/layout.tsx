import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ISO100 Photography',
    template: '%s | ISO100 Photography',
  },
  description: 'Professional photography by Zamira Schatschneider. Portraits, events, and editorial work captured with intention.',
  keywords: ['photography', 'portrait photography', 'event photography', 'ISO100', 'photo editing'],
  openGraph: {
    title: 'ISO100 Photography',
    description: 'Professional photography — portraits, events, and editorial work captured with intention.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0M1SZQK3GY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0M1SZQK3GY');
        `}
      </Script>
    </html>
  )
}
