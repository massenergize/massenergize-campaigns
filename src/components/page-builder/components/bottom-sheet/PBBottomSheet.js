import React from "react";
import "./pb-bottom-sheet.css";
function PBBottomSheet({ children }) {
  return (
    <div className="pb-bottom-sheet">
      <div className="pb-bottom-sheet-content">{children}</div>
      <div style={{ flexBasis: "20%" }}></div>
    </div>
  );
}

export default PBBottomSheet;
