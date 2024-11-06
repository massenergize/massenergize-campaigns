import React from "react";
import "./pb-sidepanel.css";
import PBDropdown from "../dropdown/PBDropdown";
import { PBBackgroundPicker } from "./PBPropertyTypes";
import usePropertyRenderer from "./usePropertyRenderer";
import { DEFAULT_PROPERTIES, EXAMPLE_PROPERTIES } from "./property-data";
// import PropertyRenderer from "./PropertyRenderer";

function PBSidePanel({ block, onPropertyChange }) {
  console.log("LETS SEE BLOCK", block);
  const { PropertyRenderer } = usePropertyRenderer({ blockId: block?.id, onPropertyChange });
  return (
    <div className="pb-side-panel-root">
      <h6>Properties</h6>
      <PropertyRenderer properties={block?.properties} />

      {/* <div className="flex-row align-center">
        <div className="pb-textbox">
          <label>Width</label>
          <br />
          <input type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Height</label>
          <br />
          <input type="number" />
        </div>
      </div>

      <h6 className="pb-panel-area-heading">Background</h6>
      <PBBackgroundPicker />

      <br />
      <h6 className="pb-panel-area-heading">Padding</h6>
      <div className="flex-row align-center">
        <div className="pb-textbox">
          <label>Left</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Right</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Top</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Bottom</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
      </div>
      <h6 className="pb-panel-area-heading">Margin</h6>
      <div className="flex-row align-center">
        <div className="pb-textbox">
          <label>Left</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Right</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Top</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
        <div className="pb-textbox" style={{ marginLeft: 10 }}>
          <label>Bottom</label>
          <br />
          <input placeholder="0" type="number" />
        </div>
      </div>
      <br />
      <h6 className="pb-panel-area-heading">Content Arrangement</h6>
      <p className="pb-panel-p">Arrange content horizontally</p>

      <PBDropdown />
      <br />
      <p className="pb-panel-p">Arrange content Vertically</p>
      <PBDropdown />
      <br />

      <h6 className="pb-panel-area-heading">Divisions</h6>
      <PBDropdown /> */}
    </div>
  );
}

export default PBSidePanel;
