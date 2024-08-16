import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStaticText,
  loadActiveLanguageAction,
  setActiveLanguageInStorage,
  toggleUniversalModal,
} from "../../redux/actions/actions";
import { PREFERRED_LANGUAGE_STORAGE_KEY, smartString } from "../../utils/utils";
import LanguageSelectionModal from "./LanguageSelectionModal";

const DEFAULT = { name: "--", code: "---" };
function LanguageSelector() {
  const campaign = useSelector((state) => state?.campaign);
  const languages = campaign?.languages || [];
  const activeLanguage = useSelector((state) => state?.activeLanguage);
  const { modals } = getStaticText();
  const staticT = modals?.languageSelectionModal || {};
  const dispatch = useDispatch();

  const openModal = (data) => {
    dispatch(toggleUniversalModal(data));
  };

  const getLangLetters = (code) => code.split("-")[0] || "";
  const setActiveLanguage = (lang, reload = true) => {
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    if (reload) window.location.reload();
  };

  return (
    <div
      className="touchable-opacity"
      onClick={() =>
        openModal({
          noFooter: true,
          show: true,
          title: staticT?.title?.text || "Choose a Language",
          component: () => <LanguageSelectionModal languages={languages} selectLanguage={setActiveLanguage} />,
        })
      }
      style={{
        position: "absolute",
        top: 0,
        right: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 18,
        height: "100%",
        fontWeight: "bold",
        color: "var(--app-main-color)",
        textTransform: "uppercase",
      }}
    >
      <i className="fa fa-globe" style={{ marginRight: 3 }}></i>
      <span>{getLangLetters(activeLanguage)}</span>
    </div>
  );
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
