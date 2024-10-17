import React from "react";
import "./pb-modal.css";

function PBModal({ children, close }) {
  return (
    <div className="pb-modal-root">
      <div className="pb-ghost" onClick={() => close && close()}></div>
      <div className="pb-modal-content">{children}</div>
    </div>
  );
}

export default PBModal;
