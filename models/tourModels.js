const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour must have name'],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Tour must have price'],
  },
  priceDiscount: Number,
  rating: {
    type: Number,
    default: 4.5,
  },
  duration: {
    type: Number,
  },
  difficulty: {
    type: String,
    required: [true, 'A Tour must have difficulty'],
    enum: ['easy', 'medium', 'difficult'],
  },
  images: [String],
  description: {
    type: String,
    required: [true, 'Tour must have description'],
  },
  imageCover: {
    type: String,
    required: [true, 'Tour must have cover image'],
  },
  startDates: [Date],
  summary: {
    type: String,
    required: [true, 'Tour must have summary'],
    trim: true,
  },
  maxGroupSize: Number,
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: Number,
  creatAt: {
    type: Date,
    default: Date.now(),
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
