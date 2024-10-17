import React from "react";
import PBCanvas from "./PBCanvas";
import "./assets/css/pb-index.css";
import PBSidePanel from "./components/sidepanels/PBSidePanel";
import PBBottomSheet from "./components/bottom-sheet/PBBottomSheet";
import PBModal from "./components/modal/PBModal";
import { usePBModal } from "./hooks/usePBModal";
function PBEntry() {
  const {  Modal, open } = usePBModal();


  return (
    <div className="pb-root">
      <Modal>
        <div>
          <h3>Tabluga</h3>
          <p>The man of Kings</p>
        </div>
      </Modal>
      <PBCanvas>
        <h1>This is the hour of visitation!</h1>
      </PBCanvas>
      <PBBottomSheet>
        <div>
          <button onClick={open}>Open Modal</button>
          <h3>Bottom Sheet</h3>
          <p>This is a bottom sheet component. It is used to display content that is not the main focus of the page.</p>
        </div>
      </PBBottomSheet>
      <div className="pb-right-panel">
        <PBSidePanel />
      </div>
    </div>
  );
}

export default PBEntry;
