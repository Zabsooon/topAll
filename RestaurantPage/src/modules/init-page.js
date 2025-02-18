function createNav(id, text) {
    let nav = document.createElement('nav');

    nav.setAttribute('id', id);
    nav.innerText = text;

    return nav;
}

function createHeader() {
    let header =  document.createElement('header');

    header.setAttribute('id', 'header');

    const logo = document.createElement('img');
    logo.setAttribute('src', '../../logo.png');
    logo.setAttribute('alt', "Restaurant Logo");
    header.appendChild(logo);

    header.appendChild(createNav('home', 'Home'));
    header.appendChild(createNav('menu', 'Menu'));
    header.appendChild(createNav('about', 'About'));

    return header;
}

function createContentDiv() {
    let div = document.createElement('div');

    div.setAttribute('id', 'content');

    return div;
}

function loadInitPage() {

    let container = document.querySelector('#container');

    let header = createHeader();
    let contentDiv = createContentDiv();

    container.appendChild(header);
    container.appendChild(contentDiv);
}

export default loadInitPage;
