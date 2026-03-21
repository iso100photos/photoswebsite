'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations, type Language, type Translations } from './translations'

interface LanguageContextType {
  lang: Language
  setLang: (l: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    // Check localStorage first (user's explicit preference)
    const stored = localStorage.getItem('iso100-lang') as Language | null
    if (stored === 'en' || stored === 'es') {
      setLangState(stored)
      return
    }
    // Fall back to browser language — default to Spanish if browser is set to Spanish
    const browser = (navigator.language || '').toLowerCase()
    if (browser.startsWith('es')) {
      setLangState('es')
    }
  }, [])

  function setLang(l: Language) {
    setLangState(l)
    localStorage.setItem('iso100-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
