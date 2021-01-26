const contentDiv = document.querySelector('#content');

const headerDiv = `<header>Mr Macguffin's Mystery Dinners</header>`;

window.onload = ()=>{
    contentDiv.innerHTML += headerDiv;
}