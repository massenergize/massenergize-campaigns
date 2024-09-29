import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";

function SPTV2OurGoals({ technology }) {
  const { name, description, summary, deals, image } = technology || {};
  return (
    <SPTSectionComponent>
      <div
        className="col-md-6 spt-flex-column-m mobile-margin "
        style={{
          "--my-custom-margin": 0,
          display: "flex",
          alignItems: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="spt-s-img mobile-margin"
          src={image?.url}
          alt="Community Solar"
          style={{ "--my-custom-margin": "20px 0px" }}
          //   style={{ width: "100%", height: "100%", borderRadius: 20 }}
        />
      </div>
      <div
        className="col-md-6 spt-flex-column-m "
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <h1 className="spt-mobile-section-t">{name}</h1>
        <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: summary }}></div>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {deals?.map((deal, index) => {
            return (
              <div key={index} className="spt-about-chip">
                <i className=" fa fa-check-circle" />
                <span>{deal?.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SPTSectionComponent>
  );
}

export default SPTV2OurGoals;
