import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/videos-1.mp4' autoPlay loop muted />
      <h1>WELCOME TO HERMES COURIERS</h1>
      <p>Get started here!</p>
      <div className='hero-btns'>
      <div className='center'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Click here.
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <i className='far fa-user' />
        </Button></div>
        <div className='hero-container1'>
        <h1>Track your Courier here.</h1>
        <div className='hero-btns'>
        <div className='center'>
        <div className='SearchBar'>
          <input type="search" id="form1" class="form-control" placeholder="TRACKING ID..,"/>
          <label class="form-label" for="form1"></label>
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' 
          >
            <i class="fas fa-search"></i>
          </Button>
          </div>
          </div>
        </div>
</div>
      </div>
    </div>
  );
}
export default HeroSection;
