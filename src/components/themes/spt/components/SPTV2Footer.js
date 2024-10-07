import React from "react";
import SPTButton from "../../sptV2/components/SPTButton";
import { getTheme } from "../../../../utils/Values";
import CONFIG from "../../../../config/config.json";
function SPTV2Footer({ section, themeKey }) {
  const theme = getTheme(themeKey);
  return (
    <div style={{ display: "flex", flexDirection: "row", background: theme?.footerBack, padding: "15px 30px" }}>
      <small className="spt-footer-notes" style={{ color: theme?.footerTextColor }}>
        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Copyright &copy; 2024</span> All Rights
        Reserved. Powered by{" "}
        <span className="" style={{ textDecoration: "underline", fontWeight: "bold" }}>
          MassEnergize
        </span>
        <br />
        <small
          style={{
            marginTop: 15,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            opacity: 0.6,
          }}
        >
          Build Version {CONFIG.BUILD_VERSION}, Theme Version [SPT V3]
        </small>
      </small>
    </div>
  );
}

export default SPTV2Footer;
