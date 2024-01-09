import React, { useState } from "react";
import { Col, Container, FormLabel, Row, Button as BTN } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Button from "src/components/admin-components/Button";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { daysOfWeek, monthsOfYear } from "src/utils/Constants";
import {
  AddSelectedEvents,
  fetchAllCampaignTechnologyEvents,
} from "src/requests/campaign-requests";
import useSWR from "swr";
import GhostLoader from "src/components/admin-components/GhostLoader";
import { useParams } from "react-router-dom";



export function CampaignEventsView({ events, campaign }) { //@Todo: Add a mutate to update main

	const [loading, setLoading] = useState(false);
	const {id} = useParams()
	
	const {
		data: allEvents,
		isLoading,
		error,
	} = useSWR("campaigns.technologies.events.list", async () =>
    fetchAllCampaignTechnologyEvents(campaign?.id || id)
	);
	
	const existingEvents = [...campaign?.technologies?.map((tech) => tech?.events)].flat()
  const [selectedEvents, setSelectedEvents] = useState(existingEvents?.map(({technology_event}) => technology_event));
  const { blow, pop } = useBubblyBalloons();

  const handleRemove = (data) => {
    const filteredTechnologies = selectedEvents.filter(
      (testimonial) => testimonial.id !== data.id
    );
    setSelectedEvents(filteredTechnologies);
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
        campaign_id: campaign?.id || id,
        technology_event_ids: selectedEvents.map((event) => event.id),
      };

      const res = await AddSelectedEvents(payload);

      if (res) {
        setLoading(false);
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

  return (
    <Container style={{ height: "100vh" }}>
      <form>
        <Row>
          <Col>
            <FormLabel>
              Select the events that resonate with your campaign from the
              options below, and showcase them on your campaign page with just a
              click!
            </FormLabel>
          </Col>
        </Row>
        <Row className="" style={{ height: "180px" }}>
          <Col>
            <MultiSelect
              options={allEvents?.map((event) => {
                return {
                  ...event,
                  label: `${event?.event?.name} - ${event?.technology?.name}` ,
                  value: event?.id,
                };
              })}
              value={selectedEvents?.map((event) => {
                return {
                  ...event,
                  label: `${event?.event?.name} - ${event?.technology?.name}`,
                  value: event?.id,
                };
              })}
              valueRenderer={(selected, _options) => {
                if (selected?.length < 1) {
                  return "No Events selected...";
                }

                if (selected?.length === allEvents?.length) {
                  return "All Events Selected";
                }
                if (selected?.length >= 3) {
                  return `${selected?.length} Events Selected`;
                }

                return selected.map(({ label, id }, i) => {
                  return label + (i < allEvents?.length ? ", " : "");
                });
              }}
              onChange={(val) => {
                setSelectedEvents(val);
              }}
              labelledBy="Select"
            />
          </Col>
        </Row>

        <Row
          className=" pb-4 justify-content-start"
          style={{ marginTop: "-5rem" }}
        >
          {EVENTS_SIZE > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">
                      #
                    </th>
                    <th className="text-center" scope="col">
                      Image
                    </th>
                    <th className="text-center" scope="col">
                      Name
                    </th>
                    <th className="text-center" scope="col">
                      Technology
                    </th>
                    <th className="text-center" scope="col">
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
                        <td className="text-center" >{index+1}</td>
                        <td className="text-center">
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
                        <td className="text-center">{event?.event?.name}</td>
                        <td className="text-center">{event?.technology?.name}</td>
                        <td className="text-center">
                          {formatDate(event?.event?.start_date)}
                        </td>
                        <td className="text-center">
                          <BTN
                            // style={{ marginLeft: 10 }}
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to remove this Event?"
                                )
                              ) {
                                handleRemove(event);
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
          ) : null}
        </Row>

        {
          <Row className="mt-2 py-4 justify-content-end">
            <Col className="mt-2 py-4">
              <Button
                text="Save Changes"
                loading={loading}
                disabled={loading}
                onSubmit={handleSubmit}
                rounded={false}
              />
            </Col>
          </Row>
        }
      </form>
    </Container>
  );
}
