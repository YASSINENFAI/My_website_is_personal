import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()

  const stats = [
    { number: '10+', label: t('stat_projects') },
    { number: '3+', label: t('stat_years') },
    { number: '15+', label: t('stat_tools') },
    { number: '70%', label: t('stat_efficiency') },
  ]

  const getTransition = (duration: number, delay: number) => {
    if (prefersReducedMotion) {
      return { duration: 0, delay: 0 }
    }
    return { duration, delay }
  }

  const getClipTransition = (delay: number) => {
    if (prefersReducedMotion) {
      return { duration: 0, delay: 0 }
    }
    return { duration: 1, ease: [0.25, 1, 0.5, 1] as const, delay }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20" aria-labelledby="hero-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.p
              className="uppercase text-xs tracking-[0.2em] font-body text-vermillion mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.8, 1.0)}
            >
              {t('hero_subtitle')}
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                id="hero-heading"
                className="font-display font-bold text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-[-0.04em] text-bone"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={getClipTransition(1.1)}
              >
                {t('hero_name1')}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="font-display font-bold text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-[-0.04em] text-vermillion"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={getClipTransition(1.2)}
              >
                {t('hero_name2')}
              </motion.h1>
            </div>

            <motion.p
              className="text-ash text-base lg:text-lg max-w-[560px] leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.8, 1.5)}
            >
              {t('hero_desc')}
            </motion.p>

            <motion.div
              className="mt-8 flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.8, 1.6)}
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-vermillion text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:shadow-[0_8px_30px_rgba(255,61,0,0.3)] transition-all"
              >
                {t('hero_view_work')}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border border-white/15 text-bone px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-vermillion hover:text-vermillion transition-all"
              >
                {t('hero_get_in_touch')}
              </a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={getTransition(1, 1.5)}
          >
            {/* Outer decorative border */}
            <motion.div
              className="absolute -bottom-5 -right-5 w-[280px] h-[360px] border border-vermillion/20 rounded-sm"
              initial={{ opacity: 0, x: 10, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={getTransition(0.8, 2.0)}
            />

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 z-20">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-vermillion" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-vermillion" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 z-20">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-vermillion" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-vermillion" />
            </div>

            {/* Glow effect behind image */}
            <div className="absolute inset-0 z-0 blur-2xl opacity-20 bg-vermillion/30 scale-90 rounded-full" />

            {/* Image with border */}
            <div className="relative z-10 border-2 border-white/10 rounded-sm overflow-hidden group">
              <img
                src="/assets/profile.jpg"
                alt="Yassine Nfouh"
                loading="lazy"
                className="w-[280px] h-[360px] object-cover grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/5 flex flex-wrap gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.8, 1.8)}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-bone">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wide text-ash mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
