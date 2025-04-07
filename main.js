const loginForm = document.getElementById("loginForm");
const selectContainer = document.getElementById("selectContainer");
const loginBtnContainer = document.getElementById("loginBtnContainer");
const contentContainer = document.getElementById("contentContainer");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const formLoginBtn = document.getElementById("formLoginBtn");
const loginHeaderSpan = document
  .getElementById("loginHeader")
  .querySelector("span");
const leftDiv = document.getElementById("leftDiv");
const rightDiv = document.getElementById("rightDiv");
const formBackBtn = document.getElementById("formBackBtn");
const btnDiv = document.getElementById("btnDiv");

const clickLoginBtn = () => {
  loginForm.classList.add("active");
  selectContainer.classList.add("hide");
  loginBtnContainer.classList.add("hide");
  contentContainer.classList.add("hide");
  usernameInput.classList.add("active");
  passwordInput.classList.add("active");
  formLoginBtn.classList.add("active");
  btnDiv.classList.add("active");
  formBackBtn.classList.add("active");

  loginHeaderSpan.style.display = "none";
  leftDiv.style.flex = "1";
  rightDiv.style.flex = "7";
};
const clickBackBtn = () => {
  loginForm.classList.remove("active");
  selectContainer.classList.remove("hide");
  loginBtnContainer.classList.remove("hide");
  contentContainer.classList.remove("hide");
  usernameInput.classList.remove("active");
  passwordInput.classList.remove("active");
  formLoginBtn.classList.remove("active");
  btnDiv.classList.remove("active");
  formBackBtn.classList.remove("active");

  loginHeaderSpan.style.display = "block";
  leftDiv.style.flex = "1";
  rightDiv.style.flex = "1";
};
