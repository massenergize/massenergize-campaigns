import React from "react";
import { THEMES } from "../../../utils/color-schemes";

function WrapWithColorScheme({ children }) {
  const theme = THEMES.plugin;
  const scheme = {
    "--app-main-color": theme?.mainColor,
    "--app-accent-1": theme?.accentOne,
    "--app-accent-3": theme?.accentTwo,
  };
  return <div style={{ ...scheme }}>{children}</div>;
}

export default WrapWithColorScheme;
