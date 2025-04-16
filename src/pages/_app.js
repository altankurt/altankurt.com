import React from 'react'
import Meta from '@/components/Meta'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout/Layout'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </>
  )
}
