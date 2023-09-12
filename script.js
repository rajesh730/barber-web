const menu_btn = document.querySelector(".menu_btn");
const side_nav = document.querySelector(".side_nav");
const menu = document.getElementById("menu");

menu_btn.onclick = function () {
  if (side_nav.style.right === "-250px") {
    side_nav.style.right = "0";
    menu.src = "Images/close.png";
  } else {
    side_nav.style.right = "-250px";
    menu.src = "Images/menu.png";
  }
};
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
