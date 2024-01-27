import React, { useState } from "react";
import { Col, Container, Row, Button as BTN, Modal, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Button from "src/components/admin-components/Button";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { daysOfWeek, monthsOfYear } from "src/utils/Constants";
import {
  AddSelectedEvents,
  removeCampaignTechnologyEvent,
} from "src/requests/campaign-requests";
import useSWR from "swr";
import GhostLoader from "src/components/admin-components/GhostLoader";
import { useParams } from "react-router-dom";
import Chip from "src/components/admin-components/Chip";
import { fetchEvents } from "src/requests/technology-requests";
import { NoItems } from "@kehillahglobal/ui";
import Dropdown from "src/components/admin-components/Dropdown";

export function CampaignEventsView ({ events, campaign }) {
  //@Todo: Add a mutate to update main

  const [loading, setLoading] = useState(false);
  const { id : ID } = useParams();

  let id = campaign?.id || ID

  const { data: allEvents, isLoading } = useSWR(
    `campaigns.communities.events.list/${id}`,
    () => fetchEvents(campaign?.id || id), {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    },
  );

  const techs = campaign?.technologies;

  const existingEvents = [
    ...campaign?.technologies?.map((tech) => tech?.events),
  ].flat();
  const [selectedEvents, setSelectedEvents] = useState(existingEvents);
  const [openModal, setOpenModal] = useState(false);
  const [toAddEvents, setToAddEvents] = useState([]);
  const [selectedTech, setSelectedTech] = useState("");
  const { blow, pop } = useBubblyBalloons();

  const handleRemove = async (tech_event_id) => {
    setLoading(true);
    const _old = [...selectedEvents];
    const filteredTechnologies = selectedEvents.filter(
      (event) => event?.id !== tech_event_id,
    );
    setSelectedEvents(filteredTechnologies);
    try {
      const removedEvent = await removeCampaignTechnologyEvent(tech_event_id);
      if (removedEvent) {
        setLoading(false);
        blow({
          title: "Success",
          message: "Event removed successfully.",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      setSelectedEvents(_old);
      setLoading(false);
      pop({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        type: "error",
        timeout: 5000,
      });
    }
  };

  const formatDate = (date) => {
    let d = new Date(date);
    let d_date = d.getDate();
    let day = daysOfWeek[d.getDay()];
    let month = monthsOfYear[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${d_date} ${month} ${year} `;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        campaign_technology_id: selectedTech,
        event_ids: toAddEvents?.map((event) => {
          return event?.id;
        }),
      };

      const res = await AddSelectedEvents(payload);

      if (res) {
        setLoading(false);
        onModalClose();
        setSelectedEvents([...selectedEvents, ...res]);
        blow({
          title: "Success",
          message: "Campaign Event Added successfully.",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        type: "error",
        timeout: 5000,
      });
    }
  };

  if (isLoading || loading)
    return <GhostLoader loading={isLoading} text="Loading Events..." />;
  const EVENTS_SIZE = (selectedEvents || [])?.length;

  const onModalClose = () => {
    setOpenModal(false);
    setToAddEvents([]);
    setSelectedTech("");
  };

  const selectedEventIds = selectedEvents.map((event) => event.event.id);
  const eventsToShow = allEvents.filter(
    (event) => !selectedEventIds.includes(event.id),
  );

  return (
    <Container style={{ height: "100vh" }}>
      {EVENTS_SIZE > 0 && (
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 10,
            }}
          >
            <BTN onClick={() => setOpenModal(true)}>
              <span>Add Events</span>
            </BTN>
          </div>
        </Container>
      )}

      <Container>
        <Row className=" pb-4 justify-content-start mt-4">
          {EVENTS_SIZE > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">
                      #
                    </th>
                    <th className="textcenter" scope="col">
                      Image
                    </th>
                    <th className="text-cener" scope="col">
                      Name
                    </th>
                    <th className="text-centr" scope="col">
                      Technology
                    </th>
                    <th className="textcenter" scope="col">
                      {" "}
                      Date
                    </th>
                    <th className="text-center" scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedEvents || [])?.map((event, index) => {
                    return (
                      <tr key={event?.id} className="text-sm">
                        <td className="text-center">{index + 1}</td>
                        <td className="ext-center">
                          <img
                            style={{
                              width: "35px",
                              height: "35px",
                              objectFit: "cover",
                              borderRadius: "5px",
                            }}
                            src={event?.event?.image?.url}
                            alt=""
                          />
                        </td>
                        <td className="tex-center">{event?.event?.name}</td>
                        <td className="text-ceter">
                          {event?.campaign_technology?.technology?.name}
                        </td>
                        <td className="text-ceter">
                          {formatDate(event?.event?.start_date)}
                        </td>
                        <td className="text-center">
                          <BTN
                            // style={{ marginLeft: 10 }}
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to remove this Event?",
                                )
                              ) {
                                handleRemove(event?.id);
                              }
                            }}
                            variant="primary"
                          >
                            <span>Remove</span>
                          </BTN>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <div className="w-100 flex items-center flex-column text-center">
              <div>
                <img src="/img/no-data.svg" alt="" />
                <h5 className="">No events added to this campaign</h5>
              </div>
              <div className="text-center">
                <h6 className="text-muted">Click the 'Add Events' button to add</h6>
                <div className="mt-4">
                  <BTN onClick={() => setOpenModal(true)}>
                    <span>Add Events</span>
                  </BTN>
                </div>
              </div>
            </div>
          )}
        </Row>
      </Container>

      <Modal size={"xl"} show={openModal} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Events Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "70vh" }}>
          {eventsToShow?.length > 0 ? (
            <form>
              <Row className="mt-2" style={{ height: "180px" }}>
                <Col>
                  <Form.Label>Select events to feature on this campaign</Form.Label>
                  <Dropdown
                    displayTextToggle="Select Events for this campaign"
                    data={(eventsToShow || [])?.map((event) => {
                      return {
                        ...event,
                        value: event?.id,
                        label: `${event?.name} - ${event?.community?.name}`,
                      };
                    })}
                    valueExtractor={(item) => item}
                    labelExtractor={(item) =>`${item?.name} - ${item?.community?.name}`}
                    multiple={false}
                    onItemSelect={(selectedItem, allSelected) => {
                      setToAddEvents([selectedItem]);
                    }}
                  />

                  <Row className="my-4">
                    <Form.Label>
                      Select the technology these events belong to
                    </Form.Label>
                    <Col>
                      <Dropdown
                        displayTextToggle="Select Technology for this campaign"
                        data={(techs || [])?.map((event) => {
                          return {
                            ...event,
                            value: event?.id,
                            label: event?.name,
                          };
                        })}
                        valueExtractor={(item) => item?.campaign_technology_id}
                        labelExtractor={(item) => item?.name}
                        multiple={false}
                        onItemSelect={(selectedItem, allSelected) => {
                          setSelectedTech(selectedItem);
                        }}
                      />
                      {/* <Form.Select
                        onChange={(e) => {
                          setSelectedTech(e.target.value);
                        }}
                      >
                        <option> ----- -----</option>
                        {(techs || []).map((tech) => {
                          return (
                            <option
                              key={tech?.id}
                              value={tech?.campaign_technology_id}
                            >
                              {tech?.name}
                            </option>
                          );
                        })}
                      </Form.Select> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </form>
          ) : (
            <NoItems />
          )}

          <Row className="mt-4">
            <Col>
              <Row>
                {toAddEvents?.map((event) => {
                  return (
                    <Col sm={"auto mb-2"} key={event?.id}>
                      <Chip
                        text={event?.name}
                        icon={event?.icon}
                        id={event?.id}
                        size={"sm"}
                        className="mr-2 mb-5"
                        onDismiss={(id) => {
                          setToAddEvents(
                            toAddEvents?.filter((event) => event?.id !== id),
                          );
                        }}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Save Changes"
            loading={loading}
            disabled={loading || toAddEvents?.length === 0 || !selectedTech}
            onSubmit={handleSubmit}
            rounded={false}
          />
          <BTN
            style={{ marginLeft: 10, padding: "10px 20px", borderRadius: 0 }}
            variant="danger"
            onClick={onModalClose}
          >
            Close
          </BTN>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
