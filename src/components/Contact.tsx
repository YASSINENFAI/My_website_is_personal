import { motion } from 'framer-motion'

const contactCards = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'azffhk@gmail.com',
    href: 'mailto:azffhk@gmail.com',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: '+212 762 428 906',
    href: 'tel:+212762428906',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.45 3.81-1.59 4.6-1.87 5.12-1.87.11 0 .37.03.53.17.14.12.18.28.2.45-.01.06.01.24 0 .37z" />
      </svg>
    ),
    label: '@FGMANO',
    href: 'https://t.me/FGMANO',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,61,0,0.03), transparent)' }} />

      <div className="max-w-[680px] mx-auto px-6 text-center relative">
        <motion.h2
          id="contact-heading"
          className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-bone mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          className="text-ash mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Currently available for freelance projects and remote opportunities in
          AI development and web design.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-surface border border-white/5 px-5 py-4 rounded-sm hover:border-vermillion/50 hover:shadow-[0_0_20px_rgba(255,61,0,0.08)] transition-all group"
            >
              <span className="w-9 h-9 flex items-center justify-center bg-vermillion/10 text-vermillion text-sm rounded-sm group-hover:bg-vermillion group-hover:text-white transition-colors">
                {card.icon}
              </span>
              <span className="text-sm text-bone">{card.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Social Row */}
        <motion.div
          className="mt-10 pt-8 border-t border-white/5 flex justify-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://github.com/YASSINENFAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-ash hover:text-vermillion transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:azffhk@gmail.com"
            className="text-xs uppercase tracking-widest text-ash hover:text-vermillion transition-colors"
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
