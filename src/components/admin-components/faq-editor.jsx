import React, { useState } from "react";
import classes from "classnames";
import { Button, Col, Row } from "react-bootstrap";
import { objectIsEmpty } from "../../helpers/utils";

export function FaqEditor ({ faq = {}, onRemove, onUpdate, formComponent, children }) {
  const IS_NEW = objectIsEmpty(faq);
  const [isOpen, setIsOpen] = useState(false);

  const { question, answer, description, icon } = faq;

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cusdropdown-container overflow-hidden">
      <div className={`incentivesBardropdown ${isOpen && "open"}`} onClick={handleToggleDropdown}>
        <div className="cusdropdown-toggle row" style={{ alignItems: "center" }}>
          <Col>
            <h6 className="theme-color" style={{ margin: 0, fontWeight: "bold" }}>
              {question}
            </h6>
          </Col>
          {onRemove !== undefined && (
            <Col sm="auto">
              <Button
                className="incentivesBar-delete-btn p-0"
                variant="link link-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  typeof onRemove === "function" && onRemove(faq);
                }}
              >
                {/*<FontAwesomeIcon className=" icentiveBarIcon px-0" icon={faTrash} />*/}
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
          <Col>{children}</Col>
        </Row>
      </div>
    </div>
  );
}
