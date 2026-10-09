import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n';

// Assuming supported languages based on previously set up locales
type Language = 'en' | 'hi' | 'pa' | 'mr' | 'te' | 'bn' | 'es' | 'fr' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('nexora_lang') as Language) || 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.body.className = `${document.body.className.replace(/font-\w+/, '').trim()} font-${language}`;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('nexora_lang', lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    // Sync with i18next initialized language
    const currentLang = i18n.language as Language;
    if (currentLang && currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
