import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadActiveLanguageAction, setActiveLanguageInStorage } from "../../redux/actions/actions";
import { smartString } from "../../utils/utils";

function LanguageSelector() {
  const languages = useSelector((state) => state?.offeredLanguages);
  const activeLanguage = useSelector((state) => state?.activeLanguage);
  const dispatch = useDispatch();

  const setActiveLanguage = (lang) => {
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    window.location.reload();
  };



  return (
    // <div className="l-drop">
    <div className="floating-l-drop">
      <select
        value={activeLanguage}
        onChange={(e) => {
          const langs = Object.keys(languages || {});
          const key = e?.target?.value; // languageISO
          const obj = langs.find((k) => k === key);
          setActiveLanguage(obj);
        }}
        // style={{ textTransform: "uppercase" }}
        className="undefault"
      >
        {Object.entries(languages || {})?.map(([key, name]) => (
          <option key={key} value={key}>
            {/* {smartString(name, 12)} */}
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
