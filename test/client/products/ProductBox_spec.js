/* global describe,it */
import React from 'react';
// import axios from 'axios';
// import sinon from 'sinon';
import { shallow} from 'enzyme';
import { expect } from 'chai';
import ProductBox from '../../../src/components/products/ProductBox';

const testData =
  {
    name: 'Red Dead Redemption II',
    format: 'PS4',
    genre: 'RPG',
<<<<<<< HEAD
    images: '/assets/images/redDead.png',
=======
    images: ['/assets/images/redDead.png'],
>>>>>>> development
    video: 'https://www.youtube.com/embed/F63h3v9QV7w?controls=1',
    unitPrice: 49.99,
    description: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.',
    releaseDate: '26/10/2018',
    reviews: []
  };

describe('Product', () => {
  it('should show the correct product',  done => {
    const component = shallow(<ProductBox product={testData}/>);
    expect(component.find('img').length).to.eq(1);
<<<<<<< HEAD
    expect(component.find('img').props().src).to.eq(testData.images);
=======
    expect(component.find('img').props().src).to.eq(testData.images[0]);
>>>>>>> development
    console.log(component.debug());
    done();
  });
});
