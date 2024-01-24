import React, { useState } from "react";
import "../../../assets/styles/admin-styles.scss";
import {
  addTestimonials,
  fetchAllTechnologyTestimonials,
} from "../../../requests/technology-requests";
import { Spinner } from "@kehillahglobal/ui";
import useSWR from "swr";
import Button from "src/components/admin-components/Button";
import { Form } from "react-bootstrap";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { Col, Row } from "react-bootstrap";
import Dropdown from "src/components/admin-components/Dropdown";
import { NoItems } from "@kehillahglobal/ui";

export const Testimonials = ({ campaign_id, techs, onModalClose }) => {
  const [loading, setLoading] = useState(false);
  const { blow, pop } = useBubblyBalloons();

  const [selectedTestimonials, setSelectedTestimonials] = useState([]);
  const [selectedTech, setSelectedTech] = useState();

  let {
    data: payloadTestimonials,
    isValidating,
    isLoading,
    error,
  } = useSWR("testimonials.list", async () => await fetchAllTechnologyTestimonials(campaign_id),
    {shouldRetryOnError: false},
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        campaign_id: campaign_id,
        technology_id: selectedTech,
        testimonial_ids: selectedTestimonials.map((testimonial) => testimonial.id),
      };

      const res = await addTestimonials(payload);

      if (res) {
        setLoading(false);
        blow({
          title: "Success",
          message: "Campaign Testimonials updated successfully.",
          type: "success",
          duration: 5000,
        });
        onModalClose();
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

  return (
    <div className="px-4 py-5">
      {payloadTestimonials?.length > 0 ? (
        <form>
          <Row className="mt-2" style={{ height: "180px" }}>
            <Col>
              <Form.Label>
                Select the Testimonial to feature on this campaign
              </Form.Label>
              <Dropdown
                displayTextToggle="Select a testimonial for this campaign"
                data={(payloadTestimonials || [])?.map((testimonial) => {
                  return {
                    ...testimonial,
                    value: testimonial?.id,
                    label: `${testimonial?.title} - ${testimonial?.community?.name}`,
                  };
                })}
                valueExtractor={(item) => item}
                labelExtractor={(item) =>
                  `${item?.title} - ${item?.community?.name}`
                }
                multiple={false}
                onItemSelect={(selectedItem, allSelected) => {
                  setSelectedTestimonials([selectedItem]);
                }}
              />

              <Row className="my-4">
                <Form.Label>
                  Select the technology this Testimonial belong to
                </Form.Label>
                <Col>
                  <Dropdown
                    displayTextToggle="Select Technology for this testimonial on this campaign"
                    data={(techs || [])?.map((tech) => {
                      return {
                        ...tech,
                        value: tech?.id,
                        label: tech?.name,
                      };
                    })}
                    valueExtractor={(item) => item?.id}
                    labelExtractor={(item) => item?.name}
                    multiple={false}
                    onItemSelect={(selectedItem, allSelected) => {
                      setSelectedTech([selectedItem]);
                      console.log(selectedItem);
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
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
        </form>
      ) : (
        <NoItems />
      )}
    </div>
  );
};