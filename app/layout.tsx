import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import './globals.css'
import { Toaster } from 'react-hot-toast'

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
        <Toaster position='top-center' toastOptions={{ duration: 3000 }} />
        <Navbar />
          <Intro />
          {children}
        <Footer />
      </body>
    </html>
  )
}
