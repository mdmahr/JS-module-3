
function handleSubmit(event) {

    event.preventDefault();


    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const targetElement = document.getElementById('target');

    targetElement.textContent = `Your name is ${firstName} ${lastName}`;
}


document.querySelector('form').addEventListener('submit', handleSubmit);
