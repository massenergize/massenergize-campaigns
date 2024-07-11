import React from "react";
import { useSelector } from "react-redux";
import { getOfferedForThisCampaign } from "./AddOfferedLanguages";

function ToggleLanguage({ campaignId }) {
  const offeredLangs = useSelector((state) => state?.campaignOfferedLanguages);
  const content = getOfferedForThisCampaign(offeredLangs, campaignId);

  return (
    // <div className="l-drop">
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <div className="l-drop">
        <select
          // value={activeLanguage}
          onChange={(e) => {
            // const langs = Object.keys(offeredLangs || {});
            //   const key = e?.target?.value; // languageISO
            //   const obj = langs.find((k) => k === key);
            //   setActiveLanguage(obj);
          }}
          // style={{ textTransform: "uppercase" }}
          className="undefault"
        >
          {/* {Object.entries(offeredLangs || {})?.map(([key, name]) => ( */}
          {content?.map(({ label }, key) => (
            <option key={key} value={key} style={{ width: "100%" }}>
              {/* {smartString(name, 12)} */}
              {label}
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
