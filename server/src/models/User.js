const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  phone: String,
  password: String,
  name: String,
  email: String
});

const User = model('User', userSchema);
module.exports = User;