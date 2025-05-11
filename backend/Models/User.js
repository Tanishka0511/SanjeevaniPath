
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt=require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter the email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please enter a valid email address'
    }
  },
  phone_no: {
    type: String, // Changed from Number to String
    required: [true, 'Please enter the phone number'],
    unique: true,
    minlength: [10, 'Phone number must be 10 digits'],
    maxlength: [10, 'Phone number must be 10 digits']
  },
  password: {
    type: String,
    required: [true, 'Please enter the password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false
  }
});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password is new/modified

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;

