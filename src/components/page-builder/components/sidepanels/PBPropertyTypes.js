import React from "react";
import PBDropdown from "../dropdown/PBDropdown";

export const PROPERTY_TYPES = {
  INPUT: "input",
  INPUT_GROUP: "input-group",
  DROPDOWN: "dropdown",
  COLOR_PICKER: "color-picker",
  BACKGROUND_PICKER: "background-picker",
};
export const PBInputGroup = (props) => {
  const { group } = props || {};
  return (
    <div className="flex-row align-center">
      {group?.map((props, index) => {
        <React.Fragment key={index}>
          <PBInput {...props} />;
        </React.Fragment>;
        // return (
        //   <div className="pb-textbox" style={{ marginLeft: index === 0 ? 0 : 10 }}>
        //     <label index={index}>{itemLabel}</label>
        //     <br />
        //     <input type={itmType} />
        //   </div>
        // );
      })}
    </div>
  );
};
export const PBInput = (props) => {
  const { label, type, value, onChange, placeholder } = props || {};
  return (
    <div className="flex-row align-center">
      <div className="pb-textbox">
        <label>{label || "label"}</label>
        <br />
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export const PBColorPicker = () => {
  return <input type="color" />;
};

export const PBBackgroundPicker = (props) => {
  const { label, type, value, onChange, placeholder, colorPickerLabel = "Use Color Picker" } = props || {};
  return (
    <>
      <div className="pb-image-picker">
        <i className=" fa fa-image"></i>
      </div>
      <div className="pb-side-panel-btn pb-touchable-opacity">{colorPickerLabel}</div>
    </>
  );
};

export const Dropdown = (props) => {
  return <PBDropdown {...props} />;
};
