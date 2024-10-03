import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTButton from "./components/SPTButton.js";
import { getStaticText } from "../../../redux/actions/actions.js";

function SPTV2AboutCampaign({ section, technology, themeKey }) {
  const { title, media, call_to_action_items } = section || {};
  const { name, description, summary, deals, image, call_to_action } = technology || {};

  const { spt } = getStaticText();
  const addOnT = spt?.about?.titleAddOn;
  const renderImage = () => {
    return (
      <img
        className="spt-s-img"
        src={media?.url}
        alt="Community Solar"
        // style={{ width: "100%", height: "100%", borderRadius: 20 }}
      />
    );
  };
  return (
    <>
      <SPTSectionComponent style={{ background: "#ffe7e4" }}>
        <div className="row" style={{ flexDirection: "row" }}>
          <div className="col-md-6 spt-section-img-area" style={{ "--justify-content": "start" }}>
            {renderImage()}
          </div>
          <div
            className="col-md-6 spt-flex-column-m"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h1 className="spt-mobile-section-t">{title || "..."}</h1>
            <p className="spt-body-font" dangerouslySetInnerHTML={{ __html: description }}></p>

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
          <h1 className="spt-mobile-section-t">
            {name}
            {addOnT ? `: ${addOnT?.text}` : ""}
          </h1>
          <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
        <div
          className="col-md-6 spt-section-img-area mobile-margin "
          style={{ "--justify-content": "end" }}
        >
          <img
            className="spt-s-img "
            src={image?.url}
            alt="Community Solar"
            style={{ "--my-custom-margin": "20px 0px", objectFit: "contain" }}
          />
        </div>
      </SPTSectionComponent>
    </>
  );
}

export default SPTV2AboutCampaign;
