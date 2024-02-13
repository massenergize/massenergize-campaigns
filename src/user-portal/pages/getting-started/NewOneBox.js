import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../../utils/Constants";
import { smartString } from "../../../utils/utils";

function NewOneBox({
  icon,
  name,
  campaign_technology_id,
  isIcon,
  image,
  summary,
  campaign_id,
  trackActivity,
  authUser,
}) {
  const navigator = useNavigate();
  const { user } = authUser || {};
  const route = `/campaign/${campaign_id}/technology/${campaign_technology_id}`;

  const common = {
    campaign_id,
    source: HOMEPAGE,
    target: name,
    email: user?.email,
  };

  return (
    <div className="card rounded-4 one-box-container h-100">
      <div className="card-body p-0 new-one-box">
        {image && <img src={image?.url} alt={image?.name} className={" rounded-top-4"} />}
        <div className="new-one-box-body p-3">
          <h5 className="subheader-font mb-1" style={{ textTransform: "capitalize", color: "var(--app-main-color)" }}>
            {name}
          </h5>
          <p className="body-font lh-sm">
            {smartString(summary, 75) || "..."}
          </p>
        </div>

      </div>

      <div className="card-footer border-0 bg-transparent p-3">
        <Row className={"justify-content-start mb-2"}>
          <Col sm={"auto"}>
            <Button
              variant={"link px-0"}
              className="touchable-opacity link-accent small-font"
              onClick={() => {
                trackActivity && trackActivity({ ...common, button_type: "learn_more" });
                navigator(route);
              }}
              style={{ fontWeight: "bold", color: "var(--app-accent-3)" }}
            >
              Learn More...
            </Button>
          </Col>
        </Row>
        <Row className={"justify-content-start d-none d-md-flex"}>
          <Col sm={"auto"}>
            <Button
              onClick={() => {
                trackActivity && trackActivity({ ...common, button_type: "quote" });
                navigator(`${route}?section=vendors`);
              }}
              className="tech-btn touchable-opacity"
              style={{ background: "var(--app-accent-3)",}}
            >
              Quote
            </Button>
          </Col>
          <Col sm={"auto"}>
            <Button
              onClick={() => {
                trackActivity && trackActivity({ ...common, button_type: "coach" });
                navigator(`${route}?section=coaches`);
              }}
              style={{ background: "var(--app-main-color)" }}
              className="tech-btn touchable-opacity"
            >
              Coach
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NewOneBox;
