import React from "react";

function BlurWrapper(props) {
  const { children, blurStyle, style, className, blurClassName, src } = props;
  const styles = { ...(blurStyle || {}), filter: "blur(10px)", objectFit: "cover" };
  return (
    <div className={`${className || ""}`} style={{ ...(style || {}), position: "relative" }}>
      <img src={src} className={`${blurClassName || ""}`} style={styles} alt="blur background" />
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default BlurWrapper;
