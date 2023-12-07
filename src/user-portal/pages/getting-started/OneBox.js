import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OneBox({
  icon,
  description,
  name,
  campaign_technology,
  isImage,
  isIcon,
  image,
}) {
  const navigator = useNavigate();
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
          {description.substring(0, 95) || "..."}
        </p>
        <a
          href={`/technology/${campaign_technology}`}
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
          onClick={() => navigator("/technology/" + campaign_technology)}
          className="tech-btn elevate-2 touchable-opacity"
          style={{ background: "var(--app-medium-green)" }}
        >
          QUOTE
        </Button>
        <Button
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
