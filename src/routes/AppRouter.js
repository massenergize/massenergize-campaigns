import React, { useEffect } from "react";
import { Route, Routes, useParams, Navigate, generatePath } from "react-router-dom";
import LandingPage from "../user-portal/pages/landing-page/LandingPage";
import { bindActionCreators } from "redux";
import {
  fetchMeUser,
  logUserOut,
  appInnitAction,
  testReduxAction,
  toggleUniversalModal,
} from "../redux/actions/actions";
import { connect } from "react-redux";
import CustomModal from "../components/modal/CustomModal";
import TechnologyFullViewPage from "../user-portal/pages/technology/TechnologyFullViewPage";
import OneEvent from "../user-portal/pages/events/OneEvent";
import AllComponents from "../admin-portal/pages/AllComponents";
import { NewCampaign } from "../admin-portal/pages/campaign/new";
import { EditCampaign } from "../admin-portal/pages/campaign/edit";
import { AllCampaigns } from "../admin-portal/pages/campaign/all";
import { CreateTechnology } from "../admin-portal/pages/technology/new";
import { AllTechnologies } from "../admin-portal/pages/technology/all";
import OneTestimonial from "../user-portal/pages/testimonials/OneTestimonial";
import CreateCampaignAccount from "../admin-portal/pages/campaign-account/CreateCampaignAccount";
import { CampaignStatistics } from "../admin-portal/pages/campaign/campaign-statistics/campaign-statistics";
import Login from "../admin-portal/pages/auth/Login";
import Dummy from "../admin-portal/pages/auth/Dummy";
import { lighterOpacity, portalIsAdmin, setPageTitle } from "../utils/utils";
import JoinUsForm from "../user-portal/pages/forms/JoinUsForm";
import { DEFAULT_THEME_COLOR } from "../utils/Constants";

export const NavigateWithParams = ({ to, ...props }) => {
  const params = useParams();
  return <Navigate {...props} to={generatePath(to, params)} />;
};

const ROUTE_TABLE = [
  {
    path: "/",
    redirectTo: "/campaign/:campaignId",
    replace: true,
    component: Login,
  },
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
    path: "/admin/campaign/:id",
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
    component: EditCampaign,
  },
  {
    path: "/admin/campaign/:id/edit",
    component: EditCampaign,
  },
  {
    path: "/admin/campaign/all",
    component: AllCampaigns,
  },
  {
    path: "/admin",
    component: AllCampaigns,
  },
  {
    path: "/admin/campaign",
    component: AllCampaigns,
  },
  {
    path: "/admin/home",
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
    path: "/admin/technology/new/:campaign_id",
    component: CreateTechnology,
  },
  {
    path: "/admin/technology/:technology_id/edit/:campaign_id",
    component: CreateTechnology,
  },
  {
    path: "/admin/campaign/:campaign_id/edit/technology/:technology_id/campaign_technology/:campaign_technology_id",
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
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin/campaign/account/new",
    component: CreateCampaignAccount,
  },
  {
    path: "/dummy-for-auth",
    component: Dummy,
  },
];

function AppRouter({
  test,
  testFunction,
  modalOptions,
  toggleModal,
  appInnit,
  fetchMassenergizeUser,
  logUserOut,
  init,
  campaign,
  isAdminPortal,
  // navigation,
}) {
  const params = useParams();

  console.log("LIGHTER VERSION", lighterOpacity("#3030d0", 40));
  useEffect(() => {
    let pageName = "ME Campaign";
    if (isAdminPortal) pageName = "Admin Portal";
    setPageTitle(pageName);
  }, []);

  const register = (registrationProps) => {
    toggleModal({
      fullControl: true,
      show: true,
      title: `Before you add a testimonial, we would like to know you`,
      component: (props) => (
        <JoinUsForm
          {...(props || {})}
          confirmText="Continue"
          callbackOnSubmit={({ close }) => close && close()}
          {...(registrationProps || {})}
        />
      ),
    });
  };
  const triggerProtectedFunctionality = (authUser, { cb, registrationOptions } = {}) => {
    const { user } = authUser || {};
    if (!user) return register(registrationOptions);
    cb && cb();
  };

  return (
    <div
      style={{
        "--theme-main-color": DEFAULT_THEME_COLOR.main_color,
        "--theme-lighter-color": lighterOpacity(DEFAULT_THEME_COLOR.main_color),
        "--theme-accent-color": DEFAULT_THEME_COLOR.accent_color,
      }}
    >
      <CustomModal close={() => toggleModal({ show: false, component: <></> })} {...modalOptions} />
      <Routes>
        <Route
          path="/campaign/:campaignId"
          element={
            <LandingPage
              test={test}
              testFunction={testFunction}
              toggleModal={toggleModal}
              triggerProtectedFunctionality={triggerProtectedFunctionality}
              // menu={navigation}
            />
          }
        />

        {ROUTE_TABLE.map((route, index) => {
          const { path, addToggleModal, replace } = route;

          const routeProps = {
            path,
            ...(replace && { replace: true }),
            element: <route.component toggleModal={addToggleModal ? toggleModal : null} />,
          };

          return <Route key={index} {...routeProps} />;
        })}

        <Route
          path={`/campaign/:campaign_id/technology/:campaign_technology_id`}
          element={
            <TechnologyFullViewPage
              toggleModal={toggleModal}
              triggerProtectedFunctionality={triggerProtectedFunctionality}
              // menu={navigation}
            />
          }
        />
        <Route
          path="/campaign/:campaign_id/technology/event/:eventId"
          element={<OneEvent toggleModal={toggleModal} />}
        />
        <Route
          path="/campaign/:campaign_id/technology/testimonial/:id"
          element={<OneTestimonial toggleModal={toggleModal} />}
        />
      </Routes>
    </div>
  );
}

const mapState = (state) => {
  return {
    test: state.testStore,
    modalOptions: state.modalOptions,
    campaign: state.campaign,
    isAdminPortal: state.isAdminPortal,
  };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      testFunction: testReduxAction,
      toggleModal: toggleUniversalModal,
      fetchMassenergizeUser: fetchMeUser,
      // putUserInRedux: setAuth,
      init: appInnitAction,
      logUserOut,
    },
    dispatch,
  );
};

export default connect(mapState, mapDispatch)(AppRouter);
