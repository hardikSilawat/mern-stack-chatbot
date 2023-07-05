const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Connected to MongoDB Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MONGO DB ERROR ${error}`);
  }
};
module.exports = connectDB;
