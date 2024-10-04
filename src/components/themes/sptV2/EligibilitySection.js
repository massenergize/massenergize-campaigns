import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTButton from "./components/SPTButton.js";
import { getStaticText } from "../../../redux/actions/actions.js";
import SPTSectionTitle from "../spt/components/SPTSectionTitle.js";
function EligibilitySection({ section, technology, themeKey, cImage, cDescription }) {
  const { name, description, title, media } = section || {};

  const { spt } = getStaticText();
  // const addOnT = title || spt?.about?.titleAddOn;

  return (
    <SPTSectionComponent style={{}}>
      <SPTSectionTitle>{title}</SPTSectionTitle>
      <div
        className="col-md-6 spt-flex-column-m "
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 40 }}
      >
        {/* <h1 className="spt-mobile-section-t">
          {title}
       
        </h1> */}
        <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: description }}></div>

        {/* {call_to_action && (
          <SPTButton themeKey={themeKey} href={call_to_action?.url}>
            {call_to_action?.text || "Sign Up Here"}
          </SPTButton>
        )} */}
      </div>
      <div
        className="col-md-6 spt-section-img-area mobile-margin "
        style={{ "--justify-content": "end" }}
        // style={{ "--my-custom-margin": 0, display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <img
          className="spt-s-img "
          src={media?.url}
          alt="Community Solar"
          style={{ "--my-custom-margin": "20px 0px", objectFit: "contain" }}
        />
      </div>
    </SPTSectionComponent>
  );
}

export default EligibilitySection;
