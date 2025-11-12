const burger = document.getElementById('burger');
const menu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
