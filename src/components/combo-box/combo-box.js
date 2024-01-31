/**
 * A select dropdown data input component that allows typing the name of an item in the list
 * It renders a suggestions combo box that gets its items from a url and  by default pre-populates the list
 *
 * @version 1.0.1
 * @author [George Koomson](https://github.com/archx3) [kobina.me](http://kobina.me)
 * @copyright (c) 2020, Vodafone Ghana and the authors
 * @link{combo-box.md}
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import classnames from 'classnames'
import { ComboListItem } from "../combo-list-item/combo-list-item";

import { Col, FormGroup, InputGroup, ListGroup, Row } from "react-bootstrap";
import EventOutsideNotifier from "../EventOutsideNotifier";
import "./combo-box.scss"

class ComboBox extends Component {
  constructor (props) {
    super(props);
    this.textInput = null;
    this.listContainer = null;

    this.state = {
      inputText: '',
      items: [],
      keyboardSelection: -1,
      loaded: false,
      loading: false,
      matches: [],
      placeholder: '',
      selected: null,
      showClearButton: true,
      value: props.value || "",
    };
  }

  componentDidMount () {
    let { url, items, preloaded, value } = this.props;

    if (!preloaded && items.length > 0) {
      this.setState({ items: items });
      this.setDefault(items);
    }
    if (value) {
      this.setState({ inputText: value })
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {

    if (!(isEqual(prevState.items, this.props.items))) {
      this.setState({ items: this.props.items })
    }

    if (prevProps.defaultItem !== this.props.defaultItem) {
      let { items, defaultItem } = this.props;

      if (defaultItem && items.length > 0) {
        let selected = items.filter((item) => {
          return item.value === defaultItem;
        });
        if (selected.length > 0) {
          this.selectItem(selected[0]);
        }
      }
    }
  }

  setDefault (items) {
    let { defaultItem } = this.props;
    // console.log(name, defaultItem);
    if (items.length > 0) {
      if (!defaultItem || defaultItem === "") {
        this.selectItem(null);
      } else {
        let selected = items.filter((item) => {
          return item.value === defaultItem;
        });

        // the filter method returns an array so let's get the first item in it
        if (selected.length > 0) {
          this.selectItem(selected[0]);
        }
      }
    }
  }

  // region Life Cycle Events
  // Catches exceptions generated in descendant components.
  // Unhandled exceptions will cause the entire component tree to unmount.
  // componentDidCatch(error, errorInfo) {
  // }
  // Called immediately after a component is mounted.
  // Setting state here will trigger re-rendering
  // Called immediately after updating occurs. Not called for the initial render.
  // The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null
  // componentDidUpdate(prevProps, prevState, snapshot) {
  // }

  // Called immediately before a component is destroyed.
  // Perform any necessary cleanup in this method, such as
  // cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
  // componentWillUnmount() {
  // }

  // endregion
  /**
   * @sideeffects
   * @param {String} url
   * @param {String} dataPropName
   * dummyPath = 'http://www.mocky.io/v2/5c3e15e63500006e003e9795';
   * @use get products list from the 3P API
   * @returns void
   */

  /**
   * sets the {@property state.selected} with the item in selected from the list
   * @param {Object} selected
   */
  selectItem (selected) {
    let { onChange, name, labelPropName } = this.props;

    if (!selected || selected === "") {
      if (onChange && typeof onChange === 'function') {
        this.setState({ inputText: "", }, this.hideAllMatches);
        selected = Object.assign({}, this.state.items[0]);
        Object.keys(selected).forEach(key => {
          selected[key] = '';
        });
        onChange(name, selected, this.textInput?.current)
      }
    } else {
      this.setState({ inputText: selected[labelPropName], }, this.hideAllMatches);

      if (onChange && typeof onChange === 'function') {
        onChange(name, selected, this.textInput?.current)
      }
    }
  }

  /**
   * Searches the list for items that have the {@param searchString} in it
   * and Sets the {@property state.matches} with the matches found
   * and causes the view to react to the new data
   * @param {String} searchString
   * @returns void
   */
  showMatches (searchString) {
    let props = this.props;
    let matches = this.state.items.filter((item) => {
      return item[props.labelPropName].toLowerCase().indexOf(searchString) > -1;
    });
    this.setState({ matches: matches }, this.reposition);
  }

  /**
   * Goes
   * and Sets the {@property state.matches} with {@property state.items}
   * and causes the view to react to the new data
   * @returns void
   */
  showAllItems () {
    let matches = this.state.items;
    this.setState({ matches: matches }, this.reposition);
  }

  hideAllMatches () {
    if (this.state.matches.length > 0) {
      this.setState({ matches: [] });
    }
    let listContainer = this.listContainer?.current;
    if (listContainer) {
      listContainer.style.bottom = "";
      listContainer.style.boxShadow = "";
    }
  }

  reposition () {
    let listContainer = this.listContainer?.current;
    if (listContainer) {
      let { bottom } = listContainer.getBoundingClientRect();

      if (bottom > window.innerHeight) {
        listContainer.style.bottom = "45px";
        listContainer.style.boxShadow = "0 -2px 4px rgba(98, 98, 98, 0.25)";
      }
    }
  }

  /**
   * Slows down the execution of the event handler by 300ms
   * by which time more would have been typed. instead of doing so on every keystroke
   * @returns {undefined|void}
   */
  debounceMatches () {
    return debounce(() => {
      // this.showMatches(this.state.inputText)
    }, 300, { trailing: true })()
  }


  /**
   * let's set up 2 way data-binding for our text box input
   * @param event {Event}
   */
  handleChange (event) {
    let inputText = event.target.value.trim().toLowerCase();

    this.setState({ inputText }, function () {
      if (this.state.inputText === "") {
        this.selectItem("");
      }
    });
    // this.debounceMatches()

    this.showAllItems();
  }

  /**
   * if the text box input goes out of focus and the text in it doesn't match any in our {@property state.items},
   * let's clear it, so they know they haven't selected anything
   * @param event {Event}
   */
  handleBlur (event) {
    let inputText = event.target.value;
    let state = this.state;
    let exists = this.state.items.some((item) => {
      return item[this.props.labelPropName].toLowerCase() === inputText.trim().toLowerCase();
    });

    let text = (exists || state.matches.length > 0) ? state.inputText : '';
    // let text = (exists) ? state.inputText : '';
    this.setState({
      inputText: text,
      value: text,
      // matches : [], // TODO handle the case of clicking outside ofthe combo box
    })
  }

  handleNavigationKey (e) {
    const matches = this.state.matches;
    if (matches.length > 0) {
      if ("ArrowUp" === e.key) {
        if (this.state.keyboardSelection > 0) {
          this.setState({ keyboardSelection: this.state.keyboardSelection - 1 })
        }
      } else if (e.key === "ArrowDown") {

        if (this.state.keyboardSelection < (matches.length - 1)) {
          this.setState({ keyboardSelection: this.state.keyboardSelection + 1 })
        }
      } else if (e.key === "Enter") {
        this.selectItem(this.state.matches[this.state.keyboardSelection])
      }
    } else {
      if (e.key === "ArrowDown") {
        this.showAllItems();
      }
    }
  }

  resetKeyboardSelection () {
    // this.setState({ keyboardSelection: -1 })
  }

  handleEnterKey (e) {

  }

  render () {
    let {
      disabled, className, id, preloaded, placeholder,
      labelPropName, name = '', value, CustomItem, enterKeyHint
    } = this.props;
    let { loading, loaded, items, matches, inputText, keyboardSelection } = this.state;

    placeholder = placeholder ? placeholder : this.state.placeholder;
    let loadingFailed = loaded && items.length < 1;

    // render list
    let comboList = null;
    let customItem = null
    let matchesLen = matches.length;
    let itemsLen = items.length;
    let showingMatches = matchesLen > 0;

    if ((inputText || matchesLen > 0)) {
      comboList = matches.map((item, i) => {
        let key = 'cbx' + i + item[labelPropName];
        // console.log(matches, item, CustomItem, typeof CustomItem);
        if (CustomItem && typeof CustomItem === "function") {
          customItem = CustomItem({ ...item, key })
        }
        let listItemProps = {
          className: "rounded-0" + (i < matchesLen - 1 ? " rounded-0" : " rounded-bottom"),
          highlighted: keyboardSelection === i,
          item,
          label: item[labelPropName],
          onClick: this.selectItem.bind(this, item),
          style: { borderRadius: "0" }
        };
        return <ComboListItem key={key} CustomItem={customItem} {...listItemProps} />
      });
    }

    // set button to down chevron by default
    let comboboxButton = <button data-testid="toggle-button" type={"button"} aria-roledescription="dropdown button"
                                 className={
                                   classnames("btn  rounded-left-0 combo-btn d-chevron col-2",
                                     { disabled: disabled || loading || itemsLen < 1 })}
                                 onClick={() => {
                                   if (1 > matchesLen || matchesLen !== itemsLen) {
                                     this.showAllItems();
                                   } else {
                                     this.setState({ ...this.state, keyboardSelection: -1 });
                                     this.hideAllMatches();
                                   }
                                   this.textInput?.current?.focus()
                                 }}>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 407.437 407.437"
           style={{ enableBackground: "new 0 0 407.437 407.437" }} xmlSpace="preserve">
        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
      </svg>
    </button>;

    let inputProps = {
      className: classnames("text-input rounded-left rounded-right-0 form-control combo-box-input", { disabled: disabled || loading || itemsLen < 1 }),
      ...(enterKeyHint && { enterKeyHint }),
      id: id,
      name: name,
      onBlur: (e) => {
        this.handleBlur(e)
      },
      onChange: (e) => {
        this.handleChange(e)
        typeof this.props.onTextInputChange === "function" && this.props.onTextInputChange(this.props.name, e.target.value.trim().toLowerCase())
      },
      onClick: () => {
        if (1 > matchesLen || matchesLen !== itemsLen) {
          this.showAllItems();
        } else {
          this.setState({ ...this.state, keyboardSelection: -1 });
          this.hideAllMatches();
        }
        this.textInput?.current?.focus()
      },
      onKeyUp: (e) => {
        this.handleNavigationKey(e)
      },
      placeholder: loading ? 'Loading' : placeholder,
      style: {
        // borderRadius: "0",
        width: "calc(100% - 36px)"
      },
      type: "text",
      value: inputText,
    }

    return (
      <EventOutsideNotifier
        handler={this.hideAllMatches.bind(this)}
        className={classnames("Combobox position-relative ", className, {
          'has-input': value !== '',
          "loading-failed": loadingFailed
        })}>
        <FormGroup className="mb-0 input" data-testid={"combo-box"}>
          <InputGroup
            className={classnames("input-group-alternative form-control-wrapper position-relative rounded-left", className, {
              disabled: disabled || loading || loadingFailed,
              "rounded-bottom-0 focus": showingMatches
            })}>
            <div className="search-icon">
              <img src="/img/search-icon.svg" alt="" height={20}/>
            </div>
            <input ref={this.textInput} {...inputProps}/>
            {comboboxButton}
          </InputGroup>
        </FormGroup>

        <Row ref={this.listContainer}
             className={classnames("combo-list-items rounded-bottom",
               { "d-none": !showingMatches, },
               this.props.floatList === true ? "position-relative" : "position-relative")}
             onMouseOver={() => {
               if (keyboardSelection > -1) {
                 this.setState({ keyboardSelection: -1 })
               }
             }}>
          <Col sm="12">
            <ListGroup style={{ borderRadius: "0" }}>{comboList}</ListGroup>
          </Col>
        </Row>
      </EventOutsideNotifier>
    )
  }
}

