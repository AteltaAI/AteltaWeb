import React from 'react';
import './hero.styles.css';

const Hero = () => {
  return (
    <div className='hero-div'>

      <div className="hero-content">
        <div className="upload-btn">
          <button className='custom-upload'>UPLOAD FILE / PASTE THE YOUTUBE LINK TO DOWNLOAD</button>
        </div>
        <div className="secondary-content">
          <p>We are processing your video in the mean time, please checkout our existing samples</p>
          <button>PRACTISE</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;