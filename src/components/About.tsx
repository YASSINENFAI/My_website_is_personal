import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const reducedMotion = useReducedMotion()
  const { t } = useLanguage()
  const initial = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
  const initialSmall = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
  const transition = reducedMotion ? { duration: 0 } : { duration: 0.8 }

  const timeline = [
    {
      title: t('about.timeline.role1.title'),
      date: t('about.timeline.role1.date'),
      company: t('about.timeline.role1.company'),
      points: [
        t('about.timeline.role1.point1'),
        t('about.timeline.role1.point2'),
        t('about.timeline.role1.point3'),
      ],
    },
    {
      title: t('about.timeline.role2.title'),
      date: t('about.timeline.role2.date'),
      company: t('about.timeline.role2.company'),
      points: [
        t('about.timeline.role2.point1'),
        t('about.timeline.role2.point2'),
        t('about.timeline.role2.point3'),
      ],
    },
  ]

  return (
    <section id="about" className="py-32" aria-labelledby="about-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={transition}
        >
          <div className="w-2 h-2 bg-vermillion rotate-45" />
          <h2 id="about-heading" className="font-display text-3xl font-bold">
            {t('about.title')}
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
          {/* Left - Pull Quote */}
          <motion.div
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
          >
            <span className="text-vermillion text-6xl font-display leading-none">
              &ldquo;
            </span>
            <p className="text-2xl lg:text-3xl font-display italic leading-snug text-bone/90 -mt-4">
              {t('about.quote')}
            </p>
          </motion.div>

          {/* Right - Bio & Timeline */}
          <div>
            <motion.p
              className="text-ash leading-[1.9] text-base"
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.3 }}
            >
              {t('about.bio')}
            </motion.p>

            {/* Timeline */}
            <motion.div
              className="mt-12 space-y-8 border-s border-white/10 ps-8"
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative"
                  initial={initialSmall}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 * index }}
                >
                  {/* Diamond marker */}
                  <div className="absolute -start-[33px] top-2 w-2 h-2 bg-vermillion rotate-45" />
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
                        className="text-ash text-sm ps-4 relative before:content-[''] before:absolute before:start-0 before:top-[0.6em] before:w-1.5 before:h-[1px] before:bg-vermillion/50"
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
