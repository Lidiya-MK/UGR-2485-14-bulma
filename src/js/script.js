document.addEventListener('DOMContentLoaded', function () {
  const navbarBurgers = document.querySelectorAll('.navbar-burger');
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(navbarBurger => {
      navbarBurger.addEventListener('click', () => {
        const target = navbarBurger.dataset.target;
        const targetElement = document.getElementById(target);
        
        navbarBurger.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
        targetElement.classList.toggle('has-background-dark');

      });
    });
  }
});
