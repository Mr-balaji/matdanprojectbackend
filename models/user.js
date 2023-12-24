const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  familynumber: String,
  name: String,
  fathername: String,
  surname: String,
  petname: String,
  fatherpetname: String,
  surnamepetname: String,
  mothername: String,
  selectedGender: {
    id: String,
    name: String,
  },
  email: String,
  phone: String,
  borndate: Date,
  rashancard: {
    id: String,
    name: String,
  },
  bloodgroup: String,
  blooddonate: {
    id: String,
    name: String,
  },
  vaisan: {
    id: String,
    name: String,
  },
  ajar: {
    id: String,
    name: String,
  },
  vaisanname: Array,
  ajarname: String,
  bllodnodateplace: String,
  mritvu: String,
  deathdate: Date,
  deathreason: String,
  rashnacardname: {
    id: Number,
    name: String,
  },
  address: {
    id: Number,
    name: String,
  },
  fulladdress: {
    id: String,
    name: String,
  },
  wardno: {
    id: String,
    name: String,
  },
  othervisllagecome: {
    id: String,
    name: String,
  },
  othervillagecomename: String,
  vaivsayname: {
    id: Number,
    name: String,
  },
  schoolname: {
    id: String,
    name: String,
  },
  mahavidalay: {
    id: String,
    name: String,
  },
  abyaskarm: {
    id: String,
    name: String,
  },
  vibhag: String,
  dharm: {
    id: String,
    name: String,
  },
  cast: {
    id: String,
    name: String,
  },
  upjat: {
    id: String,
    name: String,
  },
  adharcard: String,
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
  pancardno: String,
  passportno: String,
  incometaxno: String,
  homeno: String,
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
  chaviconnection: {
    id: String,
    name: String,
  },
  gharphala: {
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
  sarkariyojna: Array,
  yadinumber: String,
  vidhansabha: String,
  grampanchayat: String,
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
  samjkarya: {
    id: String,
    name: String,
  },
  rajkiypad: {
    id: String,
    name: String,
  },
  rajkiyvishleshan: String,
  rajkiypaksh: String,
  samajkarya: Array,
  bankkhate: {
    id: String,
    name: String,
  },
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
  bankkhatename: String,
  bankkhateno: String,
  sharedharakename: String,
});



// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
