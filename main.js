// main.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.navbar_bars');
    const menu = document.getElementById('position');
  
    btn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  });
  
