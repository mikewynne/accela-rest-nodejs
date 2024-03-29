var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

addresses = [
    {
        xCoordinate: -75.226024,
        yCoordinate: 40.032275,
        streetStart: 123,
        streetName: 'Some Street',
        city: 'Philadelphia',
        state: {
             "text": 'PA',
             "value": 'PA'
           },
        postalCode: '19134'
    }
]

accela.records.createRecordAddresses({recordID: 'ISLANDTON-14CAP-00000-0004Q'}, JSON.stringify(addresses), function (response, error) {
    if(!error) {
        console.log(response);
    }
    else {
        console.log('An error ocurred: ' + error);
    }
});