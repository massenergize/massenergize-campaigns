import React from "react";
import { loadActiveLanguageAction, setActiveLanguageInStorage } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function MobileLanguageSelector() {
  const activeLanguage = useSelector((state) => state?.activeLanguage);
  const languages = useSelector((state) => state?.usersListOfLanguages);
  const dispatch = useDispatch();
  const setActiveLanguage = (lang, reload = true) => {
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    if (reload) window.location.reload();
  };
  return (
    <div className="floating-l-drop" >
      <select
        value={activeLanguage}
        onChange={(e) => {
          const langs = languages;
          const key = e?.target?.value; // languageISO
          const obj = langs.find((l) => l?.code === key);
          setActiveLanguage(obj?.code);
        }}
        className="undefault"
      >
        {languages?.map(({ name, code }) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MobileLanguageSelector;
