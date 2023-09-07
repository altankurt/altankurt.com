import Image from 'next/image';

function Homepage() {
  return (
    <section id="homepage" className="p-6">
      {
        <article className="my-16 xl:flex justify-between items-center">
          <section className="max-w-3xl">
            <h1 className="h2 md:h1 ">Hello There!</h1>
            <p className="text-color text-xl py-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>

          <Image
            src="/reflection.png"
            alt="Hero Section Reflection Selfie"
            className="rounded-lg lg:w-[540px] lg:h-[360px] xl:w-[432px] xl:h-[288px] 2xl:w-[540px] 2xl:h-[360px]"
          />
        </article>
      }
    </section>
  );
}
