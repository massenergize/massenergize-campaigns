import React from "react";
import "./pb-pages.css";
function PBPageSettings() {
  return (
    <div style={{ padding: 20 }}>
      <h6 style={{ color: "#0b9edc" }}>PAGE SETTINGS</h6>
      <div className="pb-textbox">
        <label>What's the name of the page</label>
        <input className="here-we-go" type="text" placeholder="Enter page title..." />
      </div>
      <div className="pb-textbox">
        <label>Enter page slug</label>
        <input className="here-we-go" type="text" placeholder="Eg. 'homepage-for-concord'" />
      </div>
      {/* --- AUDIENCE SECTION ------ */}
      <div className="pb-bordered-section">
        <h6 style={{ color: "#0b9edc" }}>Audience</h6>
        <label>Who can view this page?</label>
      </div>
    </div>
  );
}

export default PBPageSettings;
