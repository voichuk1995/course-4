"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var arr = [10, 1, 2, 3, 4, 5, 6, 7];
var arr1 = Array(100); // arr1[5] = 0;
// arr[1] = 10;
//console.log(arr[arr.length - 1], arr1);
//arr.length = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (const value of arr) {
//     console.log(value);
// }
// console.log(arr.push(123, 10));
// console.log(arr.pop());

arr.shift();
arr.unshift(123); // console.log(arr, arr1);

var d = [1, 23, 34, 42, 34, 34, 6, 63, 47, 34, 87, 56, 7, 89, 56, 7, 34, 99, 34, 67, 89, 45, 6, 74, 34]; //odd even

var a = d.slice(); //d.concat() //[...d];

d.push(17457); // console.log(d.includes(340));
// console.log(d.indexOf(25411));

function getIndexOfArray(array, findData) {
  var findNumber = findData;
  var index = array.indexOf(findNumber);
  var findIndex = [];

  while (index !== -1) {
    findIndex.push(index);
    index = array.indexOf(findNumber, index + 1);
  }

  return findIndex;
}

var f = getIndexOfArray(d, 34);
console.log(f); // f.forEach(function (item, index, arr) {
//     d.splice(item, 1, 0);
// });

[1, 2, 4].forEach(function (nuber) {
  console.log(nuber);
});

function deleteItemOfArray(array, indexArray, replaseNumber) {
  var isMutatoin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isMutatoin) array = _toConsumableArray(array);
  indexArray.forEach(function (item) {
    array.splice(item, 1, replaseNumber);
  });
  if (isMutatoin) return array;
}

console.log(deleteItemOfArray(d, getIndexOfArray(d, 34), 55));
console.log(d); // console.log(d.splice(5, 0, 150, 150, 150), d)
//console.log(d);