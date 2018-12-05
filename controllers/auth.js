const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { secret } = require('../config/environment');

const loginRoute = (req, res, next) => {
  User
    .findOne({ email: req.body.email})
    .then(user => {
      if (user && user.validatePassword(req.body.password)){
        const token = jwt.sign({
          username: user.username,
          sub: user._id,
          profilePic: user.profilePic,
          permission: user.accountType
        }, secret, { expiresIn: '6h'});
        res.json({
          message: `Welcome back, ${user.username}.`,
          token,
          user
        });
      } else {
        res.status(401).json({
          message: 'Oops! Please check your login details and try again.'
        });
      }
    })
    .catch(next);
};

const registerRoute = (req, res, next) => {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({
        username: user.username,
        sub: user._id
      }, secret, { expiresIn: '6h'});
      res.json({
        message: `Welcome back, ${user.username}.`,
        token,
        user
      });
    })
    .catch(next);
};

module.exports = {
  login: loginRoute,
  register: registerRoute
};
