// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    if (phone && password) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "home.html";
    } else {
        alert("Masukkan nomor HP dan password!");
    }
});


// Handle Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && phone && email && password) {
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "login.html";
    } else {
        alert("Harap isi semua field!");
    }

    function validateSignUp() {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
    
        if (password !== confirmPassword) {
            alert("Password tidak cocok! Coba lagi.");
        } else {
            alert("Registrasi berhasil!");
        }
    }
});


// Handle Home
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const plantCards = document.querySelectorAll(".plant-card");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        plantCards.forEach(card => {
            const plantName = card.querySelector("p").textContent.toLowerCase();
            card.style.display = plantName.includes(query) ? "block" : "none";
        });
    });
});
