import { motion } from 'framer-motion'

const timeline = [
  {
    title: 'AI Developer & Automation Specialist',
    date: '2024 - Present',
    company: 'Freelance',
    points: [
      'Building AI-powered applications with LLM integrations',
      'Developing intelligent automation workflows with n8n and Make',
      'Creating RAG systems and conversational AI agents',
    ],
  },
  {
    title: 'UI/UX Designer & Web Developer',
    date: '2022 - 2023',
    company: 'Freelance',
    points: [
      'Designing responsive web interfaces and mobile app UIs',
      'Building full-stack applications with Next.js and Supabase',
      'Creating brand identities and visual design systems',
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-32">
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
          <h2 className="font-display text-3xl font-bold">About</h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
          {/* Left - Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-vermillion text-6xl font-display leading-none">
              &ldquo;
            </span>
            <p className="text-2xl lg:text-3xl font-display italic leading-snug text-bone/90 -mt-4">
              I build intelligent systems that feel human and design interfaces
              that feel alive.
            </p>
          </motion.div>

          {/* Right - Bio & Timeline */}
          <div>
            <motion.p
              className="text-ash leading-[1.9] text-base"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I&apos;m Yassine Nfouh, an AI Developer and Web Designer based in
              Morocco. Over the past 3+ years, I&apos;ve focused on bridging the
              gap between artificial intelligence and human-centered design.
              From building LLM-powered applications and intelligent automation
              systems to crafting responsive web interfaces, my work lives at
              the intersection of technology and creativity. I specialize in
              GPT-4, Claude API, Next.js, Python, and workflow automation
              tools like n8n and Make.
            </motion.p>

            {/* Timeline */}
            <motion.div
              className="mt-12 space-y-8 border-l border-white/10 pl-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  {/* Diamond marker */}
                  <div className="absolute -left-[33px] top-2 w-2 h-2 bg-vermillion rotate-45" />
                  <h3 className="font-display font-bold text-bone">
                    {item.title}
                  </h3>
                  <p className="font-mono text-sm text-vermillion mt-1">
                    {item.date}
                  </p>
                  <p className="text-ash text-sm mt-1">{item.company}</p>
                  <ul className="mt-3 space-y-1">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-ash text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-[1px] before:bg-vermillion/50"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
