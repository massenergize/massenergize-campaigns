import React, { useEffect, useState } from "react";
import PageWrapper from "../wrappers/PageWrapper";
import carPhoto from "./../../../assets/imgs/car.jpeg";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../../components/pieces/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LOADING } from "../../../utils/Constants";
import { updateTestimonialsObjAction } from "../../../redux/actions/actions";
import NotFound from "../error/404";
import Loading from "../../../components/pieces/Loading";
import { apiCall } from "../../../api/messenger";
function OneTestimonial({ testimonials, updateTestimonials }) {
  const [testimonial, setTestimonial] = useState(LOADING);
  const [error, setError] = useState("");
  const { id } = useParams();

  const { title, body, file } = testimonial || {};
  useEffect(() => {
    var testim = (testimonials || {})[id];
    if (testim) setTestimonial(testim);

    // still fetch event form API to get up-to-date content
    apiCall("/testimonials.info", { id })
      .then((response) => {
        console.log("LEts seee RESPONSE", response);
        if (!response.success) {
          setError(response.error);
          return console.log("TESTIMONIAL_FETCH_ERROR_BE:", response.error);
        }
        setTestimonial(response.data);
        updateTestimonials({ ...testimonials, [id]: response.data });
      })
      .catch((e) => console.log("TESTIMONIAL_ERROR_SYNT: ", e.toString()));
  }, []);

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
            {[2, 3, 4, 3, 2, 2, 3, 4, 5, 5, 5].map((item, index) => {
              return (
                <li
                  style={{
                    color: "var(--app-medium-green)",

                    fontWeight: "bold",
                    fontSize: 14,
                    textDecoration: "underline",
                    marginBottom: 8,
                  }}
                >
                  Testimonial Number - {index}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </PageWrapper>
  );
}

const mapState = (state) => {
  return { testimonials: state.testimonials };
};
const mapDispatch = (dispatch) => {
  return bindActionCreators(
    { updateTestimonials: updateTestimonialsObjAction },
    dispatch
  );
};
export default connect(mapState, mapDispatch)(OneTestimonial);
