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
export const renderSection = (section) => {
  const { container, direction, elements } = section;
  if (!elements) return null;
  let ContainerBlock = Blocks[container?.type] || Blocks.div;
  const Container = ({ style, children, ...rest }) => {
    const containerStyle = { ...style, ...layoutFlow(direction) };
    return (
      <ContainerBlock {...rest} style={containerStyle}>
        {container?.children}
      </ContainerBlock>
    );
  };

  return (
    <Container {...container?.props}>
      {elements?.map((el) => (
        <React.Fragment key={el?.key}>{renderElement(el)}</React.Fragment>
      ))}
    </Container>
  );
};
