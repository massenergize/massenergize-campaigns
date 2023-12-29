import React from "react";

function SectionTitle(props) {
  let classes = `${props?.className || ""} section-title`;
  return (
    <h2
      style={{ color: "var(--app-deep-green)" }}
      {...props}
      className={classes}
    >
      {props?.children}
    </h2>
  );
}

export default SectionTitle;
