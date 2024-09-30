import React from "react";
import { smartString } from "../../../../utils/utils";

function SPTSectionComponent({ technology, children, style, className }) {
  const { name, description, summary, deals, image } = technology || {};

  return (
    <div className={`spt-section-component ${className || ""}`} style={style || {}}>
      <div className="row">{children}</div>
    </div>
  );
}

export default SPTSectionComponent;
