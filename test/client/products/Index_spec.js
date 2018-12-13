/* global describe,it */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ProductsIndex from '../../../src/components/products/Index';

const testData =[
  {
    name: 'Red Dead Redemption II',
    format: 'PS4',
    genre: 'RPG',
    images: ['/assets/images/redDead.png'],
    video: 'https://www.youtube.com/embed/F63h3v9QV7w?controls=1',
    unitPrice: 49.99,
    description: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.',
    releaseDate: '26/10/2018',
    reviews: []
  }
];

sinon.stub(axios, 'get')
  .returns(Promise.resolve({ data: testData }));

describe('Products Index', () => {
  it('should show the correct number of Product Boxes', done => {
    const component = shallow(<ProductsIndex />);
    component.setState({ filteredProducts: testData });
    expect(component.state()).to.have.property('filteredProducts');
    expect(component.find('ProductBox').length).to.eq(testData.length);
    done();
  });

  it('should have the correct name in each ProductBox', done => {
    const component = shallow(<ProductsIndex />);
    component.setState({ filteredProducts: testData });
    component.find('ProductBox').forEach((box, i) => {
      expect(box.props().product.name).to.eq(testData[i].name);
    });
    done();
  });
});
