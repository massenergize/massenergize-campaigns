const children = [
  { key: "solar", url: "#", text: "Solar" },
  { key: "community-solar", url: "#", text: "Community Solar" },
  { key: "home-solar", url: "#", text: "Home-Solar" },
];

export const NAVIGATION_MENU = [
  { key: "Questions", url: "#", text: "Questions", icon: "fa-question" },

  {
    key: "vendors",
    url: "#",
    text: "Vendors",
    children,
    icon: "fa-vendor",
  },
  {
    key: "incentives",
    url: "#",
    text: "Incentives",
    children,
    icon: "fa-money",
  },
  {
    key: "testimonial",
    url: "#",
    text: "Testimonials",
    children,
    icon: "fa-comment",
  },
  {
    key: "contact-us",
    url: "#",
    text: "Contact Us",
    children,
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
