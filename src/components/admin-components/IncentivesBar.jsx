import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IncentiveForm } from "../../admin-portal/create-campaign/create-technology/incentive-form";
import { Button, Col, Row } from "react-bootstrap";
import classes from "classnames";
import { objectIsEmpty } from "../../helpers/utils";

const IncentivesBar = ({ incentive = {}, onRemove, onUpdate, formComponent }) => {
  const IS_NEW = objectIsEmpty(incentive);
  const [isOpen, setIsOpen] = useState(false);

  const { title, description, icon } = incentive;

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="cusdropdown-container overflow-hidden "
      style={{ border: "dashed 2px var(--admin-theme-color-light)" }}
    >
      <div className={`incentivesBardropdown ${isOpen && "open"}`} onClick={handleToggleDropdown}>
        <div className="cusdropdown-toggle row" style={{ alignItems: "center" }}>
          <Col>
            <h6 className="theme-color" style={{ margin: 0, fontWeight: "bold" }}>
              <span>
                <FontAwesomeIcon className="pr-4 icentiveBarIcon" icon={icon} />
              </span>{" "}
              {title}
            </h6>
          </Col>
          {onRemove && (
            <Col sm="auto">
              <Button
                className="incentivesBar-delete-btn p-0"
                variant="link link-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  typeof onRemove === "function" && onRemove(incentive);
                }}
              >
                {/* <FontAwesomeIcon className=" icentiveBarIcon px-0" icon={faTrash} /> */}
                <span style={{ fontWeight: "bold" }}>Delete</span>
              </Button>
            </Col>
          )}
          <Col sm="auto">
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
                <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
              </svg>
            </span>
          </Col>
        </div>
      </div>

      <div className={classes(" p-4", isOpen ? "incentivesBar-menu-open" : "cusdropdown-menu-close d-none")}>
        <Row>
          <Col>
            {formComponent ? (
              formComponent
            ) : (
              <IncentiveForm
                incentive={incentive}
                onSubmit={(incentive) => {
                  if (!IS_NEW) {
                    onUpdate(incentive);
                  }
                }}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IncentivesBar;
