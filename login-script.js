let Logged_In = sessionStorage.getItem("Logged_In") === "true";
let container = document.getElementById("container");
let signInButton = document.getElementById("login");
let registerButton = document.getElementById("register");
let backHomeButton = document.getElementById("homeButton");
signInButton.addEventListener("click", () => {
    container.classList.remove("active");
});

registerButton.addEventListener("click", () => {
    container.classList.add("active");
});

backHomeButton.addEventListener("click", () => {
    window.location.href = "home.html";
});

let storedUsers = JSON.parse(localStorage.getItem("users"));
let users = storedUsers || [
    { username: "BahaaMattar", email: "Bahaa.Mattar@gmail.com", password: "password123" },
    { username: "NourGhannam", email: "Nour.Ghannam@gmail.com", password: "password456" },
    { username: "MohammadFarran", email: "Mohammad.Farran@gmail.com", password: "password789" }
];

function saveUsersToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

let signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailInput = document.getElementById("signInEmail");
    let passwordInput = document.getElementById("signInPassword");
    let emailError = document.getElementById("signInEmailError");
    let passwordError = document.getElementById("signInPasswordError");

    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    emailError.style.display = "none";
    passwordError.style.display = "none";

    let isValid = true;
    if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        emailError.textContent = "Please enter your email.";
        emailError.style.display = "block";
        isValid = false;
    }
    if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("error");
        passwordError.textContent = "Please enter your password.";
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        let userExists = users.some(user => user.email === emailInput.value && user.password === passwordInput.value);

        if (userExists) {
            Logged_In = true;
            sessionStorage.setItem("Logged_In", true);
            window.location.href = "home.html";
        } else {
            emailInput.classList.add("error");
            passwordInput.classList.add("error");
            passwordError.textContent = "Incorrect email or password.";
            passwordError.style.display = "block";
        }
    }
});

let signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameInput = signUpForm.querySelector('input[type="text"]');
    let emailInput = signUpForm.querySelector('input[type="email"]');
    let passwordInput = signUpForm.querySelector('input[type="password"]');
    let nameError = document.getElementById("signUpNameError");
    let emailError = document.getElementById("signUpEmailError");
    let passwordError = document.getElementById("signUpPasswordError");
    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    nameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    let isValid = true;
    if (nameInput.value.trim() === "") {
        nameInput.classList.add("error");
        nameError.style.display = "block";
        isValid = false;
    }
    if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        emailError.style.display = "block";
        isValid = false;
    }
    if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("error");
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        let existingUser = users.some(user => user.email === emailInput.value);

        if (existingUser) {
            alert("An account with this email already exists.");
            emailInput.classList.add("error");
            emailError.style.display = "block";
        } else {
            users.push({ username: nameInput.value, email: emailInput.value, password: passwordInput.value });
            Logged_In = true;
            sessionStorage.setItem("Logged_In", true);
            signUpForm.reset();
            container.classList.remove("active");
            saveUsersToLocalStorage();
            window.location.href = "home.html";
        }
    }

    console.log(users);
});
console.log(users);
console.log(Logged_In);
function clearAllUsers(){
    localStorage.removeItem("users");
    console.log(users);
}

// clearAllUsers();