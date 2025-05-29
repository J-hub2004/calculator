let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}
function appendOperator(op) {

    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
}
function appendDecimal(){
    if ( !currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}
function calculate() {
    let result;
    switch ( operator) {
        case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
break;
case '-':
  result = parseFloat(previousNumber) - parseFloat(currentNumber);
break;
case '*': 
result = parseFloat(previousNumber) - parseFloat(currentNumber);
break;
case '/':
    result = parseFloat(previousNumber) / parseFloat(currentNumber);
break;
default:
    result = 0;
}
display.value = result;
currentNumber = result.toString();
previousNumber = '';
operator = '';
}
function clearDisplay(){
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}