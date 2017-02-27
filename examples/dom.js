// Returns an object with the first matching element
var button = document.querySelector('.btn');

button.id = 'myButton';
button.title ='Click Here!';

// if (button.title === 'Click Here!') {
//     alert(button.title + ' - The title is amazing.');
// }

//The destructive way to change classes //
// button.className = 'btn-success';

//The better way to change classes //
button.classList.add('btn-success');

button.classList.remove('btn-primary');

button.classList.toggle('btn-block');

// if (button.classList.contains('btn-success')) {
//     alert('Success!');
// }

// Returns an array of matching elements
var buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button, currentIndex) {
    button.classList.add('btn-success');
    button.classList.add('btn-block');
    button.innerHTML = 'Button ' + (currentIndex + 1);

    console.log(button.dataset.showWhenLoading);
});

var firstName = document.querySelector('#firstName');
    // firstName = firstName.value

    console.log(firstName);

var buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
    button.addEventListener('click', showFirstName);
});

function showFirstName() {
    document.querySelector('body').innerHTML += firstName.value;
}