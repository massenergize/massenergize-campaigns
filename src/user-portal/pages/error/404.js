import React from "react";
import PageWrapper from "../wrappers/PageWrapper";
import svg from "./../../../assets/svgs/404.svg";
function NotFound ({ text }) {
  return (
    <PageWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={svg} style={{ width: "30vh", height: "30vh" }} alt={""} />
        <h6 style={{ color: "var(--app-deep-green)" }}>
          {text || " Sorry, could not find what you were looking for..."}
          <span
            onClick={() => window.location.reload()}
            className="touchable-opacity"
            style={{
              fontWeight: "bold",
              color: "var(--app-orange)",
              textDecoration: "underline",
              marginLeft: 6,
            }}
          >
            Retry
          </span>
        </h6>
      </div>
    </PageWrapper>
  );
}

export default NotFound;
