document.getElementById('calculate-BMI').addEventListener('click', function() {
    
    // Get input values
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Calculate BMI
    let bmi = weight / (height * height);
    let bmiResult = document.getElementById('bmiResult');
    bmiResult.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    // Determine BMI level and corresponding color
    let level = "";
    let color = "";
    let angle = 0;

    if (bmi < 16) {
        level = "Severely Underweight";
        color = "var(--c1)"; // Dark red
        angle = -90 + (bmi / 16) * 36; // Severely underweight: -90° to -54°
    } else if (bmi >= 16 && bmi < 18.5) {
        level = "Underweight";
        color = "var(--c2)"; // Red
        angle = -54 + ((bmi - 16) / 2.5) * 36; // Underweight: -54° to -18°
    } else if (bmi >= 18.5 && bmi < 25) {
        level = "Normal Weight";
        color = "var(--c3)"; // Yellow
        angle = -18 + ((bmi - 18.5) / 6.5) * 36; // Normal: -18° to 18°
    } else if (bmi >= 25 && bmi < 30) {
        level = "Overweight";
        color = "var(--c4)"; // Green
        angle = 18 + ((bmi - 25) / 5) * 36; // Overweight: 18° to 54°
    } else {
        level = "Obese";
        color = "var(--c5)"; // Blue
        angle = 54 + ((bmi - 30) / 10) * 36; // Obese: 54° to 90°, capped at 90°
        angle = Math.min(angle, 90); // Cap the angle at 90°
    }

    // Update BMI level and color
    bmiResult.textContent += ` (${level})`;
    bmiResult.style.color = `var(--c${level === "Severely Underweight" ? 1 : level === "Underweight" ? 2 : level === "Normal Weight" ? 3 : level === "Overweight" ? 4 : 5})`;

    // Update the needle angle using CSS transform
    document.querySelector('.needle').style.transform = `translateY(-100%) rotate(${angle}deg)`;
    console.log(`Calculated angle: ${angle}`);
});



document.getElementById('calculateCalories').addEventListener('click', function() {
    let currentWeight = parseFloat(document.getElementById('currentWeight').value);
    let targetWeight = parseFloat(document.getElementById('targetWeight').value);
    let daysToReach = parseInt(document.getElementById('daysToReach').value);
    
    if (isNaN(currentWeight) || isNaN(targetWeight) || isNaN(daysToReach) || daysToReach <= 0) {
        document.getElementById('caloriesResult').textContent = "Please enter valid weights and days.";
        return;
    }
    
    // Calculate the total calories needed to reach the target weight
    let calorieDifference = (targetWeight - currentWeight) * 7700; // 7700 calories = 1kg weight change
    // Calculate the calories per day needed to achieve the target weight in the specified days
    let caloriesPerDay = calorieDifference / daysToReach;
    
    if (caloriesPerDay > 0) {
        document.getElementById('caloriesResult').textContent = `To reach your target weight, you should eat ${caloriesPerDay.toFixed(2)} more calories per day.`;
    } else if (caloriesPerDay < 0) {
        document.getElementById('caloriesResult').textContent = `To reach your target weight, you should reduce ${Math.abs(caloriesPerDay).toFixed(2)} calories per day.`;
    } else {
        document.getElementById('caloriesResult').textContent = "You are already at your target weight!";
    }
  });
  


  