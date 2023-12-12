import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OneBox({
  icon,
  description,
  name,
  campaign_technology_id,
  isImage,
  isIcon,
  image,
  id,
  campaign_id,
}) {
  const navigator = useNavigate();

  const route = `/campaign/${campaign_id}/technology/${campaign_technology_id}`;
  console.log("THE ROUTE: ", route);

  return (
    <div
      className="elevate-float-pro"
      style={{
        width: "100%",
        minHeight: 320,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        background: "white",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          padding: "40px 40px 10px 40px",
        }}
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
            style={{ height: 100, width: 100, objectFit: "contain" }}
          />
        )}
        <h5 style={{ color: "var(--app-medium-green)" }}>{name}</h5>
        <p style={{ textAlign: "center", fontSize: 14 }}>
          {description.substring(0, 90) || "..."}
        </p>
        <a
          // href={`/technology/${campaign_technology_id}`}
          href={route}
          style={{ fontWeight: "bold", color: "var(--app-orange)" }}
        >
          Learn More...
        </a>
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <Button
          onClick={() => navigator(`${route}?section=quote`)}
          className="tech-btn elevate-2 touchable-opacity"
          style={{ background: "var(--app-medium-green)" }}
        >
          QUOTE
        </Button>
        <Button
          onClick={() => navigator(`${route}?section=coaches`)}
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
