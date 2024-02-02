const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;

    if (formElements.email.value.trim() === "" || formElements.password.value.trim() === "") { alert('All form fields must be filled in') }
    else {
        const formData = {
            email: formElements.email.value.trim(),
            password: formElements.password.value.trim()
        };
        console.log(formData);
        event.target.reset();
    }
    
});