import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTButton from "./components/SPTButton.js";

function SPTV2AboutSection({ technology, themeKey }) {
  const { name, description, summary, deals, image } = technology || {};

  return (
    <SPTSectionComponent style={{ background: "#ffe7e4" }}>
      <div
        className="col-md-6 spt-flex-column-m "
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <h1 className="spt-mobile-section-t">
          {name}
          {": What is it?"}
        </h1>
        <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: summary }}></div>

        <SPTButton themeKey={themeKey}>Sign Up Now!</SPTButton>
      </div>
      <div
        className="col-md-6 spt-section-img-area mobile-margin "
        style={{ "--justify-content": "end" }}
        // style={{ "--my-custom-margin": 0, display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <img
          className="spt-s-img "
          src={image?.url}
          alt="Community Solar"
          style={{ "--my-custom-margin": "20px 0px" }}
        />
      </div>
    </SPTSectionComponent>
  );
}

export default SPTV2AboutSection;
