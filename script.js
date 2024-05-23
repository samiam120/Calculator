let firstNumber = 0;
let secondNumber = 0;

let operator = "";

const display = document.querySelector("#display");
const operatorButton = Array.from(document.querySelectorAll(".operator"));
clearButton = document.querySelector("#clearButton");
const digits = Array.from(document.querySelectorAll(".digits button"));
const equalsButton = document.querySelector("#equalsKey");

digits.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.textContent += btn.textContent;
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    firstNumber = parseInt(display.textContent);
    operator = button.textContent;
    display.textContent = "";
  });
});

equalsButton.addEventListener("click", () => {
  secondNumber = parseInt(display.textContent);
  display.textContent = operate(operator, firstNumber, secondNumber);
});

operator = clearButton.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  display.textContent = "";
});

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
  return a / b;
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
