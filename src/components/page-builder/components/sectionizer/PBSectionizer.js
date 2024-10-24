import React from "react";
import "./pb-section.css";
import { usePBModal } from "../../hooks/usePBModal";
function PBSection({ onButtonClick }) {
  const { Modal, open: openModal } = usePBModal();
  return (
    <>
      <div className="pb-sectionizer">
        <p className="pb-section-r touchable-opacity">+</p>
        <small>Add Block</small>
      </div>
      <div className="pb-add-area">
        <button onClick={() => onButtonClick()} className="pb-add-section touchable-opacity">
          Add Section
        </button>
      </div>
    </>
  );
}

export default PBSection;
