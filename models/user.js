const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    trim: true,
  },

  cast: {
    type: String,

  },

  DOB: {
    type: String,

    trim: true,
  },

  Death: {
    type: String,

    trim: true,
  },
  address: {
    type: String,

    trim: true,
  },
  familyno: {
    type: String,

    trim: true,
  },
  homeno: {
    type: String,

    trim: true,
  },
  voter: {
    type: String,

    trim: true,
  },
  voterperson: {
    type: String,

    trim: true,
  },
  profession: {
    type: String,

    trim: true,
  },
  education: {
    type: String,

    trim: true,
  },
  bloodgroup: {
    type: String,

    trim: true,
  },
  blooddonate: {
    type: String,

    trim: true,
  },
  adharnumber: {
    type: String,

    trim: true,
  },
  pannumber: {
    type: String,

    trim: true,
  },
  voteridNumber: {
    type: String,

    trim: true,
  },
  passport: {
    type: String,

    trim: true,
  },
  rashancard: {
    type: String,

    trim: true,
  },
  daridryareshekhali: {
    type: String,

    trim: true,
  },

  email: {
    type: String,
    unique: true,
    trim: true,
  },
  drivinglicenece: {
    type: String,

  },
  bankdetail: {
    type: String,

  },
  govschembenefits: {
    type: String,

  },
  govschembenefits: {
    type: String,

  },
  incomtax: {
    type: String,

  },
  smoking: {
    type: String,

  },
  healthissue: {
    type: String,

  },
  apagatv: {
    type: String,

  },
  mariatalstatus: {
    type: String,

  },
  shareholder: {
    type: String,

  },
  sandharbh: {
    type: String,

  },
  vima: {
    type: String,

  },
  toilet: {
    type: String,

  },
  photo: {
    type: String,

  },
  chand: {
    type: String,

  },
  familydoctor: {
    type: String,

  },
  phoneno: {
    type: String,

  },
  mobile: {
    type: String,

  },
  home: {
    type: String,

  },
  hometype: {
    type: String,

  },
  socialwork: {
    type: String,

  },
  rajkiypad: {
    type: String,

  },
  sampanti: {
    type: String,

  },
  arthikvishleshan: {
    type: String,

  },
  rajkiyvishleshan: {
    type: String,

  },
  rajkiypaksh: {
    type: String,

  },
  panyachastrot: {
    type: String,

  },
  chaviconection: {
    type: String,

  },
  gharphala: {
    type: String,

  },
  panipatti: {
    type: String,

  },
  kaushalya: {
    type: String,

  },
  gyasconnection: {
    type: String,

  },
  lightconnection: {
    type: String,

  },
  language: {
    type: String,

  },
  mothername: {
    type: String,

  },
});



// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
