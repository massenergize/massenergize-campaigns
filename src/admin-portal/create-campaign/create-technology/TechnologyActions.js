import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import classes from "classnames";
import IncentivesBar from "src/components/admin-components/IncentivesBar";
import MeModal from "src/components/MEModal/MeModal";
import TechnologyActionsForm from "./TechnologyActionsForm";
import { deleteTechnologyAction } from "src/requests/technology-requests";

export default function TechnologyActions({ campaign_id, tech_id, techObject, updateTechObject }) {
  const { technology_actions: actions } = techObject;
  const [openActionsModal, setOpenActionsModal] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);
  const [loading, setLoading] = useState(false);
  const { pop, blow } = useBubblyBalloons();

  const updateActionsList = (action, isNew) => {
    const newTechnologyActions = isNew
      ? [...(actions || []), action]
      : actions.map((d) => (d.id === action.id ? action : d));
    updateTechObject({ technology_actions: newTechnologyActions });
    setOpenActionsModal(false);
  };

  const handleRemove = async (id) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this action?")) return;
    setLoading(true)
    try{
      const res = await deleteTechnologyAction({ id });
      if (res) {
        setLoading(false)
        const newActions = actions.filter(d => d.id !== id)
        updateTechObject({technology_actions: newActions })
        blow({
          title: "Success",
          message: "action removed successfully",
          type: "success",
        })
      }

    }
    catch(e){
      setLoading(false)
      pop({
        title: "Error",
        message: "An error occurred while removing action. Try again",
        type: "error",
      });
    }
  };

  return (
    <div>
      <Row className="py-3 justify-content-end">
        <Col sm={"auto"}>
          {actions?.length > 0 && (
            <Button variant="success" rounded onClick={() => setOpenActionsModal(true)}>
              Add New action to take
            </Button>
          )}
        </Col>
      </Row>
      <Row className=" ">
        {(actions || [])?.length > 0 ? (
          <Col>
            {(actions || [])?.map((action, index) => {
              if (!action) return null;
              return (
                <div key={action?.id} className={classes("py-2", { "mt-2 ": index > 0 })}>
                  <IncentivesBar
                    incentive={action}
                    onRemove={() => handleRemove(action?.id)}
                    formComponent={
                      <TechnologyActionsForm technology_id={tech_id} action={action} onSubmit={updateActionsList} />
                    }
                  />
                </div>
              );
            })}
          </Col>
        ) : (
          <div className="w-100 flex items-center flex-column text-center">
            <div>
              <img src="/img/no-data.svg" alt="" />
              <h5 className="">No actions to take added to this technology</h5>
            </div>
            <div className="text-center">
              <h6 className="text-muted">Click the 'Add New Action' button to add</h6>
              <div className="mt-4">
                <Button variant={"success"} onClick={() => setOpenActionsModal(true)}>
                  <span>Add new action</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Row>

      <MeModal
        size={"xl"}
        title={"New Technology Action"}
        open={openActionsModal}
        onHide={() => setOpenActionsModal(false)}
      >
        <TechnologyActionsForm key={"new-action"} action={{}} onSubmit={updateActionsList} technology_id={tech_id} />
      </MeModal>
    </div>
  );
}
