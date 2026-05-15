import { motion } from 'framer-motion'

interface Project {
  number: string
  title: string
  description: string
  link: string
  tags: string[]
  image: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'InvoiceFlow',
    description:
      'AI-ready invoice management SaaS with automated generation and real-time tracking.',
    link: 'https://invoice-saas-xi.vercel.app',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
    image: '/assets/invoiceflow.jpg',
  },
  {
    number: '02',
    title: 'LeadGenius',
    description:
      'Open-source AI-powered lead generation with LLM-driven personalization at scale.',
    link: 'https://github.com/YASSINENFAI/LeadGenius',
    tags: ['Python', 'OpenAI API', 'n8n'],
    image: '/assets/socioconnect-branding.png',
  },
  {
    number: '03',
    title: 'CV Pro Builder',
    description:
      'Professional CV builder with AI content suggestions and ATS optimization.',
    link: 'https://cvpersonal.xyz',
    tags: ['Next.js', 'Claude API', 'Tailwind CSS'],
    image: '/assets/cvbuilder.jpg',
  },
  {
    number: '04',
    title: 'Hirafi App',
    description:
      'Bilingual skills marketplace application with full-stack architecture.',
    link: 'https://github.com/YASSINENFAI/hirafi',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    image: '/assets/hirafi-app.jpg',
  },
]

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 1

  return (
    <motion.div
      className="py-16 border-b border-white/5 group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Hover accent line */}
      <div className="absolute left-0 top-0 w-[2px] h-0 bg-vermillion group-hover:h-full transition-all duration-500" />

      <div
        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
          isEven ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Text Side */}
        <div className="flex-1">
          <p className="text-xs text-ash uppercase tracking-widest mb-2">
            {project.number}
          </p>
          <h3 className="font-display text-3xl lg:text-5xl font-bold text-bone mb-4 group-hover:text-vermillion transition-colors">
            {project.title}
          </h3>
          <p className="text-ash text-base max-w-md mb-6">
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-smoke hover:text-vermillion hover:border-vermillion/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ash hover:text-vermillion flex items-center gap-2 mt-4 transition-colors"
          >
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-[400px] hidden lg:block">
          <div className="rounded-sm overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[280px] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-2 h-2 bg-vermillion rotate-45" />
          <h2 className="font-display text-3xl font-bold">Selected Work</h2>
        </motion.div>

        {/* Project Blocks */}
        {projects.map((project, index) => (
          <ProjectBlock key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
