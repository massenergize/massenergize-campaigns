import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { MOBILE_WIDTH } from "../../../utils/Constants";
import { smartString } from "../../../utils/utils";

const PREVIEW_LENGTH = 125;
const LONG_LENGTH = 330;
function TestimonialBox({ title, user, image, body, campaign_technology, campaign, id, community }) {
  const hasNoImage = !image?.url;
  const navigator = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });
  const route = `/campaign/${campaign?.slug}/technology/testimonial/${id}`;

  // const preview = body?.substr(0, !isMobile ? LONG_LENGTH : PREVIEW_LENGTH);
  const preview = smartString(body, !isMobile ? LONG_LENGTH : PREVIEW_LENGTH);
  const userName = user?.preferred_name || user?.full_name;

  return (
    <div className="testi-container flex-column">
      <h5 style={{ fontSize: "1.07rem" }}>{title || "..."}</h5>
      <h6 style={{ fontSize: 15, color: "var(--app-main-color)" }}>
        {" "}
        {/* {user?.preferred_name || user?.full_name || "...."} */}
        {userName ? `${userName} ${community?.name ? "from" : ""} ${community?.name || ""}` : "..."}
      </h6>
      <div
        style={{
          fontSize: 14,
          maxHeight: 60,
          height: 60,
          margin: 0,
          position: "relative",
          overflow: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: preview }}
      ></div>
      {/* <a
        className="touchable-opacity"
        onClick={(e) => {
          e.preventDefault();
          navigator(route);
        }}
        style={{
          marginLeft: 10,
          color: "var(--app-medium-green)",
          fontSize: 14,
          // margin: "30px 0px",
        }}
      >
        Read More...
      </a> */}
      {/*
      {image?.url && (
        <img
          className="phone-vanish"
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            borderRadius: 5,
            marginTop: 7,
          }}
          src={image?.url}
        />
      )} */}
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
              // marginTop: 7,
            }}
            src={image?.url}
            alt={image?.name}
          />
        )}
        <p
          role={"button"}
          tabIndex={0}
          className="touchable-opacity"
          onClick={() => navigator(route)}
          style={{
            fontSize: 15,
            marginLeft: "auto",
            fontWeight: "bold",
            color: "var(--app-main-color)",
            marginBottom: 0,
          }}
        >
          <i className="fa fa-eye"></i>
          <span style={{ marginLeft: 6 }}> Full View</span>
        </p>
      </div>
    </div>
  );
}

export default TestimonialBox;
