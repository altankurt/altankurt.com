import Meta from '@/components/meta';
import { Layout } from '@/components/layout/Layout';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

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
  );
}
