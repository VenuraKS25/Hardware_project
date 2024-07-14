import React from 'react'
import Titlebar from '../TitleBar/TitleBar';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="overlay">
            <Titlebar />
            <div className="hero-text">
                <h3 className='hero-topic'>Smart Path-Finder</h3>
                <h1 className='hero-topic'>University of Moratuwa</h1>
            </div>
            <div className="prompt">
                <h3>Scan your navigation card and we’ll guide you towards your destination seamlessly!!!</h3>
            </div>
        </div>
    </div> 
  );
};

export default Hero
