const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  colourname: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  picturecolour: {
    type: String,
    required: true,
    trim: true,
  },
  demo: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
