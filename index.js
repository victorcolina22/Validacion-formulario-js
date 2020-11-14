function validar() {
    
    let password = document.getElementById("password");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount"); 
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postalCode = document.getElementById("postalCode");

    if(password.value === ""){
        password.classList.add("is-invalid");
        
    }   else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
    }

    if(cvc.value === "") {
        cvc.classList.add("is-invalid");

    }   else {
        cvc.classList.remove("is-invalid");
        cvc.classList.add("is-valid");
    }

    if(amount.value === "") {
        amount.classList.add("is-invalid");

    }   else {
        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");
    }

    if(firstName.value === "") {
        firstName.classList.add("is-invalid");

    }   else {
        firstName.classList.remove("is-invalid");
        firstName.classList.add("is-valid");
    }

    if(lastName.value === "") {
        lastName.classList.add("is-invalid");

    }   else {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
    }

    if(city.value === "") {
        city.classList.add("is-invalid");

    }   else {
        city.classList.remove("is-invalid");
        city.classList.add("is-valid");
    }

    if(state.value === "Pick a state") {
        state.classList.add("is-invalid");

    }   else {
        state.classList.remove("is-invalid");
        state.classList.add("is-valid");
    }

    if(postalCode.value === "") {
        postalCode.classList.add("is-invalid");

    }   else {
        postalCode.classList.remove("is-invalid");
        postalCode.classList.add("is-valid");
    }

    return false;
};
