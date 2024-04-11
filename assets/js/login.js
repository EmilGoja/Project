
    var profileLink = document.querySelector('#sign-in-link');
    var loginButton = document.getElementById('loginButton');

    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        profileLink.innerHTML = "Hello, " + loggedInUser;
    }

    loginButton.addEventListener('click', function() {
        login();
    });



    function login() {
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;

        if (localStorage.getItem(username) === password) {
            alert('Login successful!');
            profileLink.innerHTML = "Hello, " + username;
            localStorage.setItem('loggedInUser', username); 
        } else {
            alert('Invalid username or password.');
        }
    }



