import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTButton from "./components/SPTButton.js";
import { getStaticText } from "../../../redux/actions/actions.js";

function SPTV2AboutCampaign({ section, technology, themeKey, cImage, cDescription, cTitle }) {
  const { media, call_to_action_items, description } = section || {};

  const { spt } = getStaticText();
  const addOnT = spt?.about?.titleAddOn;
  const about = spt?.about?.prefix?.text;

  const renderImage = () => {
    return <img className="spt-s-img" src={cImage?.url} alt="Community Solar" />;
  };
  return (
    <div style={{ marginTop: 40 }}>
      <SPTSectionComponent style={{ background: "#ffe7e4" }}>
        <div className="row" style={{ flexDirection: "row" }}>
          <div className="col-md-6 spt-section-img-area" style={{ "--justify-content": "start" }}>
            {renderImage()}
          </div>
          <div
            className="col-md-6 spt-flex-column-m"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h1 className="spt-mobile-section-t">{(about || "") + " " + cTitle || "..."}</h1>
            <p className="spt-body-font" dangerouslySetInnerHTML={{ __html: cDescription }}></p>

            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
              {call_to_action_items?.map(({ url, text }) => (
                <SPTButton
                  themeKey={themeKey}
                  onClick={() => {
                    if (!url) return;
                    window.open(url, "_blank");
                  }}
                >
                  {text}
                </SPTButton>
              ))}
            </div>
          </div>
          {/* <div
              className="col-md-6 phone-vanish"
              style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            >
              {renderImage()}
            </div> */}
        </div>
      </SPTSectionComponent>
      <SPTSectionComponent style={{ background: "#ffe7e4" }}>
        <div
          className="col-md-6 spt-flex-column-m "
          style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          {/* <h1 className="spt-mobile-section-t">
            {name}
            {addOnT ? `: ${addOnT?.text}` : ""}
          </h1> */}
          <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className="col-md-6 spt-section-img-area mobile-margin " style={{ "--justify-content": "end" }}>
          <img
            className="spt-s-img "
            src={media?.url}
            alt="Community Solar"
            style={{ "--my-custom-margin": "20px 0px", objectFit: "contain" }}
          />
        </div>
      </SPTSectionComponent>
    </div>
  );
}

export default SPTV2AboutCampaign;
