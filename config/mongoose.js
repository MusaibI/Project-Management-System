const mongoose = require('mongoose');

const connectUsingMongoose = async () => {
  try {
    await mongoose.connect('mongodb+srv://iqbalmusaib55:12345@projectmngcluster.yyqyve8.mongodb.net/', {
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
