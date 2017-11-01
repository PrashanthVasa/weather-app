const request = require('request');

var geocodeAddress = (address,callback) => {
    encodedAddress = encodeURIComponent(address);
    request({
        url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('Unable to connect to Google Servers');
        }else if(body.status == 'OVER_QUERY_LIMIT'){
            callback('Unabel to find that address');
        }else if(body.status == 'OK'){
            callback(undefined,{
                Address: body.results[0].formatted_address,
                Lattitude: +body.results[0].geometry.location.lat,
                Longitude: +body.results[0].geometry.location.lng
            });
        }    
    });
};
module.exports.geocodeAddress = geocodeAddress;
