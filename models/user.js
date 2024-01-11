const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  familynumber: String,
    name: {
        name: String,
        code: String
    },
    motherName: {
        name: String,
        code: String
    },
    petname: String,
    fatherpetname: String,
    surnamepetname: String,
    mothername: String,
    selectedGender: {
        name: String,
        code: String
    },
    email: String,
    phone: String,
    borndate: Date,
    sarkariyojna: {
        name: String,
        code: String
    },
    kaushalay: {
        name: String,
        code: String
    },
    vaivhaikstiti: {
        name: String,
        code: String
    },
    daridrareshekahili: {
        id: String,
        name: String
    },
    chand: {
        name: String,
        code: String
    },
    fathername: {
        name: String,
        code: String
    },
    surname: {
        name: String,
        code: String
    },
    language: {
        name: String,
        code: String
    },
    dist: {
        name: String,
        code: String
    },
    taluka: {
        name: String,
        code: String
    },
    addredetails: {
        name: String,
        code: String
    },
    pincode: {
        name: String,
        code: String
    },
    wardno: {
        name: String,
        code: String
    },
    othervisllagecome: {
        id: String,
        name: String
    },
    fulladdress: {
        name: String,
        code: String
    },
    othervillagecomename: {
        name: String,
        code: String
    },
    vaivsayname: {
        id: String,
        name: String
    },
    schoolname: {
        name: String,
        code: String
    },
    mahavidalay: {
        name: String,
        code: String
    },
    abyaskarm: {
        name: String,
        code: String
    },
    vibhag: {
        name: String,
        code: String
    },
    dharm: {
        name: String,
        code: String
    },
    cast: String,
    upjat: {
        name: String,
        code: String
    },
    bloodgroup: {
        name: String,
        code: String
    },
    blooddonate: {
        id: String,
        name: String
    },
    vaisan: {
        id: String,
        name: String
    },
    ajar: {
        id: String,
        name: String
    },
    familydoctor: {
        id: String,
        name: String
    },
    apgatv: {
        id: String,
        name: String
    },
    bllodnodateplace: {
        name: String,
        code: String
    },
    vaisanname: {
        name: String,
        code: String
    },
    ajarname: {
        name: String,
        code: String
    },
    doctorname: String,
    doctoraddress: String,
    padvi: String,
    apagatavpramanpatr: String,
    apagatavtakevari: String,
    adharcard: String,
    pancard: {
        id: String,
        name: String
    },
    passport: {
        id: String,
        name: String
    },
    rashancard: {
        id: String,
        name: String
    },
    incometax: {
        id: String,
        name: String
    },
    votercard: {
        id: String,
        name: String
    },
    drivinglicence: {
        id: String,
        name: String
    },
    pancardno: String,
    passportno: String,
    rashnacardname: {
        id: String,
        name: String
    },
    dukandarachename: String,
    incometaxno: String,
    votercardname: String,
    drivinglincesname: {
        name: String,
        code: String
    },
    drivinglicencename: String,
    homeno: String,
    sarkariyognalabh: {
        id: String,
        name: String
    },
    shauchalay: {
        id: String,
        name: String
    },
    hometype: {
        name: String,
        code: String
    },
    waterconnection: {
        id: String,
        name: String
    },
    chaviconnection: {
        id: String,
        name: String
    },
    gharphala: {
        id: String,
        name: String
    },
    panipatti: {
        id: String,
        name: String
    },
    gyasconnection: {
        id: String,
        name: String
    },
    lightconnection: {
        id: String,
        name: String
    },
    panyachaprakar: {
        name: String,
        code: String
    },
    chavi: {
        name: String,
        code: String
    },
    gascompanyname: {
        name: String,
        code: String
    },
    agencyname: {
        name: String,
        code: String
    },
    vidhansabha: String,
    vidhantsabhasirialnumber: String,
    vidhansabhayadinumber: String,
    lokshabha: String,
    lokshabhaasirialnumber: String,
    lokshabhayadinumber: String,
    jilhaparishad: String,
    jilhaparishadsirialnumber: String,
    jilhaparishadyadinumber: String,
    grampanchayat: String,
    grampanchayatsirialnumber: String,
    grampanchayatyadinumber: String,
    talukaparishad: String,
    wardnumber: String,
    matdar: {
        name: String,
        code: String
    },
    jamin: {
        name: String,
        code: String
    },
    sheti: {
        name: String,
        code: String
    },
    ghare: {
        id: String,
        name: String
    },
    aarthikvishleshan: {
        name: String,
        code: String
    },
    Janavare: {
        name: String,
        code: String
    },
    vahane: {
        id: String,
        name: String
    },
    samjkarya: {
        id: String,
        name: String
    },
    rajkiypad: {
        id: String,
        name: String
    },
    rajkiyvishleshan: {
        name: String,
        code: String
    },
    rajkiypaksh: {
        name: String,
        code: String
    },
    samajkarya: {
        name: String,
        code: String
    },
    rajkiyPadName: {
        name: String,
        code: String
    },
    bankkhate: {
        id: String,
        name: String
    },
    sharedharak: {
        id: String,
        name: String
    },
    sadharabh: {
        id: String,
        name: String
    },
    sandharabhname:String,
    sandharabhaddress:String,
    sandharabhphone:String,
    nokri: {
        id: String,
        name: String
    },
    vima: {
        id: String,
        name: String
    },
    bankkhatename: {
        name: String,
        code: String
    },
    bankkhateno: {
        name: String,
        code: String
    },
    sharedharakename: {
        name: String,
        code: String
    },
    vimaname: {
        name: String,
        code: String
    },
    mritvu: String,
    mritvupramanpatra: String,
    deathdate: Date,
    deathreason: String,
    userImage:String,
    vahanahanedetails: Array
});



// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
