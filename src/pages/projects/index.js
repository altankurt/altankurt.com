import { useRouter } from 'next/router';
import { Vercel, Github } from '../../assets/icons/index.js';
import { projects } from '../../data/Projects.js';

export default function Projects() {
  const router = useRouter();

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <ol className="grid lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <li key={project.id} className="flex flex-col group rounded-xl">
            <div className="p-4 md:p-5">
              <div className="flex flex-rol justify-between items-center">
                <h3 className="text-lg font-bold text-color">
                  {project.title}
                </h3>
                <div className="flex flex-rol gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.id}
                      aria-label={`Link to ${project.title}`}
                      href={link.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="cursor-pointer"
                    >
                      {link.id === 1 ? <Github /> : <Vercel />}
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-color">{project.description}</p>
            </div>
            <div className="border-t border-color p-4 md:p-5 text-xs font-medium uppercase flex flex-wrap gap-3">
              {project.stack.map((tech, index) => (
                <div key={index} className="project-style project-text">
                  {tech}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
