import React from "react";
import { Link, useNavigate } from "react-router-dom";

function BackButton ({ children, style }) {
  const navigate = useNavigate();
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      style={{
        fontWeight: "bold",
        margin: "20px 0px",
        color: "#e54a4a",
        ...(style || {}),
      }}
    >
      <i style={{ marginRight: 8 }} className="fa fa-long-arrow-left"></i>
      {children || "Go Back"}
    </Link>
  );
}

export default BackButton;
