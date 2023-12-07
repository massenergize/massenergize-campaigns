import React from "react";

const interactions = [
  { icon: "fa-heart", name: "Likes", count: 1345 },
  { icon: "fa-comment", name: "Comments", count: 185 },
  { icon: "fa-eye", name: "Views", count: 3542 },
  { icon: "fa-share", name: "Shares", count: 15 },
];
function InteractionsPanel() {
  return (
    <div
      className="mt-3"
      style={{
        border: "solid 1px var(--app-medium-green)",
        padding: "10px 15px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius:3
      }}
    >
      {interactions.map((inter, index) => {
        return (
          <div
            key={index?.toString()}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "0px 10px",
            }}
          >
            <i
              className={`fa ${inter.icon}`}
              style={{ marginRight: 6, color: "var(--app-deep-green)" }}
            />
            <small style={{ fontWeight: "bold" }}>
              {inter.count} {inter.name}
            </small>
          </div>
        );
      })}
    </div>
  );
}

export default InteractionsPanel;
