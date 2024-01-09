import React, { useState } from "react";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import { Container, Row, Col } from "react-bootstrap";
import Input from "src/components/admin-components/Input";
import Button from "src/components/admin-components/Button";

export default function AdvancedConfig({
  campaign_id,
  tech_id,
  techObject,
  updateTechObject,
}) {
  const [openAccordion, setOpenAccordion] = useState(null);

  const [formData, setFormData] = useState({
    vendors: {},
    coaches: {},
    more_info: {},
    deals: {},
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

  const handleSave = async () => {
    console.log("==== formData", formData);
  }

  const data = [
    {
      id: 1,
      title: "Coaches Section",
      component: (
        <GeneralForm
          formData={formData}
          updateFormData={updateFormData}
          section={"coaches"}
          getValue={getValue}
          onSave={handleSave}
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
          section={"vendors"}
          getValue={getValue}
          onSave={handleSave}
        />
      ),
    },
    {
      id: 3,
      title: "More Information Section",
      component: (
        <GeneralForm
          formData={formData}
          updateFormData={updateFormData}
          section={"more_info"}
          getValue={getValue}
          onSave={handleSave}
        />
      ),
    },
    {
      id: 4,
      title: "Get A Deal Section",
      component: (
        <GeneralForm
          formData={formData}
          updateFormData={updateFormData}
          section={"deals"}
          getValue={getValue}
          onSave={handleSave}
        />
      ),
    },
  ];

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="mt-3">
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
              type="textarea"
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
              onSubmit={() => onSave(formData)}
              rounded={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
