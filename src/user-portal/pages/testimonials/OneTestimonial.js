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
  getStaticText,
  toggleUniversalModal,
  updateTestimonialsObjAction,
} from "../../../redux/actions/actions";
import NotFound from "../error/404";
import Loading from "../../../components/pieces/Loading";
import { apiCall } from "../../../api/messenger";
import JoinUsForm from "../forms/JoinUsForm";
import NewTestimonialForm from "./NewTestimonialForm";
import { fetchUrlParams, setPageTitle } from "../../../utils/utils";

function OneTestimonial({ testimonials, updateTestimonials, campaign, init, toggleModal, authUser }) {
  const { pages, modals } = getStaticText();
  const one_testimonial_page = pages?.one_testimonial_page;
  const { sections, loader } = one_testimonial_page || {};
  const testimonialRef = useRef();
  const [testimonial, setTestimonial] = useState(LOADING);
  const [error, setError] = useState("");
  const { id, campaign_id } = useParams();
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);

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
    if (testimonialRef?.current) testimonialRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
      title: modals?.preTestimonial?.title?.text || `Before you add a testimonial, we would like to know you`,
      // iconName: "fa-thumbs-up",

      component: ({ close }) => (
        <JoinUsForm
          close={close}
          callbackOnSubmit={({ user }) => {
            close && close();
            initiateTestimonialCreation(user);
          }}
          confirmText={modals?.preTestimonial?.buttons?.continue?.text || "Continue"}
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
    return <Loading fullPage>{loader?.text || "Fetching testimonial information..."}</Loading>;

  const hasOtherTestimonials = otherTestimonials?.length ? true : false;

  return (
    <PageWrapper>
      <SectionTitle>{title || "..."}</SectionTitle>
      <Row>
        <Col lg={9}>
          <p className="mt-4 body-font" style={{ textAlign: "justify" }}>
            <span dangerouslySetInnerHTML={{ __html: body }} style={{ display: "block", overflowY: "hidden" }}></span>
          </p>

          <p
            role="button"
            onClick={() => initiateTestimonialCreation(authUser)}
            className="touchable-opacity body-font"
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              color: "var(--app-main-color)",
              display: "inline-block",
            }}
          >
            <i className={`fa fa-${showTestimonialForm ? "minus" : "plus"}`}></i>{" "}
            {showTestimonialForm
              ? sections?.call_to_hide_testimonial?.text || " Hide testimonial form"
              : sections?.call_to_add_testimonial?.text || "Add your own testimonial"}
          </p>
          <div ref={testimonialRef}>
            {showTestimonialForm && (
              <div
                className="testi-form-wrapper"
                // style={{ border: "1px dashed #e6e2e2", marginTop: 40, padding: 20 }}
              >
                <SectionTitle>{sections?.form?.title?.text || "Add your own testimonial"}</SectionTitle>
                <NewTestimonialForm cancel={() => setShowTestimonialForm(!showTestimonialForm)} />
              </div>
            )}
          </div>
        </Col>
        <Col lg={3} className="mt-3">
          {image?.url && (
            <img
              className=" mt-3"
              src={image?.url}
              style={{
                width: "100%",
                height: 150,
                objectFit: "contain",
                borderRadius: 10,
                marginBottom: 20,
              }}
              alt={image?.name || "Testimonial Image"}
            />
          )}
          {hasOtherTestimonials && (
            <div
              style={{
                border: "solid 1px var(--app-main-color)",
                padding: 10,
                //   marginBottom: 10,
                background: "var(--app-main-color)",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            >
              <h6
                className="body-font"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {sections?.sidebar?.other_testimonials?.text || " Other Testimonials"}
              </h6>
            </div>
          )}

          {hasOtherTestimonials && (
            <ul
              style={{
                listStyleType: "",
                padding: "15px 15px",
                border: "solid 1px var(--app-main-color)",
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
                    onClick={() => navigator(`/campaign/${item?.campaign?.id}/technology/testimonial/${item?.id}`)}
                    className="touchable-opacity small-font"
                    style={{
                      color: "var(--app-main-color)",
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
            className="mt-2 touchable-opacity body-font phone-vanish"
            style={{
              background: "var(--app-main-color)",
              padding: 10,
              color: "white",
              textAlign: "center",
              borderRadius: 5,
              marginBottom: 15,
            }}
          >
            <p style={{ margin: 0, fontWeight: "bold" }}>
              {showTestimonialForm
                ? sections?.sidebar?.call_to_hide_testimonial?.text || "Hide Form"
                : sections?.sidebar?.call_to_add_testimonial?.text || "Add Testimonial"}
            </p>
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
