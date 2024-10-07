import { Blocks } from "./elements/blocks";
import React from "react";
const X = "x";
const layoutFlow = (direction) => {
  return { display: "flex", flexDirection: direction === X ? "row" : "column" };
};

const Y = "y";
const renderElement = (element) => {
  const { type, props, direction } = element;
  let Element = Blocks[type] || Blocks.div;
  return <Element {...(props || {})} style={{ ...props?.style, ...layoutFlow(direction, Y) }} />;
};
export const renderSection = (block) => {
  const { direction, element, content } = block || {};
  const { type, text } = element || {};
  if (!element) return null;
  let Tag = Blocks[type] || Blocks.div;
  const Element = ({ style, children, ...rest }) => {
    const containerStyle = { ...style, ...layoutFlow(direction) };
    return (
      <Tag {...rest} style={containerStyle}>
        {children}
      </Tag>
    );
  };
  if (!text && !content) return <Element {...element?.props} />;

  return (
    <Element {...element?.props}>
      {text && text}
      {content && content?.map((el) => <React.Fragment key={el?.key}>{renderSection(el)}</React.Fragment>)}
    </Element>
  );
};
