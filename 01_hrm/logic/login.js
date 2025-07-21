const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const role = document.getElementById("role");

form.addEventListener("submit", function (e) {
    let isValid = true;

    // Clear previous messages
    document.querySelectorAll("p").forEach(p => p.textContent = "");

    // Username validation
    if (username.value.trim() === "") {
        username.nextElementSibling.textContent = "username is required";
        isValid = false;
    }

    // Password validation
    if (password.value.trim() === "") {
        password.nextElementSibling.textContent = "password is required";
        isValid = false;
    }

    // Role validation
    if (role.value === "") {
        role.nextElementSibling.textContent = "please select a role";
        isValid = false;
    }

    // Prevent form submit if not valid
    if (!isValid) {
        e.preventDefault();
    }
});