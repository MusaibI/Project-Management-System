const mongoose = require('mongoose');

const connectUsingMongoose = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecomdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Mongodb connected using mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
}

module.exports = connectUsingMongoose;
