document.addEventListener("DOMContentLoaded", () => {
    const loginIcon = document.querySelector(".loginicon");
    const loginBox = document.querySelector("#loginbox");
    const leftBox = document.querySelector("#left");
  
    loginIcon.addEventListener("click", () => {
      loginBox.classList.toggle("show");
      leftBox.classList.toggle("hide");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 833) {
          loginBox.classList.remove("show");
          leftBox.classList.remove("hide");
        }
      });
});