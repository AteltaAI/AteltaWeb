import React from 'react'
import { HeroIMG2 } from '../../assets';
import './featured.styles.css';

const Featured = () => {
  return (
    <div className='featured-section'>
        <div className="featured-image">
            <img className='hero-2-img' src={HeroIMG2} alt="" />
            <div className='ft-background-overlay'></div>
        </div>
        <div className="feature-content">
            <h1>Features</h1>
            <p>nice place to be</p>
        </div>
    </div>
  )
}

export default Featured