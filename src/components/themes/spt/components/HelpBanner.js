import React from "react";
import { getTheme } from "../../../../utils/Values";
import SPTButton from "../../sptV2/components/SPTButton";

function HelpBanner({ section, themeKey }) {
  const { title, description, media, call_to_action_items } = section || {};

  const theme = getTheme(themeKey);

  return (
    <div className="spt-section-padding spt-section-margin-top">
      <div className="spt-get-help">
        <img src={media?.url} alt="Help Banner" />
        <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>
          <div>
            <h5>{title || "..."}</h5>
            <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
        <div className="btn-area">
          {call_to_action_items?.map(({ url, text }, index) => {
            const even = (index + 1) % 2 === 0;
            return (
              <SPTButton
                themeKey={themeKey}
                onClick={() => {
                  if (!url) return;
                  window.open(url, "_blank");
                }}
                className={`${even ? "spt-btn-outline" : "spt-btn"} smart-width s-touchable-opacity`}
                style={{
                  "--smart-width": "100%",
                  marginTop: 8,
                  "--border-color": theme?.color,
                  "--text-color": theme?.color,
                }}
              >
                {text}
              </SPTButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HelpBanner;
