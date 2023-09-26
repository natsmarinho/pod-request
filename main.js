const email = document.querySelector("#email");
const btnRequest = document.querySelector("#request").addEventListener("click", request);
const msgError = document.querySelector(".error-span");
const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

function setError() {
    msgError.style.display = "block";
}

function removeError() {
    msgError.style.display = "none";
}

function emailValidate() {
    if(regexEmail.test(email.value)) {
        removeError()
    } else {
        setError();
    }
}

function request() {
    emailValidate()
}
