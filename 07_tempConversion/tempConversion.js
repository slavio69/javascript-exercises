const convertToCelsius = function(temp) {
  let celsius = ((temp-32)*(5/9))
  console.log(celsius)
  let rounded = Math.round(celsius*10)/10
  return rounded
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = Math.round(((temp*1.8)+32)*10)/10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

convertToCelsius(100)
