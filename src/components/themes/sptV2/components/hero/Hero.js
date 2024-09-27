import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import React from "react";
import Slider from "react-slick";

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
    "https://via.placeholder.com/1600x900/1975bb/fff?text=1975bb",
    "https://via.placeholder.com/1600x900/ec4233/fff?text=ec4233",
    "https://via.placeholder.com/1600x900/f2c044/fff?text=f2c044",
  ];

  return (
    <div className="hero">
      <div>
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
            {/* {call_to_action?.text} */}
            <i style={{ marginLeft: 8, "--my-pc-custom-margin": "30px 0px" }} className="fa fa-long-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="hero-carousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="hero-slide" style={{ backgroundImage: `url(${image})` }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
