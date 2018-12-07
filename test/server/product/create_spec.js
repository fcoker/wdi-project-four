/* global describe, it, expect, api, beforeEach */

const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

const env = require('../../../config/environment');

const Product = require('../../../models/product');

const productData = [
  {
    name: 'Red Dead Redemption II',
    format: 'PS4',
    genre: 'Role-Playing',
    images: '/assets/images/redDead.png',
    video: 'https://www.youtube.com/watch?v=eaW0tYpxyp0',
    price: 50,
    description: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.',
    releaseDate: '26/10/2018',
    reviews: []
  }
];

let token;

describe('Product CREATE', () => {

  beforeEach(done => {
    Product.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, env.secret, { expiresIn: '6h' });
        done();
      });
  });

  it('should return a 401 response without a token', done => {
    api.post('/api/')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 201 response', done => {
    api.post('/api/')
      .set('Authorization', `Bearer ${token}`)
      .send(productData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/')
      .set('Authorization', `Bearer ${token}`)
      .send(productData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/')
      .set('Authorization', `Bearer ${token}`)
      .send(productData)
      .end((err, res) => {
        expect(res.body.name).to.eq(productData.name);
        expect(res.body.format).to.eq(productData.format);
        expect(res.body.genre).to.eq(productData.genre);
        expect(res.body.images).to.eq(productData.images);
        expect(res.body.video).to.eq(productData.video);
        expect(res.body.description).to.eq(productData.description);
        expect(res.body.releaseDate).to.eq(productData.releaseDate);
        done();
      });
  });
});
