import React from 'react'
import PBDropdown from "../dropdown/PBDropdown";

const InputGroup = (props) => {
  const { group } = props || {};
  return (
    <div className="flex-row align-center">
      {group?.map((props, index) => {
        <React.Fragment key={index}>
          <Input {...props} />;
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
const Input = (props) => {
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

const ColorPicker = () => {
  return <input type="color" />;
};

const BackgroundPicker = (props) => {
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

const Dropdown = (props) => {
  return <PBDropdown {...props} />;
};

export default { InputGroup, Input, ColorPicker, PBBackgroundPicker: BackgroundPicker, Dropdown };
