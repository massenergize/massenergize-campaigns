import React, { useEffect, useState } from "react";
import { COMMUNITY_LIST } from "../../data/user-portal-dummy-data";
import { Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";

const OTHER = "other";
function CommunitySelector({ selected, onChange, communities }) {
  const [option, setOption] = useState("");

  const setSelectedValue = (value) => {
    onChange && onChange(value);
    setOption(value);
  };

  useEffect(() => {
    setOption(selected);
  }, [selected]);

  const isOther = option === OTHER;

  return (
    <div>
      <Form.Text>Please tell us where you are from (Editable)</Form.Text>
      {/* <p>Please tell us where you are from (Editable)</p> */}
      <Form
        className="m-2 pb-2"
        onChange={(e) => {
          const value = e.target.value;
          setOption(value);
        }}
      >
        {communities.map(({ community }) => {
          const { id, name } = community || {};
          return (
            <Form.Check inline type="radio" id={`check-api-${id}`}>
              <Form.Check.Input
                checked={option === id}
                type={"radio"}
                value={id}
                isValid
              />
              <Form.Check.Label
                style={{
                  textTransform: "Capitalize",
                  fontWeight: "bold",
                  color: "var(--app-deep-green)",
                  fontSize: 15,
                }}
              >
                {name}
              </Form.Check.Label>
            </Form.Check>
          );
        })}

        <Form.Check inline type="radio" id={`check-api-other`}>
          <Form.Check.Input
            checked={option === "other"}
            type={"radio"}
            value={"other"}
            isValid
          />
          <Form.Check.Label
            style={{
              textTransform: "Capitalize",
              fontWeight: "bold",
              color: "var(--app-deep-green)",
              fontSize: 15,
            }}
          >
            Other
          </Form.Check.Label>
        </Form.Check>
      </Form>
      {isOther && (
        <>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Community Name
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Tell us where you are from..."
                aria-label="text"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <div>
            <Form.Text>Enter your zip code (Editable)</Form.Text>
            <InputGroup className="mb-3 mt-2">
              <InputGroup.Text id="basic-addon1">Zip Code</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Enter zip code here..."
                aria-label="zipcode"
                aria-describedby="basic-addon1"
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
