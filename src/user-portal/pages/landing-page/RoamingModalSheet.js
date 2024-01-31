import React from "react";

function RoamingModalSheet({ data }) {
  const { description } = data || {};
  //   console.log("This is the advert data", data);
  return (
    <div>
      <div style={{ padding: 20 }} dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
}

export default RoamingModalSheet;
