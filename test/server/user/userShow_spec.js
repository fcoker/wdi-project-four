/* global api, expect, describe, it, beforeEach */

const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const env = require('../../../config/environment');
const userIds = [
  '5be9b02777e350fe07977fb0'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Sham',
    email: 'sh@m',
    profilePic: '/assets/images/sham.png',
    password: 'pass',
    accountType: 'admin'
  }
];
let userId;

describe('user SHOW', () => {
  let token;

  beforeEach(done => {
    User.remove({})
      .then(() => User.create({
        email: 'sh@m',
        username: 'Sham',
        password: 'pass',
        profilePic: '/assets/images/sham.png',
        accountType: 'admin',
        _id: userIds[0]
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, env.secret, { expiresIn: '6h' });
        done();
      });

  });
  it('should return a 200 response', done => {
    api.get(`/api/users/${userIds[0]}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  //
  // console.log('userId-------->',userId);
  it('should return an object', done => {
    api.get(`/api/users/${userIds[0]}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        // console.log('userId is ------>', userId);
        // console.log('res.body in userSHow------>', res.body);
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/users/${userIds[0]}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        console.log('res.body._id-------->', res.body._id);
        expect(res.body._id).to.eq(userData[0]._id);
        expect(res.body.username).to.eq(userData[0].username);
        expect(res.body.email).to.eq(userData[0].email);
        expect(res.body.profilePic).to.eq(userData[0].profilePic);
        expect(res.body.password).to.eq(userData[0].password);
        expect(res.body.accountType).to.eq(userData[0].accountType);
        done();
      });
  });

});
