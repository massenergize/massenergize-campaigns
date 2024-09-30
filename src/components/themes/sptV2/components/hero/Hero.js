import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import React from "react";
import Slider from "react-slick";
import LanguageSelector from "../../../../language/LanguageSelector";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, //Waiting time for next slide
  };

  const images = [
    // "https://via.placeholder.com/1600x900/1975bb/fff?text=1975bb",
    "https://massenergize-prod-files.s3.amazonaws.com/media/alternative-alternative-energy-clouds-eco-energy-433308.jpg",
    // "https://via.placeholder.com/1600x900/ec4233/fff?text=ec4233",
    "https://massenergize-prod-files.s3.amazonaws.com/media/clear-light-bulb-planter-on-gray-rock-1108572_1.jpg",
    // "https://via.placeholder.com/1600x900/f2c044/fff?text=f2c044",
    "https://massenergize-prod-files.s3.amazonaws.com/media/IMG_5734-231017-153600.JPG",
  ];

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          background: "transparent",
          alignItems: "center",
          height: "auto",
          zIndex: 1000,
          width: "100%",
          padding: 20,
        }}
      >
        <img
          style={{ objectFit: "contain", height: 70 }}
          src="https://via.placeholder.com/100x50/ffc0cb/fff?text=ffc0cb"
          alt="logo"
        />

        <div className="pc-vanish">
          <LanguageSelector />
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
            <h1 className="hero-title">Solar Para Todos</h1>
            <p className="hero-subtext">Save money with clean energy!</p>
            <div
              className="spt-btn touchable-opacity custom-margin"
              style={{ "--my-custom-margin": "20px 0px" }}
              onClick={() => {
                // if (call_to_action?.url) window.open(call_to_action?.url, "_blank");
              }}
            >
              See if you qualify
            </div>
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
