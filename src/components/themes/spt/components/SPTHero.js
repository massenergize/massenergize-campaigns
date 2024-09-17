import React from "react";

function SPTHero() {
  return (
    <div>
      <div className="row spt-hero">
        <div
          className="col-md-7 hero-container "
          // style={{ height: 400, background: "rgba(0, 58, 68, 1)", color: "white" }}
        >
          <div className="intro">
            <h6>SAVE MONEY WITH CLEAN ENERGY</h6>
            <h1>Solar Para Todos</h1>
            <p className="spt-body-font ">
              Connect to a community solar garden near you to unlock reliable savings and support and support a clean
              energy future
            </p>

            <div className="spt-btn touchable-opacity custom-margin">
              See if you qualify{" "}
              <i style={{ marginLeft: 8, "--my-pc-custom-margin": "30px 0px" }} className="fa fa-long-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="col-md-5" style={{ background: "blue" }}></div>
      </div>
    </div>
  );
}

export default SPTHero;
