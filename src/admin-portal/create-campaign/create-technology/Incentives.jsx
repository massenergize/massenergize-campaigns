import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../assets/styles/admin-styles.scss";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import IncentivesBar from "../../../components/admin-components/IncentivesBar";
import { useTechnologyContext } from "../../../hooks/use-technology-context";
import { Button } from "react-bootstrap";
import { CreateTechnologyIncentiveModal } from "./create-technology-incentive-modal";
import classes from "classnames";
import { HorizontalLoader } from "../../../components/horizontal-loader/horizontal-loader";

const DUMMY_DATA = [
  {
    id: 1,
    title: "ENVIRONMENTALLY  FRIENDLY",
    description: "this is just a normal description",
    icon: faLightbulb,
  },
  {
    id: 2,
    title: "ECONOMIC BENEFITS",
    description: "this is just a normal description",
    icon: faLightbulb,
  },/*
		{
			id: 3,
			title: "COMFORT",
			description: "this is just a normal description",
			icon: faLightbulb,
		},
		{
			id: 4,
			title: "HEALTH & WELLNESS",
			description: "this is just a normal description",
			icon: faLightbulb,
		},*/
];


const Incentives = () => {

  const { technology, handleTechnologyDetailsChange } = useTechnologyContext();
  const incentives = technology?.overview;

  console.log("incentives", [incentives, ...DUMMY_DATA]);


  const handleSubmit = async (e) => {
    try {

    } catch (e) {
      console.log(e);
    }
  };


  const [showIncentiveModal, setShowIncentiveModal] = useState(false)
  return (
    <div>
      <Container>
        <Row className="">
          <Col className="">
            <p>What are the incentives for participating in this technology</p>
          </Col>
          <Col sm={"auto"}>
            <Button text="" rounded onClick={() => setShowIncentiveModal(true)}>
              Add Incentive
            </Button>
          </Col>
        </Row>
        <Row className={"justify-content-end"}>

        </Row>
        <Row className=" ">
          <Col>
            {([incentives, ...DUMMY_DATA] || [])?.map((incentive, index) => {
              if (!incentive) return null;

              return (
                <div key={incentive?.id} className={classes("py-2", {"mt-2 " : index > 0})}>
                  <IncentivesBar incentive={incentive}/>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>

      <CreateTechnologyIncentiveModal show={showIncentiveModal} onHide={() => setShowIncentiveModal(false)}/>
    </div>
  );
};

export default Incentives;
