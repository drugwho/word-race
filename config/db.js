const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB ON");
  } catch (err) {
    console.error("ERROR DB");
    process.exit(1);
  }
};

module.exports = connectDB;
