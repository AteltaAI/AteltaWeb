import React from 'react'
import video from "../../Data/vid.mp4"
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import './VideoPlayer.css'

const plyrProps = {
  source: video,
  options: undefined,
}

function VideoPlayer() {
  return (
    <div className='video-player'>
      <Plyr src={video} {...plyrProps} style={{height: '400px'}}/>
    </div>
  )
}

export default VideoPlayer