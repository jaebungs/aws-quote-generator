import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import awsExport from '../src/aws-exports'
import { Amplify } from 'aws-amplify'
const inter = Inter({ subsets: ['latin'] })
Amplify.configure({...awsExport})
export const metadata: Metadata = {
  title: 'Quote Generator',
  description: 'Quote generator webapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
