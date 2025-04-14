import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'
import { useState } from 'react'

import { Email, Github, Linkedin, Twitter } from '../assets/icons'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-50 dark:bg-[#17191e] border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo ve İsim */}
          <div className="flex items-center gap-6">
            <Link href={'/'} className="flex items-center gap-4 group">
              <div>
                <h1 className="logo-text text-[#171c24] dark:text-[#dcdcdd] transition-colors duration-200">
                  Altan Kurt
                </h1>
                <p className="header-pm-text">Product Manager</p>
              </div>
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigasyon */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href={'/'}
              className={`nav-text transition-colors duration-200 ${
                router.pathname === '/'
                  ? 'text-primary'
                  : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
              }`}
            >
              Homepage
            </Link>
            <Link
              href={'/about'}
              className={`nav-text transition-colors duration-200 ${
                router.pathname === '/about'
                  ? 'text-primary'
                  : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
              }`}
            >
              About
            </Link>
            <Link
              href={'/projects'}
              className={`nav-text transition-colors duration-200 ${
                router.pathname === '/projects'
                  ? 'text-primary'
                  : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
              }`}
            >
              Projects
            </Link>
            <Link
              href={'/blog/posts'}
              className={`nav-text transition-colors duration-200 ${
                router.pathname.includes('/blog')
                  ? 'text-primary'
                  : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
              }`}
            >
              Blog
            </Link>
            <Link
              href={'/Altan_Kurt_Product_Manager.pdf'}
              rel="noopener noreferrer"
              target="_blank"
              className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
            >
              CV
            </Link>
          </nav>

          {/* Sağ Kısım - Sosyal Medya ve Tema */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                aria-label="Email link"
                href="mailto:hello@altankurt.com"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
              >
                <Email />
              </a>
              <a
                aria-label="Linkedin profile link"
                href="https://www.linkedin.com/in/altankurt/"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
              >
                <Linkedin />
              </a>
              <a
                aria-label="Github profile link"
                href="https://github.com/altankurt"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
              >
                <Github />
              </a>
              <a
                aria-label="Twitter profile link"
                href="https://twitter.com/aaltankurt"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
              >
                <Twitter />
              </a>
            </div>
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-slate-50 dark:bg-[#17191e]">
            <div className="h-20 px-6 sm:px-8 lg:px-12 flex items-center justify-between bg-slate-50 dark:bg-[#17191e] border-b border-gray-200 dark:border-gray-800">
              {/* Logo ve İsim */}
              <div className="flex items-center gap-6">
                <Link href={'/'} className="flex items-center gap-4 group">
                  <div>
                    <h1 className="logo-text text-[#171c24] dark:text-[#dcdcdd] transition-colors duration-200">
                      Altan Kurt
                    </h1>
                    <p className="header-pm-text">Product Manager</p>
                  </div>
                </Link>
              </div>

              {/* Mobil Menü Kapatma Butonu */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 sm:px-8 lg:px-12 py-8 flex flex-col justify-between h-[calc(100vh-5rem)]">
              <div className="space-y-8">
                {/* Navigasyon Linkleri */}
                <nav className="flex flex-col space-y-6">
                  <Link
                    href={'/'}
                    className={`nav-text transition-colors duration-200 ${
                      router.pathname === '/'
                        ? 'text-primary'
                        : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Homepage
                  </Link>
                  <Link
                    href={'/about'}
                    className={`nav-text transition-colors duration-200 ${
                      router.pathname === '/about'
                        ? 'text-primary'
                        : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href={'/projects'}
                    className={`nav-text transition-colors duration-200 ${
                      router.pathname === '/projects'
                        ? 'text-primary'
                        : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href={'/blog/posts'}
                    className={`nav-text transition-colors duration-200 ${
                      router.pathname.includes('/blog')
                        ? 'text-primary'
                        : 'text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href={'/Altan_Kurt_Product_Manager.pdf'}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CV
                  </Link>
                </nav>
              </div>

              {/* Mobil Alt Kısım - Sosyal Medya ve Tema */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <a
                    aria-label="Email link"
                    href="mailto:hello@altankurt.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
                  >
                    <Email />
                  </a>
                  <a
                    aria-label="Linkedin profile link"
                    href="https://www.linkedin.com/in/altankurt/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
                  >
                    <Linkedin />
                  </a>
                  <a
                    aria-label="Github profile link"
                    href="https://github.com/altankurt"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
                  >
                    <Github />
                  </a>
                  <a
                    aria-label="Twitter profile link"
                    href="https://twitter.com/aaltankurt"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="nav-text text-[#171c24] dark:text-[#dcdcdd] hover:text-[#d85a1b] dark:hover:text-[#d85a1b] transition-colors duration-200"
                  >
                    <Twitter />
                  </a>
                </div>
                <ThemeSwitch />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
