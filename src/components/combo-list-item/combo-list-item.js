import React from 'react';
import { ListGroupItem } from "react-bootstrap";
import PropTypes from 'prop-types';
import classes from 'classnames'

/**
 *
 * @param props {{label}}
 * @returns {*}
 * @constructor
 */
export const ComboListItem = (props) => {
  let { highlighted = false, label, onClick, CustomItem = null, } = props;
  return (
    <ListGroupItem data-testid="combo-list-item" className={classes("ComboListItem combo-list-item px-3 py-2 cursor-pointer", { highlighted })} onClick={() => {onClick()}}>{ CustomItem ? CustomItem : label}
    </ListGroupItem>
  );
};

ComboListItem.propTypes = {
  customChild : PropTypes.func,
  label : PropTypes.string,
  onClick : PropTypes.func,
  setItem : PropTypes.func
};
