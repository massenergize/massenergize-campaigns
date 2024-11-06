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

  const addCssToBlock = (block, cssTrain, options) => {
    const { cssKey, rawValue } = options || {};
    const { block: blockItem, ...rest } = block;
    const { template, properties } = blockItem || {};
    //  ---- Handling Properties
    const indexofItem = properties?.findIndex((p) => p?.cssKey === cssKey);
    const newProperties = [...properties];
    let propItem = properties[indexofItem];
    if (propItem) {
      propItem = { ...propItem, value: rawValue };
      newProperties.splice(indexofItem, 1, propItem);
    }

    //  ---- Applying CSS Properties to block

    const { element } = template || {};
    const { props } = element || {};
    const newElement = { ...element, props: { ...props, style: { ...props?.style, ...cssTrain } } };
    const newBlock = {
      ...rest,
      block: { ...blockItem, properties: newProperties, template: { ...template, element: newElement } },
    };
    return newBlock;
  };

  const whenPropertyChanges = (data) => {
    const newSectionList = [...sections];
    const block = newSectionList.find((section) => section.block.id === data.id);

    const newCss = { [data?.prop?.cssKey]: data?.prop?.value };
    const newBlock = addCssToBlock(blockInFocus, newCss, {
      cssKey: data?.prop?.cssKey,
      rawValue: data?.prop?.rawValue,
    });
    newSectionList.splice(block?.options?.position, 1, newBlock);
    setSection(newSectionList);
    setBlockInFocus(newBlock);
  };

  const selectBlock = (blockJson) => {
    const { position } = modalProps || {};
    const newSection = [...sections];
    newSection.splice(position, 0, blockJson);
    setSection(newSection);
    close();
  };

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
        <PBSidePanel onPropertyChange={whenPropertyChanges} block={blockInFocus?.block} />
      </div>
      <PBFloatingFooter />
    </div>
  );
}

export default PBEntry;
