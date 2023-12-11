import React, { useRef, useState } from "react";
import EventOutsideNotifier from "../../../higher-order-components/EventOutsideNotifier";
import { DotsVerticalIcon } from "@modulz/radix-icons";
import * as classes from "classnames";
import Link from "next/link";

/**
 *
 * @param id
 * @param rowActions
 * @param setRowActionsOpen
 * @returns {JSX.Element}
 * @constructor
 */
function RowActions ({ id, rowActions, setRowActionsOpen }) {
  let [ isOpen, setIsOpen ] = useState(false);
  const listContainer = useRef(null);

  const reposition = () => {
    let { bottom } = listContainer.current.getBoundingClientRect();
    if (bottom > window.innerHeight) {
      listContainer.style.bottom = "45px";
    }
  };

  const toggleIsOpen = async () => {
    try {
      if (!isOpen) {
        setIsOpen(true);
        reposition();
      } else {
        setIsOpen(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <EventOutsideNotifier
      handler={() => {
        setIsOpen(false);
      }}
    >
      <div className={"actions"}>
        <span
          role={"button"}
          tabIndex={0}
          className={"cursor-pointer"}
          onClick={(e) => {
            toggleIsOpen();
          }}
        >
          <DotsVerticalIcon/>
        </span>
        <div>
          {
            <div ref={listContainer}
                 className={classes("actions-menu-list position-absolute border rounded ", { "d-none" : !isOpen })}>
              <ul className="list-unstyled CTAs m-0 my-2">
                {rowActions.map(({ icon, name, url, handler }, i) => {
                  if (url) {
                    return (
                      <li key={name + i}>
                        <Link href={url}>
                          <a href={url} className="px-1 ">
                            {icon && <span className={"icon mr-1"}> {icon}</span>}
                            {name}
                          </a>
                        </Link>
                      </li>
                    );
                  } else if (handler) {
                    return (
                      <li key={name + i}>
                        <div role={"button"} tabIndex={0} onClick={() => {
                          handler();
                        }}>
                          <p className="px-1 cursor-pointer mb-0 line-height-1">
                            {icon && <span className={"icon mr-1"}> {icon}</span>} {name}
                          </p>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={name + i}>
                      <div>
                        <p className="px-1 cursor-pointer mb-0 line-height-1">
                          {icon && <span className={"icon mr-1"}> {icon}</span>} {name}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          }
        </div>
      </div>
      <style jsx>
        {`
          .actions {
            position: relative;
          }

          .actions-menu-list {
            background-color: #fff;
            top: 100%;
            right: 10px;
            z-index: 50;
            min-width: 130px;
          }
        `}
      </style>
    </EventOutsideNotifier>
  );
}
