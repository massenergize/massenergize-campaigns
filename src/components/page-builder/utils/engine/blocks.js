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
export const Title = (props) => {
  const { children, ...rest } = props || {};
  return <h2 {...rest}>{children}</h2>;
};
export const Span = (props) => {
  const { children, ...rest } = props || {};
  return <span {...rest}>{children}</span>;
};
export const Link = (props) => {
  const { children, ...rest } = props || {};
  return (
    <a href="#" {...rest}>
      {children}
    </a>
  );
};
export const Icon = (props) => {
  const { faIcon, ...rest } = props || {};
  return (
    <span>
      <i className={`fa ${faIcon || "fa-globe"}`} {...rest}></i>
    </span>
  );
};
export const YoutubeVideo = (props) => {
  const { ...rest } = props || {};
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", ...rest }}>
      <iframe
        src={`https://www.youtube.com/embed/J3oijWs-dCs`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export const Blocks = {
  div: Div,
  img: Image,
  p: Paragraph,
  span: Span,
  h2: Title,
  video: YoutubeVideo,
  link: Link,
  icon: Icon,
};
