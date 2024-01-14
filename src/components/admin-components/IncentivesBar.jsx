import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IncentiveForm } from "../../admin-portal/create-campaign/create-technology/incentive-form";
import { Col, Row } from "react-bootstrap";
import classes from "classnames";

const IncentivesBar = ({ incentive = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, description, icon } = incentive;

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cusdropdown-container border rounded overflow-hidden border-primary">
      <div className={`incentivesBardropdown ${isOpen && "open"}`} onClick={handleToggleDropdown}>
        <div className="cusdropdown-toggle">
          <h6 className="theme-color">
						<span>
							<FontAwesomeIcon className="pr-4 icentiveBarIcon" icon={icon}/>
						</span>{" "}
            {title}
          </h6>
          <span className={isOpen ? "arrowincentivesBar arrowincentivesBar-rotate" : "arrowincentivesBar"}>
						<svg
              stroke="#6e207c"
              fill="#6e207c"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
							<path
                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
						</svg>
					</span>
        </div>
      </div>
      <div className={classes(" p-4", isOpen ? "incentivesBar-menu-open" : "cusdropdown-menu-close d-none")}>
        <Row>
          <Col>
            <IncentiveForm incentive={incentive}/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IncentivesBar;
