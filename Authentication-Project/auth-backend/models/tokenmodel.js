const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default:Date.now,
    expires:300
  }
});

const User = mongoose.model("Tokens", tokenSchema);
module.exports = User;
