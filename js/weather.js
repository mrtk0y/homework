const https = require('https');
const http = require('http');

function printMessage(city, temp) {
    const message = `Nhiệt độ của Thành phố ${city} là ${temp} C`;
    console.log(message);
}

function getCelsius(kelvin) {
    const celsius = kelvin - 273;
    return Math.round(celsius);
}

function printError (error) {
    console.error(error.message);
}

function getTemp (city) {
    try{
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=27e8a192a08c2cb50fc6139144dcd6fe`, response => {
            if (response.statusCode === 200){
                let body = "";
                
                //Read data
                response.on('data', data1 => {
                    body += data1.toString();
                });

                //Parse data
                response.on('end', () => {
                    let weatherKelvin = JSON.parse(body);
                        try {
                            printMessage(city, getCelsius(weatherKelvin.main.temp));
                            // console.log(weatherKelvin);
                        } catch (error) {
                            printError(error);
                        }
                });
            } else {
                const message =`There was an error getting the Temp for ${city} (${http.STATUS_CODES[response.statusCode]}) `;
                const statusCodeError = new Error (message);
                printError(statusCodeError);
            };
        });
        request.on('error', printError) 
    } catch(error) {
            printError(error);
    }
}

module.exports.getTemp = getTemp;