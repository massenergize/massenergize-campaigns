import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../assets/styles/admin-styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { MultiSelect } from "react-multi-select-component";
import {
  addTestimonials,
  fetchAllTechnologyTestimonials,
} from "../../../requests/technology-requests";
import { Spinner } from "@kehillahglobal/ui";
import useSWR from "swr";
import Button from "src/components/admin-components/Button";
import { FormLabel } from "react-bootstrap";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";

const Testimonials = ({campaign_id,tech_id,techObject,updateTechObject}) => {
  let existing = [...(techObject?.testimonials || [])?.map((testimonial) => {
    return {...testimonial, id: testimonial?.testimonial}
  }),].flat();

  const [loading, setLoading] = useState(false);
  const { blow, pop } = useBubblyBalloons();

  const [selectedTestimonials, setSelectedTestimonials] = useState(existing||[]);



  let {
    data: payloadTestimonials,
    isValidating,
    isLoading,
    error,
  } = useSWR(
    "testimonials.list",
    () => fetchAllTechnologyTestimonials(campaign_id),
    {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    }
  );

  const testimonials = payloadTestimonials || [];


  const originalTestimonials = testimonials || [];
  const originalTestimonialSet = new Set(originalTestimonials?.map((tech) => tech.id));

  const handleRemove = (data) => {
    const filteredTechnologies = selectedTestimonials.filter(
      (testimonial) => testimonial.id !== data.id
    );
    setSelectedTestimonials(filteredTechnologies);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        campaign_id: campaign_id,
        technology_id: tech_id,
        testimonial_ids: selectedTestimonials.map((testimonial) => testimonial.id),
      };

      const res = await addTestimonials(payload);

      if (res) {
        setLoading(false);
		updateTechObject(res);
        blow({
          title: "Success",
          message: "Campaign Testimonials updated successfully.",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        type: "error",
        timeout: 5000,
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

  const TESTIMONIALS_SIZE = (selectedTestimonials || [])?.length;

  return (
    <Container>
      <form>
        <Row>
          <Col>
            <FormLabel>
              Choose one or more testimonials for your campaign from the
              dropdown below.
            </FormLabel>
          </Col>
        </Row>
        <Row className="mb-4 pb-4" style={{ height: "200px" }}>
          <Col>
            <MultiSelect
              options={testimonials?.map((testimonial) => {
                return {
                  ...testimonial,
                  label: testimonial.title,
                  value: testimonial.id,
                };
              })}
              value={selectedTestimonials?.map((testimonial) => {
                return {
                  ...testimonial,
                  label: testimonial.title, 
                  value: testimonial.id,
                }
              })}
              valueRenderer={(selected, _options) => {
                if (selected?.length < 1) {
                  return "Select Testimonials...";
                }

                if (selected?.length === testimonials?.length) {
                  return "All Selected";
                }
                if (selected?.length > 3) {
                  return `${selected?.length} Selected`;
                }

                return selected.map(({ title, id }, i) => {
                  return title + (i < testimonials?.length ? ", " : "");
                });
              }}
              onChange={(val) => {
                console.log("== vale===", val);
                setSelectedTestimonials(val);
              }}
              labelledBy="Select"
            />
          </Col>
        </Row>

        <Row
          className="mt-4 pb-4 justify-content-start"
          style={{ marginTop: "50rem" }}
        >
          {TESTIMONIALS_SIZE > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Title</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Community</th>
                    <th scope="col">Live</th>
                    <th scope="col">User</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedTestimonials || [])?.map((testimonial) => {
                    return (
                      <tr className="text-sm">
                        {/* <th scope="row">1</th> */}
                        <td>{testimonial?.id}</td>
                        <td>{testimonial?.created_at}</td>
                        <td>{testimonial?.title}</td>
                        <td>{testimonial?.rank}</td>
                        <td>{testimonial?.community?.name}</td>
                        <td>
                          <p
                            className={
                              testimonial?.is_published &&
                              testimonial?.is_approved
                                ? "p-2 bg-success text-white text-rounded"
                                : !testimonial?.is_published &&
                                  testimonial?.is_approved
                                ? "p-2 bg-secondary text-white text-rounded"
                                : !testimonial?.is_published &&
                                  !testimonial?.is_approved &&
                                  "p-2 bg-danger text-white  text-rounded"
                            }
                          >
                            {testimonial?.is_published &&
                            testimonial?.is_approved
                              ? "Yes"
                              : !testimonial?.is_published &&
                                testimonial?.is_approved
                              ? "No"
                              : !testimonial?.is_published &&
                                !testimonial?.is_approved &&
                                "Not Approved"}
                          </p>
                        </td>
                        <td className="text-capitalize">
                          {testimonial?.user?.full_name}
                        </td>
                        <td>{testimonial?.action?.title}</td>
                        <td>
                          <span
                            onClick={() => {
                              handleRemove(testimonial);
                            }}
                            className="image-close-btn d-flex"
                          >
                            <FontAwesomeIcon
                              icon={faClose}
                              className={"m-auto"}
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : null}
        </Row>

        {
          <Row className="mt-4 py-4 justify-content-end">
            <Col className="mt-4 py-4">
              <Button
                text="Save Changes"
                loading={loading}
                disabled={loading}
                onSubmit={handleSubmit}
                rounded={false}
              />
            </Col>
          </Row>
        }
      </form>
    </Container>
  );
};

export default Testimonials;
