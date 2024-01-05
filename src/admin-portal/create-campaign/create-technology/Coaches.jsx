import React, { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../../assets/styles/admin-styles.scss";
import Dropdown from "../../../components/admin-components/Dropdown";
import { useNavigate } from "react-router-dom";
import Chip from "../../../components/admin-components/Chip";
// import { apiCall } from "../../../utils/api_call";
import CustomModal from "../../../components/modal/CustomModal";
import MEModal from "../../../components/admin-components/MEModal";
import { apiCall } from "src/api/messenger";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return { ...state, [action.field]: action.value };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};
const INTITIAL_COACH_STATE = {
  technology_id: "",
  full_name: "",
  community: "",
  image: "",
  phone_number: "",
};
const Coaches = ({
  setTechnologyInfo,
  technologyInfo,
  setCurrentTab,
  updateTechObject,
  coaches,
  setCoaches,
  notifyError,
  notifySuccess,
  tech_id,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState({});
  const [showCoachModal, setShowCoachModal] = useState(false);
  // const [formData, dispatch] = useReducer(reducer, INTITIAL_COACH_STATE);
  const [formData, setFormData] = useState(INTITIAL_COACH_STATE);
  const [query, setQuery] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // TODO LATER: EDITING & CREATION CAN BE MERGED INTO ONE FORM AND ONE PROCESS!

  const buildQuery = (key, data) => {
    setQuery({ ...query, [key]: data });
  };

  const getValue = (key, source) => {
    source = source || formData;
    return (source || {})[key] || "";
  };

  // console.log("Lets Log Query", query);

  // useEffect(() => {
  //   setCoaches(technologyInfo?.coaches || []);
  // }, [technologyInfo]);

  const handleFieldChange = (field, value) => {
    // dispatch({ type: "SET_FIELD_VALUE", field, value });
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { ...formData, technology_id: tech_id };

    // return console.log("THis is what the data looks like", data);

    const url = isEditing ? "" : "technologies.coaches.create";
    setLoading(true);
    apiCall(url, data).then((res) => {
      const { data, success, error } = res || {};
      setLoading(false);
      console.log("=== CREATE TECH COACH===", res);
      if (!success) {
        console.log("ERROR: ", error);
        return notifyError(error);
      }

      let items = [];
      if (isEditing) {
        let rem = coaches?.filter((it) => it?.id !== data?.id);
        items = [...rem, data];
      } else items = [...(coaches || []), res?.data];
      notifySuccess("Coach added!");
      return updateTechObject({ coaches: items });
    });
  };

  const updateCoach = async (data) => {};

  const renderSelectedCoaches = () => {
    return (
      <Row className="py-4">
        <Col>
          <h5 className="theme-color">Selected Coaches</h5>
          <p className="my-4">
            All the coaches you add will appear here. Add as many as you need!
          </p>
          {coaches?.map((item, index) => {
            return (
              <Chip
                // className="mr-5"
                style={{ marginRight: 6 }}
                key={index}
                text={item?.full_name}
                onDismiss={() => {
                  let items = [...coaches];
                  items.splice(index, 1);
                  setCoaches(items);
                }}
                onClick={() => {
                  const editObj = { ...item, image: item?.image?.url || "" };
                  setFormData(editObj);
                  setIsEditing(true);
                  // setQuery();
                  // setShowCoachModal(true);
                }}
              />
            );
          })}
        </Col>
        {coaches?.length ? (
          <small style={{ color: "grey", marginTop: 8 }}>
            Click on any coach to edit
          </small>
        ) : (
          <></>
        )}
      </Row>
    );
  };

  return (
    <div>
      <Container>
        {coaches?.length > 0 && (
          <Container>
            {/* <hr /> */}
            {renderSelectedCoaches()}
          </Container>
        )}
        <form style={{ border: "dashed 2px #eeeeee", padding: "40px" }}>
          <Row>
            <Col>
              <h5 className="theme-color">
                {isEditing
                  ? `Editing "${formData?.full_name}"`
                  : "Create A New Coach"}
              </h5>
              <p className="my-4">
                Please include details of the new Coach of this technology
              </p>
            </Col>
          </Row>
          <Row className="py-4">
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
          <Row className="py-4">
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
          <Row className="py-4">
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
          <Row className="py-4">
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
                value={getValue("image")}
                defaultValue={getValue("image")}
              />
            </Col>
          </Row>

          <Row className="py-4 mt-4 justify-content-end">
            <Col>
              <Button
                loading={loading}
                text="Add Coach"
                onSubmit={handleSubmit}
                rounded={false}
              />
            </Col>
          </Row>
        </form>
      </Container>

      <MEModal
        show={showCoachModal}
        handleClose={() => {
          setShowCoachModal(false);
          setQuery({});
        }}
        onOkClick={() => console.log(query)}
        animate={true}
        title={"Edit Coach Info"}
        size={"lg"}
      >
        <RenderCoachesEditForm />
      </MEModal>
    </div>
  );

  function RenderCoachesEditForm() {
    return (
      <div style={{ padding: 20 }}>
        <Row className="">
          <Col>
            <Input
              label="Full Name"
              placeholder="Enter full name here..."
              required={true}
              type="textbox"
              value={getValue("full_name")}
              onChange={(val) => {
                buildQuery("full_name", val);
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
                buildQuery("email", val);
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
                buildQuery("phone_number", val);
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
                buildQuery("community", val);
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
                buildQuery("image", val);
              }}
              value={getValue("image")}
              defaultValue={getValue("image")}
            />
          </Col>
        </Row>
      </div>
    );
  }
};

export default Coaches;
