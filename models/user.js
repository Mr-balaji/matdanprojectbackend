const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  familynumber: String,
  name: String,
  userImage:{
    type:String,
    // required:true
},
addredetails:{
  name: String,
    code: String,
},
  fathername: String,
  surname: String,
  petname: String,
  fatherpetname: String,
  surnamepetname: String,
  mothername: String,
  selectedGender: {
    name: String,
    code: String,
  },
  email: String,
  phone: String,
  borndate: Date,
  sarkariyojna: Array,
  vaivhaikstiti: {
    name: String,
    code: String,
  },
  daridrareshekahili: {
    id: String,
    name: String,
  },
  chand: Array,
  language: Array,
  vaivsayname: {
    id: Number,
    name: String,
  },
  schoolname: {
    name: String,
    code: String,
  },
  mahavidalay: {
    name: String,
    code: String,
  },
  abyaskarm: Array,
  vibhag: {
    name: String,
    code: String,
  },
  vaivsaynamevalue: Array,
  dharm: {
    name: String,
    code: String,
  },
  cast: {
    name: String,
    code: String,
  },
  upjat: {
    name: String,
    code: String,
  },
  bloodgroup: {
    name: String,
    code: String,
  },
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
  familydoctor: {
    id: String,
    name: String,
  },
  bllodnodateplace: Array,
  vaisanname: Array,
  ajarname: Array,
  doctorname: String,
  doctoraddress: String,
  padvi: String,
  adharcard: {
    name: String,
    code: String,
  },
  pancard: {
    id: String,
    name: String,
  },
  passport: {
    id: String,
    name: String,
  },
  rashancard: {
    id: String,
    name: String,
  },
  incometax: {
    id: String,
    name: String,
  },
  votercard: {
    id: String,
    name: String,
  },
  pancardno: {
    name: String,
    code: String,
  },
  rashnacardname: {
    id: Number,
    name: String,
  },
  dukandarachename: String,
  passportno: String,
  incometaxno:String,
  votercardname: String,
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
  panipatti: {
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
  grampanchayat: String,
  jilhaparishad: String,
  sirialnumber: String,
  lokshabha: String,
  talukaparishad: String,
  wardnumber: String,
  matdar: Array,
  jamin: Array,
  sheti: Array,
  ghare: Array,
  adhikadhik: {
    name: String,
    code: String,
  },
  aarthikvishleshan: {
    name: String,
    code: String,
  },
  samjkarya: Array,
  rajkiypad: {
    id: String,
    name: String,
  },
  rajkiyvishleshan: {
    name: String,
    code: String,
  },
  rajkiypaksh: {
    name: String,
    code: String,
  },
  samajkarya: Array,
  rajkiyPadName: Array,
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
  vimaname:Array,
  bankkhatename: Array,
  bankkhateno: {
    name: String,
    code: String,
  },
  sharedharakename: Array,
  mritvu: String,
  mritvupramanpatra: String,
  deathdate: Date,
  deathreason: String,
});



// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
