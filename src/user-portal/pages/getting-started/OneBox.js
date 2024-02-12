import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../../utils/Constants";
import RenderHTML from "../../../components/RenderHtml";
import { ellipsify, isEmpty } from "../../../helpers/utils/string";
import { smartString } from "../../../utils/utils";
import NewOneBox from "./NewOneBox";

function OneBox(props) {
  const { icon, v2, name, campaign_technology_id, isIcon, image, summary, campaign_id, trackActivity, authUser } =
    props;

  const navigator = useNavigate();
  const { user } = authUser || {};
  const route = `/campaign/${campaign_id}/technology/${campaign_technology_id}`;

  const common = {
    campaign_id,
    source: HOMEPAGE,
    target: name,
    email: user?.email,
  };

  if (v2) return <NewOneBox {...props} />;

  return (
    <div className="elevate-float-pro one-box-container h-100">
      <div className="one-box p-4">
        {isIcon && (
          <i
            className={`fa ${icon}`}
            style={{
              fontSize: 60,
              marginBlock: 15,
              color: "var(--app-medium-green)",
            }}
          />
        )}
        {image && <img src={image?.url} alt={image?.name} />}
        <h5
          className="subheader-font"
          style={{ textAlign: "center", textTransform: "capitalize", color: "var(--app-main-color)" }}
        >
          {name}
        </h5>
        <p className="body-font" style={{ textAlign: "center" }}>
          {smartString(summary, 75) || "..."}
        </p>
        <Button
          variant={"link"}
          className="touchable-opacity link-accent small-font"
          onClick={() => {
            trackActivity && trackActivity({ ...common, button_type: "learn_more" });
            navigator(route);
          }}
          style={{ fontWeight: "bold", color: "var(--app-accent-3)" }}
        >
          Learn More...
        </Button>
      </div>
      <div className="one-box-footer phone-vanish">
        <Button
          onClick={() => {
            trackActivity && trackActivity({ ...common, button_type: "quote" });
            navigator(`${route}?section=vendors`);
          }}
          className="tech-btn elevate-2 touchable-opacity mr-2"
          style={{ background: "var(--app-accent-3)", marginRight: 20 }}
        >
          Quote
        </Button>
        <Button
          onClick={() => {
            trackActivity && trackActivity({ ...common, button_type: "coach" });
            navigator(`${route}?section=coaches`);
          }}
          style={{ background: "var(--app-main-color)" }}
          className="tech-btn elevate-2 touchable-opacity"
        >
          Coach
        </Button>
      </div>
    </div>
  );
}

export default OneBox;
