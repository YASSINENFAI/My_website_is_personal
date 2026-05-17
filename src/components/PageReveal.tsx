import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function PageReveal() {
  const [done, setDone] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  if (done) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9990]"
      style={{ backgroundColor: '#050505' }}
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 1.2,
        ease: [0.25, 1, 0.5, 1],
      }}
      onAnimationComplete={(definition) => {
        const target = definition as { y: string }
        if (target.y === '-100%') {
          setDone(true)
        }
      }}
    />
  )
}
