const User = require("../models/user");

async function getAlluserList(requestedData) {
    const query = {};
    const filterField = [
      'familynumber',
      'name',
      'fathername',
      'surname',
      'email',
      'phone',
      'petname',
      'fatherpetname',
      'surnamepetname',
      'mothername',
      'selectedGender',
      'date',
      'address',
      'fulladdress',
      'wardno',
      'othervillagecome',
      'farmingrelated',
      'profitoffarming',
      'worker',
      'job',
      'govjob',
      'helpingculture',
      'homewoman',
      'dharm',
      'cas',
      'upjat',
      'bloodgroup',
      'selectedraktandan',
      'adharcard' ,
      'pancard',
      'incometax',
      'homeno',
      'grampanchayat',
      'sarkariyognalabh',
      'shauchalay',
      'hometype',
      'waterconnection',
      'kaushalya',
      'gyasconnection',
      'lightconnection',
      'yadinumber',
      'vidhansabha',
      'jilhaparishad',
      'sirialnumber',
      'lokshabha',
      'talukaparishad',
      'wardnumber',
      'matdar',
      'jamin',
      'sheti',
      'ghare',
      'adhikadhik',
      'aarthikvishleshan',
      'rajkiyvishleshan',
      'rajkiypaksh',
      'sharedharak',
      'sadharabh',
      'vima',
      'mritvu',
      'deathdate',
      'deathreason',
    ]

    // Add conditions based on the fields provided in requestedData
    filterField.forEach(field => {
        if (requestedData[field]) {
          query[field] = requestedData[field];
        }
      });
   const resp = User.find(query)

   
  return resp;
}

module.exports = {getAlluserList} 