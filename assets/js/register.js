let registerButton = document.getElementById('registerButton');
registerButton.addEventListener('click', function() {
    register();
});
function register() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(username)) {
        alert('Username already exists.');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful!');
        window.location.assign('../../index.html'); 
        // setTimeout(function() {
        //     document.getElementById('sign-in-link').click(); 
        // }, 500);
    }
}
// localStorage.clear()