import React from "react";
import { useNavigate } from "react-router-dom";

function TestimonialBox({ title, user, image, body, campaign_technology, id }) {
  const preview = body?.substr(0, 130);
  const navigator = useNavigate();
  return (
    <div style={{ border: "solid 1px #E4E4E4", padding: 20, borderRadius: 5 }}>
      <h5 style={{ color: "var(--app-medium-green)", fontSize: "1.07rem" }}>
        {user?.preferred_name || " AMIE POWELKA"}
      </h5>
      <h6 style={{ fontSize: 15 }}>{title || "..."}</h6>
      <p style={{ fontSize: 14 }}>
        {preview}
        <a
          className="touchable-opacity"
          href="/technology/testimonial/sdfkjl/sdkfjlsd"
          style={{ marginLeft: 10, color: "var(--app-medium-green)" }}
        >
          Read More...
        </a>
      </p>

      <img
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 5,
        }}
        src={
          image?.url || "https://picsum.photos/id/870/300/300?grayscale&blur=2"
        }
      />
      <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <p
          className="touchable-opacity"
          onClick={() => navigator(`/technology/testimonial/${id}`)}
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
