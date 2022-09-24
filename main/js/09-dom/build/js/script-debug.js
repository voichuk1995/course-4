"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.dir(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body); //document.body.style.backgroundColor = 'red';

var nav = document.getElementById('menu');
console.dir(nav); //console.log(menu);
//const menu = document.querySelector('#menu > .menu');
//const menu = document.querySelectorAll('#menu > .menu > li');

var menu = nav.querySelectorAll('.menu > li');
console.log(menu);
menu.forEach(function (element) {
  console.log(element);
});
console.log(Array.prototype.slice.call(menu));
console.log(_toConsumableArray(menu));
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
  var next = elemnt.nextElementSibling;

  if (next && confirm('next?')) {
    foo(next);
  } else {
    alert('the end');
  }
} //foo(nav.querySelector('.menu').firstElementChild);


var menu1 = nav.querySelector('.menu'); //menu1.innerHTML = menu1.innerHTML + '<li>sdfdsf</li>';
//menu1.innerHTML = '';

console.log(menu1.innerHTML);
console.log(menu1.outerHTML); //console.log(menu[0].innerText, menu[0].outerText);
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
console.dir(menu1.classList); // console.log(menu1.style.backgroundColor = '#777');
// console.log(menu1.style['background-color'] = '#000');

console.log(window.getComputedStyle(menu1).display);
var link = document.createElement('a');
link.setAttribute('href', '#');
link.textContent = 'test';
link.classList.add('test');
console.log(link);
nav.append(link);
nav.prepend(link);
nav.before(link);
nav.after(link); //nav.replaceWith(link);

link.remove(); // Устаревшие методы:
// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)

function cElem() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!options.tag) return '';
  var elemnt = document.createElement(options.tag);
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

  if (Array.isArray(content) && _typeof(content) === 'object') {
    content.forEach(function (item) {
      elemnt.append(cElem(item));
    });
  } else {
    elemnt.append(cElem(content));
  }
}

function addClass(elemnt, classLists) {
  var _elemnt$classList;

  if (!elemnt || !classLists) return;
  classLists = classLists.split(', ');

  (_elemnt$classList = elemnt.classList).add.apply(_elemnt$classList, _toConsumableArray(classLists));
}

function addAttr(elemnt, attr) {
  if (!elemnt || !attr) return;

  for (var key in attr) {
    elemnt.setAttribute(key, attr[key]);
  }
}

document.body.append(cElem({
  tag: 'ul',
  attributes: {
    title: 'my ul'
  },
  classLists: 'menu, active, test',
  content: {
    tag: 'li',
    content: '1test'
  }
}));