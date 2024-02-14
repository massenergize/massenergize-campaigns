import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function HeroWithBelt({ campaign, handleShareCampaign }) {
  const { image, primary_logo, secondary_logo, title, tagline } = campaign;
  return (
    <div className="belt-hero-root" style={{ marginTop: 60 }}>
      <img className="b-hero-img" alt="Hero img" src={image?.url} />
      <div style={{ position: "relative" }}>
        <div
          onClick={() => handleShareCampaign && handleShareCampaign()}
          role="button"
          tabIndex={0}
          className="touchable-opacity elevate-5 camp-share-btn-v2 row-flex"
          style={{ alignItems: "center" }}
        >
          <FontAwesomeIcon icon={faShareNodes} />
          <small className="body" style={{ marginLeft: 6 }}>
            {" "}
            Share
          </small>
          {/* <i className="fa fa-share-nodes" /> <small className="body"> Share</small> */}
        </div>
        <div className="elevate-float-pro hero-belt">
          <img src={primary_logo?.url} alt="logo" style={{ width: 150, height: 150, objectFit: "contain" }} />

          <div style={{ margin: "0px 50px", width: "50%", textAlign: "center" }}>
            <h1 className="page-title" style={{ color: "var(--app-main-color)" }}>
              {title}
            </h1>
            <p className="subheader-font">{tagline}</p>
          </div>

          <img src={secondary_logo?.url} alt="logo" style={{ width: 150, height: 150, objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

export default HeroWithBelt;
