import React from "react";

function SPTAboutSection() {
  return (
    <div className="spt-section-padding spt-section">
      <div style={{ border: "solid 1px #f3f3f3", borderRadius: 20, padding: 70, minHeight: 400 }}>
        <div className="row">
          <div className="col-md-6" style={{ display: "flex", alignItems: "center" }}>
            <img
              className="img"
              src="https://www.massenergize.org/wp-content/uploads/2023/12/pexels-pixabay-433308-scaled.jpg"
              alt="Community Solar"
              //   style={{ width: "100%", height: "100%", borderRadius: 20 }}
            />
          </div>
          <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1>What's Community Solar?</h1>
            <p className="spt-body-font">
              Community solar is a solar power plant whose electricity is shared by more than one household. It is a way
              for people to have access to solar energy even if they cannot or prefer not to install solar panels on
              their property. Community solar is also known as shared solar or solar gardens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPTAboutSection;
