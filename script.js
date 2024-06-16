let currentNumber = "";
let previousNumber = "";
let operator = "";
let memory = null;

const display = document.getElementById("result");

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.value = "";
}

function clearAll() {
  clearScreen();
  memory = null;
}

function clearMemory() {
  memory = null;
  display.value = "";
}

function addToMemory() {
  if (currentNumber !== "") {
    memory = parseFloat(currentNumber);
  }
}

function subtractFromMemory() {
  if (currentNumber !== "") {
    memory = memory - parseFloat(currentNumber);
  }
}

function storeInMemory() {
  if (currentNumber !== "") {
    memory = parseFloat(currentNumber);
  }
}

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function appendOperator(op) {
  if (currentNumber === "") return;
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function calculate() {
  if (currentNumber === "" || operator === "") return;

  let result;
  const prevNum = parseFloat(previousNumber);
  const currNum = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = prevNum + currNum;
      break;
    case "-":
      result = prevNum - currNum;
      break;
    case "*":
      result = prevNum * currNum;
      break;
    case "/":
      if (currNum === 0) {
        alert("Error: Division by zero!");
        return;
      }
      result = prevNum / currNum;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  display.value = currentNumber;
}

