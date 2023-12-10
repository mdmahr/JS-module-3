
function calculate() {

    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    resultElement.textContent = 'Result: ' + result;
}


document.getElementById('calculateButton').addEventListener('click', calculate);
