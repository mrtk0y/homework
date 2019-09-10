// Function to get the Temperature of City module
const weather = require('./weather.js')

const city = process.argv.slice(2);
city.forEach(weather.getTemp);