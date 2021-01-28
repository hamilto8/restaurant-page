const contentDiv = document.querySelector('#content');

const headerDiv = `<header class="header">Mister MacGuffin's Mystery Diner</header>`;

const subtitle = `<h3>Serving Mysterious Dinners Since 1963</h3>`;

const bodyDiv = `
    <div>
        ${headerDiv}
        ${subtitle}
    </div>
`;

window.onload = ()=>{
    contentDiv.innerHTML += bodyDiv;
}
