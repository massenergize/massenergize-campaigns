import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { MOBILE_WIDTH } from "../../../utils/Constants";

const PREVIEW_LENGTH = 125;
const LONG_LENGTH = 350;
function TestimonialBox ({
  title,
  user,
  image,
  body,
  campaign_technology,
  campaign,
  id,
}) {
  const hasNoImage = !image?.url;
  const navigator = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });
  const route = `/campaign/${campaign?.id}/technology/testimonial/${id}`;

  const preview = body?.substr(0, !isMobile ? LONG_LENGTH : PREVIEW_LENGTH);

  return (
    <div className="testi-container">
      <h5 style={{ color: "var(--app-medium-green)", fontSize: "1.07rem" }}>
        {title || "..."}
      </h5>
      <h6 style={{ fontSize: 15 }}>
        {" "}
        {user?.preferred_name || user?.full_name || "...."}
      </h6>
      <div
        style={{
          fontSize: 14,
          maxHeight: 60,
          height: 60,
          margin: 0,
          position: "relative",
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
          marginTop: 10,
          alignItems: "center",
        }}
      >
        {image?.url && (
          <img
            onClick={() => navigator(route)}
            className="phone-vanish touchable-opacity"
            style={{
              width: 35,
              height: 35,
              objectFit: "cover",
              borderRadius: 5,
              marginTop: 7,
            }}
            src={image?.url}
            alt={image?.name}
          />
        )}
        <p
          className="touchable-opacity"
          onClick={() => navigator(route)}
          style={{
            fontSize: 15,
            marginLeft: "auto",
            fontWeight: "bold",
            color: "var(--app-medium-green)",
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
