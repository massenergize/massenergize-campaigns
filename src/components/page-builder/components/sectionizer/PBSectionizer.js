import React from "react";
import "./pb-section.css";
import { usePBModal } from "../../hooks/usePBModal";
import PBRender from "../render/PBRender";
function PBSection({ onButtonClick, openBlockModal, sections }) {
  
  const { Modal, open: openModal } = usePBModal();

  const hasSections = sections.length > 0;
  return (
    <>
      {hasSections ? sections?.map((json) => <PBRender json={json} />) : <EmptySection open={openBlockModal} />}
      <div className="pb-add-area">
        <button onClick={() => onButtonClick()} className="pb-add-section touchable-opacity">
          Add Section
        </button>
      </div>
    </>
  );
}

export default PBSection;

export const EmptySection = ({ open }) => {
  return (
    <div className="pb-sectionizer">
      <i className="fa fa-plus pb-sectionizer-plus-icon touchable-opacity" onClick={() => open && open()} />
      <small>Add Block</small>
    </div>
  );
};
