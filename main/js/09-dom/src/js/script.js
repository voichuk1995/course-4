console.dir(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//document.body.style.backgroundColor = 'red';

const nav = document.getElementById('menu');
console.dir(nav);
//console.log(menu);

//const menu = document.querySelector('#menu > .menu');
//const menu = document.querySelectorAll('#menu > .menu > li');
const menu = nav.querySelectorAll('.menu > li');

console.log(menu);

menu.forEach(function (element) {
    console.log(element);
});

console.log(Array.prototype.slice.call(menu));
console.log([...menu]);

console.log(nav.parentElement);
console.log(nav.closest('html'));

console.log(nav.firstChild);
console.log(nav.firstElementChild);

console.log(nav.lastChild);
console.log(nav.lastElementChild);

console.log(nav.previousElementSibling);
console.log(nav.nextElementSibling);


function foo(elemnt) {
    console.log(elemnt);
    const next = elemnt.nextElementSibling;

    if (next && confirm('next?')) {
        foo(next);
    } else {
        alert('the end');
    }
}

//foo(nav.querySelector('.menu').firstElementChild);

const menu1 = nav.querySelector('.menu');

//menu1.innerHTML = menu1.innerHTML + '<li>sdfdsf</li>';

//menu1.innerHTML = '';

console.log(menu1.innerHTML);

console.log(menu1.outerHTML);

//console.log(menu[0].innerText, menu[0].outerText);

//menu[0].outerText = 'sd'

menu[0].querySelector('span').textContent = 'asdfdfs';

console.log(menu[0].textContent);

nav.setAttribute('title', 'my title');

console.log(nav.getAttribute('title'));

nav.removeAttribute('title');

console.log(nav.hasAttribute('title'));

nav.dataset.nav = 6;

console.log(nav.dataset.nav);

console.dir(menu1.classList.add('dsfsdf', 'sdfsdf', 'sdfdas', 'asdf'));
console.dir(menu1.classList.remove('dsfsdf'));
console.dir(menu1.classList.contains('menu'));
console.dir(menu1.classList.toggle('sssss', true));
console.dir(menu1.classList.toggle('sssss', false));
console.dir(menu1.classList);

// console.log(menu1.style.backgroundColor = '#777');
// console.log(menu1.style['background-color'] = '#000');

console.log(window.getComputedStyle(menu1).display);

const link = document.createElement('a');

link.setAttribute('href', '#');

link.textContent = 'test';

link.classList.add('test');

console.log(link);

nav.append(link);

nav.prepend(link);

nav.before(link);
nav.after(link);

//nav.replaceWith(link);

link.remove();

// Устаревшие методы:
// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)

function cElem(options = {}) {
    if (!options.tag) return '';

    const elemnt = document.createElement(options.tag);

    if (options.attributes) addAttr(elemnt, options.attributes);

    if (options.classLists) addClass(elemnt, options.classLists);

    if (options.content) addContent(elemnt, options.content);

    return elemnt;
}

function addContent(elemnt, content) {
    if (!elemnt || !content) return;

    if (typeof content === 'string') {
        elemnt.textContent = content;
        return;
    }

    if (Array.isArray(content) && typeof content === 'object') {
        content.forEach(function (item) {
            elemnt.append(cElem(item));
        });
    } else {
        elemnt.append(cElem(content));
    }
}

function addClass(elemnt, classLists) {
    if (!elemnt || !classLists) return;

    classLists = classLists.split(', ');

    elemnt.classList.add(...classLists);
}

function addAttr(elemnt, attr) {
    if (!elemnt || !attr) return;

    for (const key in attr) {
        elemnt.setAttribute(key, attr[key]);
    }
}

document.body.append(cElem({
    tag: 'ul',
    attributes: {
        title: 'my ul',
    },
    classLists: 'menu, active, test',
    content: {
        tag: 'li',
        content: '1test'
    },
}));
