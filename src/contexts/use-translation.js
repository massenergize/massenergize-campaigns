import React from 'react';
import { useLocale } from "./locale-context";
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

const TranslationContext = React.createContext();


export const useTranslation = () => {
  const context = React.useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  return context;
}

export const TranslationProvider = ({ children }) => {
  const {locale, setLocale} = useLocale();

  const [content, setContent] = React.useState({ en, fr, es });

  function translate(key) {
    return content[locale][key] || key;
  }

  return (
    <TranslationContext.Provider value={{ locale, setAndPersistLocale, content }}>
      {children}
    </TranslationContext.Provider>
  );
};
