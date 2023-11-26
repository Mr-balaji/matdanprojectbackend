const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  familynumber: String,
  name: String,
  fathername: String,
  email:String,
  phone:Number,
  surname: String,
  petname: String,
  fatherpetname: String,
  surnamepetname: String,
  mothername: String,
  selectedGender: {
    name: String,
    code: String,
  },
  date: Date,
  address: String,
  fulladdress: String,
  wardno: String,
  othervillagecome: String,
  farmingrelated: String,
  profitoffarming: String,
  worker: String,
  job: String,
  govjob: String,
  helpingculture: String,
  homewoman: String,
  dharm: String,
  cast: String,
  upjat: String,
  bloodgroup: String,
  selectedraktandan: {
    id: String,
    name: String,
  },
  adharcard: {
    id: String,
    name: String,
  },
  pancard: {
    id: String,
    name: String,
  },
  passport: {
    id: String,
    name: String,
  },
  incometax: {
    id: String,
    name: String,
  },
  homeno: String,
  grampanchayat: String,
  sarkariyognalabh: {
    id: String,
    name: String,
  },
  shauchalay: {
    id: String,
    name: String,
  },
  hometype: {
    id: String,
    name: String,
  },
  waterconnection: {
    id: String,
    name: String,
  },
  kaushalya: {
    id: String,
    name: String,
  },
  gyasconnection: {
    id: String,
    name: String,
  },
  lightconnection: {
    id: String,
    name: String,
  },
  yadinumber: String,
  vidhansabha: String,
  jilhaparishad: String,
  sirialnumber: String,
  lokshabha: String,
  talukaparishad: String,
  wardnumber: String,
  matdar: String,
  jamin: String,
  sheti: String,
  ghare: String,
  adhikadhik: String,
  aarthikvishleshan: String,
  rajkiyvishleshan: String,
  rajkiypaksh: String,
  sharedharak: {
    id: String,
    name: String,
  },
  sadharabh: {
    id: String,
    name: String,
  },
  vima: {
    id: String,
    name: String,
  },
  mritvu: String,
  deathdate: Date,
  deathreason: String,
});



// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
