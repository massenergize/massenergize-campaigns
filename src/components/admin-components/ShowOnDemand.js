import React from "react";

function ShowOnDemand({ show, children }) {
  if (!show) return <></>;
  return <>{children}</>;
}

export default ShowOnDemand;
