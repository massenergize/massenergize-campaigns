import React from "react";
import { NavLink } from "react-router-dom";

/**
 *
 * @param id
 * @param rowActions
 * @param setRowActionsOpen
 * @returns {JSX.Element}
 * @constructor
 */
export function RowActions ({ id, rowActions, onRowActionsClick }) {

  return (
    <div className={'actions'} onClick={onRowActionsClick}>
      {
        rowActions.map(({ icon, name, href, handler }, i) => {
          if (href) {
            return (
                <a href={href} className="px-1 " key={name + i}>
                  {icon && <span className={'icon mr-1'}> {icon}</span>}{name}
                </a>)
          } else if (handler) {
            return <span key={name + i}><a href={'#'} className="px-1 " onClick={() => {
              handler();
            }}>
              {icon && <span className={'icon mr-1'}> {icon}</span>} {name}
            </a></span>
          }
          return <span key={name + i}><a href={'#'} className="px-1 ">
            {icon && <span className={'icon mr-1'}> {icon}</span>} {name}
          </a></span>
        })
      }
    </div>
  )
}
