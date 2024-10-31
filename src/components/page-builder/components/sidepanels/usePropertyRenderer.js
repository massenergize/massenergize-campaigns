import React from "react";
import { PBBackgroundPicker, PBInput, PBInputGroup, PROPERTY_TYPES } from "./PBPropertyTypes";
import PBDropdown from "../dropdown/PBDropdown";

function usePropertyRenderer() {
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

    switch (_type) {
      case PROPERTY_TYPES.INPUT:
        return (
          <ContentWrapper {...commonProps}>
            <PBInput {...rest} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.INPUT_GROUP:
        return (
          <ContentWrapper {...commonProps}>
            <PBInputGroup {...rest} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.DROPDOWN:
        return (
          <ContentWrapper {...commonProps}>
            <PBDropdown {...rest} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.COLOR_PICKER:
        return (
          <ContentWrapper {...commonProps}>
            <PBDropdown {...rest} />
          </ContentWrapper>
        );
      case PROPERTY_TYPES.BACKGROUND_PICKER:
        return (
          <ContentWrapper {...commonProps}>
            <PBBackgroundPicker {...rest} />
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
