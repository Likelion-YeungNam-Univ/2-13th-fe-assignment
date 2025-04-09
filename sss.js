document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".login_button");
  const left = document.querySelector(".left");
  const login = document.querySelector(".login");

  loginButton.addEventListener("click", () => {
    login.classList.toggle("active");
    left.classList.toggle("hide");
  });
});
