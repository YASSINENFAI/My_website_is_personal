import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="py-8 text-center border-t border-white/5">
      <p className="text-xs text-ash">
        &copy; 2026 Yassine Nfouh. {t('footer_text')}
      </p>
    </footer>
  )
}
