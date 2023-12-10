
const targetElement = document.getElementById('target');

const item1 = document.createElement('li');
item1.textContent = 'First item';

const item2 = document.createElement('li');
item2.textContent = 'Second item';

const item3 = document.createElement('li');
item3.textContent = 'Third item';

targetElement.appendChild(item1);
targetElement.appendChild(item2);
targetElement.appendChild(item3);

item2.classList.add('my-item');
