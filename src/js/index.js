const $menuBtn = document.querySelector(".menu-btn");
const $menu = document.querySelector(".header_nav_panel");

// burger menu

$menuBtn.addEventListener("click", function () {
  $menuBtn.classList.toggle("active");
  $menu.classList.toggle("active");
});

