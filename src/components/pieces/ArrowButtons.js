import React, { useEffect, useRef, useState } from "react";

const SCROLL_TRAVEL = 350;
export const ArrowButtons = ({ style, containerRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const scrollIntervalRef = useRef(null);

  const handleScroll = (scrollContainerRef, scrollValue) => {
    if (!scrollContainerRef) return;
    const maxScroll =
      scrollContainerRef.current.scrollWidth -
      scrollContainerRef.current.clientWidth;

    if (scrollValue >= maxScroll) scrollValue = maxScroll;
    else if (scrollValue <= 0) scrollValue = 0;

    if (scrollContainerRef.current) {
      setScrollPosition(scrollValue);
      scrollContainerRef.current.scrollLeft = scrollValue;
    }
  };

  // const handleMouseDown = (increment = SCROLL_TRAVEL) => {
  //   doScroll(increment);
  //   // scrollIntervalRef.current = setInterval(() => {
  //   //   console.log("DREAMING RIGHT")
  //   //   doScroll(increment);
  //   // }, 50); // Adjust the interval based on your preference
  // };

  // const handleMouseUp = () => {
  //   clearInterval(scrollIntervalRef.current);
  // };

  const doScroll = (increment = SCROLL_TRAVEL) => {
    handleScroll(containerRef, scrollPosition + increment);
  };

  return (
    <div style={{ ...(style || {}) }}>
      <i
        onClick={() => doScroll(-1 * SCROLL_TRAVEL)}
        className="fa fa-arrow-circle-left touchable-opacity"
        style={{
          fontSize: 35,
          color: "var(--app-main-color)",
          marginRight: 10,
        }}
      />
      <i
        onClick={() => doScroll()}
        className="fa fa-arrow-circle-right touchable-opacity"
        style={{ fontSize: 35, color: "var(--app-main-color)" }}
      />
    </div>
  );
};
