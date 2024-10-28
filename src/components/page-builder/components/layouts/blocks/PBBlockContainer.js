import React from "react";
import "./../pb-layout.css";
import { SECTION_BLOCK, TITLE_BLOCK } from "../../../utils/engine/data";
const BLOCKS = [
  { name: "Link", icon: "fa-link", key: "link", template: SECTION_BLOCK },
  { name: "Section", icon: "fa-square-o", key: "section", template: SECTION_BLOCK },
  { name: "Title", icon: "fa-font", key: "title", template: TITLE_BLOCK },
  { name: "Paragraph", icon: "fa-paragraph", key: "paragraph", template: SECTION_BLOCK },
  { name: "Button", icon: "fa-square", key: "button", template: SECTION_BLOCK },
  { name: "Video", icon: "fa-youtube", key: "video", template: SECTION_BLOCK },
  { name: "Image", icon: "fa-image", key: "image", template: SECTION_BLOCK },
  { name: "Icon", icon: "fa-circle-o", key: "icon", template: SECTION_BLOCK },
];
function PBBlockContainer({ onItemSelected }) {
  return (
    <div className="pb-block-root" style={{ padding: 20 }}>
      {BLOCKS.map((block) => (
        <div key={block.key} onClick={() => onItemSelected({ block })} className="pb-block-item">
          <i className={`fa ${block.icon}`}></i>
          <p>{block.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PBBlockContainer;
