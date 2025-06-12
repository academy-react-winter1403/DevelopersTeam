import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MiniAudioPlayer = ({ src }) => (
  <AudioPlayer
    src={src}
    autoPlay={false}
    showJumpControls={false}
    layout="horizontal-reverse"
    customAdditionalControls={[]}
    customVolumeControls={[]}
    style={{
      borderRadius: 10,
      height: 45,
      background: "rgba(249,249,249,0.98)",
      boxShadow: "0 1px 6px #0001",
      direction: "ltr",
      minWidth: 150,
      maxWidth: 220,
      padding: 0,
      margin: "0 auto",
    }}
    className="!mb-0"
  />
);

export default MiniAudioPlayer;
