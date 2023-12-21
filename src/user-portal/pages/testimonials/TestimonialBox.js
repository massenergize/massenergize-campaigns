import React from "react";
import { useNavigate } from "react-router-dom";

function TestimonialBox({
  title,
  user,
  image,
  body,
  campaign_technology,
  campaign,
  id,
}) {
  const preview = body?.substr(0, 130);
  const navigator = useNavigate();

  const route = `/campaign/${campaign?.id}/technology/testimonial/${id}`;
  return (
    <div style={{ border: "solid 1px #E4E4E4", padding: 20, borderRadius: 5 }}>
      <h5 style={{ color: "var(--app-medium-green)", fontSize: "1.07rem" }}>
        {user?.preferred_name || user?.full_name || "...."}
      </h5>
      <h6 style={{ fontSize: 15 }}>{title || "..."}</h6>
      <div
        style={{ fontSize: 14, maxHeight: 60, height: 60, margin: 0 }}
        dangerouslySetInnerHTML={{ __html: preview }}
      >
        {/* {preview} */}
      </div>
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

      <img
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 5,
          marginTop: 7,
        }}
        src={
          image?.url || "https://picsum.photos/id/870/300/300?grayscale&blur=2"
        }
      />
      <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <p
          className="touchable-opacity"
          onClick={() => navigator(route)}
          style={{
            fontSize: 15,
            marginLeft: "auto",
            fontWeight: "bold",
            color: "var(--app-medium-green)",
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
