const children = [
  { key: "solar", url: "#", text: "Solar" },
  { key: "community-solar", url: "#", text: "Community Solar" },
  { key: "home-solar", url: "#", text: "Home-Solar" },
];

export const NAVIGATION_MENU = [
  { key: "Questions", url: "#", text: "Questions" },

  {
    key: "vendors",
    url: "#",
    text: "Vendors",
    children,
  },
  {
    key: "incentives",
    url: "#",
    text: "Incentives",
    children,
  },
  {
    key: "testimonial",
    url: "#",
    text: "Testimonials",
    children,
  },
  {
    key: "contact-us",
    url: "#",
    text: "Contact Us",
    children,
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
