const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim:true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase:true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    select:false
  },
  sold: {
    type: Number,
    default: 0,
    select:false
  },
  images: [{
    type: String,
  }],
  color: {
    type: String,
    required: true,
  },
  ratings: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{timestamps:true}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

