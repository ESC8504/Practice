let result = document.querySelector('#result');

let buttons = Array.from(document.querySelectorAll('.btn'));

let num1 = null;
let num2 = null;
let operator = null;

buttons.map(button => {
  button.addEventListener('click', (e) => {
    const clicked = e.target.textContent;

    if (clicked === 'clear') {
      result.textContent = '0';
      num1 = null;
      num2 = null;
      operator = null;
    } else if (clicked === '.') {
      if (result.textContent.indexOf('.') === -1) {
        result.textContent += '.';
      }
    } else if (clicked === '+' || clicked === '-' || clicked === '*' || clicked === '/') {
      num1 = parseFloat(result.textContent);
      operator = clicked;
      result.textContent = '0';
    } else if (clicked === 'Equals') {
      num2 = parseFloat(result.textContent);
      result.textContent = operate(operator, num1, num2);
      num1 = null;
      num2 = null;
      operator = null;
    } else {
      if (result.textContent === '0') {
        result.textContent = clicked;
      } else {
        result.textContent += clicked;
      }
    }
  });
});





const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num2 === 0 ? "Error" : num1 / num2;

buttons.map( button => {
  button.addEventListener('click', (e) => {

  })
})

function operate(operator, num1, num2){
  switch(operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      return "Error: Invalid operator";  
  }
}

