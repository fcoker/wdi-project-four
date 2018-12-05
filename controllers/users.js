const User = require('../models/user');

const indexUsers = (req, res, next) => {
  User
    .find()
    .then(users => {
      res.json(users);
    })
    .catch(next);
};

const showUser = (req, res, next) => {
  User.findById(req.params.userId)
    .populate('addedReviews')
    .then(user => res.json(user))
    .catch(next);
};

const updateUser = (req, res, next) => {
  User
    .findById(req.params.userId)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
};



module.exports = {
  index: indexUsers,
  show: showUser,
  update: updateUser
};
