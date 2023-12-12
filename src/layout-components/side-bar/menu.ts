export const MENU = [
  {
    id : "home",
    disabled : false,
    title: "Home",
    href: "/home",
    icon: "home"
  },
  {
    id : "",
    disabled : false,
    title: "Campaigns",
    children: [
      {
        id : "view_campaigns",
        disabled : false,
        title: "View All",
        href: "/campaigns/view",
      },
      {
        id : "create_campaigns",
        disabled : false,
        title: "Create Campaign",
        href: "/campaigns/create",
      }
    ]
  },
  {
    id : "technologies",
    disabled : false,
    title : "Technologies",
    children: [
      {
        id : "view_technologies",
        disabled : false,
        title: "View All",
        href: "/technologies/view",
      },
      {
        id : "create_technologies",
        disabled : false,
        title: "Create Technology",
        href: "/technologies/create",
      }
    ]
  }
]
