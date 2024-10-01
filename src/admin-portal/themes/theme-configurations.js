import { CAMPAIGN_TEMPLATE_KEYS } from "../../utils/Values";

export const MAIN_PAGE_CUSTOMIZATION_SECTION_KEY = "MAIN_PAGE_CUSTOMIZATION";
export const HERO_SECTION_KEY = "HERO_SECTION_KEY";
export const BANNER_SECTION_KEY = "BANNER_SECTION_KEY";
export const GOAL_SECTION_KEY = "GOAL_SECTION_KEY";
export const GET_HELP_SECTION_KEY = "GET_HELP_SECTION_KEY";
export const CONTACT_US_SECTION_KEY = "CONTACT_US_SECTION_KEY";
//  Technology Information

export const TECH_CALL_TO_ACTION_SECTION_KEY = "TECH_CALL_TO_ACTION_SECTION_KEY";

export const THEME_CONFIGURATIONS = {
  [CAMPAIGN_TEMPLATE_KEYS.MULTI_TECHNOLOGY_CAMPAIGN]: {
    name: "Default",
    key: CAMPAIGN_TEMPLATE_KEYS.MULTI_TECHNOLOGY_CAMPAIGN,
    pages: {
      campaign: {
        tabs: [
          {
            tabKeyId: "Information", //change to constants later
            sections: [MAIN_PAGE_CUSTOMIZATION_SECTION_KEY],
          },
          { tabKeyId: "Technologies", sections: [] },
          { tabKeyId: "Communities", sections: [] },
          { tabKeyId: "Managers", sections: [] },
          { tabKeyId: "Events", sections: [] },
          { tabKeyId: "Testimonials", sections: [] },
          { tabKeyId: "Comments", sections: [] },
          { tabKeyId: "Translation", sections: [] },
        ],
      },
      technology: {
        preview: { show: true },
        tabs: [
          {
            tabKeyId: "Information", //change to constants later
            sections: [],
          },
          { tabKeyId: "Coaches", sections: [] },
          { tabKeyId: "Vendors", sections: [] },
          { tabKeyId: "Overview", sections: [] },
          { tabKeyId: "Deals", sections: [] },
        ],
      },
    },
  },
  [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT]: {
    name: "SPT Theme V1 - Videos",
    key: CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT,
    pages: {
      campaign: {
        tabs: [
          {
            tabKeyId: "Information", //change to constants later
            sections: [
              HERO_SECTION_KEY,
              BANNER_SECTION_KEY,
              GOAL_SECTION_KEY,
              GET_HELP_SECTION_KEY,
              CONTACT_US_SECTION_KEY,
            ],
          },
          { tabKeyId: "Technologies", sections: [] },
          { tabKeyId: "Communities", sections: [] },
          { tabKeyId: "Events", sections: [] },
          { tabKeyId: "Translation", sections: [] },
        ],
      },
      technology: {
        preview: { show: false },
        tabs: [
          {
            tabKeyId: "Information", //change to constants later
            sections: [TECH_CALL_TO_ACTION_SECTION_KEY],
          },
          { tabKeyId: "Vendors", alias: "Partners", sections: [] },
          { tabKeyId: "Overview", sections: [] },
          { tabKeyId: "Deals", sections: [] },
          { tabKeyId: "FAQS", sections: [] },
        ],
      },
    },
  },
  [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2]: {
    name: "SPT Theme V2 - Carousel 1",
    key: CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2,
    pages: {
      campaign: {
        tabs: [
          {
            tabKeyId: "Information", //change to constants later
            sections: [HERO_SECTION_KEY, GOAL_SECTION_KEY, GET_HELP_SECTION_KEY, CONTACT_US_SECTION_KEY],
          },
          { tabKeyId: "Technologies", sections: [] },
          { tabKeyId: "Communities", sections: [] },
          { tabKeyId: "Events", sections: [] },
          { tabKeyId: "Translation", sections: [] },
        ],
      },
      technology: {
        preview: { show: false },
        tabs: [
          {
            tabKeyId: "Information", //change to constants later
            sections: [TECH_CALL_TO_ACTION_SECTION_KEY],
          },
          { tabKeyId: "Vendors", alias: "Partners", sections: [] },
          { tabKeyId: "Overview", alias: "Benefits", sections: [] },
          { tabKeyId: "Deals", alias: "How does it work?", sections: [] },
          { tabKeyId: "FAQS", sections: [] },
        ],
      },
    },
  },
};

export const findTabConfig = (tabKeyId, themeKey, page) => {
  const themeConfig = THEME_CONFIGURATIONS[themeKey];
  const cPageConfig = (themeConfig?.pages || {})[page];
  if (!cPageConfig) return null;
  const tabConfig = cPageConfig?.tabs.find((tab) => tab?.tabKeyId === tabKeyId);
  return tabConfig;
};
