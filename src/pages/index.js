/* eslint-disable @next/next/no-sync-scripts */
import Image from 'next/image';
import { useState } from 'react';

export default function Homepage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call (replace with actual Octopus Mail API)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 2000);
  };

  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className='flex items-center justify-center'>
            <svg
              className='animate-spin h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          </div>
        );
      case 'success':
        return (
          <span className='text-sm'>
            E-posta gönderildi. Gelen kutunuzu kontrol edin!
          </span>
        );
      default:
        return 'Subscribe';
    }
  };

  return (
    <section
      id='homepage'
      className='min-h-screen flex items-center justify-center px-6 py-16'
    >
      <article className='max-w-7xl mx-auto xl:flex justify-between items-center gap-12'>
        <section className='max-w-2xl space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-5xl md:text-6xl font-bold text-primary'>
              Hello, I&apos;m Altan.
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300'>
              I&apos;m a Frontend Developer crafting digital experiences.
            </p>
          </div>

          <div className='space-y-4'>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
              I enjoy learning about new technologies and tools, writing
              articles, and working on open-source projects.
            </p>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
              My motivation for this website is to showcase my professional
              journey and, over time, to display a reflection of my life and
              hobbies, such as photography and travel.
            </p>
          </div>

          <div className='pt-4'>
            <form onSubmit={handleSubmit} className='flex gap-4 max-w-md'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                disabled={status === 'loading' || status === 'success'}
                className='w-64 px-6 py-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-primary transition-colors duration-200 disabled:opacity-50'
              />
              <button
                type='submit'
                disabled={status === 'loading' || status === 'success'}
                className='w-40 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 active:bg-primary transition-all duration-200 disabled:opacity-90 disabled:cursor-not-allowed'
              >
                {getButtonContent()}
              </button>
            </form>
          </div>
        </section>

        <div className='relative mt-12 xl:mt-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl'></div>
          <Image
            src='/reflection.png'
            alt='Hero Section Reflection Selfie'
            width={540}
            height={360}
            className='relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300'
          />
        </div>
      </article>
    </section>
  );
}
