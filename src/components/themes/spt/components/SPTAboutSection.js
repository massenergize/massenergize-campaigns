import React from "react";
import { smartString } from "../../../../utils/utils";

function SPTAboutSection({ technology }) {
  const { name, description, summary, deals } = technology || {};

  return (
    <div className="spt-section-padding spt-section mobile-margin" style={{ "--my-custom-margin": "20px 0px" }}>
      <div className="spt-section-style">
        <div className="row " style={{}}>
          <div
            className="col-md-6 spt-flex-column-m mobile-margin "
            style={{ "--my-custom-margin": 0, display: "flex", alignItems: "center" }}
          >
            <img
              className="img mobile-margin"
              src="https://www.massenergize.org/wp-content/uploads/2023/12/pexels-pixabay-433308-scaled.jpg"
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
        </div>
      </div>
    </div>
  );
}

export default SPTAboutSection;
