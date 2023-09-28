const email = document.querySelector("#email");
const btnRequest = document.querySelector("#request").addEventListener("click", request);
const msgError = document.querySelector(".error-span");
const msgValidEmail = document.querySelector(".valid-email");
const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

function setError() {
    msgError.style.display = "block";
}

function removeError() {
    msgError.style.display = "none";
}

function emailValidate() {
    if(regexEmail.test(email.value)) {
        removeError();
        email.value = "";
        msgValidEmail.style.display = "block";
    } else {
        setError();
        msgValidEmail.style.display = "none";
    }
}

function request() {
    emailValidate()
}
