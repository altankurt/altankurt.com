import { useRouter } from 'next/router';
import { Vercel, Github } from '../../assets/icons/index.js';
import { projects } from '../../data/projects.js';

export default function Projects() {
  const router = useRouter();

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <ol className="grid lg:grid-cols-3 gap-10"></ol>
    </section>
  );
}
