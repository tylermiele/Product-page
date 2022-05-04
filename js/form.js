//grab the buttons from the DOM to control the display of the form
const closeBtn = document.querySelector('.fa-x');
const form = document.querySelector('.pop-up-form');
const showBtn = document.querySelector('#showBtn');

// shows the form if they want to re-displayed the form after it was closed
showBtn.addEventListener('click', function () {
    form.style.display = 'block';
    form.style.animationDelay = '0s';
});

// closes the form
closeBtn.addEventListener('click', function () {
    form.style.display = 'none';
});
