import React from "react";
import "./../pb-layout.css"
const BLOCKS = [
  { name: "Link", icon: "fa-link", key: "link" },
  { name: "Section", icon: "fa-square-o", key: "section" },
  { name: "Title", icon: "fa-font", key: "title" },
  { name: "Paragraph", icon: "fa-paragraph", key: "paragraph" },
  { name: "Button", icon: "fa-square", key: "button" },
  { name: "Video", icon: "fa-youtube", key: "video" },
  { name: "Image", icon: "fa-image", key: "image" },
  { name: "Icon", icon: "fa-circle-o", key: "icon" },
];
function PBBlockContainer() {
  return (
    <div className="pb-block-root" style={{ padding: 20 }}>
      {BLOCKS.map((block) => (
        <div key={block.key} className="pb-block-item">
          <i className={`fa ${block.icon}`}></i>
          <p>{block.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PBBlockContainer;
