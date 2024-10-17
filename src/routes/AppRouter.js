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
  getStaticText,
} from "../redux/actions/actions";
import { connect, useSelector } from "react-redux";
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
import { setPageTitle } from "../utils/utils";
import JoinUsForm from "../user-portal/pages/forms/JoinUsForm";
import AddOfferedLanguages from "../admin-portal/internationalization/AddOfferedLanguages";
import BlanketNotification from "../components/pieces/BlanketNotification";
import SPTOnePager from "../components/themes/spt/SPTOnePager";
import PBCanvas from "../components/page-builder/PBCanvas";
import PBEntry from "../components/page-builder/PBEntry";

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
    path: "/admin/campaign/languages/add",
    component: AddOfferedLanguages,
  },
  {
    path: "/play",
    component: PBEntry,
  },
  // {
  //   path: "/campaign/theme/spt",
  //   component: SPTOnePager,
  // },
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
  isAdminPortal,
  // navigation,
}) {
  const { modals } = getStaticText();
  const blanketNotification = useSelector((state) => state.blanketNotification);

  useEffect(() => {
    let pageName = "ME Campaign";
    if (isAdminPortal) pageName = "Admin Portal";
    setPageTitle(pageName);
  }, []);

  const register = (registrationProps) => {
    toggleModal({
      fullControl: true,
      show: true,
      title: modals?.preTestimonial?.title?.text || `Before you add a testimonial, we would like to know you`,
      component: (props) => (
        <JoinUsForm
          {...(props || {})}
          confirmText={modals?.preTestimonial?.buttons?.continue?.text || "Continue"}
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

  if (blanketNotification) return <BlanketNotification {...blanketNotification} />;

  return (
    <>
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
    </>
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
