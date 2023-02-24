const form = document.querySelector("form");
const firstName = document.getElementById("name");
const nameError = document.getElementById("firstNameError");
const subject = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const address = document.getElementById("address");
const addressError = document.getElementById("addressError");
const message = document.querySelector(".message_success");
const button = document.querySelector("button")

    function validateForm(event) {

        event.preventDefault();

        let showSuccessMessage = true;

        if (checkLength(firstName.value, 0) === true) {
            nameError.style.display = "none";
        } else {
            nameError.style.display = "block";
            showSuccessMessage = false;
        };

        if (checkLength(subject.value, 10) === true) {
            subjectError.style.display = "none";
        } else {
            subjectError.style.display = "block";
            showSuccessMessage = false;
        }

        if (validateEmail(email.value) === true) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
            showSuccessMessage = false;
        }

        if (checkLength(address.value, 25) === true) {
            addressError.style.display = "none";
        } else {
            addressError.style.display = "block";
            showSuccessMessage = false;
        }  
        if (showSuccessMessage) {
            message.innerHTML = `<div class="message_succes"> Your message has been sent</div>`;
        }
        
        form.reset();
};



function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailMatches = regEx.test(email);
    return emailMatches;
};

    form.addEventListener("submit", validateForm);



function checkIfButtonIsDisabled() {
    if (validateForm === true) {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}



function submitForm(event) {
    event.preventDefault();

    
}

form.addEventListener("submit", submitForm);

firstName.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
address.addEventListener("keyup", checkIfButtonIsDisabled);

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden")
});




