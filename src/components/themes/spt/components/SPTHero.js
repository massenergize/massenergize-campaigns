import React from "react";

function SPTHero() {
  return (
    <div>
      <div className="row">
        <div className="col-md-7" style={{ height: 400, background: "rgba(0, 58, 68, 1)", color: "white" }}>
          <div style={{ padding: "7% 13%" }}>
            <h6>SAVE MONEY WITH CLEAN ENERGY</h6>
            <h1 style={{ fontSize: 88 }}>Solar Para Todos</h1>
            <p>
              Connect to a community solar garden near you to unlock reliable savings and support and support a clean
              energy future
            </p>

            <div
              style={{
                padding: "10px 15px",
                background: "rgba(255, 132, 71, 1)",
                // fontWeight: "bold",
                borderRadius: 4,
                width: "fit-content",
                marginTop: 10,
              }}
            >
              See if you qualify <i style={{ marginLeft: 8 }} className="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="col-md-5" style={{ background: "blue" }}></div>
      </div>
    </div>
  );
}

export default SPTHero;
