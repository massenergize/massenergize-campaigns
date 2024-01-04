// react page
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import {
  addTechnologyEvent,
  fetchEvents,
} from "../../../requests/technology-requests";
import { Spinner } from "@kehillahglobal/ui";
import { Col, Container, Row, FormLabel, Form, Button } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { Dropdown } from "@kehillahglobal/ui";
import Chip from "src/components/admin-components/Chip";
import { ProgressButton } from "src/components/progress-button/progress-button";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";

function TechnologyEvents({}) {
  const navigate = useNavigate();
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { blow, pop } = useBubblyBalloons();

  const community_ids = [1, 2, 3];

  const {
    data: allEvents,
    error: fetchError,
    isLoading,
  } = useSWR("events.list", () => fetchEvents(community_ids), {
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 3000,
  });

  const handleSaveEvents = async () => {
    setLoading(true);
    try {
      let toSend = {
        technology_id: "1",
        event_ids: selectedEvents.map((event) => event?.id),
      };
      const savedItems = await addTechnologyEvent(toSend);
      if (savedItems) {
        setLoading(false);
        blow({
          title: "Success",
          message: "Events saved successfully",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
        setError(e);
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
            Choose one or more communities for your campaign from the dropdown
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
            value={selectedEvents}
            onChange={(val) => setSelectedEvents(val)}
            valueRenderer={(selected, _options) => {
              if (selected.length === _options.length) {
                return "All Events Selected";
              }
              if (selected.length > 2) {
                return `${selected.length} Events Selected`;
              }
              return selected
                .map(({ label }) => label)
                .join(", ")
                .concat(" Selected");
            }}
            labelledBy={"Select Fruits"}
            className={"event-select"}
          />
        </Form>

        <Row className="mt-4">
          <Col>
            <Row>
              {selectedEvents?.map((community) => {
                return (
                  <Col sm={"auto mb-2"}>
                    <Chip
                      text={community?.name}
                      icon={community?.icon}
                      id={community?.id}
                      size={"sm"}
                      className="mr-2 mb-5"
                      onDismiss={(id, text) => {
                        setSelectedEvents(
                          selectedEvents?.filter(
                            (community) => community?.id !== id
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
            <ProgressButton
              loading={loading}
              disabled={loading}
              onClick={handleSaveEvents}
            >
              Save Changes
            </ProgressButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TechnologyEvents;
