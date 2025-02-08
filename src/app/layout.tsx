import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppModal } from '@/widgets/app-modal/app-modal'
import { AppCart } from '@/widgets/app-cart/app-cart'
import React from 'react'
import { AppFavorite } from '@/widgets/app-favorite/app-favorite'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Development by | david_gri',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AppModal />
        <AppCart />
        <AppFavorite />
      </body>
    </html>
  )
}
