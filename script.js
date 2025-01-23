function add(left, right) {
    return left + right;
}

function subtract(left, right) {
    return left - right;
}

function multiply(left, right) {
    return left * right;
}

function divide(left, right) {
    return left / right;
}

function operate(operator, left, right) {
    switch(operator) {
        case '+':
            return add(left, right);
        case '-':
            return subtract(left, right);
        case '*':
            return multiply(left, right);
        case '/':
            return divide(left, right);
    }
}

let leftNumber = '';
let rightNumber = '';
let operator = '';

/* Number buttons functionality */
function addOnClicksToNumberButtons() {
    const buttons = document.querySelectorAll('.number');
    buttons.forEach((button) => button.addEventListener("click", (e) => {
        if(operator === '') {
            if(!(leftNumber == '' && e.target.innerText == '0')) { 
                leftNumber += e.target.innerText;
            }
        } else if (leftNumber !== '' && operator !== '') {
            rightNumber += e.target.innerText;
        }
        console.log(`Left number: ${leftNumber}`);
        console.log(`Right number: ${rightNumber}`);
    }));
}

function addOnClicksToOperationButtons() {
    const buttons = document.querySelectorAll('.operation');
    buttons.forEach((button) => button.addEventListener("click", (e) => {
        if(leftNumber !== '0' || leftNumber !== '') {
            operator = e.target.innerText;
        }
        console.log(`Operator: ${operator}`)
    }));
}

addOnClicksToNumberButtons();
addOnClicksToOperationButtons();