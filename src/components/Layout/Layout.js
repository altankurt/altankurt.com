import GoogleAnalytics from '../../components/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`h-full flex flex-col justify-between mx-auto container ${poppins.className}`}
    >
      <GoogleAnalytics />
      <div className='space-y-5 w-full'>
        <Header />
        <main className={`container px-4`}>{children}</main>
      </div>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Layout;
