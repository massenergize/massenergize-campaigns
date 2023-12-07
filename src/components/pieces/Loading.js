import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ text = "Loading...", fullPage }) {
  const styles = fullPage
    ? {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    : {};
  return (
    <div style={styles}>
      <Spinner animation="border" variant="success" />
      <small style={{ margin: 10 }}>{text}</small>
    </div>
  );
}

export default Loading;