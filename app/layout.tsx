import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/nav/Navbar'
import SessionProvider from '@/components/session-provider'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'AlBlog',
  description: 'AlBlog - Personal Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className='max-w-7xl mx-auto p-10 space-y-10'>
            <Navbar />
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <SessionProvider />
      </body>
    </html>
  )
}
