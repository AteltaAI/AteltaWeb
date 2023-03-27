import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'rsuite';
import './hero.styles.css';

const Hero = () => {

  const nagigate = useNavigate()

  const HandleDemoNav = () => {
    nagigate('/demo')
  }
  return (
    <div className='hero-div'>

      <div className="hero-content">
        <div className="upload-btn">
          <Button className='custom-upload'>UPLOAD FILE / PASTE THE YOUTUBE LINK TO DOWNLOAD</Button>
        </div>
        <div className="secondary-content">
          <p>We are processing your video in the mean time, please checkout our existing samples</p>
          <Button onClick={() => HandleDemoNav()}>PRACTISE</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero;