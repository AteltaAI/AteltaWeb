import './demo.styles.css';
import { WebCam, VideoPlayer } from '../../components';
import { useState } from 'react';
import CountDown from './countdown/count_down.components';

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
