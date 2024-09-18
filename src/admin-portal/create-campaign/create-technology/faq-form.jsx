import { Col, Modal, Row } from "react-bootstrap";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";
import React, { useState } from "react";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { addTechnologyFaq, updateTechnologyFaq } from "../../../requests/technology-requests";
import { isEmpty } from "../../../helpers/utils/string";
import { objectIsEmpty } from "../../../helpers/utils";

export default function FaqForm({ faq, onSubmit, technology_id, modal = false }) {
  const { pop, blow } = useBubblyBalloons();
  const [formData, setFormData] = useState({ question: faq?.question, link: faq?.link, answer: faq?.answer });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const isNew = !faq?.id;

  const isDataValid = () => {
    setErrors({});
    let newErrors = {};

    for (let field of [formData.question, formData.answer]) {
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
        ...(isNew ? { technology_id } : { id: faq.id }),
        question: formData?.question,
        answer: formData?.answer,
      };

      // const data = isNew ? await addTechnologyFaq(payload) : await updateTechnologyFaq(payload); // FIXME: uncomment this line
      onSubmit(payload, isNew);
      blow({
        title: "Success",
        message: `Faq ${isNew ? "added" : "updated"} successfully`,
        type: "success",
      });

      setLoading(false);
    } catch (e) {
      setLoading(false);
      pop({
        question: "Error",
        message: `Something went wrong while ${isNew ? "adding" : "updating"} faq`,
        type: "error",
      });
    }
  };

  const FormInputs = (
    <>
      <Row className="">
        <Col>
          <Input
            label="Frequelntly Asked Question"
            placeholder="Enter question here..."
            required={true}
            type="textbox"
            onChange={(val) => updateFormData("question", val)}
            value={formData?.question || ""}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Input
            label="Answer"
            placeholder="Enter answer here.."
            required={false}
            type="richText"
            onChange={(val) => {
              updateFormData("answer", val);
            }}
            value={formData?.answer || ""}
          />
        </Col>
      </Row>
    </>
  )

  const FormFooter = (
    <Row className="pt-3 justify-content-end">
      <Col className="px-4">
        <Button
          text="Save Changes"
          onSubmit={() => handleSave()}
          rounded={false}
          loading={loading}
          disabled={loading}/>
      </Col>
    </Row>

  )

  return (
    <>
      {
        modal ? (
          <>
            <Modal.Body>
              {FormInputs}
            </Modal.Body>
            <Modal.Footer>
              {FormFooter}
            </Modal.Footer>
          </>
        ) : (
          <div>
            {FormInputs}
            {FormFooter}
          </div>
        )
      }
    </>
  );
}
