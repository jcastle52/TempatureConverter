let tempature = prompt();

const convertToCelcius = (tempature) => {
  let celsius = (tempature - 32) * (5 / 9);
  return celsius;
};

const describeTempature = (tempature) => {
  celsius = convertToCelcius(tempature);

  if (celsius < 0) {
    return (
      tempature +
      " °F is equal to " +
      celsius +
      " °C. This is very cold and you should stay home."
    );
  } else if (celsius < 20) {
    return (
      tempature +
      " °F is equal to " +
      celsius +
      " °C. This is cold so put on a jacket."
    );
  } else if (celsius < 30) {
    return (
      tempature +
      " °F is equal to " +
      celsius +
      " °C. This is warm. Good day to go to the park."
    );
  } else if (celsius < 40) {
    return (
      tempature +
      " °F is equal to " +
      celsius +
      " °C. This is hot. Time to go to the beach!"
    );
  } else if (celsius >= 40) {
    return (
      tempature +
      " °F is equal to " +
      celsius +
      " °C. This is very hot. Stay home and crank the A/C."
    );
  }
};

alert(describeTempature(tempature));
