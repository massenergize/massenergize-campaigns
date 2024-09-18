import React from "react";
import { useDispatch } from "react-redux";
import { toggleUniversalModal } from "../../../../redux/actions/actions";
import SPTMediaPlayer from "./SPTMediaPlayer";
import ReactPlayer from "react-player";
function SPTHero() {
  const dispatch = useDispatch();
  const toggleModal = (props) => dispatch(toggleUniversalModal(props));

  const closeModal = () => {
    toggleModal({ show: false });
  };
  const openVideoModal = (url, lang) => {
    toggleModal({
      show: true,
      fullControl: true,
      noHeader: true,
      title: "Learn how community solar works",
      component: () => <SPTMediaPlayer close={closeModal} url={url} language={lang} />,
    });
  };

  return (
    <div>
      <div className="row spt-hero">
        <div
          className="col-md-8 hero-container "
          // style={{ height: 400, background: "rgba(0, 58, 68, 1)", color: "white" }}
        >
          <div className="intro">
            <h6>SAVE MONEY WITH CLEAN ENERGY</h6>
            <h1>Solar Para Todos</h1>
            <p className="spt-body-font ">
              Connect to a community solar garden near you to unlock reliable savings and support and support a clean
              energy future
            </p>

            <div className="spt-btn touchable-opacity custom-margin">
              See if you qualify{" "}
              <i style={{ marginLeft: 8, "--my-pc-custom-margin": "30px 0px" }} className="fa fa-long-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{ background: "var(--spt-main-color)" }}>
          <div style={{ position: "relative", height: "100$" }}>
            <ReactPlayer
              volume={0}
              muted={true}
              loop={true}
              playing={true}
              url={"https://www.youtube.com/watch?v=Yxt72aDjFgY"}
              height={"100%"}
              width={"100%"}
            />

            <div className="spt-hero-overlay">
              <div className="spt-overlay-content soc">
                <div
                  className="play-btn s-touchable-opacity"
                  onClick={() => openVideoModal("https://www.youtube.com/watch?v=lT6GJxcG-RM", "en")}
                >
                  <i className="fa fa-play-circle" />
                </div>

                <div className="bottom-content">
                  <p style={{ textAlign: "center" }}>Learn how community solar works</p>
                  <div className=" row-on-pc-col-on-mobile c-align-items-center">
                    <div
                      className="p-button s-touchable-opacity"
                      onClick={() => openVideoModal("https://www.youtube.com/watch?v=4lGsFUVJv3Q", "es")}
                    >
                      <i className=" fa fa-play" /> Watch in Español{" "}
                      <i className="fa fa-angle-right" style={{ marginLeft: 10 }} />
                    </div>
                    <div
                      className="p-button s-touchable-opacity"
                      onClick={() => openVideoModal("https://www.youtube.com/watch?v=tzdTcXhbpQ0", "br")}
                    >
                      <i className=" fa fa-play" /> Watch in Portuguese{" "}
                      <i className="fa fa-angle-right" style={{ marginLeft: 10 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPTHero;
