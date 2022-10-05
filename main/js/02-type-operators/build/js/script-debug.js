"use strict";

//Незмінні примітивні типи
//number
var num = (2, 1.5, -1, 0, -0, Infinity, -Infinity, NaN);
console.log(NaN === NaN);
console.log(+'2323');
console.log(2 + +'2323');
console.log(isNaN(NaN), isNaN('dasfasdf'), NaN !== NaN, Number.isNaN('asdfds'));
console.log(Number.MAX_SAFE_INTEGER);
console.log(2.32445415.toFixed(2) + "$"); //Bigint
// 2n;
//String

var a = 'test';
var string = ("ss " + " sdg 2\" 'dhjs' dkj;", 's \' "dgf" s', "s dfg\n\nsddsfdsf\n\ndfg s");
console.log("s dfg\n".concat(a, "\nsddsfdsf\n\ndfg s"));
console.log('dfsg \nsdfg d\\fsg');
console.log(a.toLocaleUpperCase());
console.log(a.length);
console.log(a.split('').reverse().join(''));
var typeUndefined;
typeUndefined = 2 + 2;
typeUndefined = undefined;
console.log(typeUndefined);
var typeNull = null;
var typeBool = true;
typeBool = false;
var typeSymbol = Symbol('ddd');
var fff = Symbol('ddd');
console.log(typeSymbol, fff); //Об’єктні типи, що змінюються

var arr = [1, 3, 1, 1, 1, true, {}, []];
arr[0] = 222;
console.log(arr);
var obj = {
  name: "Vasya",
  age: 25,
  5: 233
};
console.log(obj); //приведення типів
// Number String Bool

console.log(String(false), Number('2'), Boolean({}), [1, 2, 3].toString());
console.log(15 .toString(16));
console.log(+'123', parseInt('1.1px'), parseFloat('1.1 px'));
console.log(2 + '2');
console.log(false, !!'', !!0, !!-0, !!undefined, !!NaN, !!null);
console.log(2 == '2', 2 === '2', 2 < 4, 4 > 2, 3 <= 3, 3 >= 4);
console.log(+false, +true, +null, true + true); // != !==

console.log(2 && 18 && 3); // false

var num1; //num1 && alert('asdfsdf');
//num1 || alert('asdfsdf');

console.log(num1);
var dd = num1 !== null && num1 !== void 0 ? num1 : 18;
console.log(2 || 0 || 3, dd);