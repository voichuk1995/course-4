"use strict";

(function (w) {
  console.log(w);
  fuc('Viktor', 'Dehtiarov');

  function fuc(myName, lastName) {
    console.log('Hello ' + myName);
  }

  function foo() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    //number = number || 1;
    //number = number ?? 1;
    console.log(number * number);
  }

  foo(4);
  foo();
  foo(8);
  foo(15); // if (confirm()) {
  //     fuc();
  // }

  /**
   * Sum two number
   * 
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */

  function sum(a, b) {
    var resalt = a + b;
    return resalt;
  }

  var a = sum(2, 2);
  var b = sum(5, 5);
  var c = sum(sum(4, 2), sum(4, 4));
  console.log(a, b);

  function bar(a, b) {
    for (var _len = arguments.length, other = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      other[_key - 2] = arguments[_key];
    }

    console.log(a, b, other); //console.log(arguments);

    sum2(1, 1);

    function ee() {}
  }

  var sum2 = function sum2(a, b) {
    return a + b;
  };

  bar(1, 2, 3, 4, 5, 6, 7, 8, 9);
  console.log(sum2(100, 100));

  var sum3 = function sum3(a, b) {
    return a + b;
  };

  var sum4 = function sum4(a, b) {
    return a + b;
  };

  var pow = function pow(a) {
    return a * a;
  };

  var ddd = function ddd() {
    return alert('ddd');
  }; //Math.min();


  pow(5);
  pow(10);
})(window);

(function () {})();