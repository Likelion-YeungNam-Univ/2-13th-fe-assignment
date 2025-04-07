document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    loginForm: document.getElementById("loginForm"),
    selectContainer: document.getElementById("selectContainer"),
    loginBtnContainer: document.getElementById("loginBtnContainer"),
    contentContainer: document.getElementById("contentContainer"),
    usernameInput: document.getElementById("usernameInput"),
    passwordInput: document.getElementById("passwordInput"),
    formLoginBtn: document.getElementById("formLoginBtn"),
    loginHeaderSpan: document
      .getElementById("loginHeader")
      .querySelector("span"),
    leftDiv: document.getElementById("leftDiv"),
    rightDiv: document.getElementById("rightDiv"),
    formBackBtn: document.getElementById("formBackBtn"),
    btnDiv: document.getElementById("btnDiv"),
    inputDiv: document.querySelectorAll(".inputDiv"),
    icon: document.querySelectorAll(".icon"),
  };

  const toggleLogin = (isLogin) => {
    const method = isLogin ? "add" : "remove";
    const toggleElements = [
      "loginForm",
      "usernameInput",
      "passwordInput",
      "formLoginBtn",
      "btnDiv",
      "formBackBtn",
    ];
    const classElements = ["inputDiv", "icon"];

    toggleElements.forEach((key) => elements[key].classList[method]("active"));
    classElements.forEach((key) => {
      elements[key].forEach((el) =>
        el.classList[isLogin ? "add" : "remove"]("active")
      );
    });

    ["selectContainer", "loginBtnContainer", "contentContainer"].forEach(
      (key) => elements[key].classList[isLogin ? "add" : "remove"]("hide")
    );

    elements.loginHeaderSpan.style.display = isLogin ? "none" : "block";
    elements.leftDiv.style.flex = "1";
    elements.rightDiv.style.flex = isLogin ? "7" : "1";
  };

  window.clickLoginBtn = () => toggleLogin(true);
  window.clickBackBtn = () => toggleLogin(false);
});
