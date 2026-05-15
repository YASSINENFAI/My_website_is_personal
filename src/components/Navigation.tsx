import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.work'), href: '#work' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'h-16 bg-void/90 backdrop-blur-xl'
            : 'h-20 bg-void/80 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-bone text-xl">
            Y<span className="text-vermillion">.</span>N
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="uppercase text-xs tracking-widest font-body text-bone/70 hover:text-vermillion transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="border border-white/10 hover:border-vermillion text-bone text-xs uppercase tracking-widest px-4 py-2 transition-colors font-body"
              whileTap={{ scale: 0.95 }}
              aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </motion.button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="border border-white/10 hover:border-vermillion text-bone text-xs uppercase tracking-widest px-5 py-2.5 transition-colors"
            >
              {t('nav.letsTalk')}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-7 h-7 items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {/* Language Toggle - Mobile */}
              <motion.button
                onClick={toggleLanguage}
                className="border border-white/10 hover:border-vermillion text-bone text-sm uppercase tracking-widest px-6 py-2.5 transition-colors font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0, duration: 0.4 }}
                aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                {language === 'en' ? 'عربي' : 'EN'}
              </motion.button>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-3xl font-bold text-bone hover:text-vermillion transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: (i + 1) * 0.1, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 border border-vermillion text-vermillion text-sm uppercase tracking-widest px-8 py-3 transition-colors hover:bg-vermillion hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                {t('nav.letsTalk')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
