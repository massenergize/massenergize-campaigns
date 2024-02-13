import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NAVIGATION_MENU } from "../../user-portal/data/user-portal-dummy-data";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUrlParams, addUrlSearchParams, generateUniqueRandomString } from "../../utils/utils";
import { Col, Row } from "react-bootstrap";

const EXCLUDE_FROM_NAV = ["communities"];

function AppNavigationBar({ menu, campaign }) {
  const navigator = useNavigate();
  const { secondary_logo, primary_logo } = campaign || {};

  const home = menu?.find((m) => m?.key?.toLowerCase() === "home");

  return (
    <Navbar variant="light" expand="lg" style={{ background: "white" }} fixed="top" className="elevate-1">
      <Container fluid>
        {/* <Navbar.Brand href="#home">MassEnergize Campaigns</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
             <Row className={"w-100 justify-content-center"}>
               <Col sm="auto d-flex">
                 <Nav.Link className={"p-0 m-auto"}>
                   {primary_logo?.url && (
                     <img
                      className="touchable-opacity"
                      role={"button"}
                       onClick={() => {
                         const route = addUrlSearchParams(home?.url, { salt: generateUniqueRandomString(6) });
                         navigator(route || "#");
                       }}
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

               <Col sm={"auto"} className={"d-flex"}>
                 {menu?.map((menu) => {
                   const excluded = EXCLUDE_FROM_NAV.includes(menu?.key?.toLowerCase());
                   if (excluded) return <></>;
                   if (!menu?.children)
                     return (
                       <Nav.Link
                         className="c-nav-item body-font d-flex"
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
                     );
                   return (
                     <NavDropdown
                       style={{
                         textTransform: "capitalize",
                         marginRight: 20,
                         fontWeight: "bold",
                       }}
                       className={"mx-2 body-font d-flex"}
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
                   );
                 })}
               </Col>

               <Col sm="auto d-flex">
                 {secondary_logo?.url && (
                   <img
                     className={"m-auto"}
                     src={secondary_logo?.url}
                     style={{
                       // width: 100,
                       width: 140,
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
