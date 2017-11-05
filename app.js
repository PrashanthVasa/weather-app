const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;
    
geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(results.Address);
        //chaining a callback
        weather.getWeather(results.Lattitude,results.Longitude,(errorMessage,weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log("It's currently "+weatherResults.temperature+" .It feels like "+weatherResults.apparentTemperature);
            }
        });
    }
});

//e2ed8a9d16e27ce304d193d8e238b7ec

