import React from "react";
import "./../pb-layout.css";
import {
  BTN_BLOCK,
  ICON_BLOCK,
  IMAGE_BLOCK,
  LINK_BLOCK,
  PARAGRAPH_BLOCK,
  SECTION_BLOCK,
  TITLE_BLOCK,
  VIDEO_BLOCK,
} from "../../../utils/engine/data";
import { DEFAULT_PROPERTIES, FAKE_PROPERTIES } from "../../sidepanels/property-data";
const BLOCKS = [
  { name: "Title", icon: "fa-font", key: "title", template: TITLE_BLOCK, properties: DEFAULT_PROPERTIES },
  { name: "Button", icon: "fa-square", key: "button", template: BTN_BLOCK, properties: DEFAULT_PROPERTIES },
  {
    name: "Paragraph",
    icon: "fa-paragraph",
    key: "paragraph",
    template: PARAGRAPH_BLOCK,
    properties: DEFAULT_PROPERTIES,
  },
  { name: "Link", icon: "fa-link", key: "link", template: LINK_BLOCK, properties: DEFAULT_PROPERTIES },
  // { name: "Section", icon: "fa-square-o", key: "section", template: SECTION_BLOCK },
  { name: "Video", icon: "fa-youtube", key: "video", template: VIDEO_BLOCK, properties: FAKE_PROPERTIES },
  { name: "Image", icon: "fa-image", key: "image", template: IMAGE_BLOCK, properties: DEFAULT_PROPERTIES },
  { name: "Icon", icon: "fa-circle-o", key: "icon", template: ICON_BLOCK, properties: FAKE_PROPERTIES },
];

function PBBlockContainer({ onItemSelected }) {
  return (
    <div className="pb-block-root" style={{ padding: 20 }}>
      {BLOCKS.map((block) => (
        <div
          key={block.key}
          // onClick={() => onItemSelected({ block: { id: block?.template?.element?.id, ...block } })}
          onClick={() => onItemSelected({ block: { id: Date.now(), ...block } })}
          className="pb-block-item"
        >
          <i className={`fa ${block.icon}`}></i>
          <p>{block.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PBBlockContainer;
