import React from "react";

function SPTHero() {
  return (
    <div>
      <div className="row spt-hero">
        <div
          className="col-md-8 hero-container "
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

        <div className="col-md-4" style={{ background: "var(--spt-main-color)" }}>
          <div style={{ position: "relative" }}>
            <img
              alt="Supporting Hero Media"
              src="https://massenergize-prod-files.s3.amazonaws.com/media/crowd-of-people-marching-on-a-rally-2975498.jpg"
              style={{ height: 400, width: "100%", background: "blue", objectFit: "cover" }}
            />
            <div className="spt-hero-overlay">
              <div className="spt-overlay-content soc">
                <div className="play-btn s-touchable-opacity">
                  <i className="fa fa-play-circle" />
                </div>

                <div className="bottom-content">
                  <p style={{ textAlign: "center" }}>Learn how community solar works</p>
                  <div className=" row-on-pc-col-on-mobile c-align-items-center">
                    <div className="p-button s-touchable-opacity">
                      <i className=" fa fa-play" /> Watch in Espaniol{" "}
                      <i className="fa fa-angle-right" style={{ marginLeft: 10 }} />
                    </div>
                    <div className="p-button s-touchable-opacity">
                      <i className=" fa fa-play" /> Watch in Portuguese{" "}
                      <i className="fa fa-angle-right" style={{ marginLeft: 10 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPTHero;
