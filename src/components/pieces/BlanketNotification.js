import React, { useEffect } from "react";

function BlanketNotification({ render, message, title, durationToReload, reloadText }) {
  const Canvas = ({ children }) => (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "antiquewhite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );

  useEffect(() => {
    if (durationToReload) {
      const interval = setInterval(() => {
        durationToReload--;
        if (durationToReload === 0) window.location.reload();
      }, durationToReload * 1000);
      return () => clearInterval(interval);
    }
  }, [durationToReload]);

  if (render) return <Canvas>{render()}</Canvas>;
  return (
    <Canvas>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title && <h5 style={{ color: "var(--app-main-color)" }}>{title}</h5>}
        <p>{message || "..."}</p>
        {durationToReload && (
          <span
            className="touchable-opacity"
            style={{ fontWeight: "bold", textDecoration: "underline", color: "var(--app-main-color)" }}
            onClick={() => window.location.reload()}
          >
            {reloadText || "Or click to reload now!"}
          </span>
        )}
      </div>
    </Canvas>
  );
}

export default BlanketNotification;
