import React from "react";
import { smartString } from "../../../../utils/utils";

function SPTSectionComponent({ technology, children }) {
  const { name, description, summary, deals, image } = technology || {};

  return (
    <div className="spt-section-component" >
      <div className="row">{children}</div>
    </div>
  );
}

export default SPTSectionComponent;
