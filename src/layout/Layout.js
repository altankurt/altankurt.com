import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Layout = ({ children }) => {
  return (
    <>
      <div
        className={`container-inner mx-auto my-12 px-4 ${poppins.className}`}
      >
        <Header />
      </div>
      <main className={`${poppins.className} container-inner px-4`}>
        {children}
      </main>
      <Footer />
    </>
  );
};
