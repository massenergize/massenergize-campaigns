import React from "react";

function HelpBanner({ section }) {
  const { title, description, media, call_to_action_items } = section || {};

  console.log("lets see media", section, media);
  return (
    <div className="spt-section-padding spt-section-margin-top">
      <div
        className="spt-get-help"
        // style={{
        //   padding: "10px 25px",
        //   display: "flex",
        //   flexDirection: "row",
        //   border: "solid 1px #efefef",
        //   borderRadius: 10,
        //   alignItems: "center",
        // }}
      >
        <img
          // style={{ width: 80, borderRadius: "100%", marginRight: 20 }}
          src={media?.url}
          alt="Help Banner"
        />
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
              <div
                onClick={() => {
                  if (!url) return;
                  window.open(url, "_blank");
                }}
                className={`${even ? "spt-btn-outline" : "spt-btn"} smart-width`}
                style={{ "--smart-width": "100%", marginTop: 8 }}
              >
                {text}
              </div>
            );
          })}

          {/* <div className="spt-btn smart-width" style={{ "--smart-width": "100%" }}>
            Schedule a Call
          </div>
          <div
            className="spt-btn-outline"
            style={{
              marginTop: 10,
            }}
          >
            Send an Email
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HelpBanner;
