const request = require('request');

var getWeather = (latitude,longitude,callback)=>{
    //console.log("hai");
    request({
        url:"https://api.darksky.net/forecast/e2ed8a9d16e27ce304d193d8e238b7ec/"+latitude+","+longitude,
        json:true
    },(error,response,body)=>{
        if(!error&&response.statusCode==200){
            callback(undefined,{
                temperature : body.currently.temperature,
                apparentTemperature :body.currently.apparentTemperature
            });
        }
        else{
            callback('unable to fetch weather ');
        }

    });
};

module.exports.getWeather = getWeather;