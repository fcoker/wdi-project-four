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
    releaseDate: '26/10/2018'
  },
  {
    name: 'Forza Motorsport 6',
    format: 'XBOX',
    genre: 'Simulation',
    images: ['/assets/images/forza6.png'],
    video: ['https://www.youtube.com/watch?v=4vLQpUgm0aU'],
    price: 45,
    description: 'Breathtaking graphics at 1080p resolution and 60 frames per second. Witness the spectacle of night racing under the stadium lights of Daytona and the intense claustrophobia of racing by headlight in the utter blackness of Le Mans’ back stretch. Experience the immersion of racing in the rain as working wipers barely clear the spray and tires hydroplane across physically based 3D puddles.',
    releaseDate: '15/09/2015'
  }
];

describe('Products INDEX', () => {

  beforeEach(done => {
    Product.remove({})
      .then(() => Product.create(productData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/')
      .end((err, res) => {
        res.body.forEach(item => expect(item).to.be.an('object'));
        done();
      });
  });

  it('should return the correct data', done => {
    api.get('/api/')
      .end((err, res) => {
        // expect(res.body[1].name).to.eq(productData[1].name);
        res.body.forEach(product => {
          //line 66 not working, causing test fail!!
          // console.log('product------> ',product);
          // productData.find(item => console.log('item ----->',item));
          const dataItem = productData.find(item => item.name === product.name);
          expect(product.name).to.eq(dataItem.name);
          expect(product.format).to.eq(dataItem.format);
          expect(product.genre).to.eq(dataItem.genre);
          expect(product.description).to.eq(dataItem.description);
          expect(product.releaseDate).to.eq(dataItem.releaseDate);
        });
        done();
      });
  });

});
