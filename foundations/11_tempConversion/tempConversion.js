const convertToCelsius = function(far) {
  let celcius = (far - 32) / (9/5);
  celcius = (Math.round(celcius * 10))/10;
  return celcius;
};

const convertToFahrenheit = function(cel) {
    let farenheit = cel * 9/5 + 32;
    farenheit = (Math.round(farenheit*10))/10;
    return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
