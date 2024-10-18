import React from "react";
import PBCanvas from "./PBCanvas";
import "./assets/css/pb-index.css";
import PBSidePanel from "./components/sidepanels/PBSidePanel";
import PBBottomSheet from "./components/bottom-sheet/PBBottomSheet";
import PBModal from "./components/modal/PBModal";
import { usePBModal } from "./hooks/usePBModal";
import { usePBBottomSheet } from "./hooks/usePBBottomSheet";
import PBRichTextEditor from "./components/richtext/PBRichTextEditor";
import PBFloatingFooter from "./components/floating-footer/PBFloatingFooter";
function PBEntry() {
  const { Modal, open: openModal } = usePBModal();
  const { BottomSheet, open: openBottomSheet, heightIsToggled } = usePBBottomSheet();

  return (
    <div className="pb-root">
      <Modal>
        <div>
          <h3>Tabluga</h3>
          <p>The man of Kings</p>
        </div>
      </Modal>
      <PBCanvas>
        
      </PBCanvas>
      <BottomSheet>
        <div style={{ width: "70%" }}>
          <PBRichTextEditor height={heightIsToggled ? 500 : 300} />
        </div>
      </BottomSheet>
      <div className="pb-right-panel">
        <PBSidePanel />
      </div>
      <PBFloatingFooter />
    </div>
  );
}

export default PBEntry;
