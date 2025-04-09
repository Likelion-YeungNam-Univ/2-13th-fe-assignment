document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".login_button");
  const left = document.querySelector(".left");
  const login = document.querySelector(".login");

  loginButton.addEventListener("click", () => {
    const isLoginActive = login.classList.toggle("active");
    left.classList.toggle("hide");

    if (isLoginActive) {
      loginButton.textContent = "뒤로가기";
    } else {
      loginButton.textContent = "로그인";
    }
  });
});
