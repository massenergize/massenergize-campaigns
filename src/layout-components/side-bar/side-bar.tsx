import Nav from 'react-bootstrap/Nav';
import { MENU } from "./menu";
import { NavLink } from "./nav-link";
import "./side-bar.scss";
import classes from "classnames";
import { useState } from "react";
import { useNamedState } from "../../hooks/useNamedState";

// @ts-ignore
import { DownChevron } from "./down-chevron";

function MenuItems ({ childItems, title, href }: { childItems: any, title: string, href: string }) {
  return (
    <Nav.Item >
      <Nav.Link disabled>{title}  &arrowdown; </Nav.Link>
      <Nav className="flex-column">
        {
          childItems.map((child, childIndex) => {
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
}

/**
 * SideBar
 * @param [children] {React.ReactNode} - optional children
 * @param [menu] - optional menu
 * @constructor
 */
export function SideBar ({ children, menu = MENU }: { children?: React.ReactNode, menu?: any }) {
  const [OpenMenus, setOpenMenus] = useNamedState("OpenMenus", {});
  return (
    <Nav defaultActiveKey="/home" className="flex-column py-5 main">
      {
        MENU.map((item, index) => {
          const { id, disabled, title, href, children } = item;

          if (children) {
            return (
              <Nav.Item key={index} className={classes({show : OpenMenus[id]})}>
                <Nav.Link   onClick={() => {
                  setOpenMenus({...OpenMenus, [id] : !OpenMenus[id]})
                }}>{title}  <DownChevron className={"chevron"}/> </Nav.Link>
                <Nav className={classes("flex-column", {show : OpenMenus[id]})}>
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
