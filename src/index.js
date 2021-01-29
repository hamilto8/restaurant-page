const contentDiv = document.querySelector('#content');
const menuBtn =document.querySelector('#menu-btn');

import displayMenu from './menu';

menuBtn.addEventListener('click', switchView('menu'));

function switchView(page){
    const element = document.createElement('div');
    element.innerHTML = displayMenu();

    console.log(element);
}

contentDiv.innerHTML = `
<p>Click a button to continue</p>
`;
