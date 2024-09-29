import React from "react";

function SPTButton({ text, children, onClick, href, target, className, style }) {
  return (
    <div
      onClick={() => {
        if (onClick) return onClick();
        if (!href) return;
        window.open(href, target || "_blank");
      }}
      className={`${className || ""} spt-btn mobile-width mobile-margin custom-margin s-touchable-opacity`}
      style={{
        "--my-custom-width": "100%",
        "--my-custom-margin": "10px 5px",
        "--my-pc-custom-margin": "30px 5px",
        ...(style || {}),
      }}
    >
      {text || children}
    </div>
  );
}

export default SPTButton;
