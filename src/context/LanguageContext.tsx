import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import { translations } from '../i18n/translations'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.')
      let value: unknown = translations[language]
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = (value as Record<string, unknown>)[k]
        } else {
          return key
        }
      }
      return typeof value === 'string' ? value : key
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
