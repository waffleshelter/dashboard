const sideMenu = document.querySelector('.left');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('.close');
const graphContainer = document.querySelector('.graph__container');


menuBtn.addEventListener('click', () => {
    menuBtn.style.display = "none"
    sideMenu.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
    menuBtn.style.display = "inline-block";
})

