document.addEventListener("DOMContentLoaded", () => {
  const login = document.querySelector(".login");
  const showloginbutton = document.getElementById("showloginbutton");

  showloginbutton.addEventListener("click", () => {
    showloginbutton.style.display = "none";
    login.style.display = "flex";
  });
});
