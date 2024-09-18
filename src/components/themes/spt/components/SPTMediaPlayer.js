import React from "react";
import ReactPlayer from "react-player";

function SPTMediaPlayer({ close }) {
  return (
    <div className="spt-media-player">
      <ReactPlayer
        width={"100%"}
        height={"90%"}
        url="https://www.youtube.com/watch?v=4lGsFUVJv3Q"
        stopOnUnmount
        // style={{ height: "100%" }}
        controls
        playing
      />
      {/* <button onClick={() => close & close()}>Play Video</button> */}
      <div style={{ padding: 20 }}>
        <button onClick={() => close && close()}>Play Video</button>
      </div>
    </div>
  );
}

export default SPTMediaPlayer;
