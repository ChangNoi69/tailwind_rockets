"use strict";

var initApp = function initApp() {
  var hamburgerBtn = document.getElementById("hamburger-button");
  var mobileMenu = document.getElementById("mobile-menu");

  var toggleMenu = function toggleMenu() {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);