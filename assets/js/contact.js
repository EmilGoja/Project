var formInput = document.querySelector('#contact-form');

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "3jhj_TeYiehtSVLv3",
    });
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        if (localStorage.getItem('login')) {
            if (!formInput[3].value) {
                alert('Please write a message!');
            } else {
                formInput[1].value = localStorage.getItem('login');
                event.preventDefault();
                emailjs.sendForm('service_45q8sfp', 'template_cbph6nn', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            }
        }

    });
}