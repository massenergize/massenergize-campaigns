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
  },
  [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2]: {
    color: "var(--spt-v2-color-1)",
    color2: "var(--spt-v2-color-2)",
    colorLight: "rgb(255, 231, 228)",
    modalFooterCancel: "#d25050",
    forBorders: "#f1bfc4",
    textcolor: "white",
  },
};

export const getTheme = (themeKey) => {
  return THEME_COLORS[themeKey] || DEFAULT_THEME_COLORS;
};
