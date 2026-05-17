import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface Project {
  number: string
  title: string
  description: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    number: '01',
    title: 'InvoiceFlow',
    description:
      'AI-ready invoice management SaaS with automated generation and real-time tracking.',
    link: 'https://invoice-saas-xi.vercel.app',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
  },
  {
    number: '02',
    title: 'LeadGenius',
    description:
      'Open-source AI-powered lead generation with LLM-driven personalization at scale.',
    link: 'https://github.com/YASSINENFAI/LeadGenius',
    tags: ['Python', 'OpenAI API', 'n8n'],
  },
  {
    number: '03',
    title: 'CV Pro Builder',
    description:
      'Professional CV builder with AI content suggestions and ATS optimization.',
    link: 'https://cvpersonal.xyz',
    tags: ['Next.js', 'Claude API', 'Tailwind CSS'],
  },
  {
    number: '04',
    title: 'Hirafi App',
    description:
      'Bilingual skills marketplace application with full-stack architecture.',
    link: 'https://github.com/YASSINENFAI/hirafi',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
  },
]

function ProjectCard({ project, index, reducedMotion }: { project: Project; index: number; reducedMotion: boolean }) {
  const { t } = useLanguage()

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-surface border border-white/5 p-8 lg:p-10 rounded-sm overflow-hidden hover:border-vermillion/30 transition-all duration-500"
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
      whileHover={reducedMotion ? {} : { y: -4 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,61,0,0.06), transparent)' }} />

      {/* Top row: number + arrow */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-vermillion/60 tracking-widest">
          {project.number}
        </span>
        <span className="text-ash group-hover:text-vermillion transition-colors">
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl lg:text-3xl font-bold text-bone mb-3 group-hover:text-vermillion transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-ash text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-elevated border border-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-ash/70 group-hover:text-ash group-hover:border-white/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-vermillion group-hover:w-full transition-all duration-500" />

      <span className="sr-only">{t('view_project')} (opens in new tab)</span>
    </motion.a>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()
  const initial = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }

  return (
    <section id="work" className="py-32" aria-labelledby="work-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8 }}
        >
          <div className="w-2 h-2 bg-vermillion rotate-45" />
          <h2 id="work-heading" className="font-display text-3xl font-bold">{t('work_title')}</h2>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} reducedMotion={!!reducedMotion} />
          ))}
        </div>
      </div>
    </section>
  )
}
