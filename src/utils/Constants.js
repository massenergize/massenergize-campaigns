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

export const menus = [
	{
		title: "Home",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				version="1.1"
				viewBox="0 0 16 16"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path>
			</svg>
		),
		link: "/",
	},
	{
		title: "Profile",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 448 512"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
			</svg>
		),
		link: "profile",
	},
	{
		title: "Projects",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				t="1569683753031"
				viewBox="0 0 1024 1024"
				version="1.1"
				pId="14137"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs></defs>
				<path
					d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"
					pId="14138"
				></path>
				<path
					d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"
					pId="14139"
				></path>
			</svg>
		),
		link: "projects",
	},
	{
		title: "Blog",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 512 512"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path>
			</svg>
		),
		link: "blog",
	},
	{
		title: "Contact Me",
		icon: (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 24 24"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path>
			</svg>
		),
		link: "contact",
	},
];

export const statsData = {
	data: {
		shares: [
			{
				utm_medium: "email",
				count: 1,
			},
			{
				utm_medium: "Whatsapp",
				count: 2,
			},
		],
		likes: [
			{
				technology: "Community Solar",
				count: 1,
			},
			{
				technology: "Heat Pump",
				count: 1,
			},
		],
		views: [
			{
				technology: "Change Name",
				count: 1,
			},
			{
				technology: "Community Solar",
				count: 2,
			},
		],
		followers: [
			{
				community: 24,
				count: 5,
			},
		],
		comments: [
			{
				technology: "Community Solar",
				count: 2,
			},
		],
		testimonials: [
			{
				technology: "Change Name",
				count: 4,
			},
			{
				technology: "Community Solar",
				count: 4,
			},
			{
				technology: "Heat Pump",
				count: 3,
			},
		],
	},
	error: null,
	success: true,
	cursor: {},
};

export const comments = [
	{
		id: 1,
		email: "example1@example.com",
		first_name: "John",
		last_name: "Doe",
		comment: "Great campaign! Really enjoyed participating.",
		date: "20130623T13:22-0500",
		country: "United States",
	},
	{
		id: 2,
		email: "example2@example.com",
		first_name: "Jane",
		last_name: "Smith",
		comment:
			"Enjoyed connecting with like-minded people through this campaign.",
		date: "20130623T13:22-0500",
		country: "Canada",
	},
	{
		id: 3,
		email: "example3@example.com",
		first_name: "Alice",
		last_name: "Johnson",
		comment: "Impressed by the creativity and innovation in this campaign.",
		date: "20130623T13:22-0500",
		country: "Australia",
	},
	{
		id: 4,
		email: "example4@example.com",
		first_name: "Bob",
		last_name: "Williams",
		comment: "Interesting concept. Can't wait to see the results.",
		date: "20130623T13:22-0500",
		country: "United Kingdom",
	},
	{
		id: 5,
		email: "example5@example.com",
		first_name: "Eve",
		last_name: "Brown",
		comment: "Loved being a part of this. Keep up the good work.",
		date: "20130623T13:22-0500",
		country: "Germany",
	},
];
