"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function foo(event) {
  console.log(event.target, event.currentTarget);
} // document.body.onclick = function(){}
// document.body.addEventListener('click', foo, true);
//document.body.addEventListener('click', foo);
// document.body.addEventListener('click', function () {
//     console.log(2222)
// });


var a = document.querySelectorAll('.menu__link');
a.forEach(function (elemt) {
  elemt.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target, e.currentTarget);
  });
});
var button = document.querySelector('.my-first-button');

function myModal() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = _objectSpread({
    openClassName: 'open',
    contentClass: '.modal__content'
  }, options);
  if (!options.selector) return;
  var modal = document.querySelector(options.selector);
  var modalOpenBtn = document.querySelector(options.triggerElement);
  modalOpenBtn.addEventListener('click', openModal);
  modal.addEventListener('click', function (e) {
    if (e.target === e.currentTarget || e.target.closest('button.close')) {
      closeModal();
    }
  });

  function openModal() {
    modal.classList.add(options.openClassName);
  }

  function closeModal() {
    modal.classList.remove(options.openClassName);
  }

  function addContent(content) {
    var contentElem = modal.querySelector(options.contentClass);
    console.log(contentElem);
    contentElem.innerHTML = content;
  }

  if (options.content) {
    addContent(options.content);
  }

  if (options.isAutoOpen) {
    openModal();
  }

  return {
    openModal: openModal,
    closeModal: closeModal,
    addContent: addContent
  };
}

var modal1 = myModal({
  selector: '.modal',
  triggerElement: '.modal-open',
  isAutoOpen: false,
  content: '<p>qqqqqqqqqqqqqqqqq</p>'
});
modal1.openModal();
setTimeout(function () {
  modal1.closeModal();
}, 5000);
button.addEventListener('click', function (e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
  var elem = e.currentTarget;
  var className = elem.className;
  var text = elem.textContent;
  elem.textContent = className;
  elem.classList.replace(className, text);
  modal1.addContent('<p>aaaaaaaa</p>');
});