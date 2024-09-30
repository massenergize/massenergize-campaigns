import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import React from "react";
import Slider from "react-slick";
import LanguageSelector from "../../../../language/LanguageSelector";
import MobileLanguageSelector from "../../../../language/MobileLanguageSelector";
import SPTButton from "../SPTButton";
import { getTheme } from "../../../../../utils/Values";
import { useSelector } from "react-redux";

const Hero = ({ themeKey }) => {
  const campaign = useSelector((state) => state.campaign);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, //Waiting time for next slide
  };
  const images = (campaign?.media ||[])?.map(item => item?.media?.url)
  // const images = [
  //   // "https://via.placeholder.com/1600x900/1975bb/fff?text=1975bb",
  //   "https://massenergize-prod-files.s3.amazonaws.com/media/alternative-alternative-energy-clouds-eco-energy-433308.jpg",
  //   // "https://via.placeholder.com/1600x900/ec4233/fff?text=ec4233",
  //   "https://massenergize-prod-files.s3.amazonaws.com/media/clear-light-bulb-planter-on-gray-rock-1108572_1.jpg",
  //   // "https://via.placeholder.com/1600x900/f2c044/fff?text=f2c044",
  //   "https://massenergize-prod-files.s3.amazonaws.com/media/IMG_5734-231017-153600.JPG",
  // ];

  console.log("== log==", campaign)
  const theme = getTheme(themeKey);
  const { primary_logo } = campaign || {};
  return (
    <>
      <div className="spt-v2-nav">
        <img
          // style={{ objectFit: "contain", height: 70 }}
          src={primary_logo?.url}
          alt=""
        />

        <div className="pc-vanish" style={{ marginLeft: "auto" }}>
          <MobileLanguageSelector />
        </div>
        {/* <small style={{ marginLeft: "auto" }}>Language Selector </small> */}
      </div>
      <div className="hero">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div className="hero-content">
            <h1 className="hero-title">{campaign?.title}</h1>
            <p className="hero-subtext">{campaign?.tagline}</p>
            <SPTButton themeKey={themeKey} href={campaign?.call_to_action?.url}>{campaign?.call_to_action?.text}</SPTButton>
            {/* <div
              className="spt-btn touchable-opacity custom-margin"
              style={{ "--my-custom-margin": "20px 0px" }}
              onClick={() => {
                // if (call_to_action?.url) window.open(call_to_action?.url, "_blank");
              }}
            >
              See if you qualify
            </div> */}
          </div>
        </div>

        <div className="hero-carousel">
          <div className="hero-overlay"></div>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <div className="hero-slide" style={{ backgroundImage: `url(${image})` }} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
