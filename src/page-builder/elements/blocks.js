import React from "react";

export const Div = (props) => {
  const { children, ...rest } = props || {};
  return <div {...rest}>{children}</div>;
};

export const Image = (props) => {
  //   const { children, ...rest } = props || {};
  return <img alt="default media alt" {...props} />;
};

export const Paragraph = (props) => {
  const { children, ...rest } = props || {};
  return <p {...rest}>{children}</p>;
};
export const Span = (props) => {
  const { children, ...rest } = props || {};
  return <span {...rest}>{children}</span>;
};

export const Blocks = {
  div: Div,
  img: Image,
  p: Paragraph,
  span: Span,
};
