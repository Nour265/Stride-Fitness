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