import React, { useEffect, useState } from "react";

const SCROLL_TRAVEL = 100;
export const ArrowButtons = ({ style, containerRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollContainerRef, scrollValue) => {
    const maxScroll =
      scrollContainerRef.current.scrollWidth -
      scrollContainerRef.current.clientWidth;

    if (!(scrollValue >= 0 && scrollValue <= maxScroll)) return;
    setScrollPosition(scrollValue);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollValue;
    }
  };
  return (
    <div style={{ ...(style || {}) }}>
      <i
        // onClick={() => left && left()}
        onClick={() =>
          handleScroll(containerRef, scrollPosition - SCROLL_TRAVEL)
        }
        className="fa fa-arrow-circle-left touchable-opacity"
        style={{
          fontSize: 35,
          color: "var(--app-medium-green)",
          marginRight: 10,
        }}
      />
      <i
        // onClick={() => right && right()}
        onClick={() =>
          handleScroll(containerRef, scrollPosition + SCROLL_TRAVEL)
        }
        className="fa fa-arrow-circle-right touchable-opacity"
        style={{ fontSize: 35, color: "var(--app-medium-green)" }}
      />
    </div>
  );
};
