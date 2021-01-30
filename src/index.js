const contentDiv = document.querySelector('#content');
const menuBtn =document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

import displayMenu from './menu';
import aboutPage from './about';
import contactUs from './contact';

menuBtn.addEventListener('click', switchView);
aboutBtn.addEventListener('click', showAbout);
contactBtn.addEventListener('click', showContact);

function switchView(){
    let el = displayMenu();
    contentDiv.innerHTML = el;
}

function showAbout(){
    let el = aboutPage();
    contentDiv.innerHTML = el;
}

function showContact(){
    let el = contactUs();
    contentDiv.innerHTML = el;
}

window.onload = showAbout();