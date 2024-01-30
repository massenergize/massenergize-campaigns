import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Input from "src/components/admin-components/Input";

function CampaignCommunitiesExtraLinks({ linkObjs, setLinkObjs }) {
  const [formData, setformData] = useState({});

  const handleFieldChange = (field, value) => {
    setformData({ ...formData, [field]: value });
  };

  const getValue = (field) => (formData || {})[field] || "";
  const addLink = () => {
    const asArr = Object.keys(formData);
    if (!asArr?.length) return <></>;
    const _new = [formData, ...linkObjs];
    setLinkObjs(_new);
    // transfer(_new);
    setformData({});
  };

  const remove = (item) => {
    // Doing it this way because there is nothing going to be unique about these objects.
    // So doing it this way ensures that even when there are 3 items with the same label & link, only
    // the item in focus is removed. (filter would have removed all of them)
    const index = linkObjs?.findIndex((it) => it.label?.trim() === item?.label?.trim());
    const copied = [...linkObjs];
    copied.splice(index, 1);
    const _new = [...copied];
    setLinkObjs(_new);
  };
  const renderLinks = () => {
    if (!linkObjs?.length) return <></>;

    return linkObjs?.map((obj) => {
      return (
        <div
          style={{ border: "dotted 2px var(--admin-theme-color)", padding: "4px 10px", marginBottom: 8 }}
          className=" row-flex"
        >
          <div style={{ padding: 10 }}>
            <p className="m-0">{obj?.label}</p>
            <small className="text-muted">{obj?.link}</small>
          </div>
          <div className="touchable-opacity" style={{ marginLeft: "auto", marginRight: 10 }}>
            <h6
              onClick={() => remove(obj)}
              role="button"
              className="touchable-opacity"
              style={{ textDecoration: "underline", fontWeight: "bold", color: "var(--bs-danger)" }}
            >
              Remove
            </h6>
          </div>
        </div>
      );
    });
  };
  return (
    <div style={{ margin: "10px 0px", border: "dashed 2px #dedede", padding: 15 }}>
      <h6 style={{ fontWeight: "bold", color: "var(--admin-theme-color)" }}>
        {" "}
        Add extra links to participating communities{" "}
      </h6>

      <Row>
        <Col>
          <Input
            label="Link Label"
            placeholder="Add a link to help for this Eg: https://communities.massenergize.org/ "
            required={false}
            type="textbox"
            onChange={(val) => {
              handleFieldChange("label", val);
            }}
            value={getValue("label")}
          />
        </Col>
        <Col>
          <Input
            label="Add Link"
            placeholder={`What text should be on the link? Eg: Climate Connections?`}
            required={false}
            type="textbox"
            onChange={(val) => {
              handleFieldChange("link", val);
            }}
            value={getValue("link")}
          />
        </Col>
      </Row>

      <div style={{ padding: "10px 0px", marginBottom: 10 }} className="row-flex">
        <h6 className="text-muted">The links you add will show below</h6>
        <Button onClick={() => addLink()} variant="success" style={{ marginLeft: "auto" }}>
          Add
        </Button>
      </div>

      <div>{renderLinks()}</div>
    </div>
  );
}

export default CampaignCommunitiesExtraLinks;
