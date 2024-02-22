/*import React from 'react';
import '../../App.css';

export default function Products() {
  return <h1 className='products'>PRODUCTS</h1>;
}*/
import React from 'react';
import './Products.css';
import ProductItem from './ProductItem';

function Products() {
  return (
    <div className='cards'>
      <h1>Services that we provide</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ProductItem src='images/courier-service.jpg 'text='Send your parcel from your home 'label='Send 'path='/services'
            />
            <ProductItem src='images/track-image.jpg' text='Track your Courier using the TID' label='Track Now' path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <ProductItem src='images/transit-image.jpg' text='Rate and Transit Times' label='Timings' path='/services'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;