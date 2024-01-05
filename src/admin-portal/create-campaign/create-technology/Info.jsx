import { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../../assets/styles/admin-styles.scss";
import MERichText from "../../../components/admin-components/RichText";
import { ProgressButton } from "src/components/progress-button/progress-button";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { useParams } from "react-router-dom";
import { fetchUrlParams } from "src/utils/utils";
import { apiCall } from "src/api/messenger";

const Info = ({
  information,
  setInformation,
  notifyError,
  notifySuccess,
  tech_id,
  campaign_id,
  updateTechObject,
}) => {
  const [loading, setLoading] = useState(false);
  const isEditing = tech_id;

  const handleFieldChange = (field, value) => {
    setInformation({ ...information, [field]: value });
  };

  const getValue = (name, fallback = "") =>
    (information || {})[name] || fallback;

  const contentIsValid = (content) => {
    const { name, summary, image } = content || {};
    if (!campaign_id)
      return notifyError(
        "Technology needs to be created with a known campaign_id..."
      );
    if (!name?.trim()) {
      notifyError("Please add technology name...");
      return false;
    }
    if (!summary?.trim()) {
      notifyError("Please add a summary to your technology...");
      return false;
    }
    if (!image) {
      notifyError("Please add an image to your technology...");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contentIsValid(information)) return;
    setLoading(true);

    const url = isEditing
      ? "technologies.update"
      : "campaigns.technologies.create";
    // TODO: MOVE THIS INTO THE REQUEST TECHNOLOGY FILE LATER
    apiCall(url, {
      ...information,
      id: tech_id,
      campaign_id,
    }).then((response) => {
      const { data, success, error } = response || {};
      setLoading(false);
      console.log("This is the actual response", response);
      if (!success) return notifyError(error);
      updateTechObject(data);
      notifySuccess("Saved successfully!");
    });
  };

  return (
    <div>
      <Container>
        <form>
          <Row className="py-4">
            <Col>
              <Input
                label="Technology Name"
                placeholder="Enter your technology here...."
                required={true}
                type="textbox"
                onChange={(val) => {
                  handleFieldChange("name", val);
                }}
                value={getValue("name")}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                label="Summary (100 Chars)"
                placeholder="Add a Summary for this focus......."
                required={true}
                type="textbox"
                onChange={(val) => {
                  handleFieldChange("summary", val);
                }}
                maxLength="100"
                value={getValue("summary")}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <MERichText
                label="Description"
                placeholder="Add more description for this technology......."
                required={true}
                onEditorChange={(val, _) => {
                  handleFieldChange("description", val);
                }}
                // value={formData?.description}
                value={getValue("description")}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <FileUploader
                required={false}
                id="tech_image"
                text="Add an image"
                onChange={(val) => {
                  handleFieldChange("image", val);
                }}
                value={getValue("image")}
                defaultValue={getValue("image")}
              />
            </Col>
          </Row>
          <Row className="py-4 justify-content-end">
            <Col>
              <Button
                text="Save & Continue"
                onClick={handleSubmit}
                rounded={false}
                loading={loading}
              />
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Info;
