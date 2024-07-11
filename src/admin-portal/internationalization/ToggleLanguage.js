import React from "react";
import { useSelector } from "react-redux";

function ToggleLanguage({}) {
  const languages = useSelector((state) => state?.offeredLanguages);

  return (
    // <div className="l-drop">
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <div className="l-drop">
        <select
          // value={activeLanguage}
          onChange={(e) => {
            const langs = Object.keys(languages || {});
            //   const key = e?.target?.value; // languageISO
            //   const obj = langs.find((k) => k === key);
            //   setActiveLanguage(obj);
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
      <small style={{ fontSize: 11, marginTop: 10, color: "grey", textAlign: "center" }}>
        Select the language you want to create content in
      </small>
    </div>
  );
}

export default ToggleLanguage;
