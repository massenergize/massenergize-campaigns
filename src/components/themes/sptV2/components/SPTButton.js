import React from "react";
import { getTheme } from "../../../../utils/Values";

function SPTButton({ text, children, onClick, href, target, className, style, themeKey, disable }) {
  const theme = getTheme(themeKey);
  return (
    <div
      onClick={() => {
        if (disable) return;
        if (onClick) return onClick();
        if (!href) return;
        window.open(href, target || "_blank");
      }}
      className={`${className || ""} spt-btn mobile-width mobile-margin custom-margin s-touchable-opacity`}
      style={{
        "--my-custom-width": "100%",
        "--my-custom-margin": "10px 5px",
        "--my-pc-custom-margin": "30px 5px",
        "--background": theme?.color,
        ...(style || {}),
      }}
    >
      {text || children}
    </div>
  );
}

export default SPTButton;
