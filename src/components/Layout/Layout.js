import GoogleAnalytics from '../../components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen flex flex-col ${poppins.className}`}>
      <GoogleAnalytics />
      <Header />
      <main className="flex-1 py-12">{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default Layout
