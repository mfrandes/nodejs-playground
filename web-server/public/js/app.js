console.log('Client side js file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })
const address = 'Boston';
fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWZyYW5kZXMiLCJhIjoiY2thcWd4OTczMDVnMDJwcWZsOGMxZWJhNSJ9.yX9TteM-K4iCyebpCfw97w`)
    .then(response => {
        response.json().then(data => {
            if(data){
                const longitude = data.features[0].center[0]
                const latitude = data.features[0].center[1]
                fetch(`http://api.weatherstack.com/current?access_key=cc4bdbd131fafb1701fc12c6a312817c&query=${latitude},${longitude}&units=m`)
                .then(response => {
                    response.json().then(weatherData => {
                        console.log(weatherData);
                        
                        const { weather_descriptions: description, temperature, feelslike } = weatherData.current;
                        console.log(`${description[0]}.It's currentrly ${temperature} degrees out and it feels like ${feelslike} degrees`);
                    })
                })
            }
        })
    })