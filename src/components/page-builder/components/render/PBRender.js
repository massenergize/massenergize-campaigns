import React from "react";
import { renderSection } from "../../utils/engine/engine";
import "./pb-render.css";

function PBRender({ json }) {
  const html = renderSection(json?.template);
  return <div className="pb-render-wrapper">{html}</div>;
}

export default PBRender;
