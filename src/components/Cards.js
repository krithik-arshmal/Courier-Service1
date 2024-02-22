import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what facilities we have!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/courier-service.jpg'
              text='Send your parcel from your home '
              label='Send'
              path='/services'
            />
            <CardItem
              src='images/track-image.jpg'
              text='Track your Courier using the TID'
              label='Track Now'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/transit-image.jpg'
              text='Rate and Transit Times'
              label='Timings'
              path='/services'
            />
            <CardItem
              src='images/account.jpg'
              text='Create a new account to manage orders'
              label='New Account'
              path='/sign-up'
            />
            <CardItem
              src='images/login.jpg'
              text='Already have an account ? Log in.'
              label='New Account'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
