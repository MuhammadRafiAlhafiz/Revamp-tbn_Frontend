// scrollNavbar.js

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrolled = window.scrollY;

  if (scrolled > 0) {
    navbar.classList.add("blue-background");
  } else {
    navbar.classList.remove("blue-background");
  }
});
