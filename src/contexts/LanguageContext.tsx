import { createContext, useContext, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
type Language = "en" | "hi";
const LanguageContext = createContext<
  { language: Language; setLanguage: (lang: Language) => void } | undefined
>(undefined);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const language: Language = i18n.resolvedLanguage?.startsWith("hi")
    ? "hi"
    : "en";
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: (lang) => {
          void i18n.changeLanguage(lang);
        },
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage requires LanguageProvider");
  return value;
}
