import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCard from "../../components/admin-components/TestimonialCard";
import { CampaignTestimonialsView } from "./campaign-testimonial-view";

const CampaignTestimonials = ({
  campaignDetails,
  setCampaignDetails,
  setStep,
  lists,
}) => {
  return (
    <CampaignTestimonialsView
      campaignDetails={campaignDetails}
      setCampaignDetails={setCampaignDetails}
    />
  );
};

export default CampaignTestimonials;