ComboBox.defaultProps = {
  className: '',
  defaultItem: undefined,
  disabled: false,
  items: [],
  labelPropName: 'label',
  preloaded: false,
  tabIndex: null,
  floatList: true,
  /**
   * The name of the property whose value contains the list of items
   *  as the call to the API where the list of items will return extra data
   *  @deprecated
   */
  valuePropName: 'value',
};

ComboBox.propTypes = {
  /**
   * The name of the property whose value contains the list of items
   *  as the call to the API where the list of items will return extra data
   */
  dataPropName: PropTypes.string,
  defaultItem: PropTypes.any,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  items: PropTypes.array.isRequired,
  floatList: PropTypes.bool,
  /**
   * Boolean that determine whether the combo list items is preloaded on component mount or
   * fetching takes place every few keystrokes.
   * Setting it to false now won't work as the functionality for it is not yet implemented
   * @default { @code True }
   */
  keyboardSupport: PropTypes.bool,
  label: PropTypes.string,
  /**
   * The name of the property whose value contains the list of items
   *  as the call to the API where the list of items will return extra data
   */
  labelPropName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  /**
   * Placeholder text for the text box
   */
  placeholder: PropTypes.string,
  /**
   * Boolean that determine whether the combo list items is preloaded on component mount or
   * fetching takes place every few keystrokes.
   * Setting i t to false now won't work as the functionality for it is not yet implemented
   * @default { @code True }
   */
  preloaded: PropTypes.bool,
  tabIndex: PropTypes.number,
  /**
   * The url form which the list of items will be fetched
   */
  url: PropTypes.string,
  value: PropTypes.any,
  onTextInputChange : PropTypes.func,
  /**
   * The name of the property whose value contains the list of items
   *  as the call to the API where the list of items will return extra data
   *  @deprecated
   */
  valuePropName: PropTypes.string
};

export default ComboBox;
