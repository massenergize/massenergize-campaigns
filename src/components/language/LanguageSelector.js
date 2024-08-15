import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadActiveLanguageAction, setActiveLanguageInStorage } from "../../redux/actions/actions";
import { PREFERRED_LANGUAGE_STORAGE_KEY, smartString } from "../../utils/utils";

const DEFAULT = { name: "--", code: "---" };
function LanguageSelector() {
  const campaign = useSelector((state) => state?.campaign);
  const languages = campaign?.languages || [];
  // const languages = useSelector((state) => state?.offeredLanguages);
  const activeLanguage = useSelector((state) => state?.activeLanguage);
  const dispatch = useDispatch();

  const setActiveLanguage = (lang, reload = true) => {
    // if (lang === DEFAULT?.code) return console.log("Lets see", lang);
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    if (reload) window.location.reload();
  };

  // if (!languages.length) {
  //   setActiveLanguage("en-US", false);
  //   console.log("I run this place ooo", languages)
  //   return null;
  // }
  return (
    // <div className="l-drop">
    <div className="floating-l-drop">
      <select
        value={activeLanguage}
        onChange={(e) => {
          const langs = languages;
          const key = e?.target?.value; // languageISO
          // if (key === DEFAULT?.code) return;
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
