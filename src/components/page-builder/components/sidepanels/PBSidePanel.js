import React from "react";
import "./pb-sidepanel.css";
function PBSidePanel() {
  return (
    <div className="pb-side-panel-root">
      <h6>Properties</h6>
      <div className="flex-row align-center">
        <div className="pb-textbox">
          <label>Width</label>
          <br />
          <input type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Height</label>
          <br />
          <input type="number" />
        </div>
      </div>
    </div>
  );
}

export default PBSidePanel;
