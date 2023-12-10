import React, { useEffect, useState } from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { useParams } from "react-router-dom";
import { LOADING } from "../../../utils/Constants";
import NotFound from "../error/404";
import Loading from "../../../components/pieces/Loading";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { apiCall } from "../../../api/messenger";
import { updateEventsObj } from "../../../redux/actions/actions";
import { formatTimeRange } from "../../../utils/utils";
function OneEvent({ events, updateEvents }) {
  const [event, setEvent] = useState(LOADING);
  const [error, setError] = useState("");
  const { eventId } = useParams();
  const id = eventId;

  const { name, start_date_and_time, description, end_date_and_time } =
    event || {};
  useEffect(() => {
    var ev = (events || {})[id];
    if (ev) setEvent(ev);

    // still fetch event form API to get up-to-date content
    apiCall("/events.info", { event_id: id })
      .then((response) => {
        if (!response.success) {
          setError(response.error);
          return console.log("EVENT_FETCH_ERROR_BE:", response.error);
        }
        setEvent(response.data);
        updateEvents({ ...events, [id]: response.data });
      })
      .catch((e) => console.log("EVENT_ERROR_SYNT: ", e.toString()));
  }, []);

  if (!id || !event) return <NotFound>{error}</NotFound>;

  if (event === LOADING)
    return <Loading fullPage>Fetching event information...</Loading>;

  return (
    <PageWrapper>
      <SectionTitle>{name || "..."}</SectionTitle>
      <Row>
        <Col lg={9}>
          <img
            className="elevate-float-pro mt-3"
            src={
              "https://massenergize-prod-files.s3.amazonaws.com/media/new_image-231024-210048"
            }
            style={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />

          <p className="mt-4" style={{ textAlign: "justify" }}>
            <span
              dangerouslySetInnerHTML={{ __html: description }}
              style={{ display: "block", overflowY: "hidden" }}
            ></span>
            {/* <span
              //   onClick={() => setHeight(readMore ? "100%" : 100)}
              className="touchable-opacity"
              style={{
                fontWeight: "bold",
                color: "var(--app-orange)",
                textDecoration: "underline",
              }}
            >
              Read More...
            </span> */}
          </p>
        </Col>
        <Col lg={3} className="mt-2">
          <div>
            <h6
              style={{ color: "var(--app-medium-green)", fontWeight: "bold" }}
            >
              Date
            </h6>
            <small>
              {formatTimeRange(start_date_and_time, end_date_and_time)}
            </small>
          </div>

          <div
            className="mt-2 touchable-opacity"
            style={{
              background: "var(--app-medium-green)",
              padding: 10,
              color: "white",
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <p style={{ margin: 0 }}>Register</p>
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
}

const mapState = (state) => {
  return { events: state.events };
};

const mapDispatch = (dispatch) => {
  return bindActionCreators({ updateEvents: updateEventsObj }, dispatch);
};

export default connect(mapState, mapDispatch)(OneEvent);
