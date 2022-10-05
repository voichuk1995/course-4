"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obj = {
  user: "Viktor",
  age: 20,
  skillList: {
    css: 50
  }
};
obj.sss = 'sss';
delete obj.sss;
console.log(obj);
obj.skillList.css = 60;
obj.age = 25;
var s = 'age';
var ss = {};
var b;
var n;
var c = b = n = 5;
console.log(ss[s] = 25); // console.log(obj.age, obj['age'], obj[s], obj.user);
// for (let key in obj) {
//     console.log(key);
// }

var obj1 = Object.assign({}, {
  age: 10
}, obj);
obj['skillList']['css'] = 70;
obj.user = "Petya"; // console.log('obj => ', obj);
// console.log('obj1 => ', obj1);
// console.log(JSON.stringify(obj));
// console.log(JSON.parse(JSON.stringify(obj), function (key, value) {
//     console.log(arguments);
// }));

console.log(_objectSpread(_objectSpread({}, obj), {}, {
  skillList: _objectSpread({}, obj.skillList)
}));

function copyObj(obj) {
  var newObj = {};

  for (var key in obj) {
    // if (typeof obj[key] === 'object') {
    //     newObj[key] = copyObj(obj[key]);
    // } else {
    //     newObj[key] = obj[key];
    // }
    if (obj.hasOwnProperty(key)) newObj[key] = _typeof(obj[key]) === 'object' ? copyObj(obj[key]) : obj[key];
  }

  return newObj;
}

var user = {
  user: "dsfgdsf",
  age: 20,
  skillList: {
    css: 50
  },
  // getAge: function () {
  //     return this.age;
  // },
  // setAge: function (age) {
  //     this.age = age;
  // }
  getAge: getAge,
  setAge: setAge
};
var petya = {
  user: "Petya",
  age: 50,
  skillList: {
    css: 100
  },
  getAge: getAge,
  setAge: setAge
};
var mykola = {
  user: "Mykola",
  age: 50,
  skillList: {
    css: 100
  }
};

function getAge() {
  return this.age;
} //const getAge = () => this.age; 


function setAge(age) {
  this.age = age;
} //getAge()


console.log(setAge.call(obj, 10));
console.log(setAge.apply(mykola, [100]));
console.log(getAge.call(obj));
console.log(getAge.apply(mykola));
user.setAge(15);
console.log(user.getAge());
var a = copyObj(user);
a.age = 25;
a.skillList.css = 60; //console.log(user, a);

function createUser(user) {
  function getAge() {
    return this.age;
  }

  return {
    user: user.user,
    age: user.age,
    getAge: getAge
  };
}

console.log(createUser({
  user: "Viktor",
  age: 25
}));
console.log(createUser({
  user: "Petya",
  age: 30
}));
console.table(user);
console.dir(user);