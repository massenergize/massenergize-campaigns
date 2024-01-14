import { Col, Container, Row } from "react-bootstrap";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";
import React, {useState} from "react";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { updateTechnology } from "../../../requests/technology-requests";

export default function SectionsForm ({section, data,updateTechObject, tech_id}){
  console.log("=== data ===", data)

  const {pop, blow} = useBubblyBalloons()
  const [formData, setFormData] = useState(data);
  const [loading, setLoading] = useState(false)

  const updateFormData = (field, value) => {
    setFormData({...formData, [field]: value ,
    });
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      const toUpdate = {id:tech_id, [section]: JSON.stringify(formData[section])}
      let res = await updateTechnology(toUpdate)
      if(res){
        updateTechObject({[section]: formData[section]})
        setLoading(false)
        blow({
          title: "Success",
          message: "Section updated successfully",
          type: "success",
          timeout: 3000,
        })
      }
    } catch (e) {
      setLoading(false)
      pop({
        title:'Section Update Failed',
        message:'An error occurred. Try Again',
        type:"failure",
        timeout:3000
      })
    }


  }

  return (
    <div>
    <Container>
      <Row className="py-4">
        <Col>
          <Input
            label="Title"
            placeholder="Enter title here..."
            required={true}
            type="textbox"
            onChange={(val) => updateTechObject("title", val)}
            value={formData?.title||''}
          />
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <Input
            label="Description"
            placeholder="Add a more description for this incentive..."
            required={false}
            type="richText"
            onChange={(val) => {
              updateFormData("description", val);
            }}
            value={formData?.description || ''}
          />
        </Col>
      </Row>
      <Row className="py-4 justify-content-end">
        <Col className="px-4">
          <Button
            text="Save Section"
            onSubmit={() => handleSave()}
            rounded={false}
            loading={loading}
            disabled={loading}
          />
        </Col>
      </Row>
    </Container>
  </div>
  )
}
