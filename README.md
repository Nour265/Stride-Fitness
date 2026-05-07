# Stride Fitness

Stride Fitness is a static fitness website built with HTML, CSS, JavaScript, jQuery, and jQuery UI. The website introduces the Stride Fitness brand and includes workout plans, trainer booking UI, BMI calculation, calorie goal calculation, login pages, contact pages, and informational sections.

## Project Type

Intro to Web Project

## Main Features

- Home page with fitness brand introduction
- About page
- Contact page
- Login page
- Workout plans page
- Five-day workout split with exercise popups
- BMI calculator
- Calorie intake / calorie goal calculator
- Trainer and dietitian booking interface
- Booking modal with date and time selection
- Trainer availability logic using JavaScript
- FAQ section
- Testimonials section
- Login-aware navigation using `sessionStorage`

## Tech Stack

- HTML5
- CSS3
- JavaScript
- jQuery
- jQuery UI

## Requirements

This project does not require a backend server or database.

You only need:

- A web browser
- A code editor such as VS Code
- Optional: VS Code Live Server extension

## How to Run

Clone the repository:

```bash
git clone https://github.com/Nour265/Stride-Fitness.git
cd Stride-Fitness
```

Open the project in VS Code.

Recommended method:

1. Install the **Live Server** extension.
2. Right-click `home.html`.
3. Choose **Open with Live Server**.

Simple method:

Open `home.html` directly in your browser.

## Main Pages

- `home.html` — Main landing page
- `about-us.html` — About page
- `contact-us.html` — Contact page
- `login.html` — Login page
- `bmi.html` — BMI and calorie calculator page
- `booking.html` — Trainer/dietitian booking page
- `workout.html` — Workout plans page

## Project Structure

```text
imgs/                    Website images
workoutassets/            Workout images/assets
jquery-ui-1.14.1/         jQuery UI library files

home.html                 Home page
homestyle.css             Home page styles

about-us.html             About page
aboutstyle.css            About page styles

contact-us.html           Contact page
contactstyle.css          Contact page styles

login.html                Login page
loginstyle.css            Login page styles
login.js                  Login behavior

bmi.html                  BMI/calorie page
bmi.css                   BMI/calorie styles
bmi.js                    BMI/calorie calculations

booking.html              Booking page
booking.css               Booking styles
booking.js                Booking behavior

workout.html              Workout page
workoutstyle.css          Workout styles
workoutscript.js          Workout popup behavior
```

## BMI Calculator

The BMI calculator takes height and weight, calculates BMI, and displays a health category such as underweight, normal, overweight, or obese.

## Calorie Calculator

The calorie calculator compares the user's current weight and target weight. It estimates the calorie difference needed based on the number of days entered by the user.

## Booking System Notes

The booking page includes trainer/dietitian cards and a modal booking form. Availability is handled in JavaScript using an in-memory bookings object.

Important note:

- Bookings are not saved to a real database.
- Booking data resets when the page is refreshed.
- This is a frontend simulation only.

## Known Limitations

- No real backend authentication
- No real database
- Booking data is temporary
- Login state uses browser `sessionStorage`
- Some form validation can be improved
- The website can be improved further for mobile responsiveness and accessibility

## Future Improvements

- Add a backend database for booking storage
- Add real user authentication
- Add admin page for trainers and bookings
- Add better form validation
- Improve responsive design
- Add dark mode
- Add progress tracking for users
- Improve accessibility with better labels and keyboard navigation

## Author

Stride Fitness was developed as an Intro to Web project.
