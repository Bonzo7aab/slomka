import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Rubik_Mono_One } from 'next/font/google'
import Footer from '@/components/Footer'
import { Intro } from '@/components/Intro'

const inter = Inter({ subsets: ['latin'] })
export const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik'
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
      <body className={`${inter.className} ${rubik.variable}`}>
        <Intro />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
