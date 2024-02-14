import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setCampaignCommunityEventsAction } from "../../redux/actions/actions";
import { useCampaignContext } from "src/hooks/use-campaign-context";
import Loading from "src/components/pieces/Loading";

export function CampaignEventsView ({campaign }) {

  const { setNewCampaignDetails,} = useCampaignContext();
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [toAddEvents, setToAddEvents] = useState([]);
  const [selectedTech, setSelectedTech] = useState("");
  const { blow, pop } = useBubblyBalloons();
  //@Todo: Add a mutate to update main

  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const allEvents = useSelector(state=> state.communitiesEvents)
  const dispatch = useDispatch()

  const fetchEventsIfNone = async () => {
    try {
      if (!allEvents?.length) {
        setLoadingEvents(true);
        const data = await fetchEvents(campaign?.id || id);
        dispatch(setCampaignCommunityEventsAction(data));
        setLoadingEvents(false);
      }
    } catch (error) {
      setLoadingEvents(false);
      console.error("An error occurred:", error);
    }
  };

  useEffect(()=>{
    fetchEventsIfNone()
  },[])

  useEffect(() => {
    const existingEvents = [
      ...campaign?.technologies?.map((tech) => tech?.events),
    ].flat();
    setSelectedEvents(existingEvents);

  },[campaign?.technologies])

  
  if (loadingEvents) {
    return <Loading text="Loading events..." />;
  }


  const techs = campaign?.technologies;

  const handleRemove = async (tech_event_id) => {
    setLoading(true);
    const _old = [...selectedEvents];
    try {
      const removedEvent = await removeCampaignTechnologyEvent(tech_event_id);
      if (removedEvent) {
        let tech = techs?.find((tech) => tech?.campaign_technology_id === removedEvent?.campaign_technology?.id);
        let newEvents = tech?.events?.filter((event) => event?.id !== tech_event_id);
        tech = { ...tech, events: newEvents };

        const newTechs = techs?.map((t) => {
          if (t?.campaign_technology_id === removedEvent?.campaign_technology?.id) return tech;
          return t;
        })
        setNewCampaignDetails({ ...campaign, technologies: newTechs });
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
        const tech = techs?.find((tech) => tech?.campaign_technology_id === selectedTech);
        const newTech = { ...tech, events: [...tech?.events, ...res] };
        const newTechs = techs?.map((tech) => {
          if (tech?.campaign_technology_id === selectedTech) return newTech;
          return tech;
        });
        onModalClose();
        const newCampaign = { ...campaign, technologies: newTechs };
        setNewCampaignDetails(newCampaign);

        blow({
          title: "Success",
          message: "Campaign Event Added successfully.",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      console.log("=== e ==", e)
      setLoading(false);
      pop({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        type: "error",
        timeout: 5000,
      });
    }
  };

  // if (isLoading || loading)
  //   return <GhostLoader loading={isLoading} text="Loading Events..." />;
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
    <Container fluid style={{ height: "100vh" }}>
      {EVENTS_SIZE > 0 && (
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 10,
            }}
          >
            <BTN variant="success" onClick={() => setOpenModal(true)}>
              <span>Add Event</span>
            </BTN>
          </div>
        </Container>
      )}

      <div>
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
                            onClick={(e) => {
                              e.preventDefault()
                              if (window.confirm("Are you sure you want to remove this Event?")) {
                                handleRemove(event?.id);
                              }
                            }}
                            variant="danger"
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
      </div>

      <Modal size={"xl"} show={openModal} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Events Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "40vh" }}>
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
                        label: `${event?.name} - ${event?.community?.alias || event?.community?.name}`,
                      };
                    })}
                    valueExtractor={(item) => item}
                    labelExtractor={(item) =>`${item?.name} - ${item?.community?.alias || item?.community?.name}`}
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
                    </Col>
                  </Row>
                </Col>
              </Row>
            </form>
          ) : (
            <NoItems text="The participating communities in this campaign do not have published events" />
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
