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
        <Route path="/home" element={<p> This is the HOMEPAGE</p>} />
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
