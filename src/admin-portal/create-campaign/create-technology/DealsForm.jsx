import { Col, Container, Row } from "react-bootstrap";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";
import React, { useState } from "react";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { addTechnologyDeal, updateTechnologyDeal } from "../../../requests/technology-requests";
import { isEmpty } from "../../../helpers/utils/string";
import { objectIsEmpty } from "../../../helpers/utils";

export default function DealsForm({ deal, onSubmit, technology_id }) {
  const { pop, blow } = useBubblyBalloons();
  const [formData, setFormData] = useState({ title: deal?.title, link: deal?.link, description: deal?.description });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const isNew = !deal?.id;

  const isDataValid = () => {
    setErrors({});
    let newErrors = {};

    for (let field of [formData.title, formData.description]) {
      if (isEmpty(field)) {
        newErrors[field] = "This field is required";
      }
    }

    if (objectIsEmpty(newErrors)) {
      return true;
    }

    setErrors(newErrors);
    return false;
  };

  const handleSave = async () => {
    try {
      if (!isDataValid()) {
        return;
      }
      setLoading(true);

      const payload = {
        ...(isNew ? { technology_id } : { id: deal.id }),
        title: formData?.title,
        description: formData?.description,
        link: formData?.link,
      };

      const data = isNew ? await addTechnologyDeal(payload) : await updateTechnologyDeal(payload);

      onSubmit(data, isNew);
      blow({
        title: "Success",
        message: `Deal ${isNew ? "added" : "updated"} successfully`,
        type: "success",
      });

      setLoading(false);
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: `Something went wrong while ${isNew ? "adding" : "updating"} deal`,
        type: "error",
      });
    }
  };

  return (
    <Container>
      <Row className="py-4">
        <Col>
          <Input
            label="Title"
            placeholder="Enter title here..."
            required={true}
            type="textbox"
            onChange={(val) => updateFormData("title", val)}
            value={formData?.title || ""}
          />
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <Input
            label="Link"
            placeholder="Enter link here Eg: https://communities.massenergize.org/..."
            required={true}
            type="textbox"
            onChange={(val) => updateFormData("link", val)}
            value={formData?.link || ""}
          />
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <Input
            label="Description"
            placeholder="Enter description here.."
            required={false}
            type="richText"
            onChange={(val) => {
              updateFormData("description", val);
            }}
            value={formData?.description || ""}
          />
        </Col>
      </Row>
      <Row className="py-4 justify-content-end">
        <Col className="px-4">
          <Button text="Save Deal" onSubmit={() => handleSave()} rounded={false} loading={loading} disabled={loading} />
        </Col>
      </Row>
    </Container>
  );
}
