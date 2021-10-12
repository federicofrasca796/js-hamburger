//select DOM .hamburger-menu element
const elementMenu = document.querySelector(".hamburger-menu");
    // console.log(elementMenu)

//select DOM menu icon 
const menuBarsIcon = document.querySelector(".fa-bars");
    // console.log(menuBarsIcon)

//select DOM closeMenu icon
const closeMenuIcon = document.querySelector(".close")
    // console.log(closeMenuIcon)


//on ICON click, activate .active class in div.hamburger-menu
menuBarsIcon.addEventListener("click", function(){
    elementMenu.className += " active";
});

//on CLOSE ICON click, remove .active class from div.hamburger-menu 
// closeMenuIcon.addEventListener("click", function(){
//     elementMenu.className -= " active";
//     console.log(elementMenu)

// })