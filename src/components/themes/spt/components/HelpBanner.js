import React from "react";

function HelpBanner() {
  return (
    <div
      style={{
        padding: "10px 25px",
        display: "flex",
        flexDirection: "row",
        border: "solid 1px #efefef",
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <img
        style={{ width: 80, borderRadius: "100%", marginRight: 20 }}
        src="https://via.placeholder.com/80"
        alt="Help Banner"
      />
      <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>
        <div>
          <h5>We are here to help</h5>
          <p style={{ width: "70%" }}>
            Our Energy Advisors provide expert, unbiased energy advice at no cost to you. No annoying sales pitches, and
            no spam calls.
          </p>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              padding: "7px 25px",
              background: "rgba(255, 132, 71, 1)",
              // fontWeight: "bold",
              borderRadius: 4,
              width: "fit-content",
              marginTop: 10,
              color: "white",
            }}
          >
            Schedule a Call
          </div>
          <div
            style={{
              padding: "7px 25px",
              marginBottom: 5,

              background: "white",
              border: "solid 1px rgba(255, 132, 71, 1)",
              color: "rgba(255, 132, 71, 1)",
              // fontWeight: "bold",
              borderRadius: 4,
              width: "auto",
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
