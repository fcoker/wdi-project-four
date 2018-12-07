/* global api, expect, describe, it, beforeEach */

const Product = require('../../../models/product');


const productData = [
  {
    name: 'Red Dead Redemption II',
    format: 'PS4',
    genre: 'Role-Playing',
    images: ['/assets/images/redDead.png'],
    video: ['https://www.youtube.com/watch?v=eaW0tYpxyp0'],
    price: 50,
    description: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.',
    releaseDate: '26/10/2018',
    reviews: []
  }
];

let productId;

describe('Product SHOW', () => {

  beforeEach(done => {
    Product.remove({})
      .then(() => Product.create(productData))
      .then(product => {
        // console.log(product);
        productId = product[0]._id;
        // console.log(productData);
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/product/${productId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/product/${productId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/product/${productId}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(productData[0].name);
        expect(res.body.format).to.eq(productData[0].format);
        expect(res.body.genre).to.eq(productData[0].genre);
        expect(res.body.description).to.eq(productData[0].description);
        expect(res.body.releaseDate).to.eq(productData[0].releaseDate);
        done();
      });
  });

});
