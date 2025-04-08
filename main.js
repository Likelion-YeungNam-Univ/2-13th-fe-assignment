document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".list_bar");
  const list = document.querySelector(".list");

  menuButton.addEventListener("click", () => {
      list.classList.toggle("active");
  });
});
