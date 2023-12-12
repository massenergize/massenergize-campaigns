import Nav from 'react-bootstrap/Nav';
import { MENU } from "./menu";
import { NavLink } from "./nav-link";

/**
 * SideBar
 * @param [children] {React.ReactNode} - optional children
 * @param [menu] - optional menu
 * @constructor
 */
export function SideBar ({ children, menu = MENU }: { children?: React.ReactNode, menu?: any }) {
  return (
    <Nav defaultActiveKey="/home" className="flex-column py-5">
      {
        MENU.map((item, index) => {
          const { id, disabled, title, href, children } = item;

          if (children) {
            return (
              <Nav.Item key={index}>
                <Nav.Link disabled>{title} </Nav.Link>
                <Nav className="flex-column">
                  {
                    children.map((child, childIndex) => {
                      const { title, href } = child;
                      return (
                        <Nav.Item key={childIndex}>
                          <NavLink href={href}>{title}</NavLink>
                        </Nav.Item>
                      )
                    })
                  }
                </Nav>
              </Nav.Item>
            )
          } else {
            return (
              <NavLink key={index} id={id} href={href} disabled={disabled}>
                {title}
              </NavLink>
            )
          }
        })
      }
    </Nav>
  );
}
