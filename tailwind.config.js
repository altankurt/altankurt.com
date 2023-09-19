/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        'light-bg': '#F3F4F6',
        'dark-bg': '#262626',
        'light-text': '#111827',
        'dark-text': '#f4f4f5',
        'light-border': '#6B7280',
        'dark-border': '#404040',
        'light-code': '#D1D1D1',
        'dark-code': '#6B7280',
        'light-date': '#374151',
        'dark-date': '#d1d5db',
      },
    },
  },
  plugins: [],
};
