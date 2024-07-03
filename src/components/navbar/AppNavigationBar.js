import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUrlSearchParams, generateUniqueRandomString } from "../../utils/utils";
import { Button, Col, Row } from "react-bootstrap";
import * as PropTypes from "prop-types";
import { loadActiveLanguageAction } from "../../redux/actions/actions";
import LanguageSelector from "../language/LanguageSelector";

const EXCLUDE_FROM_NAV = ["communities"];

function DropdownTitle(props) {
  return (
    <div className="c-nav-item nav-content mx-auto mx-md-0 row">
      <Col xs={2} md={"auto"} className={"px-0 me-1"}>
        <i className={`fa ${props.menu.icon}`}></i>
      </Col>
      <Col className={"px-0"}>
        <span>{props.menu?.text}</span>
      </Col>
      <Col xs={"auto"} className={"px-0 ms-md-1"}>
        {/*<i className="fa fa-light fa-chevron-down"></i>*/}
        <svg
          className={"down-chevron"}
          id="Layer_1"
          enableBackground="new 0 0 128 128"
          height="17"
          viewBox="0 0 128 128"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Down_Arrow_3_"
            d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"
          />
        </svg>
        {/*<svg fill="none" height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg" id="fi_9126125">
          <path
            clipRule="evenodd"
            d="m4.93934 10.9393c.58579-.5857 1.53553-.5857 2.12132 0l8.93934 8.9394 8.9393-8.9394c.5858-.5857 1.5356-.5857 2.1214 0 .5857.5858.5857 1.5356 0 2.1214l-10 10c-.5858.5857-1.5356.5857-2.1214 0l-9.99996-10c-.58579-.5858-.58579-1.5356 0-2.1214z"
            fill="rgb(0,0,0)"
            fillRule="evenodd"
          ></path>
        </svg>*/}
      </Col>
    </div>
  );
}

DropdownTitle.propTypes = { menu: PropTypes.any };

function AppNavigationBar({ menu, campaign }) {
  const navigator = useNavigate();
  const { secondary_logo, primary_logo } = campaign || {};

  return (
    <Navbar variant="light" expand="lg" style={{ background: "white" }} fixed="top" className="app-nav-bar elevate-1">
      <Container className={""} style={{ maxWidth: 1420 }}>
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
                            className="c-nav-item body-font d-flex mx-md-2 mx-auto px-0"
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
                            <span className={"my-auto nav-content"}>
                              <i className={`fa ${menu.icon}`} style={{ marginRight: 6 }}></i>
                              <span>{menu.text}</span>
                            </span>
                          </Nav.Link>
                        </Col>
                      );

                    return (
                      <Col key={i} sm={12} md={"auto"} className={"d-flex align-items-center px-0"}>
                        <NavDropdown
                          className={"fw-bold text-capitalize mx-md-1 mx-auto body-font d-md-flex px-0 w-100"}
                          title={<DropdownTitle menu={menu} />}
                          id="basic-nav-dropdown"
                        >
                          {menu?.children?.map((child) => {
                            const salt = generateUniqueRandomString(6);
                            return (
                              <NavDropdown.Item
                                className="f-dropdown-override c-nav-item my-auto text-center text-md-start "
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

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <LanguageSelector />
            </div>
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
