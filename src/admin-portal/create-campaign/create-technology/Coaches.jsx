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
import { apiCall } from "../../../utils/api_call";
import CustomModal from "../../../components/modal/CustomModal";
import MEModal from "../../../components/admin-components/MEModal";

const Coaches = ({ setTechnologyInfo, technologyInfo, setCurrentTab }) => {
  const navigate = useNavigate();

  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState({});
  const [showCoachModal, setShowCoachModal] = useState(false);
  const [query, setQuery] = useState({});

  const initialState = {
    technology_id: "",
    full_name: "",
    community: "",
    image: "",
    phone_number: "",
  };

  const buildQuery = (key, data) => {
    setQuery({ ...query, [key]: data });
  };

  const getValue = (key) => {
    return query[key] || "";
  };

  useEffect(() => {
    setCoaches(technologyInfo?.coaches || []);
  }, [technologyInfo]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD_VALUE":
        return { ...state, [action.field]: action.value };
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD_VALUE", field, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { ...formData, technology_id: technologyInfo?.id };
    apiCall("technologies.coaches.create", data).then((res) => {
      console.log("=== CREATE TECH COACH===", res);
      if (res?.success) {
        let items = [...(technologyInfo?.coaches || []), res?.data];
        setTechnologyInfo({ ...technologyInfo, coaches: items });
      }
    });
  };

  const updateCoach = async (data) => {};

  const renderSelectedCoaches = () => {
    return (
      <Row className="py-4">
        <Col>
          <h5 className="theme-color">Selected Coaches</h5>
          <p className="my-4">
            These are the coaches that have been selected for this technology
          </p>
          {coaches?.map((item, index) => {
            return (
              <Chip
                className="mr-6"
                key={index}
                text={item?.full_name}
                onDismiss={() => {
                  let items = [...coaches];
                  items.splice(index, 1);
                  setCoaches(items);
                }}
                onClick={() => {
                  setQuery(item);
                  setShowCoachModal(true);
                }}
              />
            );
          })}
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Container>
        <form>
          <Row>
            <Col>
              <h5 className="theme-color">Create A New Coach</h5>
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
                // value={getValue("full_name")}
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
                // value={getValue("email")}
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
                // value={getValue("phone_number")}
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
                // value={getValue("community")}
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
                valueExtractor={(val) => {
                  handleFieldChange("image", val);
                }}
              />
            </Col>
          </Row>

          <Row className="py-4 mt-4 justify-content-end">
            <Col>
              <Button
                text="Add Coach"
                onSubmit={handleSubmit}
                rounded={false}
              />
            </Col>
          </Row>
        </form>
      </Container>
      {coaches?.length > 0 && (
        <Container>
          <hr />
          {renderSelectedCoaches()}
        </Container>
      )}
      {
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
          <RenderCoachesForm />
        </MEModal>
      }
    </div>
  );

  function RenderCoachesForm() {
    return (
      <>
        <Row className="py-4">
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
        <Row className="py-4">
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
        <Row className="py-4">
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
        <Row className="py-4">
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
              valueExtractor={(val) => {
                buildQuery("image", val);
              }}
            />
          </Col>
        </Row>
      </>
    );
  }
};

export default Coaches;
