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
import { appInnitAction, getStaticText, updateEventsObj } from "../../../redux/actions/actions";
import { formatDate, formatTime, formatTimeRange, setPageTitle } from "../../../utils/utils";
import AddToGoogleCalendar from "./AddToGoogleCalendar";
import ICSEventCreator from "./ICSEventCreator";
import { translatedEventType } from "./EventBox";
import { DEFAULT_THEME_COLORS, THEME_COLORS } from "../../../utils/Values";

function OneEvent({ events, updateEvents, init, campaign }) {
  const { pages } = getStaticText();
  const one_event_page = pages?.one_event_page || {};
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

  if (event === LOADING)
    return (
      <Loading fullPage noText>
        {one_event_page?.loader?.text || "Fetching event information..."}
      </Loading>
    );

  const templateKey = campaign?.template_key;
  const theme = THEME_COLORS[templateKey] || DEFAULT_THEME_COLORS;

  return (
    <PageWrapper noNavBar noFooter theme={theme}>
      <SectionTitle className={"text-large"} style={{ color: theme?.color }}>
        {name || "..."}
      </SectionTitle>
      <Row>
        <Col lg={4} className="mt-2">
          {image?.url && (
            <img
              className="mt-3"
              src={image?.url}
              style={{
                width: "100%",
                borderRadius: 10,
                marginBottom: 10,
              }}
              alt={"event"}
            />
          )}
          <div>
            <p
              className="body-font fw-medium text-accent-3"
              style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            >
              <span>{formatDate(start_date_and_time)}</span>
              <span style={{ marginLeft: "auto" }}>{formatTime(start_date_and_time, "K:mm aa")}</span>
            </p>
          </div>
          {event?.event_type && (
            <div style={{ marginTop: 10, color: theme?.color || "var(--app-main-color)" }}>
              <p>{translatedEventType(event?.event_type, one_event_page?.sections?.card)}</p>
            </div>
          )}

          <div>
            <h6 style={{ color: theme?.color || "var(--app-main-color)" }}>
              <i className=" fa fa-download" />{" "}
              {one_event_page?.sections?.call_to_download?.text || "Download to your calendar"}
            </h6>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ICSEventCreator data={event} staticT={one_event_page?.sections} />{" "}
              <AddToGoogleCalendar data={event} staticT={one_event_page?.sections} />
            </div>
          </div>

          {external_link && (
            <div
              onClick={(e) => {
                e.preventDefault();
                window.open(external_link || "#", "_blank");
              }}
              className="mt-2 touchable-opacity body-font"
              style={{
                background: theme?.color || "var(--app-main-color)",
                padding: 10,
                color: "white",
                textAlign: "center",
                borderRadius: 5,
              }}
            >
              <p style={{ margin: 0 }}>{one_event_page?.sections?.call_to_register?.text || "Register / Join"}</p>
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
