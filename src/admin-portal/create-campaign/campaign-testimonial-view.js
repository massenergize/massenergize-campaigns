import React, { useReducer, useState } from "react";
import { Col, Container, Form, Modal, Row, Spinner } from "react-bootstrap";
import TestimonialCard from "../../components/admin-components/TestimonialCard";
import CustomAccordion from "src/components/admin-components/CustomAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd, faAdd } from "@fortawesome/free-solid-svg-icons";
import { fetchAllTechnologyTestimonials } from "src/requests/technology-requests";
import useSWR from "swr";
import Button from "src/components/admin-components/Button";
import { NoItems } from "@kehillahglobal/ui";
import Testimonials from "../../components/admin-components/Testimonials";
import { createCampaignTestimonial, getUsers } from "src/requests/campaign-requests";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { useSelector } from "react-redux";
import { Testimonials as TestPortal } from "./create-technology/Testimonials";

const opts = ["All", "Featured"];
const allOpts = ["On Campaign", "From Communities"];
const USER_TYPES = {
  MYSELF: "Myself",
  ME_USER: "MassEnergize user",
  OTHER: "Other",
};

export function CampaignTestimonialsView({
  campaignDetails,
  setCampaignDetails,
  mutateData,
}) {
  const [show, setShow] = useState({
    tabOne: opts[0],
    tabTwo: allOpts[0],
    showFormFor: "campaign",
  });

  const [openModal, setOpenModal] = useState(false);

  let {
    data: payloadTestimonials,
    isValidating,
    isLoading,
    error,
  } = useSWR(
    "testimonials.list",
    async () => await fetchAllTechnologyTestimonials(campaignDetails?.id),
    {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    },
  );

  const technologies = campaignDetails?.technologies;
  const testimonials = [].concat(...technologies?.map((tech) => tech?.testimonials));

  const [data, setData] = useState(testimonials);

  const portalTestimonials = data?.filter((test) => {
    return test?.is_imported;
  });

  const campaignTestimonials = data?.filter((test) => {
    return !test?.is_imported;
  });

  const featuredTestimonials = testimonials?.filter((test) => {
    return test?.is_featured;
  });

  //   console.log("====== portalTestimonials ====", portalTestimonials);

  const allopts = [
    {
      name: "Testimonials from this campaign",
      data: campaignTestimonials || [],
      addtext: "Create Testimonial",
      platform: "campaign",
      featuredTestimonials:
        campaignTestimonials?.filter((test) => {
          return test?.is_featured;
        }) || [],
      allLength: campaignTestimonials?.length,
      featuredLength: campaignTestimonials?.filter((test) => {
        return test?.is_featured;
      })?.length,
    },
    {
      name: "Testimonials from associated communities",
      data: portalTestimonials || [],
      addtext: "Add Testimonial",
      platform: "communities",
      featuredTestimonials:
        portalTestimonials?.filter((test) => {
          return test?.is_featured;
        }) || [],
      allLength: portalTestimonials?.length,
      featuredLength: portalTestimonials?.filter((test) => {
        return test?.is_featured;
      })?.length,
    },
  ];

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

  //   console.log("===data===", campaignDetails);
  //   console.log("======camapgin testimonials ====", payloadTestimonials);

  const onModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="pb-5">
      <Container>
        <Row>
          <Col>
            <div>
              {opts?.map((opt) => {
                return (
                  <button
                    key={opt}
                    className={`py-2 px-5 text-dark tracking-wide shadow cursor-pointer border test-tab-opts ${
                      opt === show?.tabOne && "test-show-opt"
                    }`}
                    onClick={() => {
                      setShow({ ...opt, tabOne: opt });

                      if (opt === "All") {
                        setData(testimonials);
                      } else {
                        // setData(featuredTestimonials);
                      }
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </Col>
        </Row>

        <div>
          {allopts?.map((chx) => {
            return (
              <Row key={chx?.name} className="mt-5">
                <Col>
                  <div>
                    <div className="flex items-center justify-content-between">
                      <button
                        className="text-black bg-transparent text-muted text-lg tracking-wide"
                        onClick={() => {
                          if (show?.tabTwo !== chx?.name) {
                            setShow({ ...show, tabTwo: chx?.name });
                          } else if (show?.tabTwo === chx?.name) {
                            setShow({ ...show, tabTwo: null });
                          }
                        }}
                      >
                        {chx?.name}
                        <span
                          className={`bg-gradient px-3 tracking-wide ${
                            show?.tabTwo === chx?.name && "rotate-180"
                          }`}
                        >
                          <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z"
                              fill="#2D2D2D"
                            />
                          </svg>
                        </span>
                      </button>
                      {/* {chx?.platform === "campaign" && ( */}
                      <button
                        onClick={() => {
                          setShow({ ...show, showFormFor: chx?.platform });
                          setOpenModal(true);
                        }}
                        className=" px-3 bg-white py-2 flex items-center gap-3 cursor-pointer adtxt"
                      >
                        <span>
                          <FontAwesomeIcon icon={faAdd} />
                        </span>
                        {chx?.addtext}
                      </button>
                      {/* )} */}
                    </div>

                    <div>
                      {show?.tabTwo === chx?.name && (
                        <div className="mt-5">
                          {(chx?.allLength || chx?.featuredLength) > 0 ? (
                            <div>
                              {(show?.tabOne === "All"
                                ? chx?.data
                                : chx?.featuredTestimonials
                              )?.map((test) => {
                                return (
                                  <div key={test?.id}>
                                    <TestimonialCard
                                      test={test}
                                      platform={chx?.platform}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="w-100 flex items-center flex-column text-center">
                              <div>
                                <img src="/img/no-data.svg" alt="" />
                                <h5 className="text-muted">
                                  {chx?.platform === "campaign"
                                    ? `No ${
                                        show?.tabOne === "Featured" ? "Featured" : ""
                                      } Testimonials from this section`
                                    : chx?.platform === "communities" &&
                                      `No ${
                                        show?.tabOne === "Featured" ? "Featured" : ""
                                      } Testimonials from communities`}
                                </h5>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>

        <Modal size={"xl"} show={openModal} onHide={onModalClose}>
          <Modal.Header closeButton>
            <Modal.Title className={"text-sm"}>
              {show?.showFormFor === "campaign"
                ? "Create New Testimonial"
                : "Feature New Testimonials"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "70vh" }}>
            {show?.showFormFor === "campaign" ? (
              <Testimonials campaign={campaignDetails} onModalClose={onModalClose} />
            ) : (
              <TestPortal
                campaign_id={campaignDetails?.id}
                techs={campaignDetails?.technologies}
                onModalClose={onModalClose}
              />
            )}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
