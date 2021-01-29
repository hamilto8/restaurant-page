const contentDiv = document.querySelector('#content');
const menuBtn =document.querySelector('#menu-btn');

import {menu} from './menu';

const subtitle = `<h3>Serving Mysterious Dinners Since 1963</h3>`;

menuBtn.addEventListener('click', switchView(menu));

function switchView(page){
contentDiv.innerHTML = '';
contentDiv.innerHTML = page;
}

