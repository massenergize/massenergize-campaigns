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
import OneTestimonial from "../user-portal/pages/testimonials/OneTestimonial";

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

        <Route
          path="/technology/:tech_id"
          element={<TechnologyFullViewPage toggleModal={toggleModal} />}
        />
        <Route
          path="/technology/event/:tech_id/:event_id"
          element={<OneEvent toggleModal={toggleModal} />}
        />
        <Route
          path="/technology/testimonial/:tech_id/:event_id"
          element={<OneTestimonial toggleModal={toggleModal} />}
        />
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
