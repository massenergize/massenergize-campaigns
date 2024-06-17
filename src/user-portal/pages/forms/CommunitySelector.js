import React, { useEffect, useState } from "react";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import { Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { sortByProperty } from "src/utils/utils";

export const OTHER = "other";
export const OTHER_JSON = { name: OTHER, id: OTHER };

function CommunitySelector({ onChange, communities, data, readOnly }) {
  const [state, setState] = useState({});
  data = data || {};

  const { zipcode, comId, valueForOther } = state || {};

  const updateState = (obj) => {
    const newValue = { ...state, ...obj };
    setState(newValue);
    onChange && onChange(newValue);
  };

  useEffect(() => {
    setState(data);
  }, [data]);

  const isOther = comId === OTHER;
  communities = sortByProperty(communities, (com) => (com.alias || com.community.name || "").toLowerCase());

  return (
    <div>
      <Form.Text className="small-font">What community do you live in?</Form.Text>
      {/* <p>Please tell us where you are from (Editable)</p> */}
      <Form
        className="m-2 pb-2"
        onChange={(e) => {
          const value = e.target.value;
          // setSelectedValue(value);
          updateState({ comId: value });
        }}
      >
        {communities.map(({ community, alias }) => {
          const { id, name } = community || {};
          return (
            <Form.Check inline type="radio" id={`check-api-${id}`} className="touchable-opacity">
              <Form.Check.Input checked={comId === id?.toString()} type={"radio"} value={id} />
              <Form.Check.Label
                className="body-font"
                style={{
                  textTransform: "Capitalize",
                  // fontWeight: "bold",
                  color: "var(--app-main-color)",
                  // fontSize: 15,
                  cursor: "pointer",
                }}
              >
                {alias || name}
              </Form.Check.Label>
            </Form.Check>
          );
        })}

        <Form.Check inline type="radio" id={`check-api-other`}>
          <Form.Check.Input checked={comId === OTHER} type={"radio"} value={OTHER} />
          <Form.Check.Label
            className="body-font"
            style={{
              textTransform: "Capitalize",
              // fontWeight: "bold",
              color: "var(--app-main-color)",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            {OTHER}
          </Form.Check.Label>
        </Form.Check>
      </Form>
      {isOther && !readOnly && (
        <>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Community Name</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="What community do you live in?"
                aria-label="text"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  const value = e.target.value;
                  updateState({ valueForOther: value });
                }}
                value={valueForOther}
              />
            </InputGroup>
          </div>

          <div>
            <Form.Text>Enter your zip code (Editable)</Form.Text>
            <InputGroup className="mb-3 mt-2">
              <InputGroup.Text id="basic-addon1">Zip Code</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter zip code here..."
                aria-label="zipcode"
                aria-describedby="basic-addon1"
                maxLength={5}
                onChange={(e) => {
                  const value = e.target.value;
                  updateState({ zipcode: value });
                }}
                value={zipcode}
              />
            </InputGroup>
          </div>
        </>
      )}
    </div>
  );
}

const mapState = (state) => {
  return { communities: state.campaign?.communities || [] };
};

export default connect(mapState)(CommunitySelector);
