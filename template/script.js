const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awiatingNextValue = false;


function sendNumberValue(number) {
// replace current display value if the first value is entered
if (awiatingNextValue) {
    calculatorDisplay.textContent = number;
    awiatingNextValue = false;
} else {
    // If the current display value is 0. replace it, if not add number
   const displayValue = calculatorDisplay.textContent;
   calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}
 }
function addDecimal() {
    //if the operator pressed, don't add decimal
    if (awiatingNextValue) return
    //if no decimal, add one
 if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
 }

}

// calculate first and secand values depending on operator
const calculate ={
    '/': ( firstValue, secondNumber) => firstNumber / secondNumber,
    '*': ( fir',' expected.ts(1005)stValue, secondNumber) => firstNumber * secondNumber;
    '+': ( firstValue, secondNumber) => firstNumber + secondNumber;
    '-': ( firstValue, secondNumber) => firstNumber - secondNumber;
    '=': ( firstValue, secondNumber) =>  secondNumber;
}

 
 

function useOperator(operator) {
    const currentValue = Number( calculatorDisplay.textContent);
    //prevent multiple operators
    if (operatorValue && awiatingNextValue) return;
    //Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
      console.log(firstValue, operatorValue, currentValue);
      const calculation = calculate[operator](firstValue, currentValue);
      console.log('calculation', calculation);
   }
    // Ready for next value, store operator
    awiatingNextValue = true;
    operatorValue = operator;
   
}

// add Event Listeners for numvers, opertors , decimal buttons
inputBtns.forEach(( inputBtn) =>{
   
if (inputBtn.classList.length === 0) {
     inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
     inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }else if (inputBtn.classList.contains('decimal')) {
     inputBtn.addEventListener('click', () => addDecimal());
    }
});

// Reset all value, display

function resetAll () {
 firstValue = 0;
 operatorValue = '';
 awiatingNextValue = false;
 calculatorDisplay.textContent = '0';
 
}

// Event Listener
clearBtn.addEventListener ('click', resetAll);
