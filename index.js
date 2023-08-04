// Declaring needed variables
const input = document.querySelector("input");
const fromBtns = document.querySelectorAll(".buttons.from button");
const toBtns = document.querySelectorAll(".buttons.to button");
const resultElement = document.querySelector(".result p");

let baseTemperature, desiredTemperature, result;

// Checking if either of the button groups has no checked button
const checkIfFromBtnChecked = (btnArray) => {
  for (let i = 0; i < btnArray.length; i++) {
    if (btnArray[i].classList.contains("active")) {
      return true;
      break;
    }
  }
  return false;
};

// Checking if required variables are empty
const checkIfRequiredVariableIsEmpty = () => {
  if (
    input.value === "" ||
    !baseTemperature ||
    !desiredTemperature ||
    !checkIfFromBtnChecked(Array.from(fromBtns)) ||
    !checkIfFromBtnChecked(Array.from(toBtns))
  ) {
    return true;
  }
  return false;
};

// Conversion functions
const fahrenheitToFahrenheit = (fahrenheit) => {
  return `${fahrenheit} Fahrenheit`;
};

const fahrenheitToCelsius = (fahrenheit) => {
  const value = ((Number(fahrenheit) - 32) * 5) / 9;
  return `${value.toFixed(2)} Celsius`;
};

const fahrenheitToKelvin = (fahrenheit) => {
  const value = (Number(fahrenheit) - 32) * (5 / 9) + 273.15;
  return `${value.toFixed(2)} Kelvin`;
};

const celsiusToCelsius = (celsius) => {
  return `${celsius} Celsius`;
};

const celciusToFahrenheit = (celsius) => {
  const value = (Number(celsius) * 9) / 5 + 32;
  return `${value.toFixed(2)} Fahrenheit`;
};

const celsiusToKelvin = (celsius) => {
  const value = Number(celsius) + 273.15;
  return `${value.toFixed(2)} Kelvin`;
};

const kelvinToKelvin = (kelvin) => {
  return `${kelvin} Kelvin`;
};

const kelvinToFahrenheit = (kelvin) => {
  const value = ((Number(kelvin) - 273.15) * 9) / 5 + 32;
  return `${value.toFixed(2)} Fahrenheit`;
};

const kelvinToCelsius = (kelvin) => {
  const value = Number(kelvin) - 273.25;
  return `${value.toFixed(2)} Celsius`;
};

// Primary function for the conversion
const convertTemperature = () => {
  let result;

  if (checkIfRequiredVariableIsEmpty()) {
    console.log("No");
    return;
  }

  if (baseTemperature === desiredTemperature) {
    switch (baseTemperature) {
      case "fahrenheit":
        result = fahrenheitToFahrenheit(input.value);
        break;
      case "celsius":
        result = celsiusToCelsius(input.value);
        break;
      case "kelvin":
        result = kelvinToKelvin(input.value);
        break;
      default:
        result = "No conversion";
        break;
    }
    resultElement.textContent = result;
    return;
  }

  if (baseTemperature === "fahrenheit") {
    switch (desiredTemperature) {
      case "celsius":
        result = fahrenheitToCelsius(input.value);
        break;
      case "kelvin":
        result = fahrenheitToKelvin(input.value);
        break;
      default:
        result = "No conversion";
        break;
    }
    resultElement.textContent = result;
    return;
  }

  if (baseTemperature === "celsius") {
    switch (desiredTemperature) {
      case "fahrenheit":
        result = celciusToFahrenheit(input.value);
        break;
      case "kelvin":
        result = celsiusToKelvin(input.value);
        break;
      default:
        result = "No conversion";
        break;
    }
    resultElement.textContent = result;
    return;
  }

  if (baseTemperature === "kelvin") {
    switch (desiredTemperature) {
      case "fahrenheit":
        result = kelvinToFahrenheit(input.value);
        break;
      case "celsius":
        result = kelvinToCelsius(input.value);
        break;
      default:
        result = "No conversion";
        break;
    }
    resultElement.textContent = result;
    return;
  }

  resultElement.textContent = result;
};

// Adding event listeners
input.addEventListener("input", convertTemperature);

for (let i = 0; i < fromBtns.length; i++) {
  fromBtns[i].addEventListener("click", () => {
    for (let i = 0; i < fromBtns.length; i++) {
      fromBtns[i].classList.remove("active");
    }
    fromBtns[i].classList.add("active");
    baseTemperature = fromBtns[i].textContent.toLowerCase();
    convertTemperature();
  });
}

for (let i = 0; i < toBtns.length; i++) {
  toBtns[i].addEventListener("click", () => {
    for (let i = 0; i < toBtns.length; i++) {
      toBtns[i].classList.remove("active");
    }
    toBtns[i].classList.add("active");
    desiredTemperature = toBtns[i].textContent.toLowerCase();
    convertTemperature();
  });
}
