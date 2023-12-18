import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import LandingPage from "../user-portal/pages/landing-page/LandingPage";
import { bindActionCreators } from "redux";
import {
  appInnit,
  appInnitAction,
  testReduxAction,
  toggleUniversalModal,
} from "../redux/actions/actions";
import { connect } from "react-redux";
import CustomModal from "../components/modal/CustomModal";
import TechnologyFullViewPage from "../user-portal/pages/technology/TechnologyFullViewPage";
import OneEvent from "../user-portal/pages/events/OneEvent";
import OneTestimonial from "../user-portal/pages/testimonials/OneTestimonial";
import { getLastSegmentFromUrl } from "../utils/utils";

function AppRouter({
  test,
  testFunction,
  modalOptions,
  toggleModal,
  init,
  campaign,
  // navigation,
}) {
  useEffect(() => {
    // const campaignId = getLastSegmentFromUrl(window.location);
    // console.log("ID DHY HERE", campaignId);
    // init(campaignId);
  }, []);

  // console.log("The campaign boss nankasa dey here", campaign);
  

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
              // menu={navigation}
            />
          }
        />

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
    // navigation: state.navigation,
  };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      testFunction: testReduxAction,
      toggleModal: toggleUniversalModal,
      init: appInnitAction,
    },
    dispatch
  );
};

export default connect(mapState, mapDispatch)(AppRouter);
