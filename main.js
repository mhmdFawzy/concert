let navIcon = document.getElementsByClassName("navbar--icon")[0];
let navMenu = document.getElementsByClassName("navbar--list")[0];
navIcon.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Ssss");
  navMenu.classList.toggle("show");
});
VanillaTilt.init(document.querySelector(".trail"), {
  max: 25,
  speed: 400,
});
AOS.init();
//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".trail"));
