const mongoose = require('mongoose');

// Define the user schema
const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  fatherName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});



// Create the user model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
