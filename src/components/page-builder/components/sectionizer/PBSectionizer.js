import React from "react";
import "./pb-section.css";
function PBSection() {
  return (
    <>
      <div className="pb-sectionizer">
        <p className="pb-section-r touchable-opacity">+</p>
        <small>Add Block</small>
      </div>
      <div className="pb-add-area">
        <button className="pb-add-section touchable-opacity">Add Section</button>
      </div>
    </>
  );
}

export default PBSection;
