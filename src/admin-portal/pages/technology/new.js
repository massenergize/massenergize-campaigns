import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { technologyPages } from "../../../utils/Constants";
import CreateTechnologyPageWrapper from "../PageWrapper/CreateTechnologyPageWrapper";
import classes from "classnames";
import { apiCall } from "../../../api/messenger";
import { AdminLayout } from "../../../layouts/admin-layout";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";
import { useParams } from "react-router-dom";

const { useReducer } = require("react");

const INFO_INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  summary: "",
};
const initialState = {
  isTemplate: false,
  title: "",
  slogan: "",
  startDate: "",
  endDate: "",
  description: "",
  logo: "",
  fullName: "",
  email: "",
  contact: "",
  profileImage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return { ...state, [action.field]: action.value };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

export function CreateTechnology() {
  const [showError, setShowError] = useState(false);
  const [activeTab, setActiveTab] = useState(technologyPages[0].name);

  const [information, setInformation] = useState(INFO_INITIAL_STATE);

  const [campaignDetails, dispatch] = useReducer(reducer, initialState);
  const { notify } = useBubblyBalloons();

  const { campaign_id, technology_id } = useParams();

  const notifyError = (message) => {
    notify({
      title: "Error",
      message: message,
      type: "error",
      timeout: 15000,
    });
  };
  const notifySuccess = (message) => {
    notify({
      title: "Error",
      message: message,
      type: "success",
      timeout: 15000,
    });
  };

  //   const handleCampaignDetailsChange = (name, value) => {
  //     dispatch({ type: "SET_FIELD_VALUE", field: name, value });
  //   };

  //   const validateCampaignDetails = () => {
  //     // FIXME change this to a more appropriate name
  //     const {
  //       title,
  //       slogan,
  //       startDate,
  //       endDate,
  //       description,
  //       logo,
  //       fullName,
  //       email,
  //       contact,
  //       profileImage,
  //     } = campaignDetails;

  //     if (
  //       !title ||
  //       !slogan ||
  //       !startDate ||
  //       !endDate ||
  //       !description ||
  //       !logo ||
  //       !fullName ||
  //       !email ||
  //       !contact ||
  //       !profileImage
  //     ) {
  //       setShowError(true);
  //       return false;
  //     }

  //     return true;
  //   };

  //   const submitCampaign = () => {
  //     try {
  //       // TODO: validate campaign details
  //       // TODO: submit campaign details
  //       // apiCall("campaign/create", campaignDetails).then((res) => {
  //       // 	console.log("==== res ====", res);
  //       // });
  //     } catch (e) {
  //       throw Error("Error submitting campaign"); //FIXME chnage this to a more appropriate error message or even a mor detailed error object
  //     }
  //   };

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <AdminLayout>
        {/*region Header*/}
        <Row
          lg={{ gutter: 0 }}
          className="pb-4 overflow-scroll gap-0 no-gutters g"
        >
          <Col>
            <div className="nav-tabs-container">
              {technologyPages?.map((page) => (
                <div
                  key={page?.name}
                  className={classes("nav-tabs-main tab", {
                    "tab-active": activeTab === page?.name,
                  })}
                  onClick={() => setActiveTab(page?.name)}
                >
                  <h5 className={classes("nav-tabs")}>{page?.name}</h5>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        {/*endregion*/}

        {/*region Body: Content goes here*/}
        <Row className="mt-4 pt-4">
          <Col>
            {technologyPages?.map((tab) => {
              return (
                activeTab === tab?.name && (
                  <tab.component
                    key={tab?.name}
                    setInformation={setInformation}
                    information={information}
                    notifyError={notifyError}
                    notifySuccess={notifySuccess}
                    // technologyInfo={technologyInfo}
                    // setTechnologyInfo={setTechnologyInfo}
                    setActiveTab={setActiveTab}
                  />
                )
              );
            })}
          </Col>
        </Row>
        {/*endregion*/}

        {/*region Footer*/}
        {/*endregion*/}
      </AdminLayout>
    </div>
  );
}
