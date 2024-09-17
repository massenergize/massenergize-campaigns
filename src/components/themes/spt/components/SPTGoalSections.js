import React from "react";

function SPTGoalSections() {
  const renderImage = () => {
    return (
      <img
        className="img"
        src="https://massenergize-prod-files.s3.amazonaws.com/media/crowd-of-people-marching-on-a-rally-2975498.jpg"
        alt="Community Solar"
        // style={{ width: "100%", height: "100%", borderRadius: 20 }}
      />
    );
  };
  return (
    <div className="spt-section-padding spt-section-margin-top">
      <div
        className="spt-goal-section spt-section-style spt-section"
        // style={{
        //   background: "#dfeef08c",
        //   border: "solid 1px #f3f3f3",
        //   borderRadius: 20,
        //   padding: 70,
        //   minHeight: 400,
        // }}
      >
        <div className="row" style={{ flexDirection: "row" }}>
          <div
            className="col-md-6 pc-vanish spt-flex-column-m mobile-margin"
            style={{ marginLeft: "auto", display: "flex", alignItems: "center", "--my-custom-margin": "15px 0px" }}
          >
            {renderImage()}
          </div>
          <div
            className="col-md-6 spt-flex-column-m"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h1 className="spt-mobile-section-t">What is our goal?</h1>
            <p className="spt-body-font">
              Community solar is a solar power plant whose electricity is shared by more than one household. It is a way
              for people to have access to solar energy even if they cannot or prefer not to install solar panels on
              their property. Community solar is also known as shared solar or solar gardens.
            </p>

            <div
              style={{
                padding: "8px 25px",
                background: "rgba(255, 132, 71, 1)",
                // fontWeight: "bold",
                borderRadius: 4,
                width: "fit-content",
                marginTop: 10,
                color: "white",
              }}
            >
              Sign up now!
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
