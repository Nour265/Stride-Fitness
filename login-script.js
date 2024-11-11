let container = document.getElementById("container");
let signInButton = document.getElementById("login");
let registerButton = document.getElementById("register");
signInButton.addEventListener("click", () => {
    container.classList.remove("active");
});

registerButton.addEventListener("click", () => {
    container.classList.add("active");
});

// Retrieves the users array from localStorage and parses it from JSON
let storedUsers = JSON.parse(localStorage.getItem("users"));

// Initializes users with the stored users or a default array if none exists
let users = storedUsers || [
    { username: "BahaaMattar", email: "Bahaa.Mattar@gmail.com", password: "password123" },
    { username: "NourGhannam", email: "Nour.Ghannam@gmail.com", password: "password456" },
    { username: "MohammadFarran", email: "Mohammad.Farran@gmail.com", password: "password789" }
];

// Function to save the users array to localStorage
function saveUsersToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

// Selects the sign-in form by its ID
let signInForm = document.getElementById("signInForm");

// Adds a submit event listener to the sign-in form
signInForm.addEventListener("submit", (e) => {
    // Prevents the default form submission behavior
    e.preventDefault();

    // Selects the email and password input fields and error message spans by their IDs
    let emailInput = document.getElementById("signInEmail");
    let passwordInput = document.getElementById("signInPassword");
    let emailError = document.getElementById("signInEmailError");
    let passwordError = document.getElementById("signInPasswordError");

    // Clears previous error states by resetting classes and hiding error messages
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // Validates input fields
    let isValid = true;
    if (emailInput.value.trim() === "") {
        // Adds error styling and displays an error message if email is empty
        emailInput.classList.add("error");
        emailError.textContent = "Please enter your email.";
        emailError.style.display = "block";
        isValid = false;
    }
    if (passwordInput.value.trim() === "") {
        // Adds error styling and displays an error message if password is empty
        passwordInput.classList.add("error");
        passwordError.textContent = "Please enter your password.";
        passwordError.style.display = "block";
        isValid = false;
    }

    // Checks credentials only if inputs are not empty
    if (isValid) {
        // Searches for a user matching the entered email and password
        let userExists = users.some(user => user.email === emailInput.value && user.password === passwordInput.value);

        if (userExists) {
            // Displays a success message if credentials are correct
            alert("Sign In Successful!");
        } else {
            // Adds error styling and displays a generic error if credentials are incorrect
            emailInput.classList.add("error");
            passwordInput.classList.add("error");
            passwordError.textContent = "Incorrect email or password.";
            passwordError.style.display = "block";
        }
    }
});

// Selects the sign-up form by its ID
let signUpForm = document.getElementById("signUpForm");

// Adds a submit event listener to the sign-up form
signUpForm.addEventListener("submit", (e) => {
    // Prevents the default form submission behavior
    e.preventDefault();

    // Selects input fields and error message spans for validation
    let nameInput = signUpForm.querySelector('input[type="text"]');
    let emailInput = signUpForm.querySelector('input[type="email"]');
    let passwordInput = signUpForm.querySelector('input[type="password"]');
    let nameError = document.getElementById("signUpNameError");
    let emailError = document.getElementById("signUpEmailError");
    let passwordError = document.getElementById("signUpPasswordError");

    // Clears previous errors by resetting classes and hiding error messages
    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    nameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // Validates input fields
    let isValid = true;
    if (nameInput.value.trim() === "") {
        // Adds error styling and displays an error if name is empty
        nameInput.classList.add("error");
        nameError.style.display = "block";
        isValid = false;
    }
    if (emailInput.value.trim() === "") {
        // Adds error styling and displays an error if email is empty
        emailInput.classList.add("error");
        emailError.style.display = "block";
        isValid = false;
    }
    if (passwordInput.value.trim() === "") {
        // Adds error styling and displays an error if password is empty
        passwordInput.classList.add("error");
        passwordError.style.display = "block";
        isValid = false;
    }

    // Proceeds only if all fields are valid
    if (isValid) {
        // Checks if a user with the entered email already exists
        let existingUser = users.some(user => user.email === emailInput.value);

        if (existingUser) {
            // Displays an error if an account with this email already exists
            alert("An account with this email already exists.");
            emailInput.classList.add("error");
            emailError.style.display = "block";
        } else {
            // Adds the new user to the users array and saves it in localStorage
            users.push({ username: nameInput.value, email: emailInput.value, password: passwordInput.value });
            alert("Account created successfully! Please sign in.");
            signUpForm.reset(); // Resets the form
            container.classList.remove("active"); // Switches to the sign-in form
            saveUsersToLocalStorage(); // Saves the updated users array to localStorage
        }
    }

    console.log(users); // Logs the current users array to the console
});

// Logs the initial users array to the console
console.log(users);

// Function to clear all users from localStorage and console log the current users array
function clearAllUsers(){
    localStorage.removeItem("users"); // Removes the "users" item from localStorage
    console.log(users); // Logs the users array after clearing
}

// clearAllUsers();
