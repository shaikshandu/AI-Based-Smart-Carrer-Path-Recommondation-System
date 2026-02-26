const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");
const slideBtn = document.getElementById("btn");

function register() {
    loginForm.style.left = "-400px";
    signupForm.style.left = "50px";
    slideBtn.style.left = "110px";
}

function login() {
    loginForm.style.left = "50px";
    signupForm.style.left = "450px";
    slideBtn.style.left = "0";
}

function togglePassword(id, el) {
    const x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
        el.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        x.type = "password";
        el.classList.replace("fa-eye-slash", "fa-eye");
    }
}

function handleAuth(event, type) {
    event.preventDefault();
    const btn = event.target.querySelector('.submit-btn');
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
    btn.style.opacity = "0.8";

    const nameInput = event.target.querySelector('input[type="text"]');
    localStorage.setItem("userName", nameInput ? nameInput.value : "User");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}