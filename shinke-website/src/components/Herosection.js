import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';
import { Download } from './Download.js';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='hero-img' src='../assets/images/lenapecta2.jpg' alt=''></img>
      <h2 className='hero-h2'>PLAY AND LEARN</h2>
      <p className='hero-p'>Experience life as the Lenape in the 1600s</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ABOUT
        </Button>
        <Download buttonStyle='btn--outline' buttonSize='btn--large'>DOWNLOAD</Download>
      </div>
    </div>
  );
}

export default HeroSection;