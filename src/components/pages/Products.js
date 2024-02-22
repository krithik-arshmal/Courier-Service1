import React from 'react';
import './Products.css';
import ManageItem from './ManageItem';

function Products() {
  return (
    <div className='cards'>
      <h1>Check out what facilities we have!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ManageItem
              src='images/courier-service.jpg'
              text='Send your parcel from your home '
              label='Send'
              path='/services'
            />
            <ManageItem
              src='images/track-image.jpg'
              text='Track your Courier using the TID'
              label='Track Now'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <ManageItem
              src='images/transit-image.jpg'
              text='Rate and Transit Times'
              label='Timings'
              path='/services'
            />
            <ManageItem
              src='images/account.jpg'
              text='Create a new account to manage orders'
              label='New Account'
              path='/sign-up'
            />
            <ManageItem
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

export default Products;