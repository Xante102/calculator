const calculator = () => {
  var value;
  num1 = parseFloat(document.getElementById("num1").value);
  num2 = parseFloat(document.getElementById("num2").value);
  sign = document.getElementById("sign").value;
  value = calculate(num1, num2, sign);
  document.getElementById("output").innerText = value;
};
const calculate = (val1, val2, operator = "+") => {
  var result = 0;
  var operand = operator;

  switch (operand) {
    case "*":
      result = val1 * val2;
      break;
    case "-":
      result = val1 - val2;
      break;
    case "+":
      result = val1 + val2;
      break;
    case "/":
      result = val1 / val2;
      break;

    default:
      result = val1 + val2;
      break;
  }
  return result;
};

const rectangle = () => {
  longSide = document.getElementById("long-side").value;
  shortSide = document.getElementById("short-side").value;
  document.getElementById("rectangle-area").innerText = longSide * shortSide;
};

const circumferenceArea = () => {
  circumference = document.getElementById("circumference").value;
  document.getElementById("circumference-area").innerText =
    (circumference * circumference) / (4 * 3.14);
};

const radiusArea = () => {
  radius = document.getElementById("radius").value;
  document.getElementById("radius-area").innerText = 3.14 * (radius * radius);
};

const diameterArea = () => {
  diameter = document.getElementById("diameter").value;
  document.getElementById("diameter-area").innerText =
    (1 / 4) * 3.14 * (diameter * diameter);
};

const showCalculator = () => {
  let x = document.getElementById('category').value;

  if (x == 1) {
    document.getElementById('simpleDiv').style.display = "block";
    document.getElementById('circumferenceDiv').style.display = "none";
    document.getElementById('radiusDiv').style.display = "none";
    document.getElementById('diameterDiv').style.display = "none";
    document.getElementById('rectangleDiv').style.display = "none";
  } else if (x == 2) {
    document.getElementById('simpleDiv').style.display = "none";
    document.getElementById('circumferenceDiv').style.display = "block";
    document.getElementById('radiusDiv').style.display = "none";
    document.getElementById('diameterDiv').style.display = "none";
    document.getElementById('rectangleDiv').style.display = "none";
  } else if (x == 3) {
    document.getElementById('simpleDiv').style.display = "none";
    document.getElementById('circumferenceDiv').style.display = "none";
    document.getElementById('radiusDiv').style.display = "block";
    document.getElementById('diameterDiv').style.display = "none";
    document.getElementById('rectangleDiv').style.display = "none";
  } else if (x == 4) {
    document.getElementById('simpleDiv').style.display = "none";
    document.getElementById('circumferenceDiv').style.display = "none";
    document.getElementById('radiusDiv').style.display = "none";
    document.getElementById('diameterDiv').style.display = "block";
    document.getElementById('rectangleDiv').style.display = "none";
  } else if (x == 5) {
    document.getElementById('simpleDiv').style.display = "none";
    document.getElementById('circumferenceDiv').style.display = "none";
    document.getElementById('radiusDiv').style.display = "none";
    document.getElementById('diameterDiv').style.display = "none";
    document.getElementById('rectangleDiv').style.display = "block";
  }
}

