const mongoose = require("mongoose");

const scoreScema = new mongoose.Schema({
  name: {
    type: String,
  },
  score: {
    type: String,
  },
});

module.exports = User = mongoose.model("Score", scoreScema);
