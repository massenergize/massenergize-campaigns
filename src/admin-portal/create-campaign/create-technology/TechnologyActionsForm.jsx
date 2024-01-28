import React, {useState} from 'react'
import Button from "../../../components/admin-components/Button";
import { Col, Row, Button as BTN, Container } from "react-bootstrap";
import { useBubblyBalloons } from 'src/lib/bubbly-balloon/use-bubbly-balloons';
import { isEmpty } from "../../../helpers/utils/string";
import { objectIsEmpty } from "../../../helpers/utils";
import Input from "../../../components/admin-components/Input";
import { createTechnologyAction, updateTechnologyAction } from 'src/requests/technology-requests';

export default function TechnologyActionsForm({action, onSubmit, technology_id}) {
    const {pop, blow} = useBubblyBalloons()
    const [formData, setFormData] = useState({title: action?.title, link: action?.link, description: action?.description, link_text: action?.link_text});
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});
  
  
  
    const updateFormData = (field, value) => {
      setFormData({...formData, [field]: value ,
      });
    }
    const isNew = !action?.id
  
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
    }
  
    const handleSave = async () => {
      try {
        if (!isDataValid()) {
          return;
        }
        setLoading(true)
  
        const payload = {
          ...(isNew ? {technology_id} : { id: action.id }),
          title: formData?.title,
          description: formData?.description,
          link: formData?.link,
          link_text: formData?.link_text

        };

  
        const data = isNew ? await createTechnologyAction(payload) : await updateTechnologyAction(payload);
  
        onSubmit(data, isNew)
        blow({
          title: "Success",
          message: `Action ${isNew ? 'added' : 'updated'} successfully`,
          type: "success"
        });
  
        setLoading(false)
      } catch (e) {
        setLoading(false)
        pop({
          title: "Error",
          message: `Something went wrong while ${isNew ? 'adding' : 'updating'} action`,
          type: "error"
        })
      }
    }
  
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
              value={formData?.title||''}
            />
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <Input
              label="Description"
              placeholder="Enter description here..."
              required={true}
              type="textarea"
              onChange={(val) => updateFormData("description", val)}
              value={formData?.description||''}
            />
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <Input
              label="Link"
              placeholder="Enter link here..."
              required={true}
              type="textbox"
              onChange={(val) => updateFormData("link", val)}
              value={formData?.link||''}
            />
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <Input
              label="Button Text"
              placeholder="Enter button text..."
              required={true}
              type="textbox"
              onChange={(val) => updateFormData("link_text", val)}
              value={formData?.link_text||''}
            />
          </Col>
        </Row>

        <Row className="py-4 justify-content-end">
          <Col className="px-4">
            <Button
              text="Save Action"
              onSubmit={() => handleSave()}
              rounded={false}
              loading={loading}
              disabled={loading}
            />
          </Col>
        </Row>
      </Container>
    )
}
