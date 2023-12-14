import Technologies from "../admin-portal/create-campaign/Technologies";
import Managers from "../admin-portal/create-campaign/Managers";
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
		component: Technologies,
	},
	// {
	// 	name: "Goal & Focus",
	// 	component: Goal,
	// },
	{
		name: "Managers",
		component: Managers,
	},
	{
		name: "Events",
		component: Events,
	},
	{
		name: "Partners",
		component: Partners,
	},
	// {
	// 	name: "Navigation",
	// 	component: Navigation,
	// },
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
		comment:
			"Loved being a part of this. Keep up the good work.Loved being a part of this. Keep up the good work.Loved being a part of this. Keep up the good work.Loved being a part of this. Keep up the good work.Loved being a part of this. Keep up the good work.Loved being a part of this. Keep up the good work.",
		date: "20130623T13:22-0500",
		country: "Germany",
	},
];
export const LOADING = "LOADING";

// export const campaignData = {
// 	stats: {
// 		shares: [
// 			{
// 				utm_medium: "email",
// 				count: 1,
// 			},
// 			{
// 				utm_medium: "Whatsapp",
// 				count: 2,
// 			},
// 		],
// 		likes: [
// 			{
// 				technology: "Community Solar",
// 				count: 1,
// 			},
// 			{
// 				technology: "Heat Pump",
// 				count: 1,
// 			},
// 		],
// 		views: [
// 			{
// 				technology: "Change Name",
// 				count: 1,
// 			},
// 			{
// 				technology: "Community Solar",
// 				count: 2,
// 			},
// 		],
// 		followers: [
// 			{
// 				community: 24,
// 				count: 5,
// 			},
// 		],
// 		comments: [
// 			{
// 				technology: "Community Solar",
// 				count: 2,
// 			},
// 		],
// 		testimonials: [
// 			{
// 				technology: "Change Name",
// 				count: 4,
// 			},
// 			{
// 				technology: "Community Solar",
// 				count: 4,
// 			},
// 			{
// 				technology: "Heat Pump",
// 				count: 3,
// 			},
// 		],
// 	},
// 	id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 	created_at: "2023-12-07T10:56:12.888Z",
// 	updated_at: "2023-12-08T10:34:31.573Z",
// 	is_deleted: false,
// 	info: null,
// 	account: {
// 		id: "583c96c5-7fb4-488f-ac54-2558252ae535",
// 	},
// 	title: "Wayland Campaign",
// 	description: "Helo there",
// 	start_date: "2023-12-07",
// 	end_date: null,
// 	primary_logo: {
// 		id: 620,
// 		name: "PrimaryLogoFor Wayland Campaign Campaign",
// 		url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 	},
// 	secondary_logo: {
// 		id: 621,
// 		name: "SecondaryLogoFor Wayland Campaign Campaign",
// 		url: "https://massenergize-files.s3.amazonaws.com/media/csu.jpeg",
// 	},
// 	image: {
// 		id: 631,
// 		name: "ImageFor Wayland Campaign Campaign",
// 		url: "https://massenergize-files.s3.amazonaws.com/media/pexels-pixabay-221012.jpg",
// 	},
// 	is_approved: false,
// 	is_published: false,
// 	is_global: true,
// 	is_template: false,
// 	tagline: "Wayland and Acton Colab",
// 	owner: "906d4df9-e7a7-4b75-b2c6-235796cab193",
// 	key_contact: {
// 		name: "Tahiru Abdullai",
// 		email: "abdullai.tahiru+203@massenergize.org",
// 		phone_number: "1286398612983",
// 		image: {
// 			id: 622,
// 			name: "ImageFor-Wayland-Campaign-Campaign",
// 			url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png",
// 		},
// 	},
// 	technologies: [
// 		{
// 			campaign_technology_id: "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
// 			testimonials: [
// 				{
// 					id: "7e586aa4-6885-44cc-a860-1daac65f2c0e",
// 					created_at: "2023-12-07T12:56:17.504Z",
// 					updated_at: "2023-12-08T08:59:14.907Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
// 					},
// 					title: "Testimonial  Ver Good",
// 					body: "When using the double-underscore notation, you can chain relationships to navigate through multiple levels of ForeignKey relationships. For instance, if Author had a ForeignKey to another model, you could use 'author__another_related_model' in the prefetch_related call.",
// 					is_approved: false,
// 					image: {
// 						id: 618,
// 						name: "ImageFor Testimonial  Ver Good CampaignTech Testimonial",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					created_by: "906d4df9-e7a7-4b75-b2c6-235796cab193",
// 					is_published: false,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "906d4df9-e7a7-4b75-b2c6-235796cab193",
// 						full_name: "ME Tahiru",
// 						preferred_name: "MET",
// 						email: "abdullai.tahiru@massenergize.org",
// 					},
// 				},
// 				{
// 					id: "4edc0d73-4e43-4a04-8d69-3ea1ab4ae735",
// 					created_at: "2023-12-07T12:55:56.642Z",
// 					updated_at: "2023-12-08T08:59:26.351Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
// 					},
// 					title: "Testimonial  101",
// 					body: "When using the double-underscore notation, you can chain relationships to navigate through multiple levels of ForeignKey relationships. For instance, if Author had a ForeignKey to another model, you could use 'author__another_related_model' in the prefetch_related call.",
// 					is_approved: false,
// 					image: {
// 						id: 617,
// 						name: "ImageFor Testimonial  101 CampaignTech Testimonial",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					created_by: "7f11c30e-e4a9-4cb5-94c6-a645ee901914",
// 					is_published: false,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "7f11c30e-e4a9-4cb5-94c6-a645ee901914",
// 						full_name: "Tahiru kehillah",
// 						preferred_name: "TahiruK",
// 						email: "abdullai@kehillahglobal.com",
// 					},
// 				},
// 				{
// 					id: "4e36c42c-79a1-468b-aaba-4610accd6b5a",
// 					created_at: "2023-12-07T12:55:36.906Z",
// 					updated_at: "2023-12-08T08:59:41.278Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
// 					},
// 					title: "Testimonial  101",
// 					body: "When using the double-underscore notation, you can chain relationships to navigate through multiple levels of ForeignKey relationships. For instance, if Author had a ForeignKey to another model, you could use 'author__another_related_model' in the prefetch_related call.",
// 					is_approved: false,
// 					image: null,
// 					created_by: "a744f543-4232-4a46-85f5-f78af86348ff",
// 					is_published: true,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "a744f543-4232-4a46-85f5-f78af86348ff",
// 						full_name: "Tahiru Abdullai",
// 						preferred_name: "tahiru",
// 						email: "abdullai.tahiru@gmail.com",
// 					},
// 				},
// 			],
// 			events: [
// 				{
// 					id: "4310cccb-39cf-422f-8b2d-d255ab7677a6",
// 					created_at: "2023-12-07T17:11:15.700Z",
// 					updated_at: "2023-12-07T17:11:15.700Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 99,
// 						name: "New Event",
// 						start_date: "2023-10-28T18:56:00Z",
// 						end_date: "2023-10-29T18:56:00Z",
// 						description: "<p>jshflkjshfgvlkhjfglksdjglkjsgdf</p>",
// 						image: {
// 							id: 604,
// 							name: "ImageFor New Event Event",
// 							url: "https://massenergize-files.s3.amazonaws.com/media/concord.png",
// 							created_at: "2023-10-23T20:25:38.955Z",
// 							info: {
// 								size: "33785",
// 								size_text: "34 KB",
// 								copyright_att: "fg",
// 								permission_key: "YES",
// 								permission_notes:
// 									"Took the photo or made the image, or was given permission by the person who made the image",
// 								has_copyright_permission: true,
// 							},
// 						},
// 					},
// 				},
// 				{
// 					id: "0933dbf4-bd72-4847-86c5-081bec7b87d7",
// 					created_at: "2023-12-07T17:11:41.938Z",
// 					updated_at: "2023-12-07T17:11:41.939Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 97,
// 						name: "December Event",
// 						start_date: "2023-09-29T09:48:00Z",
// 						end_date: "2023-09-30T09:48:00Z",
// 						description:
// 							'<p>A message has been sent from a community portal user to the Community Admin for Tachyon Community through the "Contact Us" page. This message is being sent to all Community Admins listed for Tachyon Community, and if possible should be responded to within 2-3 days, using the following link: View and respond to message</p>',
// 						image: {
// 							id: 598,
// 							name: "ImageFor December Event Event",
// 							url: "https://massenergize-files.s3.amazonaws.com/media/Farmers_Market.jpg",
// 						},
// 					},
// 				},
// 				{
// 					id: "74308254-f97d-4210-b439-67429188f8f7",
// 					created_at: "2023-12-07T17:11:37.947Z",
// 					updated_at: "2023-12-07T17:11:37.947Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 98,
// 						name: "Newly Tested Event",
// 						start_date: "2023-08-30T10:59:00Z",
// 						end_date: "2023-08-30T11:59:00Z",
// 						description:
// 							"<p>Space may seem like the most obvious thing ever to an external observer. You hit the giant &lsquo;space&rsquo; button, space appears, as expected, and you move on. However, in reality, typing in spaces is quite tricky, and there are numerous ways of going around it in HTML. Pick the wrong.</p>\r\n<p>You have access to all the images that are in use in the communities you manage. Your library contains images that have either been uploaded by you, or other admins of your community. You may also see images that are not from any of your communities, but have been made public by admins of different communities</p>",
// 						image: {
// 							id: 598,
// 							name: "ImageFor December Event Event",
// 							url: "https://massenergize-files.s3.amazonaws.com/media/Farmers_Market.jpg",
// 						},
// 					},
// 				},
// 			],
// 			coaches: [
// 				{
// 					id: "80c75c35-0aaa-4dfd-8977-1d3586711d24",
// 					created_at: "2023-12-07T22:03:48.931Z",
// 					updated_at: "2023-12-07T22:03:51.755Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "4c74b279-45c4-435a-b05d-11f5f3dcd69d",
// 					},
// 					full_name: "Faddal Ibrahim",
// 					email: "xyz@wayland.com",
// 					phone_number: "+233550751805",
// 					image: {
// 						id: 627,
// 						name: "FileUpload for 80c75c35-0aaa-4dfd-8977-1d3586711d24 TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png",
// 					},
// 					community: "Wayland",
// 				},
// 				{
// 					id: "400a32b6-a21e-414e-866b-c9c1306b1a6b",
// 					created_at: "2023-12-07T22:04:36.144Z",
// 					updated_at: "2023-12-07T22:04:42.609Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "4c74b279-45c4-435a-b05d-11f5f3dcd69d",
// 					},
// 					full_name: "Frimpong O.A",
// 					email: "xyz@acton.com",
// 					phone_number: "+233550751805",
// 					image: {
// 						id: 628,
// 						name: "FileUpload for 400a32b6-a21e-414e-866b-c9c1306b1a6b TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					community: "Acton",
// 				},
// 				{
// 					id: "a337eedb-baef-49b9-a813-9afc5d25ad4b",
// 					created_at: "2023-12-07T22:05:07.883Z",
// 					updated_at: "2023-12-07T22:05:09.299Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "4c74b279-45c4-435a-b05d-11f5f3dcd69d",
// 					},
// 					full_name: "Samuel O.A",
// 					email: "xyz@concord.com",
// 					phone_number: "+233550751805",
// 					image: {
// 						id: 629,
// 						name: "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					community: "Concord",
// 				},
// 			],
// 			campaign_id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			id: "4c74b279-45c4-435a-b05d-11f5f3dcd69d",
// 			created_at: "2023-12-07T11:20:24.726Z",
// 			updated_at: "2023-12-08T14:46:30.176Z",
// 			is_deleted: false,
// 			info: null,
// 			name: "Community Solar",
// 			description:
// 				'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\r\n\r\nSection 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\r\n"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."\r\n\r\n1914 translation by H. Rackham\r\n"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."',
// 			summary: "Allow GitHub, its affiliates and third parties to",
// 			image: {
// 				id: 611,
// 				name: "FileUpload for 4c74b279-45c4-435a-b05d-11f5f3dcd69d Technology",
// 				url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 			},
// 			icon: null,
// 			is_icon: false,
// 		},
// 		{
// 			campaign_technology_id: "7f194e30-9c4a-408b-a854-98a134aebaf3",
// 			testimonials: [
// 				{
// 					id: "5513358e-c091-423c-bdc3-afaf2bd864cb",
// 					created_at: "2023-12-08T10:12:52.028Z",
// 					updated_at: "2023-12-08T10:12:52.028Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					campaign_technology: {
// 						id: "7f194e30-9c4a-408b-a854-98a134aebaf3",
// 					},
// 					title: "Way to go !!!",
// 					body: "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem., dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
// 					is_approved: true,
// 					image: {
// 						id: 629,
// 						name: "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					created_by: "906d4df9-e7a7-4b75-b2c6-235796cab193",
// 					is_published: true,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "906d4df9-e7a7-4b75-b2c6-235796cab193",
// 						full_name: "ME Tahiru",
// 						preferred_name: "MET",
// 						email: "abdullai.tahiru@massenergize.org",
// 					},
// 				},
// 				{
// 					id: "e074d592-cbb3-49f6-9735-109f56e27155",
// 					created_at: "2023-12-08T10:13:42.844Z",
// 					updated_at: "2023-12-08T10:13:42.845Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "7f194e30-9c4a-408b-a854-98a134aebaf3",
// 					},
// 					title: "Cool Things",
// 					body: "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore. dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
// 					is_approved: true,
// 					image: {
// 						id: 630,
// 						name: "ImageFor Testimonial  101 Campaign",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png",
// 					},
// 					created_by: "8c60fed6-c1a8-410e-9729-a7368e78be5f",
// 					is_published: true,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "8c60fed6-c1a8-410e-9729-a7368e78be5f",
// 						full_name: "Tahiru hybrid",
// 						preferred_name: "Tahiruhybrid",
// 						email: "abdullai.tahiru+233@gmail.com",
// 					},
// 				},
// 				{
// 					id: "68fa94d4-4ee8-4827-9fa5-72a15b9d6652",
// 					created_at: "2023-12-08T10:15:13.237Z",
// 					updated_at: "2023-12-08T10:15:13.237Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "7f194e30-9c4a-408b-a854-98a134aebaf3",
// 					},
// 					title: "Great Things Here !!",
// 					body: "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
// 					is_approved: true,
// 					image: {
// 						id: 626,
// 						name: "partner_logo",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_11.28.35AM.png",
// 					},
// 					created_by: "ba9feb49-d4c4-48e7-af7f-d88cefa8cd5c",
// 					is_published: true,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "ba9feb49-d4c4-48e7-af7f-d88cefa8cd5c",
// 						full_name: "New hybrid78",
// 						preferred_name: "Newhybrid78",
// 						email: "abdullai.tahiru+280@gmail.com",
// 					},
// 				},
// 			],
// 			events: [
// 				{
// 					id: "5bc8602b-7f1b-4c91-8aa4-433a3f30a196",
// 					created_at: "2023-12-08T10:23:06.271Z",
// 					updated_at: "2023-12-08T10:23:06.271Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 94,
// 						name: "my Test Event ooo",
// 						start_date: "2023-07-29T11:36:00Z",
// 						end_date: "2023-07-30T11:36:00Z",
// 						description:
// 							"<p>&nbsp;&tilde;bkxcb kxb x x xcv xc vxc vcxbkvjxb xcv xcv xcv cxvxc</p>",
// 						image: {
// 							id: 595,
// 							name: "ImageFor my Test Event Event",
// 							url: "https://massenergize-files.s3.amazonaws.com/media/Farmers_Market.jpg",
// 						},
// 					},
// 				},
// 				{
// 					id: "6c38af98-5c43-4b3f-bb3b-d2a533731cb0",
// 					created_at: "2023-12-07T17:12:02.239Z",
// 					updated_at: "2023-12-07T17:12:02.239Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 89,
// 						name: "aasdasd",
// 						start_date: "2023-07-27T11:00:00Z",
// 						end_date: "2023-07-28T12:00:00Z",
// 						description: "<p>asdasdasdaDAS</p>",
// 						image: null,
// 					},
// 				},
// 				{
// 					id: "921f6f42-f0c9-4af6-a3fe-2e783e723947",
// 					created_at: "2023-12-08T10:23:49.010Z",
// 					updated_at: "2023-12-08T10:23:49.011Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 95,
// 						name: "New Test Eventhss",
// 						start_date: "2023-07-27T20:46:00Z",
// 						end_date: "2023-07-28T20:46:00Z",
// 						description: "<p>sdfsdfsdf</p>",
// 						image: null,
// 					},
// 				},
// 			],
// 			coaches: [
// 				{
// 					id: "d2e4cdb1-973a-45c0-8b30-d6be9aab3c81",
// 					created_at: "2023-12-08T10:06:56.973Z",
// 					updated_at: "2023-12-08T10:06:56.973Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "17c7e50b-28ee-4d6a-a6f5-4a4a61267653",
// 					},
// 					full_name: "Brad",
// 					email: "brad@me.org",
// 					phone_number: "0550751805",
// 					image: {
// 						id: 629,
// 						name: "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					community: "Wayland",
// 				},
// 				{
// 					id: "ed2314b1-189c-4e91-979a-8d670e874fa6",
// 					created_at: "2023-12-08T10:07:32.171Z",
// 					updated_at: "2023-12-08T10:07:32.171Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "17c7e50b-28ee-4d6a-a6f5-4a4a61267653",
// 					},
// 					full_name: "George",
// 					email: "george@me.org",
// 					phone_number: "0550751805",
// 					image: {
// 						id: 630,
// 						name: "ImageFor Testimonial  101 Campaign",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png",
// 					},
// 					community: "Acton",
// 				},
// 				{
// 					id: "cbe52539-bd3f-4931-bf7f-71ca6cc26597",
// 					created_at: "2023-12-08T10:08:17.241Z",
// 					updated_at: "2023-12-08T10:08:17.241Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "17c7e50b-28ee-4d6a-a6f5-4a4a61267653",
// 					},
// 					full_name: "New hybrid",
// 					email: "new@me.org",
// 					phone_number: "0550751805",
// 					image: {
// 						id: 628,
// 						name: "FileUpload for 400a32b6-a21e-414e-866b-c9c1306b1a6b TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					community: "Framingham",
// 				},
// 			],
// 			campaign_id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			id: "17c7e50b-28ee-4d6a-a6f5-4a4a61267653",
// 			created_at: "2023-12-07T11:20:35.185Z",
// 			updated_at: "2023-12-08T14:48:08.433Z",
// 			is_deleted: false,
// 			info: null,
// 			name: "Change Name",
// 			description:
// 				'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\r\n\r\nSection 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\r\n"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."\r\n\r\n1914 translation by H. Rackham\r\n"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."',
// 			summary:
// 				"GitHub Copilot suggestions, related models and product features. More information in",
// 			image: {
// 				id: 612,
// 				name: "FileUpload for 17c7e50b-28ee-4d6a-a6f5-4a4a61267653 Technology",
// 				url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 			},
// 			icon: null,
// 			is_icon: false,
// 		},
// 		{
// 			campaign_technology_id: "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
// 			testimonials: [
// 				{
// 					id: "3f0e5c33-54dc-40a1-b10b-1884ed2dd102",
// 					created_at: "2023-12-08T10:14:22.124Z",
// 					updated_at: "2023-12-08T10:14:22.124Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
// 					},
// 					title: "I did This !!",
// 					body: "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
// 					is_approved: true,
// 					image: {
// 						id: 627,
// 						name: "FileUpload for 80c75c35-0aaa-4dfd-8977-1d3586711d24 TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png",
// 					},
// 					created_by: "4e006f09-e9d6-480a-a287-585fd59ca5a8",
// 					is_published: true,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "4e006f09-e9d6-480a-a287-585fd59ca5a8",
// 						full_name: "Guest User",
// 						preferred_name: "Guest",
// 						email: "tahiruthegamer@gmail.com",
// 					},
// 				},
// 				{
// 					id: "1fceea2e-bf01-49ba-ad54-50fe419f2263",
// 					created_at: "2023-12-08T10:37:27.772Z",
// 					updated_at: "2023-12-08T10:37:27.772Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
// 					},
// 					title: "Wooooow !!",
// 					body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
// 					is_approved: true,
// 					image: {
// 						id: 629,
// 						name: "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					created_by: "8c60fed6-c1a8-410e-9729-a7368e78be5f",
// 					is_published: true,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "8c60fed6-c1a8-410e-9729-a7368e78be5f",
// 						full_name: "Tahiru hybrid",
// 						preferred_name: "Tahiruhybrid",
// 						email: "abdullai.tahiru+233@gmail.com",
// 					},
// 				},
// 				{
// 					id: "8b57bf4e-a698-4ae5-b4a0-035dc63aefc0",
// 					created_at: "2023-12-08T10:40:03.738Z",
// 					updated_at: "2023-12-08T10:40:03.739Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: null,
// 					campaign_technology: {
// 						id: "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
// 					},
// 					title: "This One DI33",
// 					body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
// 					is_approved: true,
// 					image: {
// 						id: 630,
// 						name: "ImageFor Testimonial  101 Campaign",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png",
// 					},
// 					created_by: "d5293973-7a5b-4679-8fe3-13a0c17b89e6",
// 					is_published: true,
// 					anonymous: false,
// 					community: null,
// 					user: {
// 						id: "d5293973-7a5b-4679-8fe3-13a0c17b89e6",
// 						full_name: "Tahiru Abdullai",
// 						preferred_name: "TahiruAbdullai1",
// 						email: "abdullai.tahiru+203@massenergize.org",
// 					},
// 				},
// 			],
// 			events: [
// 				{
// 					id: "a6262fcf-e27b-4ac1-950c-e7512c0f891c",
// 					created_at: "2023-12-08T10:27:44.471Z",
// 					updated_at: "2023-12-08T10:27:44.471Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 39,
// 						name: "Local Seedling Sale!",
// 						start_date: "2020-04-06T19:30:53Z",
// 						end_date: "2020-07-26T19:30:00Z",
// 						description:
// 							'<p>This year, the Neighborhood Farm is moving their massive spring seedling sale online! &nbsp;Hundreds and hundreds of varieties of vegetable, herb and flower seedlings will be available through <a href="https://app.barn2door.com/e/3DqVQ/all" target="_blank" style="">their new online store</a>. &nbsp;Everything is grown &nbsp;naturally, with non-gmo seed, without pesticides and without synthetic fertilizers. &nbsp;New varieties will be listed weekly throughout the spring. &nbsp;Order online and pick up at the Farm in Wayland.</p>\r\n\r\n<p>The Neighborhood Farm is a small, all natural, vegetable and flower farm in Wayland, MA. &nbsp;We grow a wide range of vegetables, herbs and flowers but we specialize in heirloom tomatoes and garlic. &nbsp;We also grow hundreds and hundreds of varieties of seedlings each spring, and encourage everyone to try growing something. &nbsp;We lease land from Mainstone Farm on Old Connecticut Path, and have an on site, year round Farm Stand. &nbsp;We also attend local farmers markets including Needham, Roslindale and Jamaica Plain.</p>',
// 						image: {
// 							id: 372,
// 							name: "ImageForLocal Seedling Sale!Event",
// 							url: "https://massenergize-files.s3.amazonaws.com/media/The_Neighborhood_Farm_FB_banner.jpg",
// 						},
// 					},
// 				},
// 				{
// 					id: "58af6c37-bddc-4270-b2ef-bb5a6d89eace",
// 					created_at: "2023-12-08T10:26:49.501Z",
// 					updated_at: "2023-12-08T10:26:49.501Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 53,
// 						name: "Backyard Gardening and Compost",
// 						start_date: "2020-06-08T23:30:26Z",
// 						end_date: "2020-06-09T00:15:26Z",
// 						description:
// 							'<p>Learn about soil and compost from the professionals at Black Earth Compost, get some backyard composting tips and learn of resources for backyard vegetable gardening. Click<a href="https://us02web.zoom.us/meeting/register/tZAldOCtpzgvHdR3SUFvlWQV8B6y1D9PcxmY" target="_blank" style=""> here</a> to register and you will receive a confirmation email containing the link.&nbsp;</p>',
// 						image: {
// 							id: 495,
// 							name: "ImageForBackyard Gardening and CompostEvent",
// 							url: "https://massenergize-files.s3.amazonaws.com/media/Copy_of_Webinars_2.jpg",
// 						},
// 					},
// 				},
// 				{
// 					id: "2c9d1116-1085-40e3-8441-5b4750bbf48b",
// 					created_at: "2023-12-08T10:25:57.279Z",
// 					updated_at: "2023-12-08T10:25:57.279Z",
// 					is_deleted: false,
// 					info: null,
// 					campaign: {
// 						id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 					},
// 					event: {
// 						id: 46,
// 						name: "Energize Framingham Virtual Tutorial",
// 						start_date: "2020-05-09T19:23:24Z",
// 						end_date: "2020-05-31T16:00:00Z",
// 						description:
// 							'<p>If you would like to host a virtual meeting to demonstrate Energize Framingham to a group of friends, neighbors or community members, please reach out to <a href="mailto:Aimee@massenergize.org" target="_blank" style="">Aimee@massenergize.org</a>. We are looking for Teams to help spread the word about all the sustainability actions that the Framingham community is doing. We will set up an online meeting to teach people how to use the Energize Framingham website.<br>\r\n</p>',
// 						image: {
// 							id: 437,
// 							name: "ImageForEnergize Framingham Virtual TutorialEvent",
// 							url: "https://massenergize-files.s3.amazonaws.com/media/McAuliffe_2042_2MP.jpg",
// 						},
// 					},
// 				},
// 			],
// 			coaches: [
// 				{
// 					id: "e8d30404-c743-49bd-a7ef-d5a7ea4d4d9b",
// 					created_at: "2023-12-08T10:10:25.887Z",
// 					updated_at: "2023-12-08T10:10:25.887Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "f6200821-430d-4557-95f8-e7f146130d07",
// 					},
// 					full_name: "Kaat",
// 					email: "kaat@gmail.com",
// 					phone_number: "0550751805",
// 					image: {
// 						id: 630,
// 						name: "ImageFor Testimonial  101 Campaign",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png",
// 					},
// 					community: "Wayland",
// 				},
// 				{
// 					id: "16a2edef-a144-43eb-a2d9-739d7c61a79d",
// 					created_at: "2023-12-08T10:10:52.983Z",
// 					updated_at: "2023-12-08T10:10:52.983Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "f6200821-430d-4557-95f8-e7f146130d07",
// 					},
// 					full_name: "Aimee",
// 					email: "aimee@gmail.com",
// 					phone_number: "0246073516",
// 					image: {
// 						id: 630,
// 						name: "ImageFor Testimonial  101 Campaign",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png",
// 					},
// 					community: "Framingham",
// 				},
// 				{
// 					id: "52000a39-8ca5-44df-b280-06274b6e5a83",
// 					created_at: "2023-12-08T10:11:20.349Z",
// 					updated_at: "2023-12-08T10:11:20.349Z",
// 					is_deleted: false,
// 					info: null,
// 					technology: {
// 						id: "f6200821-430d-4557-95f8-e7f146130d07",
// 					},
// 					full_name: "Jeph",
// 					email: "jeph@gmail.com",
// 					phone_number: "0550751805",
// 					image: {
// 						id: 629,
// 						name: "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
// 						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 					},
// 					community: "Acton",
// 				},
// 			],
// 			campaign_id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			id: "f6200821-430d-4557-95f8-e7f146130d07",
// 			created_at: "2023-12-07T11:20:09.148Z",
// 			updated_at: "2023-12-08T14:44:45.084Z",
// 			is_deleted: false,
// 			info: null,
// 			name: "Heat Pump",
// 			description:
// 				'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\r\n\r\nSection 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\r\n"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."\r\n\r\n1914 translation by H. Rackham\r\n"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."',
// 			summary:
// 				"GitHub Copilot suggestions, related models and product features. More information in",
// 			image: {
// 				id: 610,
// 				name: "FileUpload for f6200821-430d-4557-95f8-e7f146130d07 Technology",
// 				url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png",
// 			},
// 			icon: null,
// 			is_icon: false,
// 		},
// 	],
// 	communities: [
// 		{
// 			id: "b4873cf3-85b4-40f4-8b8e-448d55f60cf9",
// 			created_at: "2023-12-07T17:28:45.672Z",
// 			updated_at: "2023-12-07T17:28:45.672Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			community: {
// 				id: 21,
// 				name: "Tachyonics ",
// 				subdomain: "taCom",
// 			},
// 		},
// 		{
// 			id: "f50263dd-3ec2-46c4-85b8-db56bdf4b463",
// 			created_at: "2023-12-07T17:29:03.441Z",
// 			updated_at: "2023-12-07T17:29:03.441Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			community: {
// 				id: 23,
// 				name: "Bibisoft",
// 				subdomain: "bibinii",
// 			},
// 		},
// 		{
// 			id: "634f1101-80b3-457c-911d-1e571b4ef644",
// 			created_at: "2023-12-07T17:29:13.622Z",
// 			updated_at: "2023-12-07T17:29:13.622Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			community: {
// 				id: 11,
// 				name: "LexEnergize",
// 				subdomain: "newMan",
// 			},
// 		},
// 		{
// 			id: "8a272088-727b-4af5-88cf-f67b4fd3fedb",
// 			created_at: "2023-12-07T17:29:24.191Z",
// 			updated_at: "2023-12-07T17:29:24.191Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			community: {
// 				id: 2,
// 				name: "EnergizeUs",
// 				subdomain: "Energize_Us",
// 			},
// 		},
// 	],
// 	managers: [
// 		{
// 			id: "e4db42e5-3f3a-48a3-90ec-1c7f8cb2622e",
// 			created_at: "2023-12-07T22:15:26.631Z",
// 			updated_at: "2023-12-07T22:15:26.631Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			user: {
// 				id: "d5293973-7a5b-4679-8fe3-13a0c17b89e6",
// 				full_name: "Tahiru Abdullai",
// 				preferred_name: "TahiruAbdullai1",
// 				email: "abdullai.tahiru+203@massenergize.org",
// 			},
// 			is_key_contact: true,
// 			contact: "1286398612983",
// 		},
// 	],
// 	partners: [
// 		{
// 			id: "ef6bc85d-3cf4-4c08-a60c-6c028714bfb8",
// 			created_at: "2023-12-07T21:37:01.161Z",
// 			updated_at: "2023-12-07T21:37:01.161Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			partner: {
// 				id: "973567af-c2d3-47d1-ac82-e0e3fde13979",
// 				created_at: "2023-12-07T20:50:33.517Z",
// 				updated_at: "2023-12-07T20:50:33.524Z",
// 				is_deleted: false,
// 				info: null,
// 				name: "Google Ai",
// 				website: "ww.google.com",
// 				logo: {
// 					id: 623,
// 					name: "partner_logo",
// 					url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png",
// 				},
// 				phone_number: "+233550751805",
// 				email: "google@gmail.com",
// 			},
// 		},
// 		{
// 			id: "0e644303-2dac-4688-a50e-26392b51d61c",
// 			created_at: "2023-12-07T21:37:11.065Z",
// 			updated_at: "2023-12-07T21:37:11.065Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			partner: {
// 				id: "65684082-179f-41a4-9857-1dc90ea1bdc2",
// 				created_at: "2023-12-07T20:53:20.032Z",
// 				updated_at: "2023-12-07T20:53:20.034Z",
// 				is_deleted: false,
// 				info: null,
// 				name: "Meta  Solarizer",
// 				website: "ww.meta.com",
// 				logo: {
// 					id: 625,
// 					name: "partner_logo",
// 					url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png",
// 				},
// 				phone_number: "+233550751805",
// 				email: "meta@gmail.com",
// 			},
// 		},
// 		{
// 			id: "87776169-649b-462a-826c-a2f681e172b8",
// 			created_at: "2023-12-07T21:37:23.410Z",
// 			updated_at: "2023-12-07T21:37:23.410Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			partner: {
// 				id: "3d7e3e0a-6b7b-4b4d-8c9a-568a88068ce1",
// 				created_at: "2023-12-07T20:53:32.921Z",
// 				updated_at: "2023-12-07T20:53:32.924Z",
// 				is_deleted: false,
// 				info: null,
// 				name: "Meta  Solarizer",
// 				website: "ww.meta.com",
// 				logo: {
// 					id: 626,
// 					name: "partner_logo",
// 					url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_11.28.35AM.png",
// 				},
// 				phone_number: "+233550751805",
// 				email: "meta@gmail.com",
// 			},
// 		},
// 		{
// 			id: "1c8db71e-f2ec-4c71-9add-f9e5c0fc173a",
// 			created_at: "2023-12-07T21:37:38.190Z",
// 			updated_at: "2023-12-07T21:37:38.190Z",
// 			is_deleted: false,
// 			info: null,
// 			campaign: {
// 				id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			},
// 			partner: {
// 				id: "9ebcbeb5-488e-423d-9c85-2dfc879c5855",
// 				created_at: "2023-12-07T20:51:13.117Z",
// 				updated_at: "2023-12-07T20:51:13.118Z",
// 				is_deleted: false,
// 				info: null,
// 				name: "MassEnergize  Solarizer",
// 				website: "ww.me.com",
// 				logo: {
// 					id: 624,
// 					name: "partner_logo",
// 					url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png",
// 				},
// 				phone_number: "+233550751805",
// 				email: "me@gmail.com",
// 			},
// 		},
// 	],
// 	config: {
// 		id: "08815f91-d008-44a0-b49e-a4135dcbe5eb",
// 		created_at: "2023-12-07T18:15:33.117Z",
// 		updated_at: "2023-12-07T18:15:33.117Z",
// 		is_deleted: false,
// 		info: null,
// 		campaign: {
// 			id: "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 		},
// 		theme: null,
// 		navigation: null,
// 		advert: {
// 			title: "Circular model import issue",
// 			description:
// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
// 		},
// 	},
// 	navigation: [
// 		{
// 			key: "home",
// 			url: "/ab3b98d2-f1a3-4620-86db-f48a06459b3d",
// 			text: "Home",
// 			icon: "fa-home",
// 		},
// 		{
// 			key: "questions",
// 			url: "#testimonial-section",
// 			text: "Questions",
// 			icon: "fa-question-circle",
// 		},
// 		{
// 			key: "coaches",
// 			url: "#coaches-section",
// 			text: "Coaches",
// 			icon: "fa-users",
// 			children: [
// 				{
// 					key: "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5cd65137-6b1e-424e-b5b7-b3fcfaa935e2/?section=coaches",
// 					text: "Community Solar",
// 				},
// 				{
// 					key: "7f194e30-9c4a-408b-a854-98a134aebaf3",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/7f194e30-9c4a-408b-a854-98a134aebaf3/?section=coaches",
// 					text: "Change Name",
// 				},
// 				{
// 					key: "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5c6973b7-d3e6-416a-9a7f-23afb3d2f52d/?section=coaches",
// 					text: "Heat Pump",
// 				},
// 			],
// 		},
// 		{
// 			key: "testimonial",
// 			url: "#",
// 			text: "Testimonial",
// 			children: [
// 				{
// 					key: "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5cd65137-6b1e-424e-b5b7-b3fcfaa935e2/?section=testimonials",
// 					text: "Community Solar",
// 				},
// 				{
// 					key: "7f194e30-9c4a-408b-a854-98a134aebaf3",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/7f194e30-9c4a-408b-a854-98a134aebaf3/?section=testimonials",
// 					text: "Change Name",
// 				},
// 				{
// 					key: "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5c6973b7-d3e6-416a-9a7f-23afb3d2f52d/?section=testimonials",
// 					text: "Heat Pump",
// 				},
// 			],
// 			icon: "fa-comment",
// 		},
// 		{
// 			key: "events",
// 			url: "#",
// 			text: "Events",
// 			children: [
// 				{
// 					key: "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5cd65137-6b1e-424e-b5b7-b3fcfaa935e2/?section=events",
// 					text: "Community Solar",
// 				},
// 				{
// 					key: "7f194e30-9c4a-408b-a854-98a134aebaf3",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/7f194e30-9c4a-408b-a854-98a134aebaf3/?section=events",
// 					text: "Change Name",
// 				},
// 				{
// 					key: "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
// 					url: "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5c6973b7-d3e6-416a-9a7f-23afb3d2f52d/?section=events",
// 					text: "Heat Pump",
// 				},
// 			],
// 			icon: "fa-calendar",
// 		},
// 	],
// };

