import { motion } from 'framer-motion'

export default function PageReveal() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-void"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      onAnimationComplete={(definition) => {
        const target = definition as { y: string }
        if (target.y === '-100%') {
          const el = document.getElementById('page-reveal')
          if (el) el.style.display = 'none'
        }
      }}
      id="page-reveal"
    />
  )
}
