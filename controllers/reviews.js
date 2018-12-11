const Product = require('../models/product');

function createRoute(req, res, next) {
  req.body.user = req.tokenUserId;
  Product.findById(req.params.productId)
    .populate('reviews.user')
    .then(product => {
      if(product.reviews){
        const review = product.reviews.filter(review => review.user._id.toString() === req.body.user)[0];
        if(review){
          review.ratingValue = req.body.ratingValue;
          return product.save();
        } else {
          product.reviews.push(req.body);
          return product.save();
        }
      }
    })
    .then(product => res.json(product))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Product.findById(req.params.productId)
    .populate('reviews.user')
    .then(product => {
      const review = product.reviews.id(req.params.reviewId);
      if(!review.user._id.equals(req.tokenUserId)) {
        res.status(401).json({ message: 'Unauthorised!' });
      }
      review.remove();
      return product.save();
    })
    .then(product => res.json(product))
    .catch(next);
}

module.exports = {
  create: createRoute,
  delete: deleteRoute
};
