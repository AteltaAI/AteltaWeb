import React from 'react'

import './App.css';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import WebCam from './Components/WebCam/WebCam'

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <WebCam />
    </div>
  );
}

export default App;
