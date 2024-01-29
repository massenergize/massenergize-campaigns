import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { apiCall } from "src/api/messenger";
import Button from "src/components/admin-components/Button";
import Input from "src/components/admin-components/Input";
import { useCampaignContext } from "src/hooks/use-campaign-context";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";

function LandingPageCustomization() {
  const {
    campaignDetails,
    // originalCampaignDetails,
    // lists,
    setNewCampaignDetails,
  } = useCampaignContext();
  const { blow, pop } = useBubblyBalloons();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFieldChange = (section, name, value) => {
    const sectionData = (formData || {})[section] || {};
    setFormData({ ...formData, [section]: { ...sectionData, [name]: value } });
  };

  const getValue = (section, fieldName) => {
    const data = formData || {};
    return (data[section] || {})[fieldName] || "";
  };

  const makeFormBody = (data) => {
    let newObj = {};
    newObj = Object.entries(data).map(([key, value]) => {
      return [key, JSON.stringify(value)];
    });
    return { ...(Object.fromEntries(newObj) || {}), id: campaignDetails?.id };
  };

  const submitChanges = () => {
    setLoading(true);
    const formBody = makeFormBody(formData);
    apiCall("/campaigns.update", formBody)
      .then((response) => {
        setLoading(false);
        const { success, data, error } = response || {};

        if (!success) {
          pop({
            title: "Error",
            message: error,
            type: "error",
            duration: 5000,
          });
          return console.log("ERROR_CUSTOMIZING_BE:", error);
        }
        const together = { ...(campaignDetails || {}), ...data };
        blow({
          title: "Saved successfully!",
          message: "Page customizations saved successfully! ",
          type: "success",
          duration: 5000,
        });
        setNewCampaignDetails(together);
      })
      .catch((e) => {
        setLoading(false);
        pop({
          title: "Error",
          message: e,
          type: "error",
          duration: 5000,
        });
        console.log("ERROR_CUSTOMIZING_PAGE", e);
      });
  };

  const inflate = () => {
    const keys = ["communities_section", "technologies_section", "newsletter_section", "coaches_section"];
    const obj = {};
    keys.forEach((key) => (obj[key] = campaignDetails[key]));
    setFormData(obj);
  };

  useEffect(() => {
    inflate(campaignDetails);
  }, [campaignDetails]);

  return (
    <div className="p-3">
      <h6>Modify the copyright on "Getting Started" Section</h6>
      <Row className="mt-0">
        <Col>
          <Input
            id="title"
            name="gs_title"
            label="Add a title"
            placeholder=""
            required={true}
            // error={errors?.title}
            type="textbox"
            value={getValue("technologies_section", "title")}
            onChange={(val) => {
              handleFieldChange("technologies_section", "title", val);
            }}
          />
        </Col>
        <Col>
          <Input
            id="description"
            name="getting_started_desc"
            label="Add a description"
            placeholder=""
            required={true}
            // error={errors?.title}
            type="textbox"
            value={getValue("technologies_section", "description")}
            onChange={(val) => {
              handleFieldChange("technologies_section", "description", val);
            }}
          />
        </Col>
      </Row>

      <div className="mt-3">
        <h6>Modify the copyright on the coaches section</h6>
        <div className="mt-0">
          <Col>
            <Input
              id="coaches"
              name="cs_title"
              label="Add a title for coaches section"
              placeholder=""
              required={true}
              // error={errors?.title}
              type="textbox"
              value={getValue("coaches_section", "title")}
              onChange={(val) => {
                handleFieldChange("coaches_section", "title", val);
              }}
            />
          </Col>
          <Col className="mt-3">
            <Input
              textarea
              id="description"
              name="cs_description"
              label="Add a description for coaches section"
              placeholder=""
              required={true}
              // error={errors?.title}
              type="richText"
              value={getValue("coaches_section", "description")}
              onChange={(val) => {
                handleFieldChange("coaches_section", "description", val);
              }}
            />
          </Col>
        </div>
      </div>
      <div className="mt-3">
        <h6>Add a custom title to your communities section</h6>
        <Row>
          <Col>
            <Input
              id="title"
              name="participating_communities"
              label="Participating Communities Section Title"
              placeholder="Add a custom title to that section..."
              required={true}
              // error={errors?.title}
              type="textbox"
              value={getValue("communities_section", "title")}
              onChange={(val) => {
                handleFieldChange("communities_section", "title", val);
              }}
            />
          </Col>
        </Row>
      </div>

      <div className="mt-3 mb-5">
        <h6>Modify the copyright on your footer</h6>
        <Row>
          <Col>
            <Input
              id="footer_title"
              name="footer_title"
              label="News Letter Area Title"
              placeholder="Add custom text. Default is 'Newsletter'"
              required={true}
              // error={errors?.title}
              type="textbox"
              value={getValue("newsletter_section", "title")}
              onChange={(val) => {
                handleFieldChange("newsletter_section", "title", val);
              }}
            />
          </Col>
          <Col>
            <Input
              id="newsletter_description"
              name="news_letter"
              label="News Letter Description Text"
              placeholder="Add your custom text"
              required={true}
              // error={errors?.title}
              type="textbox"
              value={getValue("newsletter_section", "description")}
              onChange={(val) => {
                handleFieldChange("newsletter_section", "description", val);
              }}
            />
          </Col>
        </Row>
      </div>

      <Button loading={loading} onClick={() => submitChanges()}>
        Save Changes
      </Button>
    </div>
  );
}

export default LandingPageCustomization;
