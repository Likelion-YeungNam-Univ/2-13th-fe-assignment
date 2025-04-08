document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".list_button");
  const list = document.querySelector(".list");
  const mobileLoginButton = document.querySelector(".mobile-login");
  const loginForm = document.querySelector(".login-form");

  menuButton.addEventListener("click", () => {
    list.classList.toggle("active");
  });
  
  mobileLoginButton.addEventListener("click", () => {
    loginForm.classList.toggle("show");
    mobileLoginButton.style.display = "none";
  });
});
