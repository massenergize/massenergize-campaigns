import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../../assets/styles/admin-styles.scss";
import MERichText from "../../../components/admin-components/RichText";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { useNavigate } from "react-router-dom";
import { apiCall } from "src/api/messenger";
import { useTechnologyContext } from "../../../hooks/use-technology-context";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import SectionForm from "./SectionsForm";
import { useSelector } from "react-redux";
import CallToActionForm from "./CallToActionForm";
import {updateTechnology} from "../../../requests/technology-requests";

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
  const [openedAccordion, setOpenedAccordion] = useState(null);
  const isEditing = tech_id;

  const navigate = useNavigate()
  const campaignAccount = useSelector((state) => state.campaignAccount);

  const handleFieldChange = (field, value) => {
    setInformation({ ...information, [field]: value });
  };
  const toggleAccordion = (section) => {
    setOpenedAccordion(openedAccordion === section ? null : section);
  }

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

  const handleUpdateCallToAction = async(data) => {
    data = {call_to_action: JSON.stringify(data), id: tech_id };
    setLoading(true);
    let res = await updateTechnology(data);
    if(res){
      setLoading(false);
      updateTechObject({call_to_action: res?.call_to_action});
      notifySuccess("Technology updated successfully!");
    }else{
      setLoading(false);
      notifyError("An error occurred! Technology update failed!");
    }
  }
  return (
      <div className="py-4">
        <div className="mb-3">
          <CustomAccordion
              title="Customize Hero Section"
              component={
                <CallToActionForm
                    data={techObject?.call_to_action}
                    onSaveFunction={handleUpdateCallToAction}
                />
              }
              isOpen={openedAccordion === "call_to_action"}
              onClick={() => toggleAccordion("call_to_action")}
          />
        </div>
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
                  label="Summary"
                  placeholder="Add a Summary for this focus......."
                  required={true}
                  type="textbox"
                  onChange={(val) => {
                    handleFieldChange("summary", val);
                  }}
                  maxLength="500"
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
                  updateExistingObject={(more_info_section) => updateTechObject(more_info_section)}
                  item_id={tech_id}
              />}
              isOpen={openedAccordion === "more_info_section"}
              onClick={() => toggleAccordion("more_info_section")}
          />
        </div>)
        }
      </div>
  );
}

export default Info;
