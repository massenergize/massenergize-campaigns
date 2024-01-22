import React, { useEffect, useRef, useState } from "react";

const DEFAULT_MAX = 150;
const PADDING = 15;
function SmartRichText({
  text,
  richText,
  children,
  maxHeight = DEFAULT_MAX,
  style,
  renderSeeMore,
}) {
  const ref = useRef();
  const [stashedHeight, setStashedHeight] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(maxHeight);

  const isReallyLong = () => {
    if (!ref.current) return false;
    return ref.current.clientHeight > maxHeight;
  };

  useEffect(() => {
    if (!ref.current) return;
    const height = ref.current.clientHeight + 15;
    if (height > maxHeight) {
      setStashedHeight(height);
      setDisplayHeight(maxHeight);
    }
  }, [text, ref]);

  const inFullView = displayHeight === stashedHeight;

  const toggleReadMore = () => {
    if (inFullView) return setDisplayHeight(maxHeight);
    setDisplayHeight(stashedHeight);
  };

  const renderCustomSeeMore = () => {
    if (renderSeeMore) return renderSeeMore(toggleReadMore, isReallyLong());

    if (!isReallyLong()) return <></>;

    return (
      <small
        className="touchable-opacity"
        style={{
          fontWeight: "bold",
          color: "var(--app-orange)",
          textDecoration: "underline",
        }}
        onClick={() => toggleReadMore()}
      >
        {inFullView ? "See Less" : "See More..."}
      </small>
    );
  };
  return (
    <>
      <div
        style={{
          padding: `${PADDING}px 0px`,
          //   padding: `15px 0px`,
          ...(style || {}),
          height: displayHeight,
          overflowY: "hidden",
        }}
      >
        <p
          // style={{ overflowY: "hidden" }}
          ref={ref}
          dangerouslySetInnerHTML={{ __html: text || richText || children }}
        ></p>
      </div>
      {renderCustomSeeMore()}
      {/* {isReallyLong() && (
        <small
          className="touchable-opacity"
          style={{
            fontWeight: "bold",
            color: "var(--app-orange)",
            textDecoration: "underline",
          }}
          onClick={() => toggleReadMore()}
        >
          {inFullView ? "See Less" : "See More..."}
        </small>
      )} */}
    </>
  );
}

export default SmartRichText;
