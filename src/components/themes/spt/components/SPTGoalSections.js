import React from "react";

function SPTGoalSections({ technology, section }) {
  const { title, description, media, call_to_action_items } = section || {};
  // console.log("LE GOALS", goal_section);
  const renderImage = () => {
    return (
      <img
        className="img"
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
    <div className="spt-section-padding spt-section-margin-top">
      <div className="spt-goal-section spt-section-style spt-section">
        <div className="row" style={{ flexDirection: "row" }}>
          <div
            className="col-md-6 pc-vanish spt-flex-column-m mobile-margin mobile-padding"
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              "--my-custom-margin": "15px 0px",
              "--my-custom-padding": "0px",
            }}
          >
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

            <div style={{ display: "flex", flexDirection: "row" }}>
              {call_to_action_items?.map(({ url, text }) => (
                <div
                  onClick={() => {
                    if (!url) return;
                    window.open(url, "_blank");
                  }}
                  className="spt-btn mobile-width mobile-margin custom-margin s-touchable-opacity"
                  style={{
                    "--my-custom-width": "100%",
                    "--my-custom-margin": "10px 5px",
                    "--my-pc-custom-margin": "30px 5px",
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 phone-vanish" style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
            {renderImage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPTGoalSections;
