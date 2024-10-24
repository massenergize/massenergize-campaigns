import React from "react";
import "./pb-modal.css";

function PBModal({ children, close, style }) {
  return (
    <div className="pb-modal-root">
      <div className="pb-ghost" onClick={() => close && close()}></div>
      <div className="pb-modal-content" style={style || {}}>
        {children}
      </div>
    </div>
  );
}

export default PBModal;
