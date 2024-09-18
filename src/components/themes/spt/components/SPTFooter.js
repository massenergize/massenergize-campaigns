import React from "react";

function SPTFooter() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="spt-footer spt-section-padding">
        <h1>Chat or text with our ambassadors </h1>

        <div
          className="spt-btn mobile-width moblie-margin"
          style={{ "--my-custom-width": "fit-content", "--my-custom-margin": "30px 0px" }}
        >
          Email Us!
        </div>

        <small className="spt-footer-notes" style={{ marginTop: 20, color: "#b5b5b5" }}>
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Copyright &copy; 2024</span> All Rights
          Reserved. Powered by{" "}
          <span className="" style={{ textDecoration: "underline", fontWeight: "bold" }}>
            MassEnergize
          </span>
        </small>
      </div>
      <div className="phone-vanish" style={{ width: "25%" }}>
        <img
          alt="Supporting Footer Media"
          src="https://massenergize-prod-files.s3.amazonaws.com/media/crowd-of-people-marching-on-a-rally-2975498.jpg"
          style={{ height: 300, width: "100%", background: "blue", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default SPTFooter;
