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

let page;

function switchView(){
    contentDiv.style.opacity = 1;
    if(page !== displayMenu()){
        fadeOutControl();
    }
    page = displayMenu();
}

function showAbout(){
    contentDiv.style.opacity = 1;
    if(page !== aboutPage()){
        fadeOutControl();
    }
    page = aboutPage();
}

function showContact(){
    contentDiv.style.opacity = 1;
    if(page !== contactUs()){
        fadeOutControl();
    }
    page = contactUs();
}

function fadeOutControl(){
    if(contentDiv.style.opacity > 0){
        let fadeOutInterval = setTimeout(() => {
            contentDiv.style.opacity -= '.1';
            fadeOutControl();
        }, 80);
    } else {
        console.log(`Fade-out complete. Opacity: ${contentDiv.style.opacity}`);
        contentDiv.innerHTML = page;
        fadeInControl();
    }
}

function fadeInControl(){
    if(contentDiv.style.opacity < '1'){
        let fadeInInterval = setTimeout(() => {
            contentDiv.style.opacity -= '-0.1';
            console.log(`Fade-in opacity: ${contentDiv.style.opacity}`)
            fadeInControl();
        }, 80);
    } else {
        console.log('Fade-in Complete');
    }
}

window.onload = () =>{
    contentDiv.innerHTML = aboutPage();
}