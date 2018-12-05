const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {type: String, required: true},
  format: {type: String, enum: ['Movie', 'PC', 'XBOX', 'PS4', 'Music']},
  genre: {type: String, enum: ['Action', 'Action-Adventure', 'Adventure', 'Role-Playing', 'Simulation', 'Strategy', 'Sport']},
  images: [String],
  video: [String],
  price: Number,
  description: String,
  releaseDate: String,
  reviews: [{
    ratingValue: { type: String, required: true },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' }
  }]
});

productSchema.virtual('averageRating')
  .get(function() {
    const avgRating = this.reviews.reduce((total, review) => total + review.ratingValue, 0) / this.reviews.length;
    if (this.reviews.length > 0){
      return avgRating.toFixed(2);
    } else {
      return 'None';
    }
  });

productSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Event', productSchema);
