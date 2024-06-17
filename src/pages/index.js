/* eslint-disable @next/next/no-sync-scripts */
import Image from 'next/image'
import Link from 'next/link'

const linkPath = '/about'

export default function Homepage() {
  return (
    <section id='homepage' className='p-6'>
      {
        <article className='my-16 xl:flex justify-between items-center'>
          <section className='max-w-3xl'>
            <h1 className='h2 md:h1 pb-4'>Hello, I&apos;m Altan.</h1>
            <p className='paragraph'>
              I&apos;m a Frontend Developer. I enjoy learning about new
              technologies and tools, writing articles, and working on
              open-source projects.
            </p>
            <p className='paragraph pt-4'>
              My motivation for this website is to showcase my professional
              journey and, over time, to display a reflection of my life and
              hobbies, such as photography and travel.
            </p>
            <p className='paragraph pt-4'>
              If you would like to know more about my career, you can check out
              the{' '}
              <Link
                className='text-primary decoration-2 hover:underline'
                href={linkPath}
              >
                About page
              </Link>
              .
            </p>
          </section>

          <Image
            src='/reflection.png'
            alt='Hero Section Reflection Selfie'
            width={540}
            height={360}
            className='rounded-lg lg:w-[540px] lg:h-[360px] xl:w-[432px] xl:h-[288px] 2xl:w-[540px] 2xl:h-[360px] pt-4 xl:pt-0'
          />
        </article>
      }
    </section>
  )
}
