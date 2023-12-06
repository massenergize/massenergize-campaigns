import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NAVIGATION_MENU } from "../../user-portal/data/user-portal-dummy-data";

function AppNavigationBar() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ background: "var(--app-deep-green)" }}
      fixed="top"
      className="elevate-2"
    >
      <Container>
        {/* <Navbar.Brand href="#home">MassEnergize Campaigns</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            {NAVIGATION_MENU.map((menu) => {
              if (!menu?.children)
                return (
                  <Nav.Link
                    style={{ textTransform: "uppercase" }}
                    href={menu.url || "#"}
                  >
                    {menu.text}
                  </Nav.Link>
                );
              return (
                <NavDropdown
                  style={{ textTransform: "uppercase" }}
                  title={
                    <span>
                      <i
                        className={`fa ${menu.icon}`}
                        style={{ marginRight: 6 }}
                      ></i>
                      <span>{menu.text}</span>
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  {menu.children.map((child) => {
                    return (
                      <NavDropdown.Item
                        style={{ textTransform: "uppercase" }}
                        key={child.key}
                        href={child.url}
                      >
                        {child.text}
                      </NavDropdown.Item>
                    );
                  })}
                  {/* 
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              );
            })}
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="INCENTIVES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavigationBar;
