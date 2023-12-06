import React from "react";
import Footer from "../footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import AppNavigationBar from "../../../components/navbar/AppNavigationBar";

function PageWrapper({ children }) {
  return (
    <div style={{}}>
      <AppNavigationBar />
      <Container style={{ marginTop: 90, minHeight: "85vh" }}>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default PageWrapper;
