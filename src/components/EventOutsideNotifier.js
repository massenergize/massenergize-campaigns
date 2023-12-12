import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component that Notifies a child component that a click event has fired outside of it
 */
export default class EventOutsideNotifier extends Component {
  constructor (props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    document.addEventListener(this.props.event, this.handleClickOutside);
  }

  componentWillUnmount () {
    document.removeEventListener(this.props.event, this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef (node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on the outside of the element
   */
  handleClickOutside (event) {
    let { handler } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (handler && typeof handler === 'function') { // duck typing to avoid error
        this.props.handler();
      } else {
        console.log(`EventOutsideNotifier expected a function but got ${typeof handler}`)
      }
    }
  }

  render () {
    return <div className={" " + (this.props.className || "")} ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

EventOutsideNotifier.defaultProps = {
  event : 'mouseup'
};

EventOutsideNotifier.propTypes = {
  // children: PropTypes.element.isRequired,
  event : PropTypes.string,
  handler : PropTypes.func.isRequired,
  componentName : PropTypes.string
};
