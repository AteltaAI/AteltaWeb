import './demo.styles.css';
import PlayIcon from '@rsuite/icons/legacy/Play';
import { ButtonToolbar, Button, IconButton } from 'rsuite';

import { WebCam, VideoPlayer } from '../../components';
import { useState } from 'react';
import CountDown from './countdown/count_down.components';

function Demo() {
  const [begin, setBegin] = useState(false);
  const [autoplay, setAutoplay] = useState(false);

  return (
    <div className="Demo">



      {begin && <CountDown begin={begin} setBegin={setBegin} setAutoplay={setAutoplay} />}
      <div className='window-cont'>
        <VideoPlayer autoplay={autoplay} setAutoplay={setAutoplay} />
        <WebCam />
      </div>

      <div className='vid-actions'>
        <div>
        <ButtonToolbar>
          <IconButton icon={<PlayIcon />} onClick={() => setBegin(true)}>
            Begin | Play
          </IconButton>
        </ButtonToolbar>
        </div>
        <div className='center-action'>
          <Button>Time Elapsed</Button>
          <Button>Score</Button>
          <Button>Physical Metric</Button>
          <Button>Periodic showcase of appreciation</Button>
        </div>
        <div></div>
      </div>

    </div>
  );
}

export default Demo;
