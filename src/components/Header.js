/* eslint-disable @next/next/inline-script-id */
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ThemeSwitch } from './ThemeSwitch';
import Script from 'next/script';

import {
  Email,
  Github,
  Linkedin,
  Medium,
  Twitter,
  Coffee,
} from '../assets/icons';

export default function Header() {
  const router = useRouter();

  const isActiveLink = (path) => {
    return router.pathname === path ? 'nav-active' : '';
  };

  return (
    <>
      <header className="text-color container flex pt-8 items-center justify-between pb-4 border-b border-color px-3">
        <div className="flex items-center gap-3">
          <Link href={'/'}>
            <Image
              alt="Profile Picture"
              src="/portrait.jpg"
              width={80}
              height={80}
              className="hidden rounded-full sm:inline-block"
            />
          </Link>
          <div>
            <Link href={'/'}>
              <h1 className="h5 sm:h4">Altan Kurt</h1>
            </Link>
            <div className="flex flex-col gap-1">
              <Link href={'/'}>
                <p className="text-sm sm:text-base">Frontend Developer</p>
              </Link>
              <div className="flex gap-2">
                <a
                  aria-label="Email link"
                  href="mailto:hello@altankurt.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Email />
                </a>
                <a
                  aria-label="Github profile link"
                  href="https://github.com/altankurt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github />
                </a>
                <a
                  aria-label="Linkedin profile link"
                  href="https://www.linkedin.com/in/altankurt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  aria-label="Medium profile link"
                  href="https://altankurt.medium.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Medium />
                </a>
                <a
                  aria-label="Twitter profile link"
                  href="https://twitter.com/aaltankurt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  aria-label="Buy me a coffee profile link"
                  href="https://www.buymeacoffee.com/altankurt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Coffee />
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <ul className="relative flex flex-col sm:px-0 gap-1 sm:flex-row sm:gap-8">
            <li>
              <Link
                className={`nav-text ${router.pathname === '/' ? isActiveLink('/') : ''
                  }`}
                href={'/'}
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                className={`nav-text ${router.pathname === '/about' ? isActiveLink('/about') : ''
                  }`}
                href={'/about'}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-text ${router.pathname === '/projects' ? isActiveLink('/projects') : ''
                  }`}
                href={'/projects'}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`nav-text ${router.pathname.includes('/blog')
                    ? isActiveLink('/blog/posts')
                    : ''
                  }`}
                href={'/blog/posts'}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`nav-text ${router.pathname === '/Altan_Kurt_Resume.pdf'
                  }`}
                href={'/Altan_Kurt_Resume.pdf'}
                rel="noopener noreferrer"
                target="_blank"
              >
                CV
              </Link>
            </li>
            <li className="max-sm:absolute max-sm:bottom-6 max-sm:-left-10">
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </header>
      <Script>
        {`
          window.greetings = ["Hello, I'm your assistant! 👋🏻","Ask me anything."];
          window.chatPosition = "right-bottom";
          window.chatBalloonImg = '//a821d63e790a2b70ddeb996bbc284b53.cdn.bubble.io/f1716295121161x737260415472405000/profile-pic.png';
          window.chatbotIframeSrc = 'https://run.aicado.ai/llm?s=2cefb4e6e7081dffa4f1698834133b4a4137d348070d77f0fb5e346ff253a419323591519c96ad923cbcba9812f2fde9dabd3ff129771c20cf229d400aea7c7c876f57f273d5eb753effc468bb420402bbe57411434c7d3ef64a2a7f738c4e06373530c589c8fb6aa0b384c82ae72e9fabfe1f6c8ba82f00c7fa6e18cbc97338157fded3dd33ccfa4f532a521a616c101b06bd02aa383dcda4b3a7a25c35e9424d926eb30a725108fc344948cd63c1ad82fead1000c6d4ecdf7347fb77c8bcb88b963518ffa3df454458ea1256c2546c538a9d7d23261b00c3b2617951e96fcc53010af14ae957f7710b50a4c989958ef7cabf0ddfa242fbc4dc8222ce7d85ecede954d65d1c88a158b25d7df0b7852d6c825f9e9ac17020f7904c0dd72ea114f582b84b5397b75fad629f22c64b0c332941bb01b894cc84b2a1a0a28e27d1e03b48d047dd48a0a9683b41a6b2e205346d74db2fa3f98985b9f0918ece88af2b8443b6ccae952345085308485b34271d8584e9633c05ed21daf64ffa244757d8e89dae997b9f66fe8e4118454f38a922a154dcffb609e55348aab43716f54322906fd4e26266c1f295e334dbdd96&t=my-customization-wpbqtdki&hide_column=true';
        `}
      </Script>

      <style jsx global>
        {`
          :root {
            --aicado-greetings-bg: rgba(240, 240, 240, 1);
            --aicado-greetings-color: rgba(37, 37, 37, 1);
            --aicado-greetings-font-family: Inter, sans-serif;
          }
        `}
      </style>
    </>
  );
}
