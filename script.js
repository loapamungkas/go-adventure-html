const menuBar = document.querySelector('.menu-bar');
const menuNav = document.querySelector('.menu');

menuBar.addEventListener('click', () => {
  menuNav.classList.toggle('menu-active');
});

const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY > 80;
  navBar.classList.toggle('scrolling-active', windowPosition);
});

const navItems = document.querySelectorAll('.nav-item');

for (i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    menuNav.classList.remove('menu-active');
  });
}

AOS.init();
