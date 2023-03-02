import React from 'react';
import { HeroIMG } from '../../assets';
import './hero.styles.css';

const Hero = () => {
  return (
    <div className='hero-div'>
        <div className="hero-content">
            <h1>ATELTA</h1>
            <p>
                Atelta.Ai Next-gen Versatile Plug-n-Play
                All in One AI Home Trainer.
            </p>
        </div>
        
        <div className="background-image-hero">
            <div className="hero-overlay"></div>
            <img className='hero-img' src={HeroIMG} alt="" />
        </div>
    </div>
  )
}

export default Hero;