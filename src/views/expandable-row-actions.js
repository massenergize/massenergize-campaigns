import React, { useRef, useState } from "react";
import EventOutsideNotifier from "../components/EventOutsideNotifier";
import classes from "classnames";
import { NavLink } from "react-router-dom";

/**
 *
 * @param id
 * @param rowActions
 * @param setRowActionsOpen
 * @returns {JSX.Element}
 * @constructor
 */
export const RowActions = ({ id, rowActions, setRowActionsOpen }) => {
  let [isOpen, setIsOpen] = useState(false);
  const listContainer = useRef(null);

  const reposition = () => {
    let { bottom } = listContainer.current.getBoundingClientRect();
    if (bottom > window.innerHeight) {
      listContainer.style.bottom = "45px";
    }
  }

  const toggleIsOpen = async () => {
    try {
      if (!isOpen) {
        setIsOpen(true);
        reposition();
        // const opened = await setIsOpen(true);
        // if (opened) {
        //   reposition();
        // }
      } else {
        setIsOpen(false)
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <EventOutsideNotifier handler={(e) => {
      setIsOpen(false)
    }}>
      <div className={'actions'}>
        <span className={'cursor-pointer'} onClick={(e) => {
          toggleIsOpen()
        }}>
        <DotsVerticalIcon/>
      </span>
        <div>
          {
            <div ref={listContainer}
                 className={classes("actions-menu-list position-absolute border rounded ", { 'd-none': !isOpen })}>
              <ul className="list-unstyled CTAs m-0 my-2">
                {
                  rowActions.map(({ icon, name, url, handler }, i) => {
                    if (url) {
                      return <li key={name + i}><NavLink to={url}>
                        <a href={'#'} className="px-1 ">
                          {icon && <span className={'icon mr-1'}> {icon}</span>}{name}
                        </a>
                      </NavLink>
                      </li>
                    } else if (handler) {
                      return <li key={name + i}><a href={'#'} className="px-1 " onClick={() => {
                        handler();
                      }}>
                        {icon && <span className={'icon mr-1'}> {icon}</span>} {name}
                      </a></li>
                    }
                    return <li key={name + i}><a href={'#'} className="px-1 ">
                      {icon && <span className={'icon mr-1'}> {icon}</span>} {name}
                    </a></li>
                  })
                }
              </ul>
            </div>
          }
        </div>
      </div>
      {/*<style >
        {`
          .actions {
            position: relative;
          }

          .actions-menu-list {
            background-color: #fff;
            top: 100%;
            right: 10px;
            z-index: 50;
            min-width: 130px
          }
        `}
      </style>*/}
    </EventOutsideNotifier>
  )
}
