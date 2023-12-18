import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../adminStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { ProgressButton } from "../../components/progress-button/progress-button";
import classes from "classnames";
import { MultiSelect } from "react-multi-select-component";
import { Button, Card } from "react-bootstrap";

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

  console.log({ allTechnologies });

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
              <p>Choose one or more technologies for your campaign from the dropdown below.</p>
              <small className={"text-muted"}>
                If you don't see the technology you're looking for, you can {" "}
                <Link className="theme-color text-link" to={"/admin/campaign/create-technology"}>
                  Create a new technology.
                </Link>
              </small>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <MultiSelect
                options={(allTechnologies?.data || []).map((campaign) => {
                  return {
                    ...campaign,
                    value: campaign?.id,
                    label: campaign?.name
                  }
                })}
                value={campaignDetails?.technologies}
                onChange={(val) => {
                  setCampaignDetails("technologies", val);
                }}
                labelledBy="Select"
              />
            </Col>
          </Row>
          <Row className="mt-4 pb-4 justify-content-start">{
            technologies.map((tech) => {
              let image = tech?.image?.url;
              const { id, name, } = tech;
              return (
                <Col md={4} className={"mb-3"}>
                 {/* <Card style={{ width: '18rem' }} className={"position-relative"}>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{name}</Card.Text>
                    </Card.Body>

                    <span onClick={() => {
                      handleRemove(tech);
                    }} className="image-close-btn">
                    <FontAwesomeIcon icon={faClose}/>
                  </span>
                  </Card>*/}


                  <div key={tech?.id} className={"border rounded position-relative"}>
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
                    </div>
                    <p className="text-center pb-3 small-image-text light-gray-back rounded mb-0">{tech?.name}</p>
                    <span onClick={() => {
                      handleRemove(tech);
                    }} className="image-close-btn">
                    <FontAwesomeIcon icon={faClose}/>
                  </span>
                  </div>
                </Col>);
            })}
          </Row>
          <Row className="mt-4 py-4 justify-content-end">
            <Col className="mt-4 py-4">
              <ProgressButton
                text="Save Changes"
                onClick={handleSubmit}
                rounded={false}
              >Save Changes</ProgressButton>
            </Col>
          </Row>
        </form>
      </Container>
    </m.div>
  );
};

export default Technologies;
