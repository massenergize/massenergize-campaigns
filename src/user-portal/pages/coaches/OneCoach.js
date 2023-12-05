import React from "react";

function OneCoach() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://i.pravatar.cc/300"
        style={{
          borderRadius: "100%",
          width: 120,
          height: 120,
          marginBlock: 10,
        }}
      ></img>
      {/* <span style={{ fontSize: 12, color: "grey" }}>KEY CONTACT</span> */}
      <h6 className="">BRAD HUBBARD-NELSON</h6>
      <p
        className=""
        style={{ fontWeight: "bold", fontSize: 15, color: "var(--app-orange)" }}
      >
        WAYLAND
      </p>
    </div>
  );
}

export default OneCoach;
