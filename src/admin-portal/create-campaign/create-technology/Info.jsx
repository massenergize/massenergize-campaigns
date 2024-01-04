import { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../../assets/styles/admin-styles.scss";
import { apiCall } from "../../../utils/api_call";
import MERichText from "../../../components/admin-components/RichText";
import { ProgressButton } from "src/components/progress-button/progress-button";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { useParams } from "react-router-dom";
import { fetchUrlParams } from "src/utils/utils";

const Info = ({
  technologyInfo,
  setTechnologyInfo,
  information,
  setInformation,
  setActiveTab,
  notifyError,
  notifySuccess,
  tech_id
}) => {
  const [loading, setLoading] = useState(false);

  const { campaign_id } = useParams();
//   const edit_id = fetchUrlParams("edit");
//   const isEditing = edit_id;

  console.log("THIS IS THE CAMPAIGN ID", campaign_id);

  //   const initialState = {
  //     name: "",
  //     image: "",
  //     description: "",
  //     summary: "",
  //   };

  //   const reducer = (state, action) => {
  //     switch (action.type) {
  //       case "SET_FIELD_VALUE":
  //         return { ...state, [action.field]: action.value };
  //       default:
  //         throw new Error(`Unsupported action type: ${action.type}`);
  //     }
  //   };

  //   const [formData, dispatch] = useReducer(reducer, initialState);

  const handleFieldChange = (field, value) => {
    // dispatch({ type: "SET_FIELD_VALUE", field, value });
    setInformation({ ...information, [field]: value });
  };

  console.log("MAKE WE SEE INFOR", information);

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
    apiCall("campaigns.technologies.create", {
      ...information,
      campaign_id,
    }).then((response) => {
      const { data, success, error } = response || {};
      setLoading(false);
      console.log("This is the actual response", response);
      if (!success) return notifyError(error);
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
                text="Add an image for the action"
                onChange={(val) => {
                  handleFieldChange("image", val);
                }}
                value={getValue("image")}
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
