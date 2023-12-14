import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import LandingPage from "../user-portal/pages/landing-page/LandingPage";
import { bindActionCreators } from "redux";
import {
	appInnit,
	testReduxAction,
	toggleUniversalModal,
} from "../redux/actions/actions";
import { connect } from "react-redux";
import CustomModal from "../components/modal/CustomModal";
import TechnologyFullViewPage from "../user-portal/pages/technology/TechnologyFullViewPage";
import OneEvent from "../user-portal/pages/events/OneEvent";
import AllComponents from "../admin-portal/pages/AllComponents";
import { NewCampaign } from "../admin-portal/pages/campaign/new";
import { AllCampaigns } from "../admin-portal/pages/campaign/all";
import { CreateTechnology } from "../admin-portal/pages/technology/new";
import { AllTechnologies } from "../admin-portal/pages/technology/all";
import OneTestimonial from "../user-portal/pages/testimonials/OneTestimonial";
import CreateCampaignAccount from "../admin-portal/pages/campaign-account/CreateCampaignAccount";
import { CampaignStatistics } from "../admin-portal/pages/campaign/campaign-statistics/campaign-statistics";

const ROUTE_TABLE = [
	{
		path: "/technology/:campaign_technology_id",
		component: TechnologyFullViewPage,
		addToggleModal: true,
	},
	{
		path: "/technology/event/:eventId",
		component: OneEvent,
		addToggleModal: true,
	},
	{
		path: "/technology/testimonial/:id",
		component: OneTestimonial,
		addToggleModal: true,
	},

	{
		path: "/admin/campaign/new",
		component: NewCampaign,
	},
	{
		path: "/admin/campaign/create-technology",
		component: CreateTechnology,
	},
	{
		path: "/admin/campaign/new/preview",
		component: AllComponents,
	},

	{
		path: "/admin/campaign/edit/:id",
		component: AllComponents,
	},
	{
		path: "/admin/campaign/all",
		component: AllCampaigns,
	},

	{
		path: "/admin/campaign/:id/stats/",
		component: CampaignStatistics,
	},

	{
		path: "/admin/campaign-account/new",
		component: CreateCampaignAccount,
	},

	{
		path: "/admin/technology/new",
		component: CreateTechnology,
	},

	{
		path: "/admin/technology/all",
		component: AllTechnologies,
	},

	{
		path: "/admin/campaign-preview/:id",
		component: CampaignStatistics,
	},
	{
		path: "/components",
		component: AllComponents,
	},
];

function AppRouter({
	test,
	testFunction,
	modalOptions,
	toggleModal,
	appInnit,
}) {
	const params = useParams();
	return (
		<>
			<CustomModal
				close={() => toggleModal({ show: false, component: <></> })}
				{...modalOptions}
			/>
			<Routes>
				<Route
					path="/:campaignId"
					element={
						<LandingPage
							test={test}
							testFunction={testFunction}
							toggleModal={toggleModal}
						/>
					}
				/>

				{ROUTE_TABLE.map((route, index) => {
					const { path, addToggleModal } = route;
					const routeProps = {
						path,
						element: (
							<route.component
								toggleModal={addToggleModal ? toggleModal : null}
							/>
						),
					};
					return <Route key={index} {...routeProps} />;
				})}
			</Routes>
		</>
	);
}

const mapState = (state) => {
	return { test: state.testStore, modalOptions: state.modalOptions };
};

const mapDispatch = (dispatch) => {
	return bindActionCreators(
		{ testFunction: testReduxAction, toggleModal: toggleUniversalModal },
		dispatch
	);
};

export default connect(mapState, mapDispatch)(AppRouter);
