import React, { useContext, useState } from "react";
import en from "../i18n/en.json";
import fr from "../i18n/fr.json";
import es from "../i18n/es.json";

// Step 1 - Create the context
const LocaleContext = React.createContext("en");

type I18Keys = keyof typeof en;

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  // @ts-ignore
  const { locale, setAndPersistLocale, translate } = context;

  return {
    locale,
    setLocale: setAndPersistLocale,
    t : (key : I18Keys) => translate(key)
  };
};

// Step 2 - Create a Provider component
export function LocaleProvider({ children, defaultLocale = "en" }) {

  const [locale, setLocale] = useState(defaultLocale);
  const [content, setContent] = React.useState({ en, fr, es });

  function setAndPersistLocale(newLocale : I18Keys) {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  }

  function translate(key) {
    return content[locale][key] || key;
  }

  // @ts-ignore
  return (<LocaleContext.Provider value={{ locale, setAndPersistLocale, translate }}>{children}</LocaleContext.Provider>);
}
