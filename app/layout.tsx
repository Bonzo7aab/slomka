import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import Footer from '@/components/Footer'
import { Intro } from '@/components/Intro'

const inter = Inter({ subsets: ['latin'] })

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'FIL|MS',
  description: 'Fotografia, filmowanie, montaż oraz asystowanie na planie.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lato.variable}`}>
        <Intro />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
