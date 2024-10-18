import React from "react";
import "./pb-floating-footer.css";
function PBFloatingFooter() {
  return (
    <div className="pb-footer-root">
      <div className="pb-footer-content">
        <h6 className="touchable-opacity">Modify Page Settings</h6>
        <div className="right-dock">
          <button className="pb-save pb-footer-btn">Save</button>
          <button className="pb-preview pb-footer-btn">Preview</button>
        </div>
      </div>
    </div>
  );
}

export default PBFloatingFooter;
