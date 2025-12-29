import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'FIL|MS',
  description: 'Filmowanie, usługi dronem, montaż oraz asystowanie na planie.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${lato.variable}`}>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
