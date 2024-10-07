export const CAMPAIGN_TEMPLATE_KEYS = {
  MULTI_TECHNOLOGY_CAMPAIGN: "MULTI_TECHNOLOGY_CAMPAIGN",
  SINGLE_TECHNOLOGY_CAMPAIGN_SPT: "SINGLE_TECHNOLOGY_CAMPAIGN_SPT",
  SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2: "SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2",
};

export const DEFAULT_THEME_COLORS = {
  color: "var(--app-main-color)",
  textcolor: "white",
  modalFooterCancel: "#292929",
};
export const THEME_COLORS = {
  [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT]: {
    color: "var(--spt-main-color)",
    modalFooterCancel: "#d25050",
    forBorders: "#d25050",
    textcolor: "white",
    footerBack: "var(--spt-main-color)",
    darkText: "#656565",
  },
  [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2]: {
    color: "var(--spt-v2-color-1)",
    color2: "var(--spt-v2-color-2)",
    colorLight: "rgb(255, 231, 228)",
    forBorders: "rgb(251 215 219)",
    textcolor: "white",
    // footerBack: "#5b0000",
    footerBack: "rgb(222 56 41)",
    footerTextColor:"white",
    modalFooterCancel: "#292929",
    darkText: "#656565",
  },
};

export const getTheme = (themeKey) => {
  return THEME_COLORS[themeKey] || DEFAULT_THEME_COLORS;
};

export const PlaceholderImageURL = "https://via.placeholder.com/150";
export const getPlaceholderURL = (x = 800, y = 600, color) =>
  `https://via.placeholder.com/${x || y}x${y || x}/${color || "383838"}/fff`;
