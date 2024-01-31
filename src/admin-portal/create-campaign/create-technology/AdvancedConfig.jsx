import React, { useState } from "react";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import { Container, Row, Col } from "react-bootstrap";
import Input from "src/components/admin-components/Input";
import Button from "src/components/admin-components/Button";
import { updateTechnology } from "../../../requests/technology-requests";
import { createLogger } from "redux-logger/src";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import loading from "../../../components/pieces/Loading";

export default function AdvancedConfig ({ campaign_id, tech_id, techObject, updateTechObject, }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [loading, setLoading] = useState(false)
  const {pop, blow} = useBubblyBalloons()

  const [formData, setFormData] = useState({
    vendors_section: techObject?.vendors_section || {},
    coaches_section: techObject?.coaches_section || {},
    deal_section: techObject?.deal_section || {},
  });

  const updateFormData = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: { ...formData[section], [field]: value },
    });
  };

  const getValue = (section, field) => {
    return formData[section][field];
  };

  const toggleAccordion = (title) => {
    if (title === openAccordion) {
      setOpenAccordion(null);
      return;
    }
    setOpenAccordion(title);
  };

  const handleSave = async (section) => {
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

  const data = [
    {
      id: 1,
      title: "Coaches Section",
      component: (
        <GeneralForm
          formData={formData}
          updateFormData={updateFormData}
          section={"coaches_section"}
          getValue={getValue}
          onSave={handleSave}
          loading={loading}
        />
      ),
    },
    {
      id: 2,
      title: "Vendors Section",
      component: (
        <GeneralForm
          formData={formData}
          updateFormData={updateFormData}
          section={"vendors_section"}
          getValue={getValue}
          onSave={handleSave}
          loading={loading}
        />
      ),
    },
    {
      id: 3,
      title: "Get A Deal Section",
      component: (
        <GeneralForm
          formData={formData}
          updateFormData={updateFormData}
          section={"deal_section"}
          getValue={getValue}
          onSave={handleSave}
          loading={loading}
        />
      ),
    },
  ];

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="mt-3" key={index?.toString()} >
            <CustomAccordion
              title={item.title}
              component={item.component}
              isOpen={item?.title === openAccordion}
              onClick={() => toggleAccordion(item?.title)}
            />
          </div>
        );
      })}
    </div>
  );
}

const GeneralForm = ({
  formData,
  updateFormData,
  onSave,
  section,
  getValue,
  loading,
}) => {
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
              onChange={(val) => updateFormData(section, "title", val)}
              value={getValue(section, "title")}
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
                updateFormData(section, "description", val);
              }}
              value={getValue(section, "description")}
            />
          </Col>
        </Row>
        <Row className="py-4 justify-content-end">
          <Col className="px-4">
            <Button
              text="Save Section"
              onSubmit={() => onSave(section)}
              rounded={false}
              loading={loading}
              disabled={loading}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
