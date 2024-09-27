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
    textcolor: "white",
  },
  [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2]: {
    color: "var(--spt-v2-color-1)",
    modalFooterCancel: "#d25050",
    textcolor: "white",
  },
};
