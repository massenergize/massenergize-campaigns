import React from "react";

function HelpBanner() {
  return (
    <div
      className="spt-get-help"
      // style={{
      //   padding: "10px 25px",
      //   display: "flex",
      //   flexDirection: "row",
      //   border: "solid 1px #efefef",
      //   borderRadius: 10,
      //   alignItems: "center",
      // }}
    >
      <img
        // style={{ width: 80, borderRadius: "100%", marginRight: 20 }}
        src="https://via.placeholder.com/80"
        alt="Help Banner"
      />
      <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>
        <div>
          <h5>We are here to help</h5>
          <p className="spt-body-font">
            Our Energy Advisors provide expert, unbiased energy advice at no cost to you. No annoying sales pitches, and
            no spam calls.
          </p>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column" }}>
          <div className="spt-btn">Schedule a Call</div>
          <div
            className="spt-btn-outline"
            style={{
              marginTop: 10,
            }}
          >
            Send an Email
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpBanner;
