import React from 'react';
import video from "../../assets/vid.mp4";
import ReactPlayer from 'react-player';
import './video_player.styles.css';


function VideoPlayer({autoplay, setAutoplay}) {

  const plyrProps = {
    source: video,
    options: {
      controls: true,
      height: "400px",
      width: "auto",
      playing: autoplay
    },
  }

  return (
    <div className='video-player'>
      <ReactPlayer url={plyrProps.source} {...plyrProps.options}/>
    </div>
  )
}

export default VideoPlayer;