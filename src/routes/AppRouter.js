import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../user-portal/pages/landing-page/LandingPage";
import { bindActionCreators } from "redux";
import {
	testReduxAction,
	toggleUniversalModal,
} from "../redux/actions/actions";
import { connect } from "react-redux";
import CustomModal from "../components/modal/CustomModal";
import TechnologyFullViewPage from "../user-portal/pages/technology/TechnologyFullViewPage";
import OneEvent from "../user-portal/pages/events/OneEvent";
import AllComponents from "../admin-portal/pages/AllComponents";
import { NewCampaign } from "../admin-portal/pages/campaign/new";
import { CreateTechnology } from "../admin-portal/pages/technology/new";
import CreateCampaignAccount from "../admin-portal/pages/campaign-account/CreateCampaignAccount";
import PreviewCampaign from "../admin-portal/create-campaign/PreviewCampaign";

const ROUTE_TABLE = [
	{
		path: "/technology/:tech_id",
		component: TechnologyFullViewPage,
		addToggleModal: true,
	},
	{
		path: "/technology/event/:tech_id/:event_id",
		component: OneEvent,
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
		component: AllComponents,
	},
	{
		path: "/admin/campaign/preview",
		component: AllComponents,
	},
	{
		path: "/admin/campaign-account/new",
		component: CreateCampaignAccount,
	},
	{
		path: "/admin/campaign-preview/:id",
		component: PreviewCampaign,
	},
	{
		path: "/components",
		component: AllComponents,
	},
];

function AppRouter({ test, testFunction, modalOptions, toggleModal }) {
	return (
		<>
			<CustomModal
				close={() => toggleModal({ show: false, component: <></> })}
				{...modalOptions}
			/>
			<Routes>
				<Route
					path="/"
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
