const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {type: String, required: true},
  format: {type: String, enum: ['Movie', 'PC', 'XBOX', 'PS4', 'Music']},
  genre: String,
  images: [String],
  video: [String],
  unitPrice: Number,
  description: String,
  releaseDate: String,
  reviews: [{
    ratingValue: { type: Number, required: true, min: 0, max: 10 },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' }
  }]
});

productSchema.virtual('averageRating')
  .get(function() {
    //adds up all rating values in the products reviews and divides by the total number of reviews
    //to get an average rating, displays the result to 1 decimal point - if no reviews - display 'None'
    const avgRating = this.reviews.reduce((total, review) => total + review.ratingValue, 0) / this.reviews.length;
    if (this.reviews.length > 0){
      return parseFloat(avgRating.toFixed(1));
    } else {
      return 0;
    }
  });

productSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Product', productSchema);
