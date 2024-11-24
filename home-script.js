document.querySelectorAll(".protected-link").forEach(link => {
    link.addEventListener("click", (e) => {
        const Logged_In = localStorage.getItem("Logged_In") === "true";

        if (!Logged_In) {
            e.preventDefault();
            alert("You must log in to access this page.");
        }
    });
});