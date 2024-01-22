import React, { useState } from "react";
import { Button as BTN, Button, Col, Row } from "react-bootstrap";
import "../../../assets/styles/admin-styles.scss";
import IncentivesBar from "../../../components/admin-components/IncentivesBar";
import { useTechnologyContext } from "../../../hooks/use-technology-context";
import { CreateTechnologyIncentiveModal } from "./create-technology-incentive-modal";
import classes from "classnames";
import Modal from "react-bootstrap/Modal";
import { removeTechnologyIncentive } from "../../../requests/technology-requests";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";

let incentiveToDelete = null;

const Incentives = ({}) => {
  const { technology, handleAddOverview, handleRemoveOverview } = useTechnologyContext();
  const incentives = technology?.overview || [];

  const { notify } = useBubblyBalloons();

  const handleSubmit = async (e) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const [loading, setLoading] = useState(false);
  const [showIncentiveModal, setShowIncentiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
    incentiveToDelete = null;
  };

  const handleRemove = async () => {
    try {
      setLoading(true);
      const res = await removeTechnologyIncentive(incentiveToDelete);

      if (res) {

        handleRemoveOverview(incentiveToDelete);
        setShowDeleteModal(false);
        notify({
          title: "Success",
          message: "Incentive removed successfully",
          type: "success",
        });
      }
    } catch (e) {
      notify({
        title: "Error",
        message: "An error occurred while removing incentive",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Row className="my-5">
        <Col className="">
          <p>What are the incentives for participating in this technology</p>
        </Col>
        <Col sm={"auto"}>{
          incentives?.length > 0 && (<Button variant="success" rounded onClick={() => setShowIncentiveModal(true)}>Add New Incentive</Button>) }
        </Col>
      </Row>
      <Row className=" ">
        {incentives?.length > 0 ? (
          <Col>
            {(incentives || [])?.map((incentive, index) => {
              if (!incentive) return null;

            return (
              <div
                key={incentive?.id}
                className={classes("py-2", { "mt-2 ": index > 0 })}
              >
                <IncentivesBar
                  incentive={incentive}
                  onRemove={() => {
                    incentiveToDelete = { id : incentive?.id };
                    setShowDeleteModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </Row>

      <CreateTechnologyIncentiveModal
        show={showIncentiveModal}
        onHide={() => setShowIncentiveModal(false)}
        onSubmit={(data) => {
          setShowIncentiveModal(false);
          handleAddOverview(data);
        }}
      />

      <Modal show={showDeleteModal} onHide={() => hideDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Delete incentive.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <p>Are you sure you want to delete this incentive?</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideDeleteModal}>
            Close
          </Button>
          <Button onClick={handleRemove}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Incentives;
