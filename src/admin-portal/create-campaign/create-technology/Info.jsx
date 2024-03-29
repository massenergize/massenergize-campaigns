import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../../assets/styles/admin-styles.scss";
import MERichText from "../../../components/admin-components/RichText";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUrlParams } from "src/utils/utils";
import { apiCall } from "src/api/messenger";
import { useTechnologyContext } from "../../../hooks/use-technology-context";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import SectionForm from "./SectionsForm";
import { getImageValue } from "../../../helpers/utils";
import { useSelector } from "react-redux";

function Info({
  information,
  setInformation,
  notifySuccess,
  tech_id,
  campaign_id,
  updateTechObject,
  techObject,
}) {
  const [loading, setLoading] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);
  const isEditing = tech_id;

  const navigate = useNavigate()
  const campaignAccount = useSelector((state) => state.campaignAccount);

  const handleFieldChange = (field, value) => {
    setInformation({ ...information, [field]: value });
  };

  const { setNewTechnologyDetails } = useTechnologyContext();

  const getValue = (name, fallback = "") => (information || {})[name] || fallback;

  const { notify } = useBubblyBalloons();

  const notifyError = (message) => {
    notify({
      title: "Error",
      message: message,
      type: "error",
      timeout: 15000,
    });
  };

  const contentIsValid = (content) => {
    const { name, summary, image } = content || {};
    if (!campaign_id)
      return notifyError(
        "Technology needs to be created with a known campaign id...",
      );
    if (!name?.trim()) {
      notifyError("Please add technology name...");
      return false;
    }
    if (!summary?.trim()) {
      notifyError("Please add a summary to your technology");
      return false;
    }
    // if (!image) {
    //   notifyError("Please add an image to your technology");
    //   return false;
    // }
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contentIsValid(information)) return;
    setLoading(true);

    const url = isEditing ? "technologies.update" : "campaigns.technologies.create";
    // TODO: MOVE THIS INTO THE REQUEST TECHNOLOGY FILE LATER
    apiCall(url, {
      ...information,
      id: tech_id,
      campaign_id,
      ...(!isEditing ? { campaign_account_id: campaignAccount?.id } : {}),
      ...(isEditing && typeof information.image === 'string' ? {} : { image: !isEditing ? information.image : (information.image ? information.image : 'reset') }),
    }).then((response) => {
      const { data, success, error } = response || {};
      setLoading(false);
      if (!success) return notifyError(error);
      
      if (!isEditing) {
        navigate(`/admin/campaign/${campaign_id}/edit/technology/${data?.technology?.id}/campaign_technology/${data?.id}`)
      }
      updateTechObject(data);
      setNewTechnologyDetails(data);
      notifySuccess("Saved successfully!");
    });
  };
  return (
    <div className="py-4">
      <form>
        <Row className="">
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
        <Row className="mt-3">
          <Col>
            <Input
              label="Summary (75 Chars)"
              placeholder="Add a Summary for this focus......."
              required={true}
              type="textbox"
              onChange={(val) => {
                handleFieldChange("summary", val);
              }}
              maxLength="75"
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
      {isEditing && (<div className="py-5">
          <CustomAccordion
          title={"Customize The Title and Description of Info Section"}
           component={<SectionForm
          section="more_info_section"
          data={techObject?.more_info_section || {}}
          updateTechObject={(more_info_section) => updateTechObject(more_info_section)}
          tech_id={tech_id}
        />}
        isOpen={openAccordion}
        onClick={() => setOpenAccordion(!openAccordion)}
      />
    </div>)
}
    </div>
  );
}

export default Info;
