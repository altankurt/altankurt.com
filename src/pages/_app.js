import React from 'react'
import Meta from '@/components/Meta'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
