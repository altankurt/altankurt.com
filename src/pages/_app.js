import React from 'react'
import Meta from '@/components/Meta'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout/Layout'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: 'tanisma-toplantisi' })
      cal('floatingButton', {
        calLink: 'altankurt/tanisma-toplantisi',
        config: { layout: 'month_view' },
        buttonText: 'Toplandı Planla',
      })
      cal('ui', {
        cssVarsPerTheme: { light: { 'cal-brand': '#292929' }, dark: { 'cal-brand': '#fafafa' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

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
