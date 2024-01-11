// react page
import React, { useState } from "react";
import useSWR from "swr";
import {
  addTechnologyEvent,
  fetchEvents,
} from "../../../requests/technology-requests";
import { Spinner } from "@kehillahglobal/ui";
import { Col, Container, Row, FormLabel, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Chip from "src/components/admin-components/Chip";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import Button from "../../../components/admin-components/Button";

function TechnologyEvents ({campaign_id, tech_id,techObject, updateTechObject}) {
  let existing = [...(techObject?.events||[])?.map((tech) => tech?.event)].flat();

  const [selectedEvents, setSelectedEvents] = useState(existing || []);
  const [loading, setLoading] = useState(false);


  const { blow, pop } = useBubblyBalloons();
  const {
    data: allEvents,
    isLoading,
  } = useSWR("campaigns.communities.events.list", () => fetchEvents(campaign_id), {
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 3000,
  });


  const handleSaveEvents = async () => {
    setLoading(true);
    try {
      let toSend = {
        technology_id: tech_id,
        event_ids: selectedEvents.map((event) => event?.id),
      };
      const savedItems = await addTechnologyEvent(toSend);
      if (savedItems) {
        setLoading(false);
        updateTechObject(savedItems);
        blow({
          title: "Success",
          message: "Events saved successfully",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: "Error saving events",
        type: "error",
        duration: 5000,
      });
    }
  };

  if (isLoading)
    return (
      <div
        className=""
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType" />
      </div>
    );

  return (
    <div style={{ height: "100vh" }}>
      <Container>
        <Form>
          <FormLabel>
            Choose one or more Events for this technology from the dropdown
            below.
          </FormLabel>

          <MultiSelect
            options={(allEvents || []).map((event) => {
              return {
                ...event,
                value: event?.id,
                label: event?.name,
              };
            })}
            hasSelectAll={true}
            value={selectedEvents?.map((event) => {
              return {
                ...event,
                value: event?.id,
                label: event?.name,
              };
            })}
            onChange={(val) => setSelectedEvents(val)}
            valueRenderer={(selected, _options) => {
            if(selected.length === 0) return "Select Events"
            if (selected.length === _options.length) return "All Events Selected";
            if (selected.length > 2)  return `${selected.length} Events Selected`;
            return selected?.map(({ label }) => label)?.join(", ").concat(" Selected");
            }}

            className={"event-select"}
          />
        </Form>

        <Row className="mt-4">
          <Col>
            <Row>
              {selectedEvents?.map((event) => {
                return (
                  <Col sm={"auto mb-2"}>
                    <Chip
                      text={event?.name}
                      icon={event?.icon}
                      id={event?.id}
                      size={"sm"}
                      className="mr-2 mb-5"
                      onDismiss={(id) => {
                        setSelectedEvents(
                          selectedEvents?.filter(
                            (event) => event?.id !== id
                          )
                        );
                      }}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row className="mt-4 justify-content-end">
          <Col>
            <Button
              text="Save Changes"
              loading={loading}
              disabled={loading}
              onSubmit={handleSaveEvents}
              rounded={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TechnologyEvents;
