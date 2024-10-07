import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ text = "Loading...", fullPage, children, spinnerStyle, color }) {
  const styles = fullPage
    ? {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      };
  return (
    <div style={styles}>
      <Spinner style={{ color, ...(spinnerStyle || {}) }} animation="border" />
      <small
        className="small-font"
        style={{
          margin: 10,
          fontWeight: "bold",
          color,
          // color: "var(--app-main-color)",
        }}
      >
        {children || text}
      </small>
    </div>
  );
}

export default Loading;
