//select DOM .hamburger-menu element
const elementMenu = document.querySelector(".hamburger-menu");
// console.log(elementMenu)

//select DOM menu icon 
const menuBarsIcon = document.querySelector(".fa-bars");
console.log(menuBarsIcon)

//on ICON click activate .active class in div.hamburger-menu
menuBarsIcon.addEventListener("click", function(){
    elementMenu.className += "active";
});