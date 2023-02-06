let valueA = 0;
let valueB = 0;
let temporal = 0;
let operation = '';
const display = document.querySelector('#display');
const button0 = document.querySelector('#button-0');
const button1 = document.querySelector('#button-1');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');
const button4 = document.querySelector('#button-4');
const button5 = document.querySelector('#button-5');
const button6 = document.querySelector('#button-6');
const button7 = document.querySelector('#button-7');
const button8 = document.querySelector('#button-8');
const button9 = document.querySelector('#button-9');
const buttonSum = document.querySelector('#button-more');
const buttonMul = document.querySelector('#button-mul');
const buttonDiv = document.querySelector('#button-div');
const buttonRest = document.querySelector('#button-rest');
const buttonEqual = document.querySelector('#button-equal');

button0.addEventListener('click', () => {
  display.value += button0.textContent;
  temporal = parseInt(display.value);
});

button1.addEventListener('click', () => {
  display.value += button1.textContent;
  temporal = parseInt(display.value);
});

button2.addEventListener('click', () => {
  display.value += button2.textContent;
  temporal = parseInt(display.value);
});

button3.addEventListener('click', () => {
  display.value += button3.textContent;
  temporal = parseInt(display.value);
});

button4.addEventListener('click', () => {
  display.value += button4.textContent;
  temporal = parseInt(display.value);
});

button5.addEventListener('click', () => {
  display.value += button5.textContent;
  temporal = parseInt(display.value);
});

button6.addEventListener('click', () => {
  display.value += button6.textContent;
  temporal = parseInt(display.value);
});

button7.addEventListener('click', () => {
  display.value += button7.textContent;
  temporal = parseInt(display.value);
});

button8.addEventListener('click', () => {
  display.value += button8.textContent;
  temporal = parseInt(display.value);
});

button9.addEventListener('click', () => {
  display.value += button9.textContent;
  temporal = parseInt(display.value);
});

buttonSum.addEventListener('click', () => {
  operation = 'sum'
  display.value = '';
  valueA = temporal;
  temporal = 0;
});

buttonMul.addEventListener('click', () => {
  operation = 'mult'
  display.value = '';
  valueA = temporal;
  temporal = 0;
});

buttonDiv.addEventListener('click', () => {
  operation = 'div'
  display.value = '';
  valueA = temporal;
  temporal = 0;
});

buttonRest.addEventListener('click', () => {
  operation = 'rest'
  display.value = '';
  valueA = temporal;
  temporal = 0;
});

buttonEqual.addEventListener('click', () => {
  display.value = '';
  valueB = temporal;
  temporal = 0;
  switch (operation) {
    case 'mult':
      display.value = valueA * valueB;
      break;
    case 'sum':
      display.value = valueA + valueB;
      break;
    case 'rest':
      display.value = valueA - valueB;
      break;
    case 'div':
      display.value = valueA / valueB;
      break;
    default: 
      display.value = 'Error';
  }
});
