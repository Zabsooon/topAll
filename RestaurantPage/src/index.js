import loadInitPage from "./modules/init-page";
import loadHome from "./modules/home-page";
import loadMenu from "./modules/menu-page";
import loadAbout from "./modules/about-page";

function applyOnClicksToNav() {
    let homeBtn = document.querySelector('#home');
    let menuBtn = document.querySelector('#menu');
    let aboutBtn = document.querySelector('#about');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    aboutBtn.addEventListener('click', loadAbout);
}

loadInitPage();

applyOnClicksToNav();

console.log('Hello world');
