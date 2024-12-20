document.getElementById('calculate-BMI').addEventListener('click', function() {
    
    
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100;
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    
    let bmi = weight / (height * height);
    let bmiResult = document.getElementById('bmiResult');
    bmiResult.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    
    let level = "";
    let color = "";
    let angle = 0;

    if (bmi < 16) {
        level = "Severely Underweight";
        color = "var(--c1)";
        angle = -90 + (bmi / 16) * 36;
        color = "var(--c1)";
        angle = -90 + (bmi / 16) * 36;
    } else if (bmi >= 16 && bmi < 18.5) {
        level = "Underweight";
        color = "var(--c2)";
        angle = -54 + ((bmi - 16) / 2.5) * 36;
        color = "var(--c2)";
        angle = -54 + ((bmi - 16) / 2.5) * 36;
    } else if (bmi >= 18.5 && bmi < 25) {
        level = "Normal Weight";
        color = "var(--c3)";
        angle = -18 + ((bmi - 18.5) / 6.5) * 36;
        color = "var(--c3)";
        angle = -18 + ((bmi - 18.5) / 6.5) * 36;
    } else if (bmi >= 25 && bmi < 30) {
        level = "Overweight";
        color = "var(--c4)";
        angle = 18 + ((bmi - 25) / 5) * 36;
        color = "var(--c4)";
        angle = 18 + ((bmi - 25) / 5) * 36;
    } else {
        level = "Obese";
        color = "var(--c5)";
        angle = 54 + ((bmi - 30) / 10) * 36;
        angle = Math.min(angle, 90);
        color = "var(--c5)";
        angle = 54 + ((bmi - 30) / 10) * 36;
        angle = Math.min(angle, 90);
    }

    bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}, which means you are ${level}.`;
    bmiResult.style.color = color;
    
    document.querySelector('.needle').style.transform = `translateY(-100%) rotate(${angle}deg)`;
    console.log(`Calculated angle: ${angle}`);

    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
});



document.getElementById('calculateCalories').addEventListener('click', function() {
    let currentWeight = parseFloat(document.getElementById('currentWeight').value);
    let targetWeight = parseFloat(document.getElementById('targetWeight').value);
    let daysToReach = parseInt(document.getElementById('daysToReach').value);
    
    if (isNaN(currentWeight) || isNaN(targetWeight) || isNaN(daysToReach) || daysToReach <= 0) {
        document.getElementById('caloriesResult').textContent = "Please enter valid weights and days.";
        return;
    }
    
    let calorieDifference = (targetWeight - currentWeight) * 7700;
    let caloriesPerDay = calorieDifference / daysToReach;
    
    if (caloriesPerDay > 0) {
        document.getElementById('caloriesResult').textContent = `To reach your target weight, you should eat ${caloriesPerDay.toFixed(2)} more calories per day.`;
    } else if (caloriesPerDay < 0) {
        document.getElementById('caloriesResult').textContent = `To reach your target weight, you should reduce ${Math.abs(caloriesPerDay).toFixed(2)} calories per day.`;
    } else {
        document.getElementById('caloriesResult').textContent = "You are already at your target weight!";
    }

    document.getElementById('currentWeight').value = '';
    document.getElementById('targetWeight').value = '';
    document.getElementById('daysToReach').value = '';

  });

  document.addEventListener("DOMContentLoaded", () => {
    
    let Logged_In = sessionStorage.getItem("Logged_In") === "true";

   
    let navElement = document.querySelector(".nav");

    
    if (Logged_In) {
        let loginLink = navElement.querySelector('a[href="/login.html"]');
        if (loginLink) {
            loginLink.textContent = "Logout";
            loginLink.href = "#"; 
            loginLink.addEventListener("click", (e) => {
                e.preventDefault();
                sessionStorage.setItem("Logged_In", "false");
                location.reload(); 
                alert("You are logged out.")
            });
        }
    }
});
  


  
