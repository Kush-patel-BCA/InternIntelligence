const wrapper = document.querySelector('.Wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const forgetpwdLink = document.querySelector('.remember-forgot');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

forgetpwdLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Select elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Sign Up Function
registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
        console.log("User:", userCredential.user);

        document.getElementById("register-username").value = "";
        document.getElementById("register-email").value = "";
        document.getElementById("register-password").value = "";

    } catch (error) {
        alert(error.message);
    }
});

// Login Function
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        console.log("User:", userCredential.user);
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
    } catch (error) {
        alert(error.message);
    }
});
