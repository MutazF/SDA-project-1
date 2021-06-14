let nameRegex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
let emailRegex = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
let messageRegex = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]";

let a, b, c = false;

function validateForm() {
    validateName();
    validateEmail();
    validateMessage();

    if (a && b && c === true) {
        alert("Thanks for Contact us.")
        document.forms["Contact"].submit();
    }
    else {
        alert("Error in submitting. Refreshing the page.");
        redirectToHomePage();
    }

}

function redirectToHomePage() {
    location.reload();
}

function validateName() {
    let x = document.getElementById("name").value;

    if (x.match(nameRegex)) {
        a = true;
    }
    else {
        a = false;
        alert("Name is not correct!\nFormat: Mutaz Fallata");
    }
}


function validateEmail() {
    let x = document.getElementById("email").value;

    if (x.match(emailRegex)) {
        b = true;
    }
    else {
        b = false;
        alert("Email is not correct\nFormat: name@gmail.com");
    }
}
function validateMessage() {
    let x = document.getElementById("message").value;

    if (x.match(messageRegex)) {
        c = true;
    }
    else {
        c = false;
        alert("you Forgot to Write You’re feedback. try Again");
    }
}
