import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 text-center border-t border-white/5">
      <p className="text-xs text-ash">
        &copy; {t('footer.copyright')}
      </p>
    </footer>
  )
}
