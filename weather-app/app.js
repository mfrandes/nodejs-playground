const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const command = process.argv;

if(command[2] === 'find'){
    if(command[3] && command[3].length > 0){
        geocode(command[3], (error, {latitude, longitude, name } = {}) => {
            if (error) {
                return console.log('Error: ', error);
            }
            forecast(latitude, longitude, (error, forecast) => {
                if (error) {
                    return console.log('Error', error);
                }
                console.log(name);
                console.log(forecast);
            })
        })
    }
    else{
        console.log('Please enter a value to search');
        
    }
}else{
    console.log('Bad command!');
    
}
