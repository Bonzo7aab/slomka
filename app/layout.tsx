"use client"

import { useState } from 'react'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
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
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <html lang="pl">
      <body className={`${inter.className} ${lato.variable}`}>
        <Navbar />
          <div className={`absolute top-0 z-20 w-full h-full bg-black ${isVideoEnded && `animate-hideIntro`}`}>
            <video autoPlay muted className='w-full h-full' src="/intro.mp4" onEnded={() => setIsVideoEnded(true)} />
          </div> 
          {children}
        <Footer />
      </body>
    </html>
  )
}
