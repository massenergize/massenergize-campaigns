import React from "react";
import { useSelector } from "react-redux";

function LanguageSelectionModal({ languages, selectLanguage }) {
  const activeLanguage = useSelector((state) => state?.activeLanguage);
  
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {languages?.map((l) => {
        const isActive = l?.code === activeLanguage;
        return (
          <div
            onClick={() => selectLanguage(l?.code)}
            className="touchable-opacity"
            key={l?.code}
            style={{
              padding: 10,
              margin: 5,
              borderRadius: 5,
              border: "1px solid var(--app-main-color)",
              cursor: "pointer",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: 2, color: "var(--app-main-color)" }}>{l?.name}</p>
            <small style={{}}>{l?.code}</small>
            {isActive && <i className="fa fa-check-circle" style={{ color: "#10a510", marginLeft: 5 }}></i>}
          </div>
        );
      })}
    </div>
  );
}

export default LanguageSelectionModal;
