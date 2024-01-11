import React from "react";

function OneCoach({ full_name, image, community }) {
  return (
    <div
      className="one-coach-main"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        className=""
        src={image?.url}
        // style={{
        //   borderRadius: "100%",
        //   width: 120,
        //   height: 120,
        //   marginBlock: 10,
        //   objectFit: "cover",
        // }}
      ></img>
      {/* <span style={{ fontSize: 12, color: "grey" }}>KEY CONTACT</span> */}
      <h6 className="">{full_name}</h6>
      <p
        className=""
        // style={{
        //   fontWeight: "bold",
        //   fontSize: 15,
        //   color: "var(--app-orange)",
        //   textTransform: "uppercase",
        // }}
      >
        {community}
      </p>
    </div>
  );
}

export default OneCoach;
