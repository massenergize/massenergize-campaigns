import React, { useEffect, useState } from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LOADING } from "../../../utils/Constants";
import {
  appInnitAction,
  toggleUniversalModal,
  updateTestimonialsObjAction,
} from "../../../redux/actions/actions";
import NotFound from "../error/404";
import Loading from "../../../components/pieces/Loading";
import { apiCall } from "../../../api/messenger";

function OneTestimonial({
  testimonials,
  updateTestimonials,
  campaign,
  init,
  toggleModal,
}) {
  const [testimonial, setTestimonial] = useState(LOADING);
  const [error, setError] = useState("");
  const { id, campaign_id } = useParams();

  const navigator = useNavigate();
  const { title, body, image } = testimonial || {};
  const technologies = campaign?.technologies;

  const groupTestimonials = () => {
    const together = (technologies || []).map((tech) => tech.testimonials);
    return together.reduce((merged, currentArray) => {
      // Filter out objects with the excluded id
      const filteredObjects = currentArray.filter((obj) => obj.id !== id);
      // Concatenate the filtered objects to the merged array
      return merged.concat(filteredObjects);
    }, []);
  };

  const otherTestimonials = groupTestimonials();

  const campaignExists = campaign && campaign !== LOADING;

  useEffect(() => {
    if (!campaignExists) init(campaign_id);

    var testim = (testimonials || {})[id];
    if (testim) setTestimonial(testim);
    else setTestimonial(LOADING);

    // still fetch event form API to get up-to-date content
    apiCall("/campaigns.technologies.testimonials.info", { id })
      .then((response) => {
        if (!response.success) {
          setError(response.error);
          return console.log("TESTIMONIAL_FETCH_ERROR_BE:", response.error);
        }
        setTestimonial(response.data);
        updateTestimonials({ ...testimonials, [id]: response.data });
      })
      .catch((e) => console.log("TESTIMONIAL_ERROR_SYNT: ", e.toString()));
  }, [id]);

  if (!id || !testimonial) return <NotFound>{error}</NotFound>;

  if (testimonial === LOADING)
    return <Loading fullPage>Fetching event information...</Loading>;

  return (
    <PageWrapper>
      <SectionTitle>{title || "..."}</SectionTitle>
      <Row>
        <Col lg={9}>
          <img
            className="elevate-float-pro mt-3"
            src={image?.url}
            style={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />

          <p className="mt-4" style={{ textAlign: "justify" }}>
            <span
              dangerouslySetInnerHTML={{ __html: body }}
              style={{ display: "block", overflowY: "hidden" }}
            ></span>
          </p>
        </Col>
        <Col lg={3} className="mt-3">
          <div
            style={{
              border: "solid 1px var(--app-deep-green)",
              padding: 10,
              //   marginBottom: 10,
              background: "var(--app-deep-green)",
            }}
          >
            <h6
              style={{
                color: "white",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Other Testimonials
            </h6>
          </div>

          <ul
            style={{
              listStyleType: "",
              padding: "15px 15px",
              border: "solid 1px green",
              listStyle: "none",
            }}
          >
            {otherTestimonials?.map((item, index) => {
              return (
                <li
                  key={index?.toString()}
                  onClick={() =>
                    navigator(
                      `/campaign/${item?.campaign?.id}/technology/testimonial/${item?.id}`
                    )
                  }
                  className="touchable-opacity"
                  style={{
                    color: "var(--app-medium-green)",

                    fontWeight: "bold",
                    fontSize: 14,
                    textDecoration: "underline",
                    marginBottom: 8,
                  }}
                >
                  {item?.title || "..."}
                </li>
              );
            })}
          </ul>
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
            <p style={{ margin: 0, fontWeight: "bold" }}>Add Testimonial</p>
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
}

const mapState = (state) => {
  return { testimonials: state.testimonials, campaign: state.campaign };
};
const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      updateTestimonials: updateTestimonialsObjAction,
      init: appInnitAction,
      toggleModal: toggleUniversalModal,
    },
    dispatch
  );
};
export default connect(mapState, mapDispatch)(OneTestimonial);
