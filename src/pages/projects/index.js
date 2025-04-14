import { useRouter } from 'next/router'
import { ExternalLink, Github } from '../../assets/icons/index.js'
import { projects } from '../../data/Projects.js'
import Container from '@/components/Container'

export default function Projects() {
  const router = useRouter()

  return (
    <Container>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Projects</h1>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Projects section is currently being updated. Please check back soon!
        </p>

        {/* Projects will be updated soon
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <li
              key={project.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#17191e] hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.links.map(link => (
                      <a
                        key={link.id}
                        aria-label={`Link to ${project.title}`}
                        href={link.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {link.id === 1 ? <Github /> : <ExternalLink />}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto border-t border-gray-200 dark:border-gray-800 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
        */}
      </div>
    </Container>
  )
}
