import React from "react";
import Footer from "../footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import AppNavigationBar from "../../../components/navbar/AppNavigationBar";
import OptimumWrapper from "./OptimumWrapper";
import { bindActionCreators } from "redux";
import {getStaticText, toggleUniversalModal} from "../../../redux/actions/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function PageWrapper({ children, toggleModal, menu, noNavBar = false, noFooter = false, theme }) {
    const { pages } = getStaticText();
    const { goBack } = pages || {};
  const navigator = useNavigate();
  return (
    <div style={{}}>
      {noNavBar && (
        <div style={{ padding: 20, background: theme?.color, color: theme?.textcolor }}>
          {" "}
          <h6 role="button" className="touchable-opacity" onClick={() => navigator(-1)}>
            <i className=" fa fa-long-arrow-left" style={{ marginRight: 10 }} />
              {goBack?.text || "Go Back"}
          </h6>
        </div>
      )}
      {!noNavBar && <AppNavigationBar />}
      <OptimumWrapper style={{ minHeight: "85vh", marginTop: 130 }}>{children}</OptimumWrapper>
      {!noFooter && <Footer toggleModal={toggleModal} />}
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
