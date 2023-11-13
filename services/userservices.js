const User = require("../models/user");

async function getAlluserList(requestedData) {

    const query = {};
    const filterField = [
        'firstName',
        'fatherName',
        'lastName',
        'gender',
        'cast',
        'DOB',
        'Death',
        'address',
        'familyno',
        'homeno',
        'voter',
        'voterperson',
        'profession',
        'education',
        'bloodgroup',
        'blooddonate',
        'adharnumber',
        'pannumber',
        'voteridNumber',
        'passport',
        'rashancard',
        'daridryareshekhali',
        'email',
        'drivinglicenece',
        'bankdetail',
        'govschembenefits',
        'incomtax',
        'smoking',
        'healthissue',
        'apagatv',
        'mariatalstatus',
        'shareholder',
        'sandharbh',
        'vima',
        'toilet',
        'photo',
        'chand',
        'familydoctor',
        'phoneno',
        'mobile',
        'home',
        'hometype',
        'socialwork',
        'rajkiypad',
        'sampanti',
        'arthikvishleshan',
        'rajkiyvishleshan',
        'rajkiypaksh',
        'panyachastrot',
        'chaviconection',
        'gharphala',
        'panipatti',
        'kaushalya',
        'gyasconnection',
        'lightconnection',
        'language',
        'mothername',
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