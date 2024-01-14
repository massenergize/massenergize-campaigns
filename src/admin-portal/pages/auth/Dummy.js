import React from "react";
import AuthGuard from "../../../guards/AuthGuard";

function Dummy () {
  return (
    <AuthGuard>
      <center>
        <h2>You are currently in protected Route. Welcome!</h2>{" "}
      </center>
    </AuthGuard>
  );
}

export default Dummy;
