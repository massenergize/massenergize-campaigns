import React from "react";

function RoamingModalSheet({ data }) {
  const { description } = data || {};
  return (
    <div>
      <div className="body-font" style={{ padding: 20 }} dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
}

export default RoamingModalSheet;
