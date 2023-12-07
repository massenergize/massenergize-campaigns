import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OneBox({ icon, title, text, key }) {
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
        <i
          className={`fa ${icon}`}
          style={{
            fontSize: 60,
            marginBlock: 15,
            color: "var(--app-medium-green)",
          }}
        />
        <h5 style={{ color: "var(--app-medium-green)" }}>{title}</h5>
        <p style={{ textAlign: "center", fontSize: 14 }}>{text || "..."}</p>
        <a href="#" style={{ fontWeight: "bold", color: "var(--app-orange)" }}>
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
          onClick={() => navigator("/technology/" + key)}
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

