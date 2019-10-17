//create variables representing checkbox and password input
var toggleCheckbox = document.querySelector('#show-password');
var password = document.querySelector('#password');

//puts an event listener on checkbox that toggles the type 
//of password input field so we can see the password
toggleCheckbox.addEventListener('click', function(event) {
    if (toggleCheckbox.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});

//changes you're making
//1. adjusted variable names for clarity
//2. 