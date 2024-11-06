import React from "react";
import { PBBackgroundPicker, PBInput, PBInputGroup, PROPERTY_TYPES } from "./PBPropertyTypes";
import PBDropdown from "../dropdown/PBDropdown";

function usePropertyRenderer({ blockId, onPropertyChange }) {
  const onChange = (prop) => {
    onPropertyChange && onPropertyChange({ blockId, prop });
    // console.log(prop);
  };

  const ContentWrapper = ({ text, children }) => {
    return (
      <div>
        {text && <h6 className="pb-panel-area-heading">{text}</h6>}
        {children}
      </div>
    );
  };

  const PropertyField = ({ json }) => {
    const { _type, text, ...rest } = json || {};
    const commonProps = { text };
    const itemProps = { onChange, ...rest };

    switch (_type) {
      case PROPERTY_TYPES.INPUT:
        return (
          <ContentWrapper {...commonProps}>
            <PBInput {...itemProps} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.INPUT_GROUP:
        return (
          <ContentWrapper {...commonProps}>
            <PBInputGroup {...itemProps} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.DROPDOWN:
        return (
          <ContentWrapper {...commonProps}>
            <PBDropdown {...itemProps} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.COLOR_PICKER:
        return (
          <ContentWrapper {...commonProps}>
            <PBDropdown {...itemProps} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.BACKGROUND_PICKER:
        return (
          <ContentWrapper {...commonProps}>
            <PBBackgroundPicker {...itemProps} />
          </ContentWrapper>
        );

      default:
        console.log("PBError: Unknown type", _type);
        break;
    }
  };

  const PropertyRenderer = ({ properties }) => {
    if (!properties) return <small> Selected item has no properties </small>;

    return properties.map((item, index) => {
      return <React.Fragment key={index}>{<PropertyField json={item} />}</React.Fragment>;
    });
  };

  return { PropertyRenderer };
}

export default usePropertyRenderer;
