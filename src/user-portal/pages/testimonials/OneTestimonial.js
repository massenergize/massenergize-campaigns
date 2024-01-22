import React, { useEffect, useRef, useState } from "react";
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
import JoinUsForm from "../forms/JoinUsForm";
import NewTestimonialForm from "./NewTestimonialForm";
import { fetchUrlParams, setPageTitle } from "../../../utils/utils";

function OneTestimonial({
  testimonials,
  updateTestimonials,
  campaign,
  init,
  toggleModal,
  authUser,
}) {
  const testimonialRef = useRef();
  const [testimonial, setTestimonial] = useState(LOADING);
  const [error, setError] = useState("");
  const { id, campaign_id } = useParams();
  const [showTestimonialForm, setShowTestimonialForm] = useState(true);

  const navigator = useNavigate();
  const { title, body, image } = testimonial || {};
  const technologies = campaign?.technologies;

  const { user } = authUser || {};

  const groupTestimonials = () => {
    const together = (technologies || []).map((tech) => {
      const items = tech?.testimonials || [];
      return items?.map((t) => ({ ...(t || {}), tech_name: tech?.name }));
    });
    return together.reduce((merged, currentArray) => {
      // Filter out objects with the excluded id
      const filteredObjects = currentArray.filter((obj) => obj.id !== id);
      // Concatenate the filtered objects to the merged array
      return merged.concat(filteredObjects);
    }, []);
  };

  const scrollToSection = () => {
    if (testimonialRef?.current)
      testimonialRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const initiateTestimonialCreation = (userObject) => {
    const { user } = userObject || {};
    if (!user) return triggerRegistration();

    setShowTestimonialForm(!showTestimonialForm);
    if (!showTestimonialForm) scrollToSection();
    // WILL REMOVE LATER WHEN NEW FLOW IS APPROVED
    // toggleModal({
    //   show: true,
    //   title: `Add your testimonial`,
    //   iconName: "fa-message",
    //   component: ({ close }) => <NewTestimonialForm close={close} />,
    //   // modalNativeProps: { size: "md" },
    //   fullControl: true,
    // });
  };

  const triggerRegistration = () => {
    toggleModal({
      show: true,
      title: `Before you add a testimonial, we would like to know you`,
      // iconName: "fa-thumbs-up",

      component: ({ close }) => (
        <JoinUsForm
          close={close}
          callbackOnSubmit={({ user }) => {
            close && close();
            initiateTestimonialCreation(user);
          }}
          confirmText="Continue"
        />
      ),

      fullControl: true,
    });
  };
  const otherTestimonials = groupTestimonials();
  const campaignExists = campaign && campaign !== LOADING;

  const openForm = fetchUrlParams("open")?.trim() === "true";

  useEffect(() => {
    if (openForm) initiateTestimonialCreation();
  }, [openForm]);

  useEffect(() => {
    if (!campaignExists) init(campaign_id);

    var testim = (testimonials || {})[id];
    if (testim) {
      setTestimonial(testim);
      setPageTitle(`Testimonial | ${testim?.title}`);
    } else setTestimonial(LOADING);
    // still fetch event form API to get up-to-date content
    apiCall("/campaigns.technologies.testimonials.info", { id })
      .then((response) => {
        if (!response.success) {
          setError(response.error);
          return console.log("TESTIMONIAL_FETCH_ERROR_BE:", response.error);
        }
        setTestimonial(response.data);
        setPageTitle(`Testimonial | ${response?.data?.title}`);
        updateTestimonials({ ...testimonials, [id]: response.data });
      })
      .catch((e) => console.log("TESTIMONIAL_ERROR_SYNT: ", e.toString()));
  }, [id]);

  if (!id || !testimonial) return <NotFound>{error}</NotFound>;

  if (testimonial === LOADING)
    return <Loading fullPage>Fetching event information...</Loading>;

  const hasOtherTestimonials = otherTestimonials?.length ? true : false;

  return (
    <PageWrapper>
      <SectionTitle>{title || "..."}</SectionTitle>
      <Row>
        <Col lg={9}>
          <p className="mt-4" style={{ textAlign: "justify" }}>
            <span
              dangerouslySetInnerHTML={{ __html: body }}
              style={{ display: "block", overflowY: "hidden" }}
            ></span>
          </p>

          <p
            role="button"
            onClick={() => initiateTestimonialCreation(authUser)}
            className="touchable-opacity"
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              color: "var(--app-medium-green)",
              display: "inline-block",
            }}
          >
            <i className={`fa fa-${showTestimonialForm ? "minus" : "plus"}`}></i>{" "}
            {showTestimonialForm
              ? "Hide testimonial form"
              : "Add your own testimonial"}
          </p>
          <div ref={testimonialRef}>
            {showTestimonialForm && (
              <div
              className="testi-form-wrapper"
                // style={{ border: "1px dashed #e6e2e2", marginTop: 40, padding: 20 }}
              >
                <SectionTitle>Add your own testimonial</SectionTitle>
                <NewTestimonialForm />
              </div>
            )}
          </div>
        </Col>
        <Col lg={3} className="mt-3">
          {image?.url && (
            <img
              className="elevate-float-pro mt-3"
              src={image?.url}
              style={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 10,
                marginBottom: 20,
              }}
              alt={image?.name || "Testimonial Image"}
            />
          )}
          {hasOtherTestimonials && (
            <div
              style={{
                border: "solid 1px var(--app-deep-green)",
                padding: 10,
                //   marginBottom: 10,
                background: "var(--app-deep-green)",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
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
          )}

          {hasOtherTestimonials && (
            <ul
              style={{
                listStyleType: "",
                padding: "15px 15px",
                border: "solid 1px green",
                listStyle: "none",
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 6,
              }}
            >
              {otherTestimonials?.map((item, index) => {
                var title = item?.title;
                title = title ? `${title} (${item?.tech_name})` : "...";
                return (
                  <li
                    role={"button"}
                    tabIndex={0}
                    key={index?.toString()}
                    onClick={() =>
                      navigator(
                        `/campaign/${item?.campaign?.id}/technology/testimonial/${item?.id}`,
                      )
                    }
                    className="touchable-opacity"
                    style={{
                      color: "var(--app-deep-green)",

                      fontWeight: "bold",
                      fontSize: 14,
                      textDecoration: "underline",
                      marginBottom: 8,
                    }}
                  >
                    <span>
                      {index + 1}. {`${item?.title} ` || "..."}
                    </span>
                    <span
                    // style={{  marginLeft: 5 }}
                    >
                      ({item?.tech_name})
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
          <div
            onClick={() => initiateTestimonialCreation(authUser)}
            className="mt-2 touchable-opacity"
            style={{
              background: "var(--app-medium-green)",
              padding: 10,
              color: "white",
              textAlign: "center",
              borderRadius: 5,
              marginBottom: 15,
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
  return {
    testimonials: state.testimonials,
    campaign: state.campaign,
    authUser: state.user,
  };
};
const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      updateTestimonials: updateTestimonialsObjAction,
      init: appInnitAction,
      toggleModal: toggleUniversalModal,
    },
    dispatch,
  );
};
export default connect(mapState, mapDispatch)(OneTestimonial);
