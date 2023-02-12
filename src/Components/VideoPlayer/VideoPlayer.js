import React from 'react'
import video from "../../Data/vid.mp4"
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

function VideoPlayer({autoplay, setAutoplay}) {

  const plyrProps = {
    source: video,
    options: {},
  }

  return (
    <div className='video-player'>
      <ReactPlayer url={require("../../Data/vid.mp4")} controls={true} height="400px" width="auto" playing={autoplay}/>
    </div>
  )
}

export default VideoPlayer