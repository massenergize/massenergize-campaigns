import React from "react";
import "./assets/css/pb-index.css";
import PBSidePanel from "./components/sidepanels/PBSidePanel";
import PBBottomSheet from "./components/bottom-sheet/PBBottomSheet";
function PBCanvas({ children }) {
  return (
    <div className="pb-root">
      <div className="pb-canvas">
        {children}
        <PBBottomSheet>
          <div>
            <h3>Bottom Sheet</h3>
            <p>
              This is a bottom sheet component. It is used to display content that is not the main focus of the page.
            </p>
          </div>
        </PBBottomSheet>
      </div>
      <div className="pb-right-panel">
        <PBSidePanel />
      </div>
    </div>
  );
}

export default PBCanvas;
