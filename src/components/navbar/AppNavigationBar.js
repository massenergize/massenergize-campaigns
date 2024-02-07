import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NAVIGATION_MENU } from "../../user-portal/data/user-portal-dummy-data";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUrlParams, generateUniqueRandomString } from "../../utils/utils";

const EXCLUDE_FROM_NAV = ["communities"];
function AppNavigationBar({ menu, campaign }) {
  const navigator = useNavigate();
  const { secondary_logo, primary_logo } = campaign || {};

  return (
    <Navbar variant="light" expand="lg" style={{ background: "white" }} fixed="top" className="elevate-2">
      <Container>
        {/* <Navbar.Brand href="#home">MassEnergize Campaigns</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto" style={{ alignItems: "center" }}>
            {/* <Nav.Link> */}
            {primary_logo?.url && (
              <img
                src={primary_logo?.url}
                style={{
                  height: 45,
                  width: 45,
                  objectFit: "contain",
                  marginRight: 5,
                }}
                alt={"logo"}
              />
            )}
            {/* </Nav.Link> */}
            {menu?.map((menu) => {
              const excluded = EXCLUDE_FROM_NAV.includes(menu?.key?.toLowerCase());
              if (excluded) return <></>;
              if (!menu?.children)
                return (
                  <Nav.Link
                    className="c-nav-item body-font"
                    key={menu?.key}
                    style={{
                      textTransform: "capitalize",
                      marginRight: 20,
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      navigator(menu.url || "#");
                    }}
                  >
                    <span>
                      <i className={`fa ${menu.icon}`} style={{ marginRight: 6 }}></i>
                      <span>{menu.text}</span>
                    </span>
                  </Nav.Link>
                );
              return (
                <NavDropdown
                  style={{
                    textTransform: "capitalize",
                    marginRight: 20,
                    fontWeight: "bold",
                  }}
                  className={"mx-2 body-font"}
                  title={
                    <span className="c-nav-item">
                      <i className={`fa ${menu.icon}`} style={{ marginRight: 6 }}></i>
                      <span>{menu?.text}</span>
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  {menu?.children?.map((child) => {
                    const salt = generateUniqueRandomString(6);
                    const params = {
                      section: menu.key,
                      tab: child.key,
                    };
                    const route = addUrlParams(window.location.href, params);

                    return (
                      <NavDropdown.Item
                        className="f-dropdown-override c-nav-item"
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
              );
            })}

            {secondary_logo?.url && (
              <img
                src={secondary_logo?.url}
                style={{
                  height: 45,
                  width: 45,
                  objectFit: "contain",
                  // marginLeft: 5,
                }}
                alt={"logo"}
              />
            )}
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
