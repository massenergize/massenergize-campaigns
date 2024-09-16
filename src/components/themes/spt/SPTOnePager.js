import React from "react";
import SPTHero from "./components/SPTHero";
import HelpBanner from "./components/HelpBanner";

function SPTOnePager() {
  return (
    <div>
      <SPTHero />
      <div
        style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{ padding: "15px 20px", background: "antiquewhite", borderRadius: 5 }}>
          <h4 style={{ margin: 0 }}>Español</h4>
        </div>
        <div style={{ padding: "15px 20px", marginLeft: 10, background: "antiquewhite", borderRadius: 5 }}>
          <h4 style={{ margin: 0 }}>Portuguese</h4>
        </div>
      </div>

      {/* About Community Solar */}
      <div style={{ padding: "0% 7%" }}>
        <div style={{ border: "solid 1px #f3f3f3", borderRadius: 20, padding: 70, minHeight: 400 }}>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://www.massenergize.org/wp-content/uploads/2023/12/pexels-pixabay-433308-scaled.jpg"
                alt="Community Solar"
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              />
            </div>
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h1>What's Community Solar?</h1>
              <p>
                Community solar is a solar power plant whose electricity is shared by more than one household. It is a
                way for people to have access to solar energy even if they cannot or prefer not to install solar panels
                on their property. Community solar is also known as shared solar or solar gardens.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  Our Goals */}
      <div style={{ padding: "0% 7%", marginTop: 40 }}>
        <div
          style={{
            background: "#dfeef08c",
            border: "solid 1px #f3f3f3",
            borderRadius: 20,
            padding: 70,
            minHeight: 400,
          }}
        >
          <div className="row">
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h1>What is our goal?</h1>
              <p>
                Community solar is a solar power plant whose electricity is shared by more than one household. It is a
                way for people to have access to solar energy even if they cannot or prefer not to install solar panels
                on their property. Community solar is also known as shared solar or solar gardens.
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
            <div className="col-md-6">
              <img
                src="https://www.massenergize.org/wp-content/uploads/2023/12/pexels-pixabay-433308-scaled.jpg"
                alt="Community Solar"
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/*  --- Help Area -----*/}
      <div style={{ marginTop: 40, padding: "0% 7%" }}>
        <HelpBanner />
      </div>
    </div>
  );
}

export default SPTOnePager;
