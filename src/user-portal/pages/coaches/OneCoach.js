import React from "react";
import noCoach from "./../../../assets/imgs/no-coach.png";
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
      <img className="" src={image?.url || noCoach} alt={"logo"}></img>
      <h6 className="">{full_name}</h6>
      <p className="" style={{  }}>
        {community}
      </p>
    </div>
  );
}

export default OneCoach;
