import React from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { getStaticText } from "../../../../redux/actions/actions";

function SPTMediaPlayer({ close, url, lang }) {
  const { spt } = getStaticText();
  const { modal } = spt || {};
  console.log("LE MODAL", modal);
  return (
    <div className="spt-media-player">
      <ReactPlayer
        width={"100%"}
        height={"90%"}
        url={url}
        stopOnUnmount
        // style={{ height: "100%" }}
        controls
        playing
      />
      {/* <button onClick={() => close & close()}>Play Video</button> */}
      <div className="row-flex">
        <Button variant="danger" onClick={() => close && close()} style={{ borderRadius: 0 }}>
          {modal?.button?.text}
        </Button>

        <small style={{ marginLeft: "auto", marginRight: 10, color: "grey", textDecoration: "underline" }}>
          MassEnergize
        </small>
      </div>
    </div>
  );
}

export default SPTMediaPlayer;
