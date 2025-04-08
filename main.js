document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".navbar_bars");
    const menu = document.querySelector(".navbar_menu");
    const leftContent = document.querySelector(".left-content");
  
    let isMenuOpen = false;
  
    menuBtn.addEventListener("click", function () {
      if (window.innerWidth <= 833) {
        isMenuOpen = !isMenuOpen;
  
        if (isMenuOpen) {
          menu.classList.add("active");
          leftContent.style.display = "none";
        } else {
          menu.classList.remove("active");
          leftContent.style.display = "block";
        }
      }
    });
  
    window.addEventListener("resize", function () {
      if (window.innerWidth > 833) {
        leftContent.style.display = "block";
        menu.classList.remove("active");
      }
    });
});
  