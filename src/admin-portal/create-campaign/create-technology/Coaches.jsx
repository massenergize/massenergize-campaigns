import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader, { RESET } from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../../assets/styles/admin-styles.scss";
import { apiCall } from "src/api/messenger";
import { useCampaignContext } from "../../../hooks/use-campaign-context";
import BootButton from "react-bootstrap/Button";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import SectionForm from "./SectionsForm";
import noCoach from "./../../../assets/imgs/no-coach.png";
import { objHasContent } from "src/utils/utils";
import MeModal from "src/components/MEModal/MeModal";
const INITIAL_COACH_STATE = {
  technology_id: "",
  full_name: "",
  community: "",
  image: "",
  phone_number: "",
};

function Coaches({
  setTechnologyInfo,
  technologyInfo,
  setCurrentTab,
  updateTechObject,
  coaches,
  setCoaches,
  notifyError,
  notifySuccess,
  tech_id,
  techObject,
}) {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [selectedCoach, setSelectedCoach] = useState({});
  // const [showCoachModal, setShowCoachModal] = useState(false);
  const [formData, setFormData] = useState(INITIAL_COACH_STATE);
  // const [query, setQuery] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const coachFormRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(false);
  const [showCoachForm, setShowCoachForm] = useState(false);

  const interactWithCoachForm = () => {
    // setShowCoachForm(true);
    resetForm()
    if (coachFormRef?.current) coachFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getValue = (key, source) => {
    source = source || formData;
    return (source || {})[key] || "";
  };

  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const contentIsValid = (data) => {
    const { full_name, image, email, community } = data || {};
    if (!full_name || !community) {
      notifyError("(Full Name,Community) Please make sure none of them is empty...");
      return false;
    }
    return true;
  };

  const handleRemoveCoach = (coach) => {
    setLoading(true);
    const { id } = coach || {};
    if (!id) return;
    const url = "technologies.coaches.remove";
    apiCall(url, { id }).then((res) => {
      const { data, success, error } = res || {};
      setLoading(false);
      if (!success) {
        console.log("ERROR: ", error);
        return notifyError(error);
      }
      notifySuccess("Coach removed!");
      const items = coaches?.filter((it) => it?.id !== id);
      return updateTechObject({ coaches: items });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { ...formData, technology_id: tech_id };
    const url = isEditing ? "technologies.coaches.update" : "technologies.coaches.create";

    if (!contentIsValid(data)) return;
    setLoading(true);
    data = {
      ...data,
      ...(isEditing && !data.image ? { image: "reset" } : data.image ? { image: data.image } : {}),
    };
    apiCall(url, data).then((res) => {
      const { data, success, error } = res || {};
      setLoading(false);

      if (!success) {
        console.log("ERROR: ", error);
        return notifyError(error);
      }

      let items = [];
      if (isEditing) {
        let rem = coaches?.filter((it) => it?.id !== data?.id);
        items = [...rem, data];
        resetForm()
      } else {
        items = [...(coaches || []), res?.data];
        resetForm();
      }
      notifySuccess(isEditing ? "New changes saved!" : "Coach added!");
      return updateTechObject({ coaches: items });
    });
  };

  const resetForm = () => {
    setFormData({ image: RESET });
    setIsEditing(false);
    setShowCoachForm(false);
  };

  const renderSelectedCoaches = () => {
    return (
      <Row className="">
        <Col>
          <h5 className="theme-color">Selected Coaches</h5>
          <p className="my-4">All the coaches you add will appear here. Add as many as you need!</p>
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {coaches?.map((item, index) => {
              const { full_name, id, image } = item;
              return (
                <div
                  key={id?.toString()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "solid 0px var(--bs-border-color)",
                    borderBottomWidth: 1,
                    padding: "15px 0px",
                  }}
                >
                  <img
                    alt={full_name + " image"}
                    src={image?.url || noCoach}
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 20,
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                  />
                  <h6 style={{ margin: 0 }}>{full_name}</h6>{" "}
                  <div style={{ marginLeft: "auto" }}>
                    <BootButton
                      onClick={() => {
                        const editObj = { ...item, image: item?.image?.url || "" };
                        setFormData(editObj);
                        setIsEditing(true);
                        setShowCoachForm(true);
                      }}
                    >
                      Edit
                    </BootButton>
                    <BootButton
                      onClick={() => {
                        if (window.confirm("Are you sure you want to remove this coach?")) handleRemoveCoach(item);
                      }}
                      variant="danger"
                      style={{ margin: "0px 5px" }}
                    >
                      Remove
                    </BootButton>
                  </div>
                </div>
              );
            })}
          </div>

          <h6
            role="button"
            className="touchable-opacity"
            style={{
              color: "var(--admin-theme-color)",
              padding: "20px 0px",
              display: "inline-block",
            }}
            onClick={() => setShowCoachForm(true)}
          >
            <i className="fa fa-plus" style={{ marginRight: 6 }}></i> Add a new coach{" "}
          </h6>
        </Col>
      </Row>
    );
  };

  const { lists, handleCampaignDetailsChange: setCampaignDetails } = useCampaignContext();

  // const { allCommunities } = lists;

  const formHasContent = objHasContent(formData);
  return (
    <div className="">
      {/* section title and description */}
      <div className="py-5">
        <CustomAccordion
          title={"Customize the title and description of the coaches section"}
          component={
            <SectionForm
              section="coaches_section"
              data={techObject?.coaches_section}
              updateTechObject={updateTechObject}
              tech_id={tech_id}
            />
          }
          isOpen={openAccordion}
          onClick={() => setOpenAccordion(!openAccordion)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <BootButton style={{ marginLeft: "auto" }} variant="success" onClick={() => setShowCoachForm(true)}>
          <i className="fa fa-plus" style={{ marginRight: 7 }} />
          Add A New Coach
        </BootButton>
      </div>
      {coaches?.length > 0 && (
        <Container fluid>
          {/* <hr /> */}
          {renderSelectedCoaches()}
        </Container>
      )}

      <MeModal open={showCoachForm} onHide={()=>setShowCoachForm(false)} title={isEditing ? `Editing "${formData?.full_name}"` : "Add A New Coach"} >
      <form style={{ }}>
          <Row>
            <Col>
              <p className="my-4">Please include details of the new Coach of this technology</p>
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <Input
                label="Full Name"
                placeholder="Enter full name here..."
                required={true}
                type="textbox"
                value={getValue("full_name")}
                onChange={(val) => {
                  handleFieldChange("full_name", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <Input
                label="Email"
                placeholder="Enter email here..."
                required={true}
                type="email"
                value={getValue("email")}
                onChange={(val) => {
                  handleFieldChange("email", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <Input
                label="Phone Number"
                placeholder="Enter email here..."
                required={false}
                type="textbox"
                value={getValue("phone_number")}
                onChange={(val) => {
                  handleFieldChange("phone_number", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <Input
                label="Community"
                placeholder="Enter the community of the coach here..."
                required={true}
                type="textbox"
                value={getValue("community")}
                onChange={(val) => {
                  handleFieldChange("community", val);
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <FileUploader
                required={false}
                id="coach_image"
                text="Add a profile image for the Coach"
                onChange={(val) => {
                  handleFieldChange("image", val);
                }}
                // value={getValue("image")}
                defaultValue={getValue("image")}
              />
            </Col>
          </Row>

          <Row className="py-4 mt-4 justify-content-end">
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Button
                loading={loading}
                text={isEditing ? "Save Changes" : "Add Coach"}
                onSubmit={handleSubmit}
                rounded={false}
              />
              {formHasContent && (
                <small
                  onClick={() => resetForm()}
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: "red",
                    textDecoration: "underline",
                  }}
                  className="touchable-opacity"
                >
                  Close
                </small>
              )}
            </Col>
          </Row>
        </form>
      </MeModal>
      <div ref={coachFormRef} className="my-5">

      </div>
    </div>
  );
}

export default Coaches;
