import './Demo.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import WebCam from '../WebCam/WebCam'
import { useState } from 'react';
import CountDown from './CountDown/CountDown';

function Demo() {
  const [begin, setBegin] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  return (
    <div className="Demo">
      {begin && <CountDown begin={begin} setBegin={setBegin} setAutoplay={setAutoplay}/>}
      <div className='window-cont'>
        <VideoPlayer autoplay={autoplay} setAutoplay={setAutoplay}/>
        <WebCam />
      </div>
      <div className='control-cont'>
        <button onClick={() => setBegin(true)}>Begin</button>
      </div>
    </div>
  );
}

export default Demo;
