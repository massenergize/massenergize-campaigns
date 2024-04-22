import React from "react";
import "./site-maintenance.css";
import img from "./maintenance.png";
import { setPageTitle } from "../../utils/utils";
import { Container } from "react-bootstrap";

const SiteUnderMaintenance = () => {
  const currentURL = window.location.href;

  setPageTitle("Site Under Maintenance | ME Campaigns");

  console.log(currentURL);
  return (
    <div className="main-cont-">
      <div className="inner-cont-">
        <div className="text-div">
          <h1
            // className="mb-4 title-txt"
            style={{
              lineHeight: 1,
              fontWeight: 600,
              marginBottom: "1rem",
              fontSize: "2rem",
              textTransform: "none !important",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 5,
            }}
          >
            Apologies!
          </h1>
          <h1 className="title-txt">
            Site Under <span style={{ color: "red" }}>Maintenance</span>
          </h1>
          <p className="exp-text">
            <b style={{ fontWeight: 600 }}>MassEnergize Campaigns </b>
            is undertaking a planned system upgrade to improve your experience on the platform. As a result, the
            platform will not be accessible until the maintenance is complete. <br />
            We sincerely apologize for any inconvenience this may cause you. <br /> Thank you.
          </p>
        </div>
        <div>
          <img src={img} alt="maintenance" className="image-img" />
        </div>
      </div>
    </div>
  );
};

export default SiteUnderMaintenance;
