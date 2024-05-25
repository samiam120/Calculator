let firstNumber = "";
let secondNumber = "";
let operator = "";

const display = document.querySelector("#display");
const operatorButton = Array.from(document.querySelectorAll(".operator"));
const clearButton = document.querySelector("#clearButton");
const digits = Array.from(document.querySelectorAll(".digits button"));
const equalsButton = document.querySelector("#equalsKey");

digits.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!operator) {
      display.textContent += btn.textContent;
      firstNumber = display.textContent;
    } else {
      secondNumber += btn.textContent;
      display.textContent = secondNumber;
    }
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber && secondNumber && operator) {
      displayAnswer();
      firstNumber = display.textContent;
      secondNumber = "";
    }
    operator = button.textContent;
  });
});

equalsButton.addEventListener("click", () => {
  if (firstNumber && operator && secondNumber) {
    displayAnswer();
    operator = "";
    firstNumber = display.textContent;
    secondNumber = "";
  }
});

clearButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "";
});

function displayAnswer() {
  const one = parseFloat(firstNumber);
  const two = parseFloat(secondNumber);
  display.textContent = operate(operator, one, two);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b === 0 ? display.textContent = "chill" : (a/b).toFixed(2);
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operation";
  }
}
