import ActionSelect from "../admin-portal/create-campaign/ActionSelect";
import CampaignCoaches from "../admin-portal/create-campaign/CampaignCoaches";
import Events from "../admin-portal/create-campaign/Events";
import Goal from "../admin-portal/create-campaign/Goal";
import Information from "../admin-portal/create-campaign/Information";
import Navigation from "../admin-portal/create-campaign/Navigation";
import Partners from "../admin-portal/create-campaign/Partners";
import Coaches from "../admin-portal/create-campaign/create-technology/Coaches";
import Incentives from "../admin-portal/create-campaign/create-technology/Incentives";
import Info from "../admin-portal/create-campaign/create-technology/Info";
import Vendors from "../admin-portal/create-campaign/create-technology/Vendors";

export const campaignPages = [
	{
		name: "Information",
		component: Information,
	},
	{
		name: "Technologies",
		component: ActionSelect,
	},
	// {
	// 	name: "Goal & Focus",
	// 	component: Goal,
	// },
	{
		name: "Managers",
		component: CampaignCoaches,
	},
	{
		name: "Events",
		component: Events,
	},
	{
		name: "Partners",
		component: Partners,
	},
	{
		name: "Navigation",
		component: Navigation,
	},
];

export const technologyPages = [
	{
		name: "Information",
		component: Info,
	},
	{
		name: "Coaches",
		component: Coaches,
	},
	{
		name: "Vendors",
		component: Vendors,
	},
	{
		name: "Incentives",
		component: Incentives,
	},
];
