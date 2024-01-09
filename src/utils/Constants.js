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
import TechnologyEvents from "../admin-portal/create-campaign/create-technology/Events";
import Testimonials from "../admin-portal/create-campaign/create-technology/Testimonials";
import AdvancedConfig from "../admin-portal/create-campaign/create-technology/AdvancedConfig";

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
		key: "information",
		name: "Information",
		component: Info,
	},
	{
		key: "coaches",
		name: "Coaches",
		component: Coaches,
	},
	{
		key: "vendors",
		name: "Vendors",
		component: Vendors,
	},
	{
		key: "incentives",
		name: "Incentives",
		component: Incentives,
	},
	{
		name: "Events",
		key: "events",
		component: TechnologyEvents,
	},
	{
		name: "Testimonials",
		key: "testimonials",
		component: Testimonials,
	},
	{
		name: "More",
		key: "more-config",
		component: AdvancedConfig,
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
export const HOMEPAGE = "HOMEPAGE";
export const FULL_TECHNOLOGY = "FULL_TECHNOLOGY";

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const monthsOfYear = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
