import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="border border-white/10 hover:border-vermillion text-bone text-xs uppercase tracking-widest px-3 py-2 transition-colors"
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {lang === 'en' ? 'العربية' : 'English'}
    </button>
  )
}
