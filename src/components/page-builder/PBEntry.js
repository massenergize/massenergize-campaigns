import React, { useState } from "react";
import PBCanvas from "./PBCanvas";
import "./assets/css/pb-index.css";
import PBSidePanel from "./components/sidepanels/PBSidePanel";
import { usePBModal } from "./hooks/usePBModal";
import { usePBBottomSheet } from "./hooks/usePBBottomSheet";
import PBRichTextEditor from "./components/richtext/PBRichTextEditor";
import PBFloatingFooter from "./components/floating-footer/PBFloatingFooter";
import PBSection from "./components/sectionizer/PBSectionizer";
import PBBlockContainer from "./components/layouts/blocks/PBBlockContainer";
function PBEntry() {
  const { Modal, open: openModal, close } = usePBModal();
  const { BottomSheet, open: openBottomSheet, heightIsToggled } = usePBBottomSheet();
  const [sections, setSection] = useState([]);

  const selectBlock = (blockJson) => {
    const newSection = [...sections, blockJson];
    setSection(newSection);
    close();
  };
  return (
    <div className="pb-root">
      <Modal style={{ minHeight: 300 }}>
        <PBBlockContainer onItemSelected={selectBlock} />
      </Modal>
      <PBCanvas>
        <PBSection sections={sections} onButtonClick={openModal} openBlockModal={openModal} />
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