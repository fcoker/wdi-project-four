const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: '/assets/images/profilePic.png' },
  address: { type: String },
  accountType: {type: String, enum: ['customer', 'admin'], default: 'customer'}
});

userSchema.virtual('addedReviews', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'reviews.user'
});

userSchema.pre('save', function() {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, 8);
  }
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
