export const MENU = [
  {
    id : "home",
    disabled : false,
    title: "Home",
    href: "/admin/campaign/all",
    icon: "home"
  },
  {
    id : "campaigns",
    href: "#",
    disabled : false,
    title: "Campaigns",
    children: [
      {
        id : "view_campaigns",
        disabled : false,
        title: "View All",
        href: "/admin/campaign/all",
      },
      {
        id : "create_campaigns",
        disabled : false,
        title: "Create Campaign",
        href: "/admin/campaign/new",
      }
    ],
    show : false
  },
  {
    id : "technologies",
    href: "#",
    disabled : false,
    title : "Technologies",
    children: [
      {
        id : "view_technologies",
        disabled : false,
        title: "View All",
        href: "/admin/technologies/all",
      },
      {
        id : "create_technologies",
        disabled : false,
        title: "Create Technology",
        href: "/admin/technologies/create",
      }
    ],
    show : false
  }
]
