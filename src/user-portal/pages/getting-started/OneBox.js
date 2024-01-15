import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../../utils/Constants";
import RenderHTML from "../../../components/RenderHtml";
import { ellipsify, isEmpty } from "../../../helpers/utils/string";

function OneBox ({
  icon,
  description,
  name,
  campaign_technology_id,
  isImage,
  isIcon,
  image,
  id,
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
    <div
      className="elevate-float-pro one-box-container"
      // style={{
      //   width: "100%",
      //   minHeight: 390,
      //   borderRadius: 5,
      //   display: "flex",
      //   flexDirection: "column",
      //   background: "white",
      // }}
    >
      <div
        className="one-box p-4"
        // style={{
        //   height: "100%",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   borderRadius: 5,
        //   padding: "40px 40px 10px 40px",
        // }}
      >
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
        {image && (
          <img
            src={image?.url}
            alt={image?.name}
            // style={{ height: 100, width: 100, objectFit: "contain" }}
          />
        )}
        <h5>{name}</h5>
        {/* <RenderHTML tag={"p"} html={!isEmpty(description) ? ellipsify(description, 80) : "..."} /> */}
        <p style={{ textAlign: "center" }}>
          {summary?.substring(0, 80) || "..."}
        </p>
        <Button
          variant={"link"}
          className="touchable-opacity link-accent"
          // href={`/technology/${campaign_technology_id}`}
          onClick={() => {
            trackActivity && trackActivity({ ...common, button_type: "learn_more" });
            navigator(route);
          }}
          style={{ fontWeight: "bold", color: "var(--app-orange)" }}
        >
          Learn More...
        </Button>
      </div>
      <div
        className="one-box-footer phone-vanish"
        // style={{
        //   marginTop: "auto",
        //   display: "flex",
        //   flexDirection: "row",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   padding: 30,
        //   paddingTop: 20,
        // }}
      >
        <Button
          onClick={() => {
            trackActivity && trackActivity({ ...common, button_type: "quote" });
            navigator(`${route}?section=vendors`);
          }}
          className="tech-btn elevate-2 touchable-opacity mr-2"
          style={{ background: "var(--app-medium-green)", marginRight: 20 }}
        >
          QUOTE
        </Button>
        <Button
          onClick={() => {
            trackActivity && trackActivity({ ...common, button_type: "coach" });
            navigator(`${route}?section=coaches`);
          }}
          style={{ background: "var(--app-deep-green)" }}
          className="tech-btn elevate-2 touchable-opacity"
        >
          COACH
        </Button>
      </div>
    </div>
  );
}

export default OneBox;
