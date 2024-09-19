import React, { useEffect, useState } from "react";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import { Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { sortByProperty } from "src/utils/utils";
import { getStaticText } from "src/redux/actions/actions";

export const OTHER = "other";
export const OTHER_JSON = { name: OTHER, id: OTHER };

function CommunitySelector({ onChange, communities, data, readOnly, theme }) {
  const { modals } = getStaticText();

  const staticT = modals?.community_selection || {};
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
      <Form.Text className="small-font">{staticT?.selection_label?.text || "What community do you live in?"}</Form.Text>
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
                  color: theme?.color || "var(--app-main-color)",
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
              color: theme?.color || "var(--app-main-color)",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            {staticT?.other?.text || OTHER}
          </Form.Check.Label>
        </Form.Check>
      </Form>
      {isOther && !readOnly && (
        <>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                {staticT?.form?.community_name?.text || "Community Name"}
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder={staticT?.form?.community_name?.placeholder || "What community do you live in?"}
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
            <Form.Text>{staticT?.form?.zipcode?.label || "Enter your zip code (Editable)"}</Form.Text>
            <InputGroup className="mb-3 mt-2">
              <InputGroup.Text id="basic-addon1">{staticT?.form?.zipcode?.text || "Zip Code"}</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder={staticT?.form?.zipcode?.placeholder || "Enter zip code here..."}
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
