import React from "react";

function SPTFooter({ section }) {
  const { title, description, media, call_to_action_items } = section || {};
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="spt-footer spt-section-padding">
        <h1>{title || ""} </h1>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {call_to_action_items?.map(({ url, text }, index) => (
            <div
              key={index}
              onClick={() => {
                if (!url) return;
                window.open(url, "_blank");
              }}
              className="spt-btn mobile-width moblie-margin"
              style={{ "--my-custom-width": "fit-content", "--my-custom-margin": "0px 10px" }}
            >
              {text}
            </div>
          ))}
          {/* <div
            className="spt-btn mobile-width moblie-margin"
            style={{ "--my-custom-width": "fit-content", "--my-custom-margin": "30px 0px" }}
          >
            Email Us!
          </div> */}
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
          src={
            media?.url ||
            "https://massenergize-prod-files.s3.amazonaws.com/media/crowd-of-people-marching-on-a-rally-2975498.jpg"
          }
          style={{ height: 300, width: "100%", background: "blue", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default SPTFooter;
