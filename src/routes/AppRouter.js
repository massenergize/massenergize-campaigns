import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import LandingPage from "../user-portal/pages/landing-page/LandingPage";
import { bindActionCreators } from "redux";
import {
  appInnit,
  fetchMeUser,
  logUserOut,
  setAuthUserAction,
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
import { getLastSegmentFromUrl } from "../utils/utils";
import CreateCampaignAccount from "../admin-portal/pages/campaign-account/CreateCampaignAccount";
import { CampaignStatistics } from "../admin-portal/pages/campaign/campaign-statistics/campaign-statistics";
import Login from "../admin-portal/pages/auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/admin/fire-config";
import Dummy from "../admin-portal/pages/auth/Dummy";
import CustomToast from "../components/admin-components/CustomToast";

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
  {
    path: "/login",
    component: Login,
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
  // navigation,
}) {
  const params = useParams();
  // useEffect(() => {
  //   console.log("CAMPAIGN: ", params);
  // }, []);
  return (
    <>
      <CustomModal
        close={() => toggleModal({ show: false, component: <></> })}
        {...modalOptions}
      />
      <Routes>
        <Route
          path="/campaign/:campaignId"
          element={
            <LandingPage
              test={test}
              testFunction={testFunction}
              toggleModal={toggleModal}
              // menu={navigation}
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

        <Route
          path={`/campaign/:campaign_id/technology/:campaign_technology_id`}
          element={
            <TechnologyFullViewPage
              toggleModal={toggleModal}
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
    dispatch
  );
};

export default connect(mapState, mapDispatch)(AppRouter);
