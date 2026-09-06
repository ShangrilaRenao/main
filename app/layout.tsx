import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})
const jost = Jost({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'SHANGRILA RENAO — A Luxury Mountain Retreat',
  description:
    'SHANGRILA RENAO is a private alpine retreat where minimalist architecture meets untamed wilderness. Suspended between forest and sky.',
  generator: 'v0.app',
  icons: {
  icon: [
    {
      url: "images/logo1.png",
      media: "(prefers-color-scheme: light)",
      type: "image/png",
    },
    {
      url: "images/logo1.png",
      media: "(prefers-color-scheme: dark)",
      type: "image/png",
    },
  ],
  apple: "images/logo1.png",
},
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