export const campaignData = {
	id: "70442987-b077-4f2b-a84c-e50aee222287",
	created_at: "2023-12-08T20:59:49.542Z",
	updated_at: "2023-12-11T08:44:11.698Z",
	is_deleted: false,
	info: null,
	account: {
		id: "24b4b3c0-5592-4548-b297-7fd57618a265",
	},
	title: "Ablekuma Energy Challenge",
	description:
		"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	start_date: "2024-01-11",
	end_date: "2024-01-26T20:57:30Z",
	primary_logo: {
		id: 3271,
		name: "whatsapplogo",
		url: "https://massenergize-files.s3.amazonaws.com/media/whatsapp.png",
	},
	secondary_logo: {
		id: 3272,
		name: "ps-logo",
		url: "https://massenergize-files.s3.amazonaws.com/media/pngegg.png",
	},
	image: {
		id: 3268,
		name: "sunshine",
		url: "https://massenergize-files.s3.amazonaws.com/media/sunshine.jpeg",
	},
	is_approved: true,
	is_published: true,
	is_global: false,
	is_template: false,
	tagline: "A campaign to guide climate action paa",
	owner: "1b4fa470-926d-4ea3-b63d-8ea2350e8a11",
	key_contact: {
		name: "Pongo Frimi",
		email: "f.agyemang@alustudent.com",
		phone_number: "+233 45 689584",
		image: null,
	},
	my_testimonials: [
		{
			id: "4a1ea721-1f49-47d3-9ae9-d782ac0741c6",
			created_at: "2023-12-11T09:29:59.794Z",
			updated_at: "2023-12-11T09:29:59.794Z",
			is_deleted: false,
			info: null,
			campaign: null,
			campaign_technology: {
				id: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
			},
			title: "Kelly Clarkson",
			body: "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes byusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
			is_approved: false,
			image: {
				id: 3268,
				name: "sunshine",
				url: "https://massenergize-files.s3.amazonaws.com/media/sunshine.jpeg",
			},
			created_by: "aa4811d6-139a-4fa2-bdb0-994d7ca3ce40",
			is_published: false,
			anonymous: false,
			community: {
				id: 4,
				name: "MassEnergizeDemo",
				subdomain: "Test-Site",
			},
			user: {
				id: "aa4811d6-139a-4fa2-bdb0-994d7ca3ce40",
				full_name: "Lois Doerr",
				preferred_name: "LoisD",
				email: "lois.doerr@gmail.com",
			},
		},
	],
	technologies: [
		{
			campaign_technology_id: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
			testimonials: [
				{
					id: "4a1ea721-1f49-47d3-9ae9-d782ac0741c6",
					created_at: "2023-12-11T09:29:59.794Z",
					updated_at: "2023-12-11T09:29:59.794Z",
					is_deleted: false,
					info: null,
					campaign: null,
					campaign_technology: {
						id: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					},
					title: "Kelly Clarkson",
					body: "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes byusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
					is_approved: false,
					image: {
						id: 3268,
						name: "sunshine",
						url: "https://massenergize-files.s3.amazonaws.com/media/sunshine.jpeg",
					},
					created_by: "aa4811d6-139a-4fa2-bdb0-994d7ca3ce40",
					is_published: false,
					anonymous: false,
					community: {
						id: 4,
						name: "MassEnergizeDemo",
						subdomain: "Test-Site",
					},
					user: {
						id: "aa4811d6-139a-4fa2-bdb0-994d7ca3ce40",
						full_name: "Lois Doerr",
						preferred_name: "LoisD",
						email: "lois.doerr@gmail.com",
					},
				},
				{
					id: "5f20c6f7-51c2-40ed-a28e-658bc9d46403",
					created_at: "2023-12-11T09:29:10.868Z",
					updated_at: "2023-12-11T09:29:10.868Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					campaign_technology: {
						id: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					},
					title: "Another Solar Business",
					body: "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
					is_approved: false,
					image: {
						id: 3269,
						name: "climate1",
						url: "https://massenergize-files.s3.amazonaws.com/media/climate2.jpeg",
					},
					created_by: "7c6c91f1-d55d-40f5-8e37-74956e46e00d",
					is_published: false,
					anonymous: false,
					community: {
						id: 32,
						name: "Cooler Greenfield",
						subdomain: "GreenfieldMA",
					},
					user: {
						id: "7c6c91f1-d55d-40f5-8e37-74956e46e00d",
						full_name: "Joyce Adams",
						preferred_name: "risingtide",
						email: "lifevoyage@aol.com",
					},
				},
				{
					id: "f2219881-1805-4fbe-b7c7-a6529963f2e4",
					created_at: "2023-12-08T21:24:49.406Z",
					updated_at: "2023-12-08T21:24:49.406Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					campaign_technology: {
						id: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					},
					title: "Awesome Heat Pump Innovation",
					body: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
					is_approved: true,
					image: {
						id: 3243,
						name: "Screenshot 2023-10-19 at 11.31.40.png-media library upload-(1698051943057)",
						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-10-19_at_11.31.40-231023-090543.png",
						created_at: "2023-10-23T09:05:44.508Z",
						info: {
							size: "62341",
							size_text: "62 KB",
							description: null,
							has_children: false,
							copyright_att: "",
							guardian_info: "",
							permission_key: null,
							permission_notes: null,
							has_copyright_permission: true,
						},
					},
					created_by: "798b1d64-743b-4630-ab88-db3b27aba334",
					is_published: true,
					anonymous: false,
					community: {
						id: 3,
						name: "Energize Wayland",
						subdomain: "wayland",
					},
					user: {
						id: "798b1d64-743b-4630-ab88-db3b27aba334",
						full_name: "Pongo Frimi",
						preferred_name: "Frima",
						email: "f.agyemang@alustudent.com",
					},
				},
			],
			events: [
				{
					id: "2289d3e0-5700-4660-9905-03e644ac9368",
					created_at: "2023-12-11T09:32:44.251Z",
					updated_at: "2023-12-11T09:32:44.251Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					event: {
						id: 35,
						name: "Stearns Farm Annual Seedling Sale",
						start_date: "2022-05-07T13:00:00Z",
						end_date: "2022-05-07T18:00:00Z",
						description:
							'<p><span style="font-weight: 400;">For our 2022 <strong>Seedling Sale</strong>, you will have the option to place your <a href="https://stearnsfarmcsa.org/annual-seedling-sale/">order online </a>(and pick up at the farm during the sale) or shop in-person. Our online store will be open for orders towards the end of April. <strong>Choose your seedlings from our wide selection <a href="https://stearnsfarmcsa.org/annual-seedling-sale/">online</a> or live at the event.</strong>&nbsp;</span></p>\r\n<p>&nbsp;</p>\r\n<p><strong>Dates and times are May 7, 8, and 14, 15 from 9 am - 2 pm</strong></p>\r\n<p>&nbsp;</p>\r\n<p><span style="font-weight: 400;">All seedlings are grown at the farm using organic potting soil from McEnroe Organic Farm and fertilized with Neptune&rsquo;s Harvest Organic Fish and Seaweed Fertilizer. Our main seed sources are Johnny&rsquo;s Selected Seeds, Geoseed, Baker Creek Heirloom Seeds, Fedco Seeds, and High Mowing Organic Seeds. Our goal is to provide you with healthy seedlings that will thrive in your home gardens or in pots on your porch.</span></p>\r\n<p>&nbsp;</p>\r\n<p><span style="font-weight: 400;">We hope to see you there and thank you for choosing organic, local seedlings for your gardens!</span></p>',
						image: {
							id: 3269,
							name: "climate1",
							url: "https://massenergize-files.s3.amazonaws.com/media/climate2.jpeg",
						},
					},
				},
			],
			coaches: [
				{
					id: "6838954b-e82b-47b3-9fba-6e4350438a04",
					created_at: "2023-12-08T21:18:47.115Z",
					updated_at: "2023-12-11T09:08:01.120Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "68066580-477e-41ef-8030-1222af3d0fe9",
					},
					full_name: "Anders Verjgang",
					email: "anders@gmail.com",
					phone_number: "02344839849933",
					image: {
						id: 3267,
						name: "face5",
						url: "https://massenergize-files.s3.amazonaws.com/media/face5.jpeg",
					},
					community: "Framingham",
				},
				{
					id: "4027e36f-e6cb-499a-a062-d442134d8a94",
					created_at: "2023-12-11T09:10:08.778Z",
					updated_at: "2023-12-11T09:10:08.778Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "68066580-477e-41ef-8030-1222af3d0fe9",
					},
					full_name: "Kaat V.S",
					email: "frimpong+007@massenergize.org",
					phone_number: "248293489249230",
					image: {
						id: 3266,
						name: "face4",
						url: "https://massenergize-files.s3.amazonaws.com/media/face4.jpeg",
					},
					community: "Concord",
				},
			],
			campaign_id: "70442987-b077-4f2b-a84c-e50aee222287",
			comments: [
				{
					id: "bad559a8-bf79-46d8-940b-2e6c2ec658b0",
					created_at: "2023-12-08T21:27:42.481Z",
					updated_at: "2023-12-08T21:27:42.481Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					},
					user: {
						id: "798b1d64-743b-4630-ab88-db3b27aba334",
						full_name: "Pongo Frimi",
						preferred_name: "Frima",
						email: "f.agyemang@alustudent.com",
					},
					text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the",
					status: null,
					community: null,
				},
			],
			id: "68066580-477e-41ef-8030-1222af3d0fe9",
			created_at: "2023-12-08T21:01:50.282Z",
			updated_at: "2023-12-11T09:03:07.436Z",
			is_deleted: false,
			info: null,
			name: "Home Solar",
			description:
				"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
			summary:
				"2is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
			image: {
				id: 3273,
				name: "solar-panel",
				url: "https://massenergize-files.s3.amazonaws.com/media/solar-panel.jpg",
			},
			icon: null,
			is_icon: false,
		},
		{
			campaign_technology_id: "46971bb0-3187-44ce-8536-17b58333bc9c",
			testimonials: [
				{
					id: "38426096-6b4e-4cb8-ba45-f09d74c68e9c",
					created_at: "2023-12-11T09:28:33.981Z",
					updated_at: "2023-12-11T09:28:33.981Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					title: "Serious Business (Dummy)",
					body: "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes byusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\r\nusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
					is_approved: false,
					image: {
						id: 3270,
						name: "climate2",
						url: "https://massenergize-files.s3.amazonaws.com/media/climate3.jpeg",
					},
					created_by: "798b1d64-743b-4630-ab88-db3b27aba334",
					is_published: true,
					anonymous: false,
					community: {
						id: 47,
						name: "Sustainable Middlesex",
						subdomain: "SustainableMiddlesex",
					},
					user: {
						id: "798b1d64-743b-4630-ab88-db3b27aba334",
						full_name: "Pongo Frimi",
						preferred_name: "Frima",
						email: "f.agyemang@alustudent.com",
					},
				},
				{
					id: "854f78f5-47d5-4a65-bc5f-82ec1cec2e7e",
					created_at: "2023-12-08T21:25:34.172Z",
					updated_at: "2023-12-08T21:25:34.172Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					title: "Detty December",
					body: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
					is_approved: false,
					image: {
						id: 3252,
						name: "Screenshot 2023-10-25 at 07.51.23.png-media library upload-(1698220312336)",
						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-10-25_at_07.51.23-231025-075152.png",
						created_at: "2023-10-25T07:51:54.124Z",
						info: {
							size: "18920",
							size_text: "19 KB",
							description: null,
							has_children: false,
							copyright_att: "",
							guardian_info: "",
							permission_key: "YES",
							permission_notes:
								"Took the photo or made the image, or was given permission by the person who made the image",
							has_copyright_permission: true,
						},
					},
					created_by: "798b1d64-743b-4630-ab88-db3b27aba334",
					is_published: false,
					anonymous: false,
					community: {
						id: 3,
						name: "Energize Wayland",
						subdomain: "wayland",
					},
					user: {
						id: "798b1d64-743b-4630-ab88-db3b27aba334",
						full_name: "Pongo Frimi",
						preferred_name: "Frima",
						email: "f.agyemang@alustudent.com",
					},
				},
				{
					id: "043139b0-0f4d-48fb-ad19-d1fe70811b7b",
					created_at: "2023-12-08T21:24:06.323Z",
					updated_at: "2023-12-08T21:24:06.323Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					title: "Solid testimonial",
					body: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
					is_approved: true,
					image: {
						id: 3248,
						name: "Screenshot 2023-09-04 at 08.39.07.png-media library upload-(1698214972596)",
						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-09-04_at_08.39.07-231025-062252.png",
						created_at: "2023-10-25T06:22:53.884Z",
						info: {
							size: "22464",
							size_text: "22 KB",
							description: null,
							has_children: false,
							copyright_att: "Mazraoui",
							guardian_info: "",
							permission_key: "YES_CHECKED",
							permission_notes:
								"Checked that the image is not copyright protected",
							has_copyright_permission: true,
						},
					},
					created_by: "798b1d64-743b-4630-ab88-db3b27aba334",
					is_published: true,
					anonymous: false,
					community: {
						id: 3,
						name: "Energize Wayland",
						subdomain: "wayland",
					},
					user: {
						id: "798b1d64-743b-4630-ab88-db3b27aba334",
						full_name: "Pongo Frimi",
						preferred_name: "Frima",
						email: "f.agyemang@alustudent.com",
					},
				},
			],
			events: [
				{
					id: "1da0bb78-1047-4071-93ef-2285d6dbdd04",
					created_at: "2023-12-10T22:38:59.586Z",
					updated_at: "2023-12-10T22:38:59.586Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					event: {
						id: 965,
						name: "Another One",
						start_date: "2023-09-27T03:22:00Z",
						end_date: "2023-09-30T03:22:00Z",
						description: "<p>asdfasdfasdfasdf</p>",
						image: {
							id: 3270,
							name: "climate2",
							url: "https://massenergize-files.s3.amazonaws.com/media/climate3.jpeg",
						},
					},
				},
				{
					id: "de6ebfe3-5347-43bb-9dd0-31f5368690aa",
					created_at: "2023-12-11T09:32:32.684Z",
					updated_at: "2023-12-11T09:32:32.684Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					event: {
						id: 713,
						name: "Repair Cafe!",
						start_date: "2022-10-08T18:00:00Z",
						end_date: "2022-10-08T21:00:00Z",
						description:
							'<p>Have you got something that needs fixing or mending?</p>\r\n<p><br />Bring it to the&nbsp;<span class="il">Repair</span> Cafe in Framingham!<br /><br />Our volunteers can help fix many things for FREE including:</p>\r\n<p>clothing, lamps, small appliances, computers/other electronics, bikes, batteries, toys, jewelry and sewing machines.&nbsp;</p>\r\n<p>We will also have a station for sharpening knives, scissors and garden tools.</p>\r\n<p>&nbsp;</p>\r\n<p>If you know what parts are needed, please get them ahead of time and bring them along.</p>\r\n<p>&nbsp;</p>\r\n<p>Please share the&nbsp;<a href="https://transitionframingham.us8.list-manage.com/track/click?u=2e5036e680b5eec84b735a630&amp;id=8d5781201e&amp;e=e1cc43519d" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?q=https://transitionframingham.us8.list-manage.com/track/click?u%3D2e5036e680b5eec84b735a630%26id%3D8d5781201e%26e%3De1cc43519d&amp;source=gmail&amp;ust=1664045833895000&amp;usg=AOvVaw2t3zktIFiacgzhjcFxYzmp">Facebook Event</a>&nbsp;with all and sundry!</p>\r\n<p>Free event, suggested donation: what what you want!</p>',
						image: {
							id: 3268,
							name: "sunshine",
							url: "https://massenergize-files.s3.amazonaws.com/media/sunshine.jpeg",
						},
					},
				},
				{
					id: "dec86c71-3af8-4cce-9141-9de992571094",
					created_at: "2023-12-11T09:42:46.805Z",
					updated_at: "2023-12-11T09:42:46.805Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					event: {
						id: 440,
						name: "Framingham Earth Day Festival",
						start_date: "2022-04-23T15:00:00Z",
						end_date: "2022-04-23T19:00:00Z",
						description:
							'<p><strong><a href="FraminghamEarthDay.org">Framingham Earth Day Festival</a></strong></p>\r\n<p>&nbsp;</p>\r\n<p><strong>Saturday, April 23rd 11am-3 pm&nbsp;</strong>(rain date April 30th)</p>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><strong>FREE MWRTA transportation</strong><span style="font-weight: 400;"> To/From Downtown and the Common.</span></li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><strong>Live music + interactive art</strong>\r\n<ul>\r\n<li><span style="font-weight: 400;">Participate in an interactive, environmental art exhibit from local artist, Karen Alzayer, for all ages to experience.</span></li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><strong>Children\'s activities</strong>\r\n<ul>\r\n<li style="font-weight: 400;" aria-level="1">Hands on learning for all ages</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><strong>Eco-friendly artisans</strong></li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><strong>Energy saving ideas</strong></li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><strong>Environmental organizations</strong>\r\n<ul>\r\n<li>Come visit the Energize Framingham booth and enter our raffle!</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><strong>Local farms</strong></li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li><a href="framinghamearthday.org/recycling-info"><strong>Recycling opportunities</strong></a>\r\n<ul>\r\n<li>Plastic bags/wrap</li>\r\n<li>Eyeglasses, sunglasses &amp; frames</li>\r\n<li>Coffee pods/K-cups</li>\r\n<li>#6 platics cups/Solo</li>\r\n<li>Printer cartridges</li>\r\n<li>CDs/DVDs &amp; jewel cases</li>\r\n<li>Cell phones</li>\r\n<li>Brita filters</li>\r\n<li>Wine corks</li>\r\n<li>Batteries (all types)</li>\r\n<li>Light bulbs (all shapes &amp; sizes)</li>\r\n<li>Plus - for a fee - electronics, white goods and more</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li style="font-weight: 400;" aria-level="1"><strong>BYO FOOD!</strong><span style="font-weight: 400;">: This year, we are encouraging everyone to either purchase food from the local restaurants near the common, or bring their own meals in reusable containers. We will have a community gathering area to sit, eat and connect with neighbors. There will be an opportunity to share your favorite picnic recipes and to be a part of our 2022 Framingham Earth Day cookbook (post-event).</span></li>\r\n</ul>\r\n<p><span style="font-weight: 400;">&nbsp;</span></p>',
						image: {
							id: 3277,
							name: "event2",
							url: "https://massenergize-files.s3.amazonaws.com/media/ev2.jpeg",
						},
					},
				},
			],
			coaches: [
				{
					id: "91d6bd61-f7b6-4717-9021-2de1631ccae7",
					created_at: "2023-12-08T21:17:49.683Z",
					updated_at: "2023-12-11T09:07:50.252Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "f2d7acf6-42ce-4f56-af59-10a6a91f1e6a",
					},
					full_name: "Lospongos",
					email: "lospongos@gmail.com",
					phone_number: "0234483984993",
					image: {
						id: 3264,
						name: "face2",
						url: "https://massenergize-files.s3.amazonaws.com/media/face2.jpeg",
					},
					community: "Wayland",
				},
				{
					id: "68c1143a-b0b5-49d3-b7fa-669b0c1563cb",
					created_at: "2023-12-11T09:08:55.319Z",
					updated_at: "2023-12-11T09:08:55.319Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "f2d7acf6-42ce-4f56-af59-10a6a91f1e6a",
					},
					full_name: "Aimee Powelka",
					email: "aimiepowelks@gmail.com",
					phone_number: "48359847895",
					image: {
						id: 3265,
						name: "face3",
						url: "https://massenergize-files.s3.amazonaws.com/media/face3.jpeg",
					},
					community: "Wayland",
				},
				{
					id: "71c447d5-5d45-4dd6-a9f5-1f95ef78463e",
					created_at: "2023-12-11T09:11:02.583Z",
					updated_at: "2023-12-11T09:11:02.583Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "f2d7acf6-42ce-4f56-af59-10a6a91f1e6a",
					},
					full_name: "Akwesi Frimpong",
					email: "frimpong@massenergize.org",
					phone_number: "0234483984993",
					image: {
						id: 3266,
						name: "face4",
						url: "https://massenergize-files.s3.amazonaws.com/media/face4.jpeg",
					},
					community: "Ablekuma",
				},
			],
			campaign_id: "70442987-b077-4f2b-a84c-e50aee222287",
			comments: [
				{
					id: "0d733aeb-3378-4c99-9f8a-5b8d696ab3d1",
					created_at: "2023-12-13T17:07:27.348Z",
					updated_at: "2023-12-13T17:07:27.348Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "09cba8a8-4524-4c71-afaf-de9ea69b69f4",
						full_name: null,
						preferred_name: null,
						email: "mrfimpong@Gmail.com",
					},
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard pusio text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					status: "CREATED",
					community: null,
				},
				{
					id: "2099e875-412c-4992-a58d-a7fbc293ddab",
					created_at: "2023-12-13T17:07:20.046Z",
					updated_at: "2023-12-13T17:07:20.046Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "09cba8a8-4524-4c71-afaf-de9ea69b69f4",
						full_name: null,
						preferred_name: null,
						email: "mrfimpong@Gmail.com",
					},
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard pusio text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					status: "CREATED",
					community: null,
				},
				{
					id: "b823173b-5435-44b2-9e86-de1417ddd742",
					created_at: "2023-12-13T17:06:52.493Z",
					updated_at: "2023-12-13T17:06:52.493Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "09cba8a8-4524-4c71-afaf-de9ea69b69f4",
						full_name: null,
						preferred_name: null,
						email: "mrfimpong@Gmail.com",
					},
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard pusio text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					status: "CREATED",
					community: null,
				},
				{
					id: "844b0eda-4857-4f89-8771-7cd41c827437",
					created_at: "2023-12-13T17:03:14.723Z",
					updated_at: "2023-12-13T17:03:14.723Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "09cba8a8-4524-4c71-afaf-de9ea69b69f4",
						full_name: null,
						preferred_name: null,
						email: "mrfimpong@Gmail.com",
					},
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard fuck text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					status: "CREATED",
					community: null,
				},
				{
					id: "30affb57-0945-4fe2-b265-e8f7be33a6e1",
					created_at: "2023-12-12T14:48:29.252Z",
					updated_at: "2023-12-12T14:48:29.252Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "Just one last thing, lets reverse things and see!",
					status: null,
					community: null,
				},
				{
					id: "178e6c96-9e38-411a-a49a-e8bf2164f909",
					created_at: "2023-12-12T14:48:01.000Z",
					updated_at: "2023-12-12T14:48:01.000Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "I think this is it, we dey form, here we go now!",
					status: null,
					community: null,
				},
				{
					id: "e86bf1ba-df1b-4d09-86b3-6cac94974437",
					created_at: "2023-12-12T14:46:21.101Z",
					updated_at: "2023-12-12T14:46:21.101Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "Is this what you mean, does that mean we are all set?",
					status: null,
					community: null,
				},
				{
					id: "c6f8ee01-7cff-4521-9c4e-704ffda9a34a",
					created_at: "2023-12-12T14:34:51.180Z",
					updated_at: "2023-12-12T14:34:51.180Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "Now we go again starting with  auto scrolling, you see what I mean?",
					status: null,
					community: null,
				},
				{
					id: "0e570e4b-44c1-493a-a5de-1c406fac9c07",
					created_at: "2023-12-12T14:25:50.497Z",
					updated_at: "2023-12-12T14:25:50.497Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "And we are liiiivvveeeee! I think this is it. Commenting is all good...! Vamoooos!",
					status: null,
					community: null,
				},
				{
					id: "dec3b4dc-119c-4e44-b289-42d3733d426f",
					created_at: "2023-12-12T14:22:58.927Z",
					updated_at: "2023-12-12T14:22:58.927Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "What else is wrong with this structure. Show yourself!",
					status: null,
					community: null,
				},
				{
					id: "239d1c53-8135-4d44-b1aa-5c20a88c92ae",
					created_at: "2023-12-12T14:19:56.627Z",
					updated_at: "2023-12-12T14:19:56.627Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "We go again, how well do you think this comment will do now?",
					status: null,
					community: null,
				},
				{
					id: "331d5c2e-a114-488e-8012-1ee8d18b0628",
					created_at: "2023-12-12T14:16:46.144Z",
					updated_at: "2023-12-12T14:16:46.144Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "173bc7cb-cdbc-4699-8cfb-4808fb6b6271",
						full_name: "Pongo_prod Agyingo",
						preferred_name: "Pongo_prod",
						email: "mrfimpong@gmail.com",
					},
					text: "The first ever comment that will be made via this local portal! Vamoooos!",
					status: null,
					community: null,
				},
				{
					id: "c41c0551-e188-4e0f-997e-0b8179c35fb7",
					created_at: "2023-12-08T21:27:28.631Z",
					updated_at: "2023-12-08T21:27:28.631Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "46971bb0-3187-44ce-8536-17b58333bc9c",
					},
					user: {
						id: "b2b0bd4e-5aed-4fe3-9c67-a5aae163e7b9",
						full_name: "Carolyn Grant",
						preferred_name: "Carolyn",
						email: "csgrant00@charter.net",
					},
					text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the",
					status: "CREATED",
					community: null,
				},
			],
			id: "f2d7acf6-42ce-4f56-af59-10a6a91f1e6a",
			created_at: "2023-12-08T21:01:12.347Z",
			updated_at: "2023-12-11T09:02:40.836Z",
			is_deleted: false,
			info: null,
			name: "Heat Pump",
			description:
				"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
			summary:
				"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
			image: {
				id: 3275,
				name: "heatpump",
				url: "https://massenergize-files.s3.amazonaws.com/media/pump-png.jpeg",
			},
			icon: null,
			is_icon: false,
		},
		{
			campaign_technology_id: "2eed1c0e-601d-4564-9d9c-6f51494b1051",
			testimonials: [
				{
					id: "d909d958-2d42-454d-93ac-b3093d38db0f",
					created_at: "2023-12-09T02:59:30.825Z",
					updated_at: "2023-12-09T02:59:30.825Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					campaign_technology: {
						id: "2eed1c0e-601d-4564-9d9c-6f51494b1051",
					},
					title: "Solar is awesome!",
					body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
					is_approved: false,
					image: {
						id: 3236,
						name: "ImageFor We Up! Action",
						url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-10-12_at_06.02.54.png",
						created_at: "2023-10-13T11:52:11.166Z",
						info: {
							size: "10177",
							size_text: "10 KB",
							has_children: true,
							copyright_att: "Own this stuff@gmail.com",
							guardian_info: "leguardian@gmail.com",
							permission_key: "YES_CHECKED",
							permission_notes:
								"Checked that the image is not copyright protected",
							has_copyright_permission: true,
						},
					},
					created_by: "aaebd72f-1b05-40c6-a944-cbd452926445",
					is_published: false,
					anonymous: false,
					community: {
						id: 48,
						name: "Green Pepperell",
						subdomain: "PepperellMA",
					},
					user: {
						id: "aaebd72f-1b05-40c6-a944-cbd452926445",
						full_name: "Ron Martino",
						preferred_name: "RonM",
						email: "rjhmartino@comcast.net",
					},
				},
			],
			events: [
				{
					id: "e6a4cbb1-a0df-47dd-b063-f3c78796d50d",
					created_at: "2023-12-10T22:39:08.551Z",
					updated_at: "2023-12-10T22:39:08.551Z",
					is_deleted: false,
					info: null,
					campaign: {
						id: "70442987-b077-4f2b-a84c-e50aee222287",
					},
					event: {
						id: 964,
						name: "Serial Fixer - 1.3",
						start_date: "2023-09-26T11:22:00Z",
						end_date: "2023-09-28T11:22:00Z",
						description: "<p>fdsglksd';flgksd';flgk's;dlfk;lsdfg</p>",
						image: {
							id: 3220,
							name: "ImageFor Serial Shitter Event",
							url: "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-09-04_at_08.19.23.png",
							created_at: "2023-09-27T07:57:25.620Z",
							info: {
								size: "20064",
								size_text: "20 KB",
								has_children: "",
								copyright_att: "Mr Lava Lava",
								guardian_info: "",
								has_copyright_permission: true,
							},
						},
					},
				},
			],
			coaches: [
				{
					id: "1c3f4119-9770-43ec-981c-852e517ca4a1",
					created_at: "2023-12-08T21:19:32.590Z",
					updated_at: "2023-12-11T09:08:10.923Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "7bbe30b4-1783-4f35-8b03-be58476ab55f",
					},
					full_name: "Brad Hubbard-Nelson",
					email: "lebrad@gmail.com",
					phone_number: "248293489249230",
					image: {
						id: 3266,
						name: "face4",
						url: "https://massenergize-files.s3.amazonaws.com/media/face4.jpeg",
					},
					community: "Concord",
				},
				{
					id: "92118073-90b1-46b1-8dfc-5d19f4a7abb6",
					created_at: "2023-12-11T09:09:20.111Z",
					updated_at: "2023-12-11T09:09:20.111Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "7bbe30b4-1783-4f35-8b03-be58476ab55f",
					},
					full_name: "Ellen Tohn",
					email: "lospongos@gmail.com",
					phone_number: "02344839849933",
					image: {
						id: 3264,
						name: "face2",
						url: "https://massenergize-files.s3.amazonaws.com/media/face2.jpeg",
					},
					community: "Wayland",
				},
				{
					id: "4fa358ba-2bd4-4cd4-bd61-ff5e71d8ea0e",
					created_at: "2023-12-11T09:13:26.117Z",
					updated_at: "2023-12-11T09:13:26.117Z",
					is_deleted: false,
					info: null,
					technology: {
						id: "7bbe30b4-1783-4f35-8b03-be58476ab55f",
					},
					full_name: "George Owu",
					email: "lospongos@gmail.com",
					phone_number: "248293489249230",
					image: {
						id: 3264,
						name: "face2",
						url: "https://massenergize-files.s3.amazonaws.com/media/face2.jpeg",
					},
					community: "Kasoa",
				},
			],
			campaign_id: "70442987-b077-4f2b-a84c-e50aee222287",
			comments: [
				{
					id: "1f02c6c7-65a9-4856-9f30-df1a301e330b",
					created_at: "2023-12-08T21:28:02.147Z",
					updated_at: "2023-12-08T21:28:02.147Z",
					is_deleted: false,
					info: null,
					campaign_technology: {
						id: "2eed1c0e-601d-4564-9d9c-6f51494b1051",
					},
					user: {
						id: "7c6c91f1-d55d-40f5-8e37-74956e46e00d",
						full_name: "Joyce Adams",
						preferred_name: "risingtide",
						email: "lifevoyage@aol.com",
					},
					text: "",
					status: null,
					community: null,
				},
			],
			id: "7bbe30b4-1783-4f35-8b03-be58476ab55f",
			created_at: "2023-12-08T21:02:23.581Z",
			updated_at: "2023-12-11T09:02:51.027Z",
			is_deleted: false,
			info: null,
			name: "Community Solar",
			description:
				"Commiunity here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\r\nhere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
			summary:
				"3is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
			image: {
				id: 3274,
				name: "com-solar",
				url: "https://massenergize-files.s3.amazonaws.com/media/com-solar.png",
			},
			icon: null,
			is_icon: false,
		},
	],
	communities: [
		{
			id: "e7955ed4-74e2-461d-baa1-ae29091ba4cd",
			created_at: "2023-12-08T21:31:47.700Z",
			updated_at: "2023-12-08T21:31:47.700Z",
			is_deleted: false,
			info: null,
			campaign: {
				id: "70442987-b077-4f2b-a84c-e50aee222287",
			},
			community: {
				id: 3,
				name: "Energize Wayland",
				subdomain: "wayland",
			},
		},
		{
			id: "cf13862f-34bf-4f80-adf1-f30e0bc71248",
			created_at: "2023-12-08T21:32:03.552Z",
			updated_at: "2023-12-08T21:32:03.552Z",
			is_deleted: false,
			info: null,
			campaign: {
				id: "70442987-b077-4f2b-a84c-e50aee222287",
			},
			community: {
				id: 56,
				name: "Energize Franklin",
				subdomain: "FranklinMA",
			},
		},
		{
			id: "c87377a5-131a-42c6-8432-96ebec94afaf",
			created_at: "2023-12-08T21:32:17.766Z",
			updated_at: "2023-12-10T09:20:56.272Z",
			is_deleted: false,
			info: null,
			campaign: {
				id: "70442987-b077-4f2b-a84c-e50aee222287",
			},
			community: {
				id: 2,
				name: "EnergizeUs",
				subdomain: "Energize_Us",
			},
		},
		{
			id: "ab439b72-1c55-4fd4-b705-b9be2131d1f9",
			created_at: "2023-12-08T21:31:55.017Z",
			updated_at: "2023-12-10T09:21:16.149Z",
			is_deleted: false,
			info: null,
			campaign: {
				id: "70442987-b077-4f2b-a84c-e50aee222287",
			},
			community: {
				id: 28,
				name: "Agawam",
				subdomain: "agawam",
			},
		},
	],
	managers: [
		{
			id: "a5a5d830-e260-4f90-bec4-b4526888b600",
			created_at: "2023-12-11T09:20:42.124Z",
			updated_at: "2023-12-11T09:20:42.124Z",
			is_deleted: false,
			info: null,
			campaign: {
				id: "70442987-b077-4f2b-a84c-e50aee222287",
			},
			user: {
				id: "798b1d64-743b-4630-ab88-db3b27aba334",
				full_name: "Pongo Frimi",
				preferred_name: "Frima",
				email: "f.agyemang@alustudent.com",
			},
			is_key_contact: true,
			contact: "+233 45 689584",
		},
	],
	partners: [],
	config: {
		id: "e4ad024b-63ff-4baa-aa1c-7acb2c79b10b",
		created_at: "2023-12-11T09:17:03.796Z",
		updated_at: "2023-12-11T09:22:28.722Z",
		is_deleted: false,
		info: null,
		campaign: {
			id: "70442987-b077-4f2b-a84c-e50aee222287",
		},
		theme: null,
		navigation: null,
		advert: {
			title: "What is Kicking Gas?",
			description:
				"scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
		},
	},
	navigation: [
		{
			key: "home",
			url: "/70442987-b077-4f2b-a84c-e50aee222287",
			text: "Home",
			icon: "fa-home",
		},
		{
			key: "coaches",
			url: "/70442987-b077-4f2b-a84c-e50aee222287/?section=coaches",
			text: "Coaches",
			icon: "fa-users",
			children: [
				{
					key: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/45cd8402-49a6-4b3b-a119-cdb52b288e64/?section=coaches",
					text: "Home Solar",
				},
				{
					key: "46971bb0-3187-44ce-8536-17b58333bc9c",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/46971bb0-3187-44ce-8536-17b58333bc9c/?section=coaches",
					text: "Heat Pump",
				},
				{
					key: "2eed1c0e-601d-4564-9d9c-6f51494b1051",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/2eed1c0e-601d-4564-9d9c-6f51494b1051/?section=coaches",
					text: "Community Solar",
				},
			],
		},
		{
			key: "vendors",
			url: "/70442987-b077-4f2b-a84c-e50aee222287/?section=vendors",
			text: "Vendors",
			children: [
				{
					key: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/45cd8402-49a6-4b3b-a119-cdb52b288e64/?section=vendors",
					text: "Home Solar",
				},
				{
					key: "46971bb0-3187-44ce-8536-17b58333bc9c",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/46971bb0-3187-44ce-8536-17b58333bc9c/?section=vendors",
					text: "Heat Pump",
				},
				{
					key: "2eed1c0e-601d-4564-9d9c-6f51494b1051",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/2eed1c0e-601d-4564-9d9c-6f51494b1051/?section=vendors",
					text: "Community Solar",
				},
			],
			icon: "fa-sell",
		},
		{
			key: "testimonial",
			url: "/70442987-b077-4f2b-a84c-e50aee222287/?section=testimonial",
			text: "Testimonials",
			children: [
				{
					key: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/45cd8402-49a6-4b3b-a119-cdb52b288e64/?section=testimonials",
					text: "Home Solar",
				},
				{
					key: "46971bb0-3187-44ce-8536-17b58333bc9c",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/46971bb0-3187-44ce-8536-17b58333bc9c/?section=testimonials",
					text: "Heat Pump",
				},
				{
					key: "2eed1c0e-601d-4564-9d9c-6f51494b1051",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/2eed1c0e-601d-4564-9d9c-6f51494b1051/?section=testimonials",
					text: "Community Solar",
				},
			],
			icon: "fa-comment",
		},
		{
			key: "events",
			url: "/70442987-b077-4f2b-a84c-e50aee222287/?section=events",
			text: "Events",
			children: [
				{
					key: "45cd8402-49a6-4b3b-a119-cdb52b288e64",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/45cd8402-49a6-4b3b-a119-cdb52b288e64/?section=events",
					text: "Home Solar",
				},
				{
					key: "46971bb0-3187-44ce-8536-17b58333bc9c",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/46971bb0-3187-44ce-8536-17b58333bc9c/?section=events",
					text: "Heat Pump",
				},
				{
					key: "2eed1c0e-601d-4564-9d9c-6f51494b1051",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/2eed1c0e-601d-4564-9d9c-6f51494b1051/?section=events",
					text: "Community Solar",
				},
			],
			icon: "fa-calendar",
		},
		{
			key: "incentives",
			url: "/70442987-b077-4f2b-a84c-e50aee222287/?section=incentives",
			text: "Incentives",
			children: [
				{
					key: "46971bb0-3187-44ce-8536-17b58333bc9c",
					url: "/campaign/70442987-b077-4f2b-a84c-e50aee222287/technology/46971bb0-3187-44ce-8536-17b58333bc9c/?section=incentives",
					text: "Heat Pump",
				},
			],
			icon: "fa-money",
		},
	],
	stats: {
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
};
