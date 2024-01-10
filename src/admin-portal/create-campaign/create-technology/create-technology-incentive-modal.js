import React from "react";
import { Modal } from "react-bootstrap";
import { IncentiveForm } from "./incentive-form";

export function CreateTechnologyIncentiveModal ({ show, onHide, technology_id, onSubmit }) {
  return (
    <Modal onHide={onHide} show={show} size={"lg"}>
      <Modal.Header closeButton className={"border-bottom-0"}>
        <Modal.Title className={"text-sm"}>
          {/*{isEmpty(incentive?.title) ? "Untitled Incentive" : incentive?.title}*/}
          New Incentive
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <IncentiveForm key={"new-incentive"} technology_id={technology_id} incentive={{}} onSubmit={onSubmit} />
      </Modal.Body>
      {/*<Modal.Footer>
        <Row className=" justify-content-end">
          <Col>
            <ProgressButton onClick={handleAddIncentive} rounded={false}>
              Save
            </ProgressButton>
          </Col>
        </Row>
      </Modal.Footer>*/}
    </Modal>
  )
}
