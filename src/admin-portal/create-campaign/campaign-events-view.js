import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button as BTN, Modal, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Button from "src/components/admin-components/Button";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { daysOfWeek, monthsOfYear } from "src/utils/Constants";
import { AddSelectedEvents, removeCampaignTechnologyEvent } from "src/requests/campaign-requests";
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
import { limitItems } from "src/utils/utils";
import Checkbox from "src/components/admin-components/Checkbox";

export function CampaignEventsView({ campaign }) {
  const campaignCommunities = campaign?.communities || [];
  const { setNewCampaignDetails } = useCampaignContext();
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [toAddEvents, setToAddEvents] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);
  const [eventAndTech, setEventAndTech] = useState({});
  const { blow, pop } = useBubblyBalloons();
  const [filters, setFilters] = useState(campaignCommunities?.map(({ community }) => community?.id));
  //@Todo: Add a mutate to update main

  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const allEvents = useSelector((state) => state.communitiesEvents);

  const dispatch = useDispatch();

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

  useEffect(() => {
    fetchEventsIfNone();
  }, []);

  useEffect(() => {
    const existingEvents = [...campaign?.technologies?.map((tech) => tech?.events)].flat();
    setSelectedEvents(existingEvents);
  }, [campaign?.technologies]);

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
        });
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

    const { campaign_technology_id } = selectedTech || {};
    try {
      const payload = {
        campaign_technology_id,
        event_ids: toAddEvents?.map((event) => {
          return event?.id;
        }),
      };

      return console.log("Payload Items", payload, selectedTech);

      const res = await AddSelectedEvents(payload);

      if (res) {
        setLoading(false);
        const tech = techs?.find((tech) => tech?.campaign_technology_id === campaign_technology_id);
        const newTech = { ...tech, events: [...tech?.events, ...res] };
        const newTechs = techs?.map((tech) => {
          if (tech?.campaign_technology_id === campaign_technology_id) return newTech;
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
      console.log("=== e ==", e);
      setLoading(false);
      pop({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        type: "error",
        timeout: 5000,
      });
    }
  };

  const addFilter = (id) => {
    if (filters.includes(id)) return setFilters(filters.filter((f) => f !== id));
    setFilters([...filters, id]);
  };
  // if (isLoading || loading)
  //   return <GhostLoader loading={isLoading} text="Loading Events..." />;
  const EVENTS_SIZE = (selectedEvents || [])?.length;

  const onModalClose = () => {
    setOpenModal(false);
    setToAddEvents([]);
    setSelectedTech();
  };

  const selectedEventIds = selectedEvents.map((event) => event.event.id);
  const eventsToShow = allEvents.filter(
    (event) => !selectedEventIds.includes(event.id) && filters.includes(event.community.id),
  );

  const chooseTech = (eventKey, techs) => { 
    setEventAndTech({ ...eventAndTech, [eventKey]: techs })
  }


  console.log("Where is the event and tech", eventAndTech)
  const thereAreNoEvents = allEvents?.length === 0;
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
                        <td className="text-ceter">{event?.campaign_technology?.technology?.name}</td>
                        <td className="text-ceter">{formatDate(event?.event?.start_date)}</td>
                        <td className="text-center">
                          <BTN
                            // style={{ marginLeft: 10 }}
                            onClick={(e) => {
                              e.preventDefault();
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
        <Modal.Body style={{ height: 600, minHeight: 200, overflowY: "scroll", paddingBottom: 20 }}>
          {!thereAreNoEvents ? (
            <form>
              <Row className="mt-2" style={{ height: "180px" }}>
                <Col>
                  <Form.Label>Select events to feature on this campaign</Form.Label>

                  <div
                    style={{
                      padding: "10px 5px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    <small>Filter event list by: </small>
                    {campaignCommunities?.map(({ community, alias }) => {
                      const isChecked = filters?.includes(community?.id);
                      return (
                        <small
                          onClick={() => addFilter(community?.id)}
                          className="touchable-opacity"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            marginLeft: 10,
                            textTransform: "capitalize",
                          }}
                        >
                          <input onChange={() => addFilter(community?.id)} type="checkbox" checked={isChecked} />{" "}
                          <span style={{ marginLeft: 4, fontWeight: "bold" }}> {alias || community?.name}</span>
                        </small>
                      );
                    })}
                  </div>
                  <MultiSelect
                    placeholder="Select Events for this campaign"
                    value={toAddEvents}
                    hasSelectAll={false}
                    overrideStrings={{ selectSomeItems: "Select event..." }}
                    ItemRenderer={({ option, checked, onClick }) => {
                      return (
                        <div onClick={() => onClick()} style={{ display: "flex", alignItems: "center" }}>
                          <input type="checkbox" checked={checked} />{" "}
                          <span style={{ margin: "0px 5px" }}> {option?.label}</span>
                          <small
                            onClick={() => window.open(`/events/${option?.value}`, "_blank")}
                            style={{
                              marginLeft: 5,
                              color: "var(--admin-theme-color)",
                              fontWeight: "bold",
                              textDecoration: "underline",
                            }}
                          >
                            See Event <i className="fa fa-long-arrow-right" />{" "}
                          </small>
                        </div>
                      );
                    }}
                    options={(eventsToShow || [])?.map((event) => {
                      return {
                        ...event,
                        value: event?.id,
                        label: `${event?.start_date || ""} ${event?.name} - ${
                          event?.community?.alias || event?.community?.name
                        }`,
                      };
                    })}
                    onChange={(selectedItem) => {
                      // setToAddEvents(limitItems(selectedItem, 1));
                      console.log("This is the selected item", selectedItem)
                      setToAddEvents(selectedItem);
                    }}
                  />
                  <Row className="mt-2">
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
                                  setToAddEvents(toAddEvents?.filter((event) => event?.id !== id));
                                }}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>

          {/* ---------------------------- SELECTING TECHNOLOGIES ------------------------------- */}
                  <Row className="my-4">
                    {toAddEvents?.length ? (
                      <Form.Label>Select the technologies that these events belong to</Form.Label>
                    ) : (
                      <></>
                    )}
                    {toAddEvents?.map((event) => {
                      const values = eventAndTech[event?.id] || [];
                      return (
                        <Col md={12} style={{ marginTop: 15 }}>
                          <>
                            <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>{event?.name}</p>
                            <MultiSelect
                              // value={selectedTech ? [selectedTech] : []}
                              value={values}
                              options={(techs || [])?.map((tech) => {
                                return {
                                  ...tech,
                                  value: tech?.id,
                                  label: tech?.name,
                                };
                              })}
                              hasSelectAll={false}
                              onChange={(selectedItems) => {
                                ///setSelectedTech(limitItems(selectedItem, 1)[0]);
                                console.log("These are the selected", selectedItems);
                                chooseTech(event?.id, selectedItems);
                                // setSelectedTech(selectedItem);
                              }}
                              overrideStrings={{ selectSomeItems: "Select technology..." }}
                            />
                          </>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            </form>
          ) : (
            <NoItems text="The participating communities in this campaign do not have published events" />
          )}
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
}
