"use strict";

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// просте рішення для 5-ти значного числа, виконується тільки для 5-ти значних чисел
var number = 12321;
var isPolindrom = false;

for (var i = 0; i < 2; i++) {
  var lastNumber = (i > 0 ? ~~(number / 10) : number) % 10;
  var firstDivider = i > 0 ? 1000 : 10000;
  var firstNumber = ~~(number / firstDivider) % 10;

  if (lastNumber !== firstNumber) {
    isPolindrom = false;
    break;
  } else {
    isPolindrom = true;
  }
}

console.log(isPolindrom); // рішення для чисел будь якої довжени, виконується для всіх чисел

var number1 = 3212123;
var tmpNumber = number1;
var isPolindrom1 = false;
var counter = 0; //взнаємо кількість розрядів числа

while (true) {
  tmpNumber = ~~(tmpNumber / 10);
  counter++;
  if (tmpNumber === 0) break;
} //якщо число однорозрядне це поліндром


isPolindrom1 = counter === 1; //якщо число містить четну кількість розрядім це не поліндром

if (counter % 2 && !isPolindrom1) {
  var tmpLastNumber = number1;
  var firstNumberDivider = 1;

  for (var y = 0; y < counter - 1; y++) {
    firstNumberDivider = firstNumberDivider * 10;
  }

  for (var _i = 0; _i < ~~(counter / 2); _i++) {
    var _lastNumber = tmpLastNumber % 10;

    tmpLastNumber = ~~(tmpLastNumber / 10);
    var firstNumder = ~~(number1 / firstNumberDivider) % 10;
    firstNumberDivider = ~~(firstNumberDivider / 10);

    if (_lastNumber !== firstNumder) {
      isPolindrom1 = false;
      break;
    } else {
      isPolindrom1 = true;
    }
  }
}

console.log(isPolindrom1); //Гра «Вгадай число». 
//Запропонуй користувачеві загадати число від 0 до 100 
//і відгадай його наступним способом: 
//кожну ітерацію циклу діли діапазон чисел навпіл, 
//записуй результат в N і питай у користувача «Ваше число 
//> N,
// < N 
//або === N?».
//Залежно від того що вказав користувач, 
//зменшуй діапазон. 
//Початковий діапазон від 0 до 100, 
//поділи навпіл і отримай 50.
//Якщо користувач вказав, що його число> 50, 
//то зміни діапазон на від 50 до 100. 
//І так до тих пір, поки користувач не вибере === N 
//(буде корисним почитати про алгоритм: "бінарний пошук").
//const hiddenNumber = +prompt('Загадай число від 0 до 100', '');

var moreSymbol = '>';
var lessSymbol = '<';
var equalsSymbol = '==';

for (var _i2 = 0; _i2 < 101; _i2++) {
  var max = 101;
  var min = 0;
  var middle = void 0;
  var resalt = 0;
  var answer = void 0;

  while (answer !== equalsSymbol) {
    middle = Math.floor((min + max) / 2);
    var question = 'Ваше число ' + moreSymbol + ' ' + middle + ', ';
    question = question + lessSymbol + ' ' + middle + ' або ';
    question = question + equalsSymbol + ' ' + middle;
    answer = _i2 === middle ? '==' : _i2 > middle ? '>' : '<'; //prompt(question, '');

    switch (answer) {
      case moreSymbol:
        min = middle;
        break;

      case lessSymbol:
        max = middle;
        break;

      case equalsSymbol:
        resalt = middle;
    }
  }

  var message = 'Ви загадили ' + resalt;
  console.log(message, _i2);
} //піраміди )


var height = 5;
var piramid = '';
var piramid1 = '';
var piramid2 = '';

for (var _i3 = 0; _i3 <= height; _i3++) {
  for (var _y = 0; _y < _i3 + 1; _y++) {
    piramid = piramid + '#';
  }

  piramid = piramid + '\n';
}

for (var _i4 = 0; _i4 <= height; _i4++) {
  for (var h = height - _i4; h > 0; h--) {
    piramid1 = piramid1 + ' ';
  }

  for (var _y2 = 0; _y2 < _i4 + 1; _y2++) {
    piramid1 = piramid1 + '#';
  }

  piramid1 = piramid1 + '\n';
}

for (var _i5 = 0; _i5 <= height; _i5++) {
  for (var _h = height - _i5; _h > 0; _h--) {
    piramid2 = piramid2 + ' ';
  }

  for (var _y3 = 0; _y3 < _i5 + 1; _y3++) {
    piramid2 = piramid2 + '#';
  }

  piramid2 = piramid2 + '  ';

  for (var q = 0; q < _i5 + 1; q++) {
    piramid2 = piramid2 + '#';
  }

  piramid2 = piramid2 + '\n';
}

console.log(piramid);
console.log(piramid1);
console.log(piramid2); //таблиця множення відформатована

var table = 'Таблиця множення\n';

for (var _i6 = 1; _i6 < 10; _i6++) {
  for (var _y4 = 1; _y4 <= 10; _y4++) {
    var _resalt = _i6 * _y4;

    table = table + _i6 + ' * ';
    table = table + (_y4 < 10 ? '0' + _y4 : _y4);
    table = table + ' = ';
    table = table + (_resalt < 10 ? '0' + _resalt : _resalt);
    table = table + '\n';
  }

  table = table + '\n';
}

console.log(table);