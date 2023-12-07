import React from "react";
import Footer from "../footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import AppNavigationBar from "../../../components/navbar/AppNavigationBar";
import OptimumWrapper from "./OptimumWrapper";
import { bindActionCreators } from "redux";
import { toggleUniversalModal } from "../../../redux/actions/actions";
import { connect } from "react-redux";

function PageWrapper({ children, toggleModal }) {
  return (
    <div style={{}}>
      <AppNavigationBar />

      <OptimumWrapper style={{ minHeight: "85vh", marginTop: 90 }}>
        {children}
      </OptimumWrapper>
      <Footer toggleModal={toggleModal} />
    </div>
  );
}

const mapState = (state) => {
  return {};
};
const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      toggleModal: toggleUniversalModal,
    },
    dispatch
  );
};
export default connect(mapState, mapDispatch)(PageWrapper);
