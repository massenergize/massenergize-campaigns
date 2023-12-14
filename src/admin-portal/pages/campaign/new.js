import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateCampaignPageWrapper from "../PageWrapper/CreateCampaignPageWrapper";
import { campaignPages } from "../../../utils/Constants";
import classes from "classnames";
import { AdminLayout } from "../../../layouts/admin-layout";
import { StartCampaign } from "../../create-campaign/start-campaign";

const { useReducer } = require("react");

const initialState = {
  title: "Reforestation Campaign",
  slogan: "Planting trees for a better future",
  description: "",
  logo: "",
  fullName: "",
  email: "",
  contact: "",
  profileImage: "",
  primary_logo: "https://massenergize-files.s3.amazonaws.com/media/csu.jpeg",
  secondary_logo: "https://massenergize-files.s3.amazonaws.com/media/csu.jpeg",
  campaign_image: "https://massenergize-files.s3.amazonaws.com/media/csu.jpeg",
  tagline: "One Tree at a Time",
  start_date: "15/12/2023",
  end_date: "15/12/2024",
  is_published: false,
  campaign_account_id: "583c96c5-7fb4-488f-ac54-2558252ae535",
  is_template: true,
  full_name: "John Doe",
  phone_number: "+1 234 567 890",
  key_contact_image: "https://massenergize-files.s3.amazonaws.com/media/csu.jpeg",
  technologies: [
    {
      "id": 1,
      "image": "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      "name": "Heat Pump",
      "value": "Heat Pump"
    }
  ],
  managers: [],
  campaign_managers: [],
  events: [],
};

const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "SET_FIELD_VALUE":
      return { ...state, [payload.field]: payload.value };
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

export function NewCampaign ({ props }) {
  const [showError, setShowError] = useState(false);
  const [activeTab, setActiveTab] = useState(campaignPages[0].name);

  const [campaignDetails, dispatch] = useReducer(reducer, initialState);

  const handleCampaignDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
  };

  const [STEP, setSTEP] = useState("START"); // START, DETAILS, MANAGERS, TECHNOLOGIES, EVENTS, REVIEW, SUBMIT

  const validateCampaignDetails = () => {
    // FIXME change this to a more appropriate name
    const {
      title,
      slogan,
      startDate,
      endDate,
      description,
      logo,
      fullName,
      email,
      contact,
      profileImage,
    } = campaignDetails;

    if (
      !title ||
      !slogan ||
      !startDate ||
      !endDate ||
      !description ||
      !logo ||
      !fullName ||
      !email ||
      !contact ||
      !profileImage
    ) {
      setShowError(true);
      return false;
    }

    return true;
  };

  const submitCampaign = () => {
    try {
      // TODO: validate campaign details
      // TODO: submit campaign details
    } catch (e) {
      throw Error("Error submitting campaign"); //FIXME chnage this to a more appropriate error message or even a mor detailed error object
    }
  };

  return (
    <AdminLayout>
      <div style={{ padding: "1rem", }}>
        {
          STEP === "START" ?
            <StartCampaign campaignDetails={campaignDetails} setCampaignDetails={handleCampaignDetailsChange}/>
            :
            <CreateCampaignPageWrapper>
              <Container>
                {/*region Header*/}
                <Row lg={{ gutter: 0 }} className="pb-4 overflow-scroll gap-0 no-gutters g">
                  <Col>
                    <div className="nav-tabs-container">
                      {campaignPages?.map((page) => (
                        <div
                          key={page?.name}
                          className={classes("nav-tabs-main tab", { "tab-active": activeTab === page?.name })}
                          onClick={() => setActiveTab(page?.name)}
                        >
                          <h5 className={classes("nav-tabs",)}>
                            {page?.name}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
                {/*endregion*/}

                {/*region Body: Content goes here*/}
                <Row className="mt-4 pt-4">
                  <Col>
                    {
                      campaignPages?.map((tab) => {
                        return (
                          activeTab === tab?.name && (
                            <tab.component
                              key={tab?.name}
                              campaignDetails={campaignDetails}
                              setCampaignDetails={handleCampaignDetailsChange}/>
                          )
                        );
                      })}
                  </Col>
                </Row>
                {/*endregion*/}

                {/*region Footer*/}

                {/*endregion*/}
              </Container>
            </CreateCampaignPageWrapper>
        }
      </div>
    </AdminLayout>
  );
}
