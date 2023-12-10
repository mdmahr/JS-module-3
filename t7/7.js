
const triggerElement = document.getElementById('trigger');
const targetElement = document.getElementById('target');

const originalImage = 'picA.jpg';
const hoverImage = 'picB.jpg';

triggerElement.addEventListener('mouseover', function() {
    targetElement.src = hoverImage;
});

triggerElement.addEventListener('mouseout', function() {
    targetElement.src = originalImage;
});
