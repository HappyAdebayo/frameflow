import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CustomCursor } from '@/components/custom-cursor'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'FrameFlow | Premium Photography Studio',
  description: 'Elevating aesthetics through premiere visual narratives and cinematic photography.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-black selection:bg-primary selection:text-black">
        {/* Glamour Grain Effect */}
        <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.15]">
          <div className="absolute inset-0 bg-[#050505] mix-blend-overlay shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />
          <svg className="w-full h-full opacity-30">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <CustomCursor />
        <main className="relative z-0">
          {children}
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

