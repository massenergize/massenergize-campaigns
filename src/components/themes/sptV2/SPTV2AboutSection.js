import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTButton from "./components/SPTButton.js";
import { getStaticText } from "../../../redux/actions/actions.js";
import { getTheme } from "../../../utils/Values.js";

function SPTV2AboutSection({ technology, themeKey }) {
  const { name, description, summary, deals, image, call_to_action } = technology || {};

  const theme = getTheme(themeKey);
  const { spt } = getStaticText();
  const addOnT = spt?.about?.titleAddOn;

  return (
    <SPTSectionComponent style={{ background: "#ffe7e4" }}>
      <div
        className="col-md-6 spt-flex-column-m "
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <h1 className="spt-mobile-section-t">
          {name}
          {addOnT ? `: ${addOnT?.text}` : ""}
        </h1>
        <div
          style={{ color: theme?.darkText }}
          className="spt-body-font"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></div>

        {call_to_action && (
          <SPTButton themeKey={themeKey} href={call_to_action?.url}>
            {call_to_action?.text || "Sign Up Here"}
          </SPTButton>
        )}
      </div>
      <div
        className="col-md-6 spt-section-img-area mobile-margin "
        style={{ "--justify-content": "end" }}
        // style={{ "--my-custom-margin": 0, display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <img
          className="spt-s-img"
          src={image?.url}
          alt="Community Solar"
          style={{ "--my-custom-margin": "20px 0px", background:'red' }}
        />
      </div>
    </SPTSectionComponent>
  );
}

export default SPTV2AboutSection;
