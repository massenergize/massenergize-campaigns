import campaign_data from "./home-page-data.json";

const children = [
  { key: "heat-pump", url: "#coaches-section", text: "Heat Pump" },
  { key: "community-solar", url: "#", text: "Community Solar" },
  { key: "home-solar", url: "#", text: "Home Solar" },
];

export const NAVIGATION_MENU = [
  { key: "home", url: "/", text: "Home", icon: "fa-home" },
  {
    key: "questions",
    url: "#testimonial-section",
    text: "Questions",
    icon: "fa-question-circle",
  },
  {
    key: "coaches",
    url: "#coaches-section",
    text: "Coaches",
    icon: "fa-users",
    children,
  },

  {
    key: "vendors",
    url: "#",
    text: "Vendors",
    children,
    icon: "fa-sell",
  },
  {
    key: "incentives",
    url: "#",
    text: "Incentives",
    children,
    icon: "fa-money",
  },
  {
    key: "events",
    url: "#",
    text: "Events",
    children,
    icon: "fa-calendar",
  },
  {
    key: "testimonial",
    url: "#",
    text: "Testimonial",
    children,
    icon: "fa-comment",
  },
  {
    key: "contact-us",
    url: "#",
    text: "Contact Us",
    icon: "fa-phone",
  },
];

export const COMMUNITY_LIST = [
  { key: "wayland", name: "Wayland" },
  { key: "newton", name: "Newton" },
  { key: "framingham", name: "Framingham" },
  { key: "concord", name: "Concord" },
  { key: "abode", name: "Abode" },
  { key: "other", name: "Other" },
];

export const CAMPAIGN_DATA = campaign_data;
