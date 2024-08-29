import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { MOBILE_WIDTH } from "../../../utils/Constants";
import { smartString } from "../../../utils/utils";

const PREVIEW_LENGTH = 125;
const LONG_LENGTH = 330;
function TestimonialBox({ title, user, image, body, campaign_technology, campaign, id, community, staticT }) {
  const hasNoImage = !image?.url;
  const navigator = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });
  const route = `/campaign/${campaign?.slug}/technology/testimonial/${id}`;

  const preview = smartString(body, !isMobile ? LONG_LENGTH : PREVIEW_LENGTH);
  const userName = user?.preferred_name || user?.full_name;
  const comName = community?.alias || community?.name || "";

  return (
    <div className="testi-container flex-column">
      <h5 className="body-font" style={{ fontWeight: "bold", marginBottom: 10, color: "var(--app-main-color)" }}>
        {title || "..."}
      </h5>
      <h6 className="body-font" style={{ color: "var(--app-accent-3)", marginBottom: 15 }}>
        {userName ? `${userName} ${comName ? "from" : ""} ${comName || ""}` : "..."}
      </h6>
      <div
        className="body-font text-muted"
        style={{
          fontSize: 14,
          margin: 0,
          position: "relative",
          overflow: "auto",
          marginBottom: 15,
        }}
        dangerouslySetInnerHTML={{ __html: preview }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "auto",
          alignItems: "center",
        }}
      >
        {image?.url && (
          <img
            role={"button"}
            tabIndex={0}
            onClick={() => navigator(route)}
            className="phone-vanish touchable-opacity"
            style={{
              width: 50,
              height: 50,
              objectFit: "cover",
              borderRadius: 5,
              marginRight: 12,
              // marginTop: 7,
            }}
            src={image?.url}
            alt={image?.name}
          />
        )}
        <p
          role={"button"}
          tabIndex={0}
          className="touchable-opacity body-font"
          onClick={() => navigator(route)}
          style={{
            // fontSize: 15,
            marginLeft: "auto",
            fontWeight: "bold",
            color: "var(--app-main-color)",
            marginBottom: 0,
          }}
        >
          <i className="fa fa-eye"></i>
          <span style={{ marginLeft: 6 }}> {staticT?.full_view?.text || "Full View"}</span>
        </p>
      </div>
    </div>
  );
}

export default TestimonialBox;
