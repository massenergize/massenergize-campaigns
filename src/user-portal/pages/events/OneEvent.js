import React, { useEffect, useState } from "react";
import PageWrapper from "../wrappers/PageWrapper";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { useParams } from "react-router-dom";
import { LOADING } from "../../../utils/Constants";
import NotFound from "../error/404";
import Loading from "../../../components/pieces/Loading";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { apiCall } from "../../../api/messenger";
import { appInnitAction, updateEventsObj } from "../../../redux/actions/actions";
import { formatDate, formatTimeRange, setPageTitle } from "../../../utils/utils";

function OneEvent({ events, updateEvents, init, campaign }) {
  const [event, setEvent] = useState(LOADING);
  const [error, setError] = useState("");
  const { eventId, campaign_id } = useParams();
  const id = eventId;

  const { name, start_date_and_time, description, end_date_and_time, image, external_link } = event || {};
  const campaignExists = campaign && campaign !== LOADING;

  useEffect(() => {
    if (!campaignExists) init(campaign_id);

    var ev = (events || {})[id];
    if (ev) {
      setEvent(ev);
      setPageTitle(` Event | ${ev?.name}`);
    }
    // still fetch event form API to get up-to-date content
    apiCall("/events.info", { event_id: id })
      .then((response) => {
        if (!response.success) {
          setError(response.error);
          return console.log("EVENT_FETCH_ERROR_BE:", response.error);
        }

        setEvent(response.data);
        setPageTitle(` Event | ${response?.data?.name}`);
        updateEvents({ ...events, [id]: response.data });
      })
      .catch((e) => console.log("EVENT_ERROR_SYNT: ", e.toString()));
  }, [campaign_id]);

  if (!id || !event) return <NotFound>{error}</NotFound>;

  if (event === LOADING) return <Loading fullPage>Fetching event information...</Loading>;

  return (
    <PageWrapper>
      <SectionTitle className={"text-large"}>{name || "..."}</SectionTitle>
      <Row>
        <Col lg={4} className="mt-2">
          <img
            className="mt-3"
            src={image?.url || "/img/fallback-img.png"}
            style={{
              width: "100%",
              height: 200,
              // ...(image?.url ? { minHeight: 200 } : { height: 200 }),
              objectFit: "contain",
              borderRadius: 10,
              marginBottom: 10,
            }}
            alt={"event"}
          />
          <div>
            {/* <h6 className="small-font" style={{ fontWeight: "", color: "black" }}>
              <span>Date</span>
            </h6> */}

            <p className="body-font fw-medium text-accent-3">
              <span>{formatDate(start_date_and_time)}</span>
            </p>
          </div>
          {event?.event_type && (
            <div style={{ marginTop: 10, color: "var(--app-main-color)" }}>
              <p>{event?.event_type}</p>
            </div>
          )}

          {external_link && (
            <div
              onClick={(e) => {
                e.preventDefault();
                window.open(external_link || "#", "_blank");
              }}
              className="mt-2 touchable-opacity body-font"
              style={{
                background: "var(--app-main-color)",
                padding: 10,
                color: "white",
                textAlign: "center",
                borderRadius: 5,
              }}
            >
              <p style={{ margin: 0 }}>Register / Join</p>
            </div>
          )}
        </Col>
        <Col lg={8}>
          <p className="mt-4 body-font" style={{ textAlign: "justify" }}>
            <span
              dangerouslySetInnerHTML={{ __html: description }}
              style={{ display: "block", overflowY: "hidden" }}
            ></span>
          </p>
        </Col>
      </Row>
    </PageWrapper>
  );
}

const mapState = (state) => {
  return {
    events: state.events,
    campaign: state.campaign,
  };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators({ updateEvents: updateEventsObj, init: appInnitAction }, dispatch);
};

export default connect(mapState, mapDispatch)(OneEvent);
