import React from "react";

function SPTSectionTitle({ children, title, style, className }) {
  return (
    <h1 className={`spt-section-title ${className || ""}`} style={style || {}}>
      {children || title}
    </h1>
  );
}

export default SPTSectionTitle;
