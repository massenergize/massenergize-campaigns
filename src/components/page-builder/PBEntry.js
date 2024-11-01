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
  const { Modal, open: openModal, close, modalProps } = usePBModal();
  const { BottomSheet, open: openBottomSheet, heightIsToggled } = usePBBottomSheet();
  const [sections, setSection] = useState([]);
  const [blockInFocus, setBlockInFocus] = useState(null);

  const selectBlock = (blockJson) => {
    const { position } = modalProps || {};
    const newSection = [...sections];
    newSection.splice(position, 0, blockJson);
    setSection(newSection);
    close();
  };
  
  console.log("BLOCK IN FOCUS", blockInFocus);

  return (
    <div className="pb-root">
      <Modal style={{ minHeight: 300 }}>
        <PBBlockContainer onItemSelected={selectBlock} />
      </Modal>
      <PBCanvas>
        <PBSection
          blockInFocus={blockInFocus}
          focusOnBlock={setBlockInFocus}
          sections={sections}
          onButtonClick={openModal}
          openBlockModal={openModal}
        />
      </PBCanvas>
      <BottomSheet>
        <div style={{ width: "70%" }}>
          <PBRichTextEditor height={heightIsToggled ? 500 : 300} />
        </div>
      </BottomSheet>
      <div className="pb-right-panel">
        <PBSidePanel block = {blockInFocus?.block} />
      </div>
      <PBFloatingFooter />
    </div>
  );
}

export default PBEntry;
