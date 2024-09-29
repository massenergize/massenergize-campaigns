import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";

function SPTV2AboutSection({ technology }) {
  const { name, description, summary, deals, image } = technology || {};

  return (
    <SPTSectionComponent style={{ background: "#ffe7e4" }}>
      <div
        className="col-md-6 spt-flex-column-m "
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <h1 className="spt-mobile-section-t">{name}</h1>
        <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: summary }}></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor, nihil ipsa eos qui blanditiis id
          eligendi iste quasi! Repudiandae, inventore tempora fugit sapiente eveniet saepe cupiditate distinctio magnam
          esse?
        </p>
      </div>
      <div
        className="col-md-6 spt-flex-column-m mobile-margin "
        style={{ "--my-custom-margin": 0, display: "flex", alignItems: "center", justifyContent: "end" }}
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
