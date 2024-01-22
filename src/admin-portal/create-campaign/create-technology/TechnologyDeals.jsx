import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import { Button, Col, Row, Modal, Button as BTN } from "react-bootstrap";
import classes from "classnames";
import IncentivesBar from "../../../components/admin-components/IncentivesBar";
import DealsForm from "./DealsForm";
import { removeTechnologyDeal } from 'src/requests/technology-requests';
import { useBubblyBalloons } from 'src/lib/bubbly-balloon/use-bubbly-balloons';
import GhostLoader from 'src/components/admin-components/GhostLoader';
import CustomAccordion from 'src/components/admin-components/CustomAccordion';
import SectionsForm from './SectionsForm';

export default function TechnologyDeals({ campaign_id, tech_id, techObject, updateTechObject }) {
  const { deals } = techObject
  const [openDealsModal, setOpenDealsModal] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);
  const [loading, setLoading] = useState(false);
  const { pop, blow } = useBubblyBalloons();

  const updateDealsList = (deal,isNew) => {
    const newDeals = isNew ? [...(deals||[]), deal] : deals.map(d => d.id === deal.id ? deal : d)
    updateTechObject({deals: newDeals })
    setOpenDealsModal(false)

  }

  const handleRemove = async(id) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this deal?")) return;
    setLoading(true)
    try{
      const res = await removeTechnologyDeal({ id });
      if (res) {
        setLoading(false)
        const newDeals = deals.filter(d => d.id !== id)
        updateTechObject({deals: newDeals })
        blow({
          title: "Success",
          message: "Deal removed successfully",
          type: "success",
        })
      }

    }
    catch(e){
      setLoading(false)
      pop({
        title: "Error",
        message: "An error occurred while removing deal",
        type: "error",
      });
    }

  }

  if(loading) return <GhostLoader />

  return (
    <div>
      {/* SECTION */}
      <div className="py-5">
          <CustomAccordion
            title={"Customize The Title and Description of Deals Section"}
            component={<SectionsForm
              section = "deal_section"
              data = {techObject?.deal_section}
              updateTechObject = {updateTechObject}
              tech_id = {tech_id}

            />}
            isOpen={openAccordion}
            onClick={() => setOpenAccordion(!openAccordion)}
          />
        </div>
      <Row className="py-3">
        <Col className="">
          <p>What are the deals for this campaign</p>
        </Col>
        <Col sm={"auto"}>
          {deals?.length > 0 && (
            <Button
              variant="success"
              rounded
              onClick={() => setOpenDealsModal(true)}
            >
              Add New Deal
            </Button>
          )}
        </Col>
      </Row>
      <Row className=" ">
        {(deals || [])?.length > 0 ? (
          <Col>
            {(deals || [])?.map((deal, index) => {
              if (!deal) return null;
              return (
                <div
                  key={deal?.id}
                  className={classes("py-2", { "mt-2 ": index > 0 })}
                >
                  <IncentivesBar
                    incentive={deal}
                    onRemove={() => handleRemove(deal?.id)}
                    formComponent={
                      <DealsForm
                        technology_id={tech_id}
                        deal={deal}
                        onSubmit={updateDealsList}
                      />
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
              <h5 className="">No deals added to this technology</h5>
            </div>
            <div className="text-center">
              <h6 className="text-muted">Click the 'Add New Deal' button to add</h6>
              <div className="mt-4">
                <BTN variant={"success"} onClick={() => setOpenDealsModal(true)}>
                  <span>Add New Deal</span>
                </BTN>
              </div>
            </div>
          </div>
        )}
      </Row>


      <Modal onHide={()=>setOpenDealsModal(false)} show={openDealsModal} size={"lg"}>
        <Modal.Header closeButton className={"border-bottom-0"}>
          <Modal.Title className={"text-sm"}>New Technology Deal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DealsForm
            key={"new-deal"}
            deal={{}}
            onSubmit={updateDealsList}
            technology_id={tech_id}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}

