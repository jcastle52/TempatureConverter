let tempature = prompt("Enter tempature in fahrenheit:");

const convertToCelcius = (tempature) => {
  let celsius = (tempature - 32) * (5 / 9);
  return celsius;
};

const describeTempature = (tempature) => {
  celsius = convertToCelcius(tempature);
  let convertText = tempature + " °F is equal to " + celsius + " °C. ";

  if (celsius < 0) {
    return convertText + "This is very cold and you should stay home.";
  } else if (celsius < 20) {
    return convertText + "This is cold so put on a jacket.";
  } else if (celsius < 30) {
    return convertText + "This is warm. Good day to go to the park.";
  } else if (celsius < 40) {
    return convertText + "This is hot. Time to go to the beach!";
  } else if (celsius >= 40) {
    return convertText + "This is very hot. Stay home and crank the A/C.";
  }
};

alert(describeTempature(tempature));
