import React from "react";
import { renderSection } from "../../utils/engine/engine";

function PBRender({ json }) {
  console.log("whats this blockJSON", json);
  const html = renderSection(json?.template);
  console.log("WAGWAN HTML", html)
  return <div className="pb-render-wrapper">{html}</div>;
}

export default PBRender;
