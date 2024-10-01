import React, { useState } from "react";
import {Col, Row, Modal, Container} from "react-bootstrap";
import classes from "classnames";
import IncentivesBar from "../../../components/admin-components/IncentivesBar";
import { useTechnologyContext } from "../../../hooks/use-technology-context";
import { CreateTechnologyIncentiveModal } from "./create-technology-incentive-modal";
import {removeTechnologyIncentive, updateTechnology} from "../../../requests/technology-requests";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";
import { ProgressButton } from "../../../components/progress-button/progress-button";
import "../../../assets/styles/admin-styles.scss";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import CallToActionForm from "./CallToActionForm";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";


let incentiveToDelete = null;

const Incentives = () => {
  const { technology, handleAddOverview, handleRemoveOverview, handleUpdateOverview, handleTechnologyDetailsChange } = useTechnologyContext();
  const incentives = technology?.overview || [];

  const { notify } = useBubblyBalloons();

  const [loading, setLoading] = useState(false);
  const [showIncentiveModal, setShowIncentiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  const [formData, setFormData] = useState({title:technology?.overview_title})

  const updateFormData = (key, value) => {
    setFormData({[key]: value})
  }

  const handleSaveTitle = async() => {
    if(formData.title && formData.title.length > 0){
      let data = {overview_title:formData.title, id:technology?.id};
      let res = await updateTechnology(data)
      if(res){
        handleTechnologyDetailsChange("overview_title", res?.overview_title)
      }
    }
  }


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
        <div className="mt-4 mb-4">
          <CustomAccordion
              title="Customize Section Title"
              component={
            <Container>
              <Row className="py-4">
                <Col>
                  <Input
                      label="Title"
                      placeholder="Enter title here..."
                      required={true}
                      type="textbox"
                      onChange={(val) => updateFormData("title", val)}
                      value={formData?.title || ""}
                  />
                </Col>
              </Row>
              <Row className="py-4">
                <Col className="px-4">
                  <Button
                      text="Save title"
                      onSubmit={() => handleSaveTitle()}
                      rounded={false}
                      loading={loading}
                      disabled={loading || !formData?.title}
                  />
                </Col>
              </Row>
            </Container>
              }
              isOpen={openAccordion}
              onClick={() => setOpenAccordion(!openAccordion)}
          />
        </div>
        <Row className={"mt-3"}>
          <Col>
            <p>Dive in! Help your visitors understand every bit of this technology.</p>
          </Col>
          <Col sm={"auto"}>
            <Button text="" rounded onClick={() => setShowIncentiveModal(true)}>
              Add Incentive
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {(incentives || [])?.map((incentive, index) => {
              if (!incentive) return null;

              return (
                  <div key={incentive?.id} className={classes("py-2", {"mt-2 ": index > 0})}>
                    <IncentivesBar
                        incentive={incentive}
                        onUpdate={(incentive) => {
                          handleUpdateOverview(incentive);
                        }}
                        onRemove={() => {
                          incentiveToDelete = {id: incentive?.id};
                          setShowDeleteModal(true);
                        }}
                    />
                  </div>
              );
            })}
          </Col>
        </Row>

        <CreateTechnologyIncentiveModal
            show={showIncentiveModal}
            onHide={() => setShowIncentiveModal(false)}
            onSubmit={(data) => {
              setShowIncentiveModal(false);
              handleAddOverview(data);
            }}
        />

        <Modal show={showDeleteModal} onHide={() => hideDeleteModal} enforceFocus={false}>
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
            <ProgressButton loading={loading} onClick={handleRemove}>
              Delete
            </ProgressButton>
          </Modal.Footer>
        </Modal>
      </div>
  );
};

export default Incentives;
