const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    link: {
      type: String,
      required: true,
    },
    type: {
      type: [String],
      required: false,
    },
    categories: {
      type: [String],
      required: true,
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;