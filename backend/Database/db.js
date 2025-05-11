const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL,{
       useNewUrlParser: true,
  useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
