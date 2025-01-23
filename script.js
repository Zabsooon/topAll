let tempNumber = '';
let operator = '';
let isDecimal = false;

function reset() {
    isDecimal = false;
    value.innerText = "";
    operator = '';
    tempNumber = '';
}

function operate() {
    
}

function addFunctionalityToAllButtons() {
    let value = document.querySelector('#value');
    
    /* operations */ 
    const operationButtons = document.querySelectorAll('.operation');
    operationButtons.forEach((button) => button.addEventListener("click", (e) => {
        switch(e.target.value) {
            case 'clear':
                reset();
               break;
            case 'sign':
                break;
            case 'percent':
                console.log('functionality to work on %');
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                if(tempNumber === '') {                    
                    tempNumber = value.innerText;
                    value.innerText = '';
                    operator = e.target.value;
                } 
                break;
            case 'equals':
                let temp = operate(operator, tempNumber, value.innerText);
                reset();
                value.innerText = temp;
                break;
            case 'decimal':
                if(isDecimal == false) {
                    value.innerText += '.';
                    isDecimal = true;
                }
                break;
        }
    }));

    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach((button) => button.addEventListener("click", (e) => {
        if(!(value.innerText === '' && e.target.value === '0')) {
            if(value.innerText.length < 22) {
                value.innerText += e.target.value;
            }
        }
    }));
}

addFunctionalityToAllButtons();


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