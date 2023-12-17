let menuIcon = document.querySelector(".menu_icon");
let sideb = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.onclick = function () {
  sideb.classList.toggle("small_sidebar");
  container.classList.toggle("large_container");
};

// -----------------main 0-----
