import { motion, useReducedMotion } from 'framer-motion'

interface SkillDomain {
  title: string
  skills: string[]
  span?: boolean
}

const skillDomains: SkillDomain[] = [
  {
    title: 'AI / LLM',
    skills: [
      'GPT-4',
      'Claude API',
      'Gemini API',
      'OpenAI API',
      'NLP',
      'RAG',
      'Prompt Engineering',
      'AI Agents',
      'Chatbot Dev',
    ],
    span: true,
  },
  {
    title: 'Development & Cloud',
    skills: [
      'Python',
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Vercel',
      'REST APIs',
    ],
  },
  {
    title: 'Web & App Design',
    skills: [
      'Web Design',
      'App Interface Design',
      'UI/UX Design',
      'Responsive Design',
      'Mobile UI',
      'Brand Identity',
    ],
  },
  {
    title: 'Automation & Tools',
    skills: [
      'Make (Integromat)',
      'n8n',
      'RPA',
      'Webhooks',
      'GitHub',
      'Git',
      'CI/CD',
    ],
  },
]

export default function Skills() {
  const reducedMotion = useReducedMotion()
  const initial = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }

  return (
    <section id="skills" className="py-32" aria-labelledby="skills-heading">
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
          <h2 id="skills-heading" className="font-display text-3xl font-bold">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5">
          {skillDomains.map((domain, index) => (
            <motion.div
              key={domain.title}
              className={`bg-void p-8 lg:p-10 hover:bg-surface transition-colors duration-300 ${
                domain.span ? 'md:col-span-2' : ''
              }`}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold text-bone mb-4 flex items-center gap-3">
                <span className="w-5 h-[2px] bg-vermillion" />
                {domain.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-elevated border border-white/5 px-3 py-1.5 text-xs text-ash hover:text-vermillion hover:bg-vermillion/5 hover:border-vermillion/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
