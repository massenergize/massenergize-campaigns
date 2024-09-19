import React from "react";
import { useDispatch } from "react-redux";
import { toggleUniversalModal } from "../../../../redux/actions/actions";
import SPTMediaPlayer from "./SPTMediaPlayer";
import ReactPlayer from "react-player";
import { smartString } from "../../../../utils/utils";
import { toSentenceCase } from "../../../../helpers/utils/string";
function SPTHero({ campaign }) {
  const { title, tagline, featured_summary, call_to_action, banner_section } = campaign || {};
  const dispatch = useDispatch();
  const toggleModal = (props) => dispatch(toggleUniversalModal(props));
  const { call_to_action_items } = banner_section || {};
  const firstVideo = (call_to_action_items || [])[0];
  const backGroundVideo = firstVideo?.url;

  console.log("Video", backGroundVideo, firstVideo);

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
            <h6 style={{ textTransform: "uppercase" }}>{tagline || "..."}</h6>
            <h1>{toSentenceCase(title) || "..."}</h1>
            {/* <p className="spt-body-font " dangerouslySetInnerHTML={{ __html: smartString(description, 105) }}></p> */}
            <p className="spt-body-font ">{featured_summary}</p>

            {call_to_action && (
              <div
                className="spt-btn touchable-opacity custom-margin"
                onClick={() => {
                  if (call_to_action?.url) window.open(call_to_action?.url, "_blank");
                }}
              >
                {call_to_action?.text}
                <i
                  style={{ marginLeft: 8, "--my-pc-custom-margin": "30px 0px" }}
                  className="fa fa-long-arrow-right"
                ></i>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4 " style={{ background: "var(--spt-main-color)" }}>
          <div className="spt-hero-media-area">
            <ReactPlayer
              volume={0}
              muted={true}
              loop={true}
              playing={true}
              url={backGroundVideo}
              height={"100%"}
              width={"100%"}
            />

            <div className="spt-hero-overlay">
              <div className="spt-overlay-content soc">
                <div className="play-btn s-touchable-opacity" onClick={() => openVideoModal(backGroundVideo, "en")}>
                  <i className="fa fa-play-circle" />
                </div>

                <div className="bottom-content">
                  <p style={{ textAlign: "center" }}>{banner_section?.title}</p>
                  <div className=" row-on-pc-col-on-mobile c-align-items-center">
                    {call_to_action_items?.map(({ text, url }, index) => (
                      <div
                        key={index}
                        className="p-button s-touchable-opacity"
                        onClick={() => {
                          openVideoModal(url);
                        }}
                      >
                        <i className=" fa fa-play" /> {text}
                        <i className="fa fa-angle-right" style={{ marginLeft: 10 }} />
                      </div>
                    ))}
                    {/* <div
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
                    </div> */}
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
