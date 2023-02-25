// Navigation Menu
const navSlide = () => {
  const burger = document.querySelector('.nav-icon');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("home").style.top = "0";
  } else {
    document.getElementById("home").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

navSlide();
