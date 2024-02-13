import React from "react";
import Footer from "../footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import AppNavigationBar, { CommonNavSpace } from "../../../components/navbar/AppNavigationBar";
import OptimumWrapper from "./OptimumWrapper";
import { bindActionCreators } from "redux";
import { toggleUniversalModal } from "../../../redux/actions/actions";
import { connect } from "react-redux";

function PageWrapper({ children, toggleModal, menu }) {
  return (
    <div style={{}}>
      <AppNavigationBar />
      <CommonNavSpace top={130} />
      <OptimumWrapper style={{ minHeight: "85vh" }}>{children}</OptimumWrapper>
      <Footer toggleModal={toggleModal} />
    </div>
  );
}

const mapState = (state) => {
  return { menu: state.navigation };
};
const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      toggleModal: toggleUniversalModal,
    },
    dispatch,
  );
};
export default connect(mapState, mapDispatch)(PageWrapper);
