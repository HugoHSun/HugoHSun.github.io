let headingOne = document.querySelector("h1");
// Fun fact: this is the colour scheme of 1980s Apple logo
let colors = ["#61BB46", "#FDB827", "#F5821F", "#E03A3E", "#963D97", "#009DDC"];

let index = 0;
setInterval(function () {
    headingOne.style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1000);

/*selects the new set of hyperlinks that we would like to show once the hamburger button is pressed*/
const menu = document.querySelector(".menu");
/*selects each menu items*/
const menuItems = document.querySelectorAll(".menuItem");
/*selects the button with class name "hamburger"*/
const hamburger= document.querySelector(".hamburger");
/*selects the i tag containing our icon*/
const menuButton= document.querySelector(".menuButton");

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menuButton.innerHTML = "menu";
    } else {
        menu.classList.add("showMenu");
        menuButton.innerHTML = "close";
    }
}
hamburger.addEventListener("click",toggleMenu)