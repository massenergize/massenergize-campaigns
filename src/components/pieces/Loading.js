import React from "react";
import { Spinner } from "react-bootstrap";

function Loading ({ text = "Loading...", fullPage, children, spinnerStyle }) {
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
      <Spinner
        style={{ ...(spinnerStyle || {}) }}
        animation="border"
        variant="success"
      />
      <small
        style={{
          margin: 10,
          fontWeight: "bold",
          color: "var(--app-deep-green)",
        }}
      >
        {children || text}
      </small>
    </div>
  );
}

export default Loading;
