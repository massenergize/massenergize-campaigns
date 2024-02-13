import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUrlSearchParams, generateUniqueRandomString } from "../../utils/utils";
import { Col, Row } from "react-bootstrap";

const EXCLUDE_FROM_NAV = ["communities"];

function AppNavigationBar({ menu, campaign }) {
  const navigator = useNavigate();
  const { secondary_logo, primary_logo } = campaign || {};

  const home = menu?.find((m) => m?.key?.toLowerCase() === "home");

  return (
    <Navbar variant="light" expand="lg" style={{ background: "white" }} fixed="top" className="app-nav-bar elevate-1">
      <Container className={""}>
        {/* <Navbar.Brand href="#home">MassEnergize Campaigns</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={" mb-2"} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" w-md-100">
            <Row className={"w-md-100 justify-content-center"}>
              <Col xs={12} md="auto" className={"mb-3 mb-md-0 d-flex"}>
                <Row className={"justify-content-between w-100"}>
                  <Col xs={"auto"} sm={"auto"}>
                    <Nav.Link className={"p-0 m-auto"}>
                      {primary_logo?.url && (
                        <img
                          src={primary_logo?.url}
                          style={{
                            maxWidth: 140,
                            height: 70,
                            objectFit: "contain",
                          }}
                          alt={"logo"}
                        />
                      )}
                    </Nav.Link>
                  </Col>
                  <Col xs={"auto"} sm={"auto"} md="auto" className={"d-md-none"}>
                    {secondary_logo?.url && (
                      <img
                        className={"m-auto"}
                        src={secondary_logo?.url}
                        style={{
                          // width: 100,
                          maxWidth: 140,
                          height: 70,
                          objectFit: "contain",
                          // marginLeft: 5,
                        }}
                        alt={"logo"}
                      />
                    )}
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={"auto"} className={"d-flex"}>
                <Row>
                  {menu?.map((menu, i) => {
                    const excluded = EXCLUDE_FROM_NAV.includes(menu?.key?.toLowerCase());
                    if (excluded) return <></>;
                    if (!menu?.children)
                      return (
                        <Col sm={12} md={"auto"} key={i} className={"d-flex  align-items-center px-0"}>
                          <Nav.Link
                            className="c-nav-item body-font d-flex mx-md-2 mx-auto"
                            key={menu?.key}
                            style={{
                              textTransform: "capitalize",
                              marginRight: 20,
                              fontWeight: "bold",
                            }}
                            onClick={() => {
                              const route = addUrlSearchParams(menu?.url, { salt: generateUniqueRandomString(6) });
                              navigator(route || "#");
                            }}
                          >
                        <span className={"my-auto"}>
                          <i className={`fa ${menu.icon}`} style={{ marginRight: 6 }}></i>
                          <span>{menu.text}</span>
                        </span>
                          </Nav.Link>
                        </Col>
                      );
                    return (
                      <Col key={i} sm={12} md={"auto"} className={"d-flex align-items-center px-0"}>
                        <NavDropdown
                          className={"fw-bold text-capitalize mx-md-2 mx-auto body-font d-flex"}
                          title={
                            <span className="c-nav-item my-auto d-inline-block">
                          <i className={`fa ${menu.icon}`} style={{ marginRight: 6 }}></i>
                          <span>{menu?.text}</span>
                        </span>
                          }
                          id="basic-nav-dropdown"
                        >
                          {menu?.children?.map((child) => {
                            const salt = generateUniqueRandomString(6);
                            return (
                              <NavDropdown.Item
                                className="f-dropdown-override c-nav-item my-auto"
                                style={{ textTransform: "capitalize" }}
                                key={child?.key}
                                onClick={() => {
                                  navigator(`${child.url}&salt=${salt}` || "#");
                                }}
                              >
                                {child.text}
                              </NavDropdown.Item>
                            );
                          })}
                        </NavDropdown>
                      </Col>
                    );
                  })}
                </Row>
              </Col>

              <Col xs={12} md="auto" className={"d-none d-md-flex"}>
                {secondary_logo?.url && (
                  <img
                    className={"m-auto"}
                    src={secondary_logo?.url}
                    style={{
                      // width: 100,
                      maxWidth: 140,
                      height: 70,
                      objectFit: "contain",
                      // marginLeft: 5,
                    }}
                    alt={"logo"}
                  />
                )}
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const mapState = (state) => {
  return { menu: state.navigation, campaign: state?.campaign };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapState)(AppNavigationBar);
