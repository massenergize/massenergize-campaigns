import React from "react";

function SectionTitle(props) {
  return (
    <h2 style={{ color: "var(--app-deep-green)" }} {...props}>
      {props?.children}
    </h2>
  );
}

export default SectionTitle;
