import React from "react";

function SectionTitle(props) {
  let classes = `${props?.className || ""} section-title`;
  return (
    <h2 {...props} className={classes} style={{ color: "var(--app-accent-3)", ...(props?.style || {}) }}>
      {props?.children}
    </h2>
  );
}

export default SectionTitle;
