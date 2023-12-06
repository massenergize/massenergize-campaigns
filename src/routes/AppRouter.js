import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../user-portal/pages/landing-page/LandingPage";
import { bindActionCreators } from "redux";
import { testReduxAction } from "../redux/actions/actions";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

function AppRouter({ test, testFunction }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage test={test} testFunction={testFunction} />}
      />
      <Route path="/home" element={<p> This is the HOMEPAGE</p>} />
    </Routes>
  );
}

const mapState = (state) => {
  return { test: state.testStore };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators({ testFunction: testReduxAction }, dispatch);
};
export default connect(mapState, mapDispatch)(AppRouter);
