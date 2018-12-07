/* global api, expect, describe, it, beforeEach */

const User = require('../../../models/user');

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

  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        userId = user[0]._id;
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/users/${userId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/users/${userId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/users/${userId}`)
      .end((err, res) => {
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
