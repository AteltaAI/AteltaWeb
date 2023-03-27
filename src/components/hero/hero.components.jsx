import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'rsuite';
import { Uploader } from 'rsuite';
import { AVATAR } from '../../assets';
import './hero.styles.css';

const Hero = () => {

  const nagigate = useNavigate()

  const HandleDemoNav = () => {
    nagigate('/demo')
  }
  return (
    <div className='hero-container'>
      <img src={AVATAR} alt="" />
      <div className='hero-div'>

        <div className="hero-content">
          <div className="upload-btn">
            <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
              <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "15px" }}>
                <span className='upload-field' >UPLOAD FILE / PASTE THE YOUTUBE LINK TO DOWNLOAD</span>
              </div>
            </Uploader>
          </div>
          <div className="secondary-content">
            <p>We are processing your video in the mean time, please checkout our existing samples</p>
            <Button onClick={() => HandleDemoNav()}>PRACTISE</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;