import React from "react";

export const ArrowButtons = () => {
  return (
    <div style={{}}>
      <i
        className="fa fa-arrow-circle-left touchable-opacity"
        style={{
          fontSize: 35,
          color: "var(--app-medium-green)",
          marginRight: 10,
        }}
      />
      <i
        className="fa fa-arrow-circle-right touchable-opacity"
        style={{ fontSize: 35, color: "var(--app-medium-green)" }}
      />
    </div>
  );
};
