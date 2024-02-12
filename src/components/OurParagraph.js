import React from "react";

function OurParagraph({ children, className }) {
  return <p className={`body-font text-muted ${className || ""}`}>{children}</p>;
}

export default OurParagraph;
