import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomAccordion from "../../components/admin-components/CustomAccordion";
import IncentivesBar from "../../components/admin-components/IncentivesBar";
import Input from "../../components/admin-components/Input";
import Button from "../../components/admin-components/Button";
import SectionsForm from "./create-technology/SectionsForm";
import { updateCampaignCommunityInfo } from "../../requests/campaign-requests";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";

export default function CampaignCommunities({ campaignDetails }) {
  const { communities } = campaignDetails;
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    ...(communities?.reduce((acc, item) => {
      acc[item?.id] = { help_link: item?.help_link };
      return acc;
    }, {}) || {}),
  });


  const [loading, setLoading] = useState(false);

  const {blow, pop} = useBubblyBalloons()

  const handleFieldChange = (tabId, field, value) => {
    setFormData({ ...formData, [tabId]: { ...formData[tabId], [field]: value } });
  };

  const getValue = (tabId, name, fallback = "") =>
    (formData[tabId] || {})[name] || fallback;

  const openAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const handleSave = async(tabId) => {
    setLoading(true);
    try {
      const res = await updateCampaignCommunityInfo({campaign_community_id: tabId, ...formData[tabId]})
      setLoading(false)

        blow({
          title: "Success",
          message: "Community information updated successfully",
          type: "success",
        });


    }catch (e) {
      setLoading(false)
      pop({
        title: "Error",
        message: "An error occurred while updating community information",
        type: "error",
      });

    }
  };

  return (
    <Container fluid>
      {communities?.map((item) => (
        <Row className={"mb-4"} key={item?.id}>
          <Col>
            <CustomAccordion
              title={`Add Help Link for ${item?.community?.name}`}
              component={ <HelpLinkForm
                getValue={getValue}
                tabId={activeAccordion}
                handleFieldChange={handleFieldChange}
                handleSave={handleSave}
                loading={loading}
              />}
              isOpen={item?.id === activeAccordion}
              onClick={() => openAccordion(item?.id)}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

const HelpLinkForm = ({
  handleFieldChange,
  tabId,
  getValue,
  handleSave,
  loading,
}) => {
  return (
    <div>
      <Row className="mt-3">
        <Col>
          <Input
            label="Help Link"
            placeholder="Add a link to help for this community......."
            required={false}
            type="textbox"
            onChange={(val) => {
              handleFieldChange(tabId, "help_link", val);
            }}
            value={getValue(tabId, "help_link")}
          />
        </Col>
      </Row>
      <Row className="py-4 justify-content-end">
        <Col className="px-4">
          <Button
            text="Save Changes"
            onSubmit={() => handleSave(tabId)}
            rounded={false}
            loading={loading}
            disabled={loading}
          />
        </Col>
      </Row>
    </div>
  );
};
