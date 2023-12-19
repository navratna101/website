let menuBtn = document.getElementById("menuBtn");
let smMenuDrop = document.getElementById("smMenuDrop");
let activeMenu = document.querySelector(".active-menu");
let smLinks = document.querySelectorAll(".sm-links");
menuBtn.onclick = () => {
  smMenuDrop.classList.toggle("active-menu");
};
smLinks.forEach((myFunction) => {
  myFunction.onclick = () => {
    smMenuDrop.classList.toggle("active-menu");
  };
});

window.onload = function () {
  //hide the preloader
  document.querySelector(".pleloading").style.display = "none";
};
