import React from "react";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTButton from "./components/SPTButton";

function SPTV2OurGoals({ section }) {
  const { title, description, media, call_to_action_items } = section || {};
  const renderImage = () => {
    return (
      <img
        className="spt-s-img"
        src={
          media?.url ||
          "https://massenergize-prod-files.s3.amazonaws.com/media/crowd-of-people-marching-on-a-rally-2975498.jpg"
        }
        alt="Community Solar"
        // style={{ width: "100%", height: "100%", borderRadius: 20 }}
      />
    );
  };
  return (
    <SPTSectionComponent>
      <div className="row" style={{ flexDirection: "row" }}>
        <div className="col-md-6 spt-section-img-area" style={{ "--justify-content": "start" }}>
          {renderImage()}
        </div>
        <div
          className="col-md-6 spt-flex-column-m"
          style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <h1 className="spt-mobile-section-t">{title || "..."}</h1>
          <p className="spt-body-font" dangerouslySetInnerHTML={{ __html: description }}>
            {/* Community solar is a solar power plant whose electricity is shared by more than one household. It is a way
              for people to have access to solar energy even if they cannot or prefer not to install solar panels on
              their property. Community solar is also known as shared solar or solar gardens. */}
          </p>

          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            {call_to_action_items?.map(({ url, text }) => (
              <SPTButton
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
  );
}

export default SPTV2OurGoals;
