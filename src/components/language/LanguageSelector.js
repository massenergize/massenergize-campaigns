import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadActiveLanguageAction, setActiveLanguageInStorage } from "../../redux/actions/actions";
import { PREFERRED_LANGUAGE_STORAGE_KEY, smartString } from "../../utils/utils";

function LanguageSelector() {
  const campaign = useSelector((state) => state?.campaign);
  const languages = campaign?.languages || [];
  // const languages = useSelector((state) => state?.offeredLanguages);
  const activeLanguage = useSelector((state) => state?.activeLanguage);
  const dispatch = useDispatch();

  const setActiveLanguage = (lang) => {
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    window.location.reload();
  };

  if (!languages || languages.length === 0) {
    return null;
  }
  return (
    // <div className="l-drop">
    <div className="floating-l-drop">
      <select
        value={activeLanguage}
        onChange={(e) => {
          const langs = languages;
          const key = e?.target?.value; // languageISO
          const obj = langs.find((l) => l?.code === key);

          setActiveLanguage(obj?.code);
        }}
        // style={{ textTransform: "uppercase" }}
        className="undefault"
      >
        {languages?.map(({ name, code }) => (
          <option key={code} value={code}>
            {/* {smartString(name, 12)} */}
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
