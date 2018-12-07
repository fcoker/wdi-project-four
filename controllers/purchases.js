const Purchase = require('../models/purchase');
const mongo = require('mongodb');

function createRoute(req, res, next) {
  //check if req.body is an array(i.e. has multiple products in it)
  //and add the current user to that purchase data
  if (Array.isArray(req.body)) {
    req.body.forEach(purchase => {
      purchase.user = req.tokenUserId;
      purchase._id = mongo.ObjectId();
    });
  } else {
    req.body.user = req.tokenUserId;
    //assigns the _id of the purchase, otherwise the .create tries to use the product _id
    //which would result in duplicate _ids
    req.body._id = mongo.ObjectId();
  }
  console.log(req.body);
  //req.body is whatever is passed in through the basket to the server
  Purchase.create(req.body)
    .then(purchase => res.json(purchase))
    .catch(next);
}

function myPurchasesIndexRoute(req, res, next) {
  Purchase.find({ user: req.tokenUserId })
    .populate('product')
    .then(purchases => res.json(purchases))
    .catch(next);
}

function allPurchasesIndexRoute(req, res, next) {
  Purchase.find()
    .populate('product user')
    .then(purchases => res.json(purchases))
    .catch(next);
}

module.exports = {
  create: createRoute,
  myPurchasesIndex: myPurchasesIndexRoute,
  allPurchasesIndex: allPurchasesIndexRoute
};
