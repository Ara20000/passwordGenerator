const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#input-section");

togglePassword.addEventListener('click', toggle)
function toggle(e) {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);

            this.classList.toggle("fa-eye-slash");
}
