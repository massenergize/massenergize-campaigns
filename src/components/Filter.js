import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const DATA = [
  { id: "heat-pump", name: "Heat Pump" },
  { id: "community-solar", name: "Community Solar" },
  { id: "home-solar", name: "Home Solar" },
];
const labAc = (item) => item.name;
const valAc = (item) => item.id;

function Filter ({
  filterOptions = DATA,
  valueAccessor = valAc,
  labelAccessor = labAc,
  render,
  contentRoot,
  title,
}) {
  const [selection, setSelection] = useState([]);

  const addToSelection = (item) => {
    const value = getValue(item);
    const rem = selection.filter((it) => getValue(it) !== value);
    const wasIn = rem?.length < selection?.length;
    if (wasIn) return setSelection(rem);
    setSelection([...rem, item]);
  };

  const filterIsSelected = (value) => {
    const found = selection?.find((item) => getValue(item) === value);
    return found;
    // return selection?.includes(value);
  };
  const getValue = (item) => {
    if (!valueAccessor) return item?.toString();
    return valueAccessor(item);
  };
  const getLabel = (item) => {
    if (!labelAccessor) return item?.toString();
    return labelAccessor(item);
  };

  const hasSelections = selection?.length ? true : false;

  return (
    <div>
      <div>
        <NavDropdown
          title={
            <span style={{ fontWeight: "bold" }}>
              <i className="fa fa-filter" style={{ marginRight: 6 }}></i>{" "}
              {title || "Filter items by"}
            </span>
          }
        >
          {filterOptions?.map((item) => {
            const isChecked = filterIsSelected(getValue(item));
            return (
              <NavDropdown.Item
                className="f-dropdown-override"
                onClick={(e) => {
                  e.preventDefault();
                  addToSelection(item);
                }}
              >
                {getLabel(item)}
                {isChecked && (
                  <i
                    className="fa fa-check"
                    style={{ marginLeft: 6, color: "var(--app-medium-green)" }}
                  />
                )}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      </div>

      {hasSelections && (
        <div className="row-flex" style={{ padding: "20px 0px", flexWrap: "wrap" }}>
          {" "}
          {selection?.map((item) => {
            return (
              <span
                className="touchable-opacity our-filter-item"
                style={{
                  fontWeight: "bold",
                  color: "var(--app-medium-green)",
                  border: "dashed 1px var(--app-medium-green)",
                  borderRadius: 55,
                  padding: "4px 15px",
                  margin: 5,
                }}
              >
                {getLabel(item)}
                <i
                  className="fa fa-times"
                  onClick={() => addToSelection(item)}
                  style={{ marginLeft: 6 }}
                ></i>
              </span>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: 15, ...(contentRoot || {}) }}>
        {render && render(selection)}
      </div>
    </div>
  );
}

export default Filter;
