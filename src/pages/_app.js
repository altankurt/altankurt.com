import React from 'react';
import Meta from '@/components/Meta';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Maintenance from '@/pages/maintenance';

const isMaintenanceMode = true; // Bakım modunu etkinleştir

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
          {isMaintenanceMode ? (
            <Maintenance />
          ) : (
            null
          )}
      </ThemeProvider>
    </>
  );
}