import React, { useState } from "react";
import { Button, Col, Row, Button as BTN, Modal, Accordion } from "react-bootstrap";
import classes from "classnames";
import IncentivesBar from "../../../components/admin-components/IncentivesBar";
import FaqForm from "./faq-form";
import {removeTechnologyDeal, removeTechnologyFaq} from "src/requests/technology-requests";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import GhostLoader from "src/components/admin-components/GhostLoader";
import CustomAccordion from "src/components/admin-components/CustomAccordion";
import SectionsForm from "./SectionsForm";
import MeModal from "src/components/MEModal/MeModal";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaqEditor } from "../../../components/admin-components/faq-editor";

export default function FAQs({ campaign_id, tech_id, techObject, updateTechObject }) {
  const { deals } = techObject;
  const [openDealsModal, setOpenDealsModal] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);
  const [loading, setLoading] = useState(false);
  const { pop, blow } = useBubblyBalloons();

  const [faqs, setFaqs] = useState(techObject?.faqs || []);

  // const updateFaqsList = (deal, isNew) => {
  //   const newDeals = isNew ? [...(deals || []), deal] : deals.map((d) => (d.id === deal.id ? deal : d));
  //   updateTechObject({ deals: newDeals });
  //   setOpenDealsModal(false);
  // };

  const updateFaqsList = (faq, isNew) => {
    const newFaqs = isNew ? [...(faqs || []), faq] : faqs.map((f) => (f.id === faq.id ? faq : f));
    updateTechObject({ faqs: newFaqs });
    setFaqs(newFaqs);
    setOpenDealsModal(false);
  };

  const handleRemove = async (id) => {
    if (typeof id === "undefined") return;
    if (!window.confirm("Are you sure you want to delete this faq?")) return;
    try {
      const res = await removeTechnologyFaq(id);
      if (res) {
        setLoading(false);
        const updatedFaqs = faqs?.filter((d) => d.id !== id);
        setFaqs(updatedFaqs);
        updateTechObject({ faqs: updatedFaqs });
        blow({
          title: "Success",
          message: "Faq item removed successfully",
          type: "success",
        });
      }
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: "An error occurred while removing faq item",
        type: "error",
      });
    }
  };

  if (loading) return <GhostLoader />;

  return (
    <div>
      {/* SECTION */}
      <div className="py-5">
        <CustomAccordion
          title={"Customize the Title and Description of the FAQs section"}
          component={
            <SectionsForm
              section="faq_section"
              data={techObject?.faq_section}
              updateExistingObject={updateTechObject}
              item_id={tech_id}
              fieldConfig={{
                title: true,
                description: true,
                media: false,
                callToAction: false
              }}
            />    
          }
          isOpen={openAccordion}
          onClick={() => setOpenAccordion(!openAccordion)}
        />
      </div>
      <Row className=" ">
        {faqs?.length > 0 ? (
          <Col>
            <Accordion defaultActiveKey="0">
              {faqs?.map((faq, index) => {
                if (!faq) return null;
                return (
                  <div key={faq?.id} className={classes("py-2", { "mt-2 ": index > 0 })}>
                    <FaqEditor
                      faq={{ ...faq, title : faq.question }}
                      onRemove={() => {
                        handleRemove(faq?.id);
                      }}
                    >
                      <FaqForm technology_id={tech_id} faq={faq} onSubmit={updateFaqsList} />
                    </FaqEditor>


                    {/*<Accordion.Item eventKey="0" key={index}>
                      <Accordion.Header>
                        <h5>{faq.question}</h5>
                      </Accordion.Header>
                      <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>*/}
                  </div>
                );
              })}
            </Accordion>
          </Col>
        ) : (
          <div className="w-100 flex items-center flex-column text-center">
            <div>
              <img src="/img/no-data.svg" alt="" />
              <h5 className="">No faqs added yet</h5>
            </div>
            <div className="text-center">
              <h6 className="text-muted">Click the 'Start Adding FAQs' button to add a new FAQ</h6>
              <div className="mt-4">
                <BTN variant={"success"} onClick={() => setOpenDealsModal(true)}>
                  <span>Start Adding FAQs</span>
                </BTN>
              </div>
            </div>
          </div>
        )}
      </Row>
      <Row className="py-3 justify-content-end">
        <Col sm={"auto"}>
          {faqs?.length > 0 && (
            <Button variant="success" rounded onClick={() => setOpenDealsModal(true)}>
              Add a new FAQ
            </Button>
          )}
        </Col>
      </Row>

      <Modal
        onHide={() => setOpenDealsModal(false)}
        show={openDealsModal}
        size={"lg"}
        enforceFocus={false}
        scrollable={false}
      >
        <Modal.Header closeButton className={"border-bottom-0"}>
          <Modal.Title className={"text-sm"}>New FAQ</Modal.Title>
        </Modal.Header>
        <FaqForm key={"new-faq"} deal={{}} onSubmit={updateFaqsList} technology_id={tech_id} modal />
      </Modal>
    </div>
  );
}
