document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".navbar_bars");
    const menu = document.querySelector(".navbar_menu");
    const leftContent = document.querySelector(".left-content");
    const mainContent = document.querySelector(".main-layout");
  
    let isMenuOpen = false;
  
    menuBtn.addEventListener("click", function () {
      if (window.innerWidth <= 833) {
        isMenuOpen = !isMenuOpen;
  
        if (isMenuOpen) {
          menu.style.display = "flex";
          leftContent.style.display = "none";
        } else {
          menu.style.display = "none";
          leftContent.style.display = "block";
        }
      }
    });
  
    window.addEventListener("resize", function () {
      if (window.innerWidth > 833) {
        if (!isMenuOpen) {
          menu.style.display = "none";
          leftContent.style.display = "block";
        } else {
          menu.style.display = "block";
          leftContent.style.display = "none";
        }
      }
    });
  });