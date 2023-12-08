import campaignData from "./home-page-data.json";
import oneTechData from "./one-tech.json";

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

export const COMMENTS = [
  {
    email: "lospongos@gmail.com",
    name: "Akwesi Frimpong",
    community: "Wayland",
    message:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  },
  {
    community: "Concord",
    email: "lospons@gmail.com",
    name: "Daniel Kuds",
    message:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  },
  {
    community: "Abode",
    email: "ongos@gmail.com",
    name: "Lacatell Tottenham",
    message:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  },
  {
    community: "Newton",
    email: "lpongos@gmail.com",
    name: "Jude BellingFake",
    message:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  },
  {
    community: "Ablekuma",
    email: "lospoos@gmail.com",
    name: "Dennis Kumatro",
    message:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  },
];

export const CAMPAIGN_DATA = campaignData;
export const ONE_TECH_DATA = oneTechData;
