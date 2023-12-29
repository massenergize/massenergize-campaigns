import {
  faBullhorn,
  faHome,
  faListDots,
  faPen,
  faArrowRightFromBracket,
  faHeadset,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SIDE_BAR_MENU = [
  {
    groupName: "Manage",
    children: [
      {
        id: "home",
        name: "Home",
        link: `/admin/campaign/all`,
        icon: <FontAwesomeIcon icon={faHome} />,
      },
      {
        id: "campaigns",
        name: "Campaigns",
        icon: <FontAwesomeIcon icon={faBullhorn} />,
        children: [
          {
            id: "view_campaigns",
            disabled: false,
            name: "All Campaigns",
            link: "/admin/campaign/all",
            icon: <FontAwesomeIcon icon={faListDots} />,
          },
          {
            id: "create-campaign",
            disabled: false,
            name: "Create Campaign",
            link: "/admin/campaign/new",
            icon: <FontAwesomeIcon icon={faPen} />,
          },
        ],
      },
     /* {
        id: "technologies",
        name: "Technologies",
        icon: <FontAwesomeIcon icon={faBullseye} />,
        children: [
          {
            id: "view_technologies",
            disabled: false,
            name: "All Technologies",
            link: "/admin/technology/all",
            icon: <FontAwesomeIcon icon={faListDots} />,
          },
          {
            id: "create_technologies",
            disabled: false,
            name: "Create Technology",
            link: "/admin/technology/new",
            icon: <FontAwesomeIcon icon={faPen} />,
          },
        ],
      },*/
    ],
  },
];


export const BOTTOM_MENU = [
  // {
  //   id: "account-settings",
  //   name: "Account Settings",
  //   icon: <FontAwesomeIcon icon={faCog} />,
  //   link: "/admin/account-settings",
  // },
  {
    id: "sign-out",
    name: "SignOut",
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
  },
  {
    id: "help",
    name: "Ask for help",
    link: "/contact",
    icon: <FontAwesomeIcon icon={faHeadset} />,
  },
];
