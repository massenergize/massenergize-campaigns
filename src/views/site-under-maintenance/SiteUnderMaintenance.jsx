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
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854c.851 1.415.194 2.573-1.456 2.573h-12c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83s1.879 1.772 3.406 1.772h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854c-.777-1.294-1.963-2.034-3.259-2.034z"></path>
                <circle cx="12" cy="16" r="1.3"></circle>
                <path d="M13.5 10c0-.83-.671-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .199.041.389.111.562.554 1.376 1.389 3.438 1.389 3.438l1.391-3.438c.068-.173.109-.363.109-.562z"></path>
              </svg>
            </span>
            Oops!
          </h1>
          <h1 className="title-txt">
            Site Under <span style={{ color: "red" }}>Maintenance</span>
          </h1>
          <p className="exp-text">
            <b style={{ fontWeight: 600 }}>
              {currentURL.includes("campaigns") ? "MassEnergize Campaigns " : "MassEnergize Communities "}
            </b>
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
