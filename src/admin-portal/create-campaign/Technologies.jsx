import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../adminStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/admin-components/Dropdown";
import { motion as m } from "framer-motion";
import { ProgressButton } from "../../components/progress-button";
import classes from "classnames";

const Technologies = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
  const { technologies } = campaignDetails;

  const opts = [
    {
      id: 1,
      image: {
        url:
          "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      },
      name: "Heat Pump",
      value: "Heat Pump",
    },
    {
      id: 2,
      image: {
        url:
          "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      },
      name: "Solar Community",
      value: "Solar Community",
    },
    {
      id: 3,
      image: {
        url:
          "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      },
      name: "Home Solar",
      value: "Home Solar",
    },
    {
      id: 4,
      image: {
        url:
          "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      },
      name: "Lighting",
      value: "Lighting",
    },
  ];

  const navigate = useNavigate();


  const {
    allPartners,
    allManagers,
    allTechnologies,
    allCommunities,
  } = lists;

  console.log(allTechnologies);

  const handleRemove = (data) => {
    // const filtered = formData?.technology_id?.filter((tech) => {
    // 	return tech?.id !== data?.id;
    // });
    // handleFieldChange("technology_id", filtered);
  };

  const handleSubmit = (e) => {
  }

  return (
    <m.div initial={{ y: " 10%" }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
      <Container>
        <form>
          <Row>
            <Col>
              <p>
                Pick out the technologies you want to show up in this campaign.
                Or{" "}
                <span
                  onClick={() => navigate("/admin/campaign/create-technology")}
                  className="theme-color text-link"
                >
									Create a new technology
								</span>
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Dropdown
                displayTextToggle="Select technologies for this campaign"
                data={
                  (allTechnologies?.data || []).map((tech) => {
                    return {
                      ...tech,
                      value: tech.name || "",
                      label: tech.name || "",
                    }
                  })
                }
                defaultValue={technologies}
                value={technologies}
                valueExtractor={(item) => item}
                labelExtractor={(item) => item?.name}
                multiple={true}
                onItemSelect={(selectedItem, allSelected) => {
                  setCampaignDetails("technologies", allSelected)
                }}
              />
            </Col>
          </Row>
          <Row className="mt-4 py-4">
            <Col className="mt-4 py-4">
              <p>
                Technologies that will show up on your campaign page are listed here
              </p>
            </Col>
          </Row>
          <Row className="mb-4 pb-4">
            <Col>
              <div className="smallimages-container-wrapper">
                {
                  technologies.map((tech) => {
                    let image = tech?.image?.url;
                    return (
                      <div key={tech?.id} className={"border rounded"}>
                        <div className="small-image-container rounded" style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}>
                          <img className={classes("small-image ", { "d-none": image })}
                               src={image}
                               alt=""
                               onError={() => {
                                 image = "/img/fallback-img.png"
                               }}/>
                          <span
                            onClick={() => {
                              handleRemove(tech);
                            }} className="image-close-btn">
												    <FontAwesomeIcon icon={faClose}/>
											    </span>
                        </div>
                        <p className="text-center pb-3 small-image-text light-gray-back rounded mb-0">{tech?.name}</p>
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>
          <Row className="mt-4 py-4 justify-content-end">
            <Col className="mt-4 py-4">
              <ProgressButton
                text="Save Changes"
                onClick={handleSubmit}
                rounded={false}
              />
            </Col>
          </Row>
        </form>
      </Container>
    </m.div>
  );
};

export default Technologies;
