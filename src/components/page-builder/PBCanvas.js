import React from "react";
import "./assets/css/pb-index.css";
import PBSidePanel from "./components/sidepanels/PBSidePanel";
function PBCanvas({ children }) {
  return (
    <div className="pb-root">
      <div className="pb-canvas">{children}</div>
      <div className="pb-right-panel">
        <PBSidePanel />
      </div>
    </div>
  );
}

export default PBCanvas;
