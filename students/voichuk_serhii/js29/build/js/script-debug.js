'use strict'; // МІНІМУМ
// Напиши всі можливі варіанти створення функцій.
// function i(){
// }
// const i = function(){
// }
// function(){
// }
// const a = function() => (param1, param2, ...);
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function arg() {
  console.log(arguments);
}

arg(5, 7, 8, 10); // Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function num(num1, num2) {
  if (num) {
    num1 < num2;
    console.log(-1);
  } else if (num1 > num2) {
    console.log(1);
  } else {
    console.log(0);
  }
}

num(2, 5); // Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(num) {
  return num != 1 ? num * factorial(num - 1) : 1;
}

console.log(factorial(3)); // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function numb(num1, num2, num3) {
  var a = num1.toString() + num2.toString() + num3.toString();
  console.log(+a);
}

numb(3, 5, 7); // Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function a(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
  var s = width * height;
  console.log(s);
}

a(5); // НОРМА
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
//Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfect(number) {
  var temp = 0;

  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("Perfect number.");
  } else {
    console.log("Not perfect number.");
  }
}

isPerfect(6); // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
//і виводить тільки ті числа з діапазону, які є досконалими. 
//Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function minMax(first, last) {
  var enter = "Досконалі числа: ";

  do {
    var temp = 0;

    for (var i = 1; i <= first / 2; i++) {
      if (first % i === 0) {
        temp += i;
      }

      ;
    }

    ;

    if (temp === first) {
      enter = enter + temp + " ";
    }

    first++;
  } while (first <= last);

  console.log(enter);
}

minMax(1, 496);