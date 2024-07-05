import React from "react";
import Banner from "./Banner";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import planetB from "./../../../assets/imgs/planet-b.jpeg";
import HeroWithBelt from "./HeroWithBelt";
import CampaignNotLive from "../landing-page/CampaignNotLive";
function Hero({ handleShareCampaign, v2, staticT }) {
  const campaign = useSelector((state) => state.campaign);
  const { image = {} } = campaign;
  if (v2) return <HeroWithBelt campaign={campaign} handleShareCampaign={handleShareCampaign} />;
  return (
    <Container>
      <Banner staticT = {staticT} showPrimaryLogo={false} showSecondaryLogo={false} {...(campaign || {})} handleShareCampaign={handleShareCampaign} />

      <Container>
        <img className="elevate-float-pro campaign-focus-image rounded-4 w-100" src={image?.url || planetB} alt={"campaign banner"} />
      </Container>
    </Container>
  );
}

export default Hero;
