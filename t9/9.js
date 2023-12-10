
function calculate() {

    const input = document.getElementById('inputField').value;
    const resultElement = document.getElementById('result');

    let result;
    let operands;
    let num1, num2;

    if (input.includes('+')) {
        operands = input.split('+');
        num1 = parseInt(operands[0], 10);
        num2 = parseInt(operands[1], 10);
        result = num1 + num2;
    } else if (input.includes('-')) {
        operands = input.split('-');
        num1 = parseInt(operands[0], 10);
        num2 = parseInt(operands[1], 10);
        result = num1 - num2;
    } else if (input.includes('*')) {
        operands = input.split('*');
        num1 = parseInt(operands[0], 10);
        num2 = parseInt(operands[1], 10);
        result = num1 * num2;
    } else if (input.includes('/')) {
        operands = input.split('/');
        num1 = parseInt(operands[0], 10);
        num2 = parseInt(operands[1], 10);
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = 'Cannot divide by zero';
        }
    } else {
        result = 'Invalid input';
    }

    resultElement.textContent = 'Result: ' + result;
}

document.getElementById('calculateButton').addEventListener('click', calculate);
