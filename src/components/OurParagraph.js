import React from "react";

function OurParagraph({ children, className }) {
  return <p className={`paragraph-font ${className || ""}`}>{children}</p>;
}

export default OurParagraph;
