"use strict";
// Домашне завдання.
// Побудувати три види пірамід:

// 1. 
// #
// ##
// ###
// ####
// #####

let string = '';
for (let i = 1; i < 6; i++) {
    let j = 0
    do {
        string = string + '#';
        j++
    }
    while (j < i);
    string = string + '\n';
}
console.log(string);

// 2.
//     #
//    ##
//   ###
//  ####
// #####

let stringTwo = '';
for (let i = 1; i < 6; i++) {
    let j = 0;
    j = 5 - i;
    do {
        stringTwo = stringTwo + ' ';
        j--;
    }
    while (j >= 0);
    let k = 0;
    do {
        stringTwo = stringTwo + '#';
        k++;
    }
    while (k < i);
    stringTwo = stringTwo + '\n';
}
console.log(stringTwo);

// 3. 

//     #  #
//    ##  ##
//   ###  ###
//  ####  ####
// #####  #####

let stringThree = '';
for (let i = 1; i < 6; i++) {
    let j = 0;
    j = 5 - i;
    do {
        stringThree = stringThree + ' ';
        j--;
    }
    while (j >= 0);
    let k = 0;
    do {
        stringThree = stringThree + '#';
        k++;
    }
    while (k < i);
    stringThree = stringThree + '  ';
    let l = 0;
    do {
        stringThree = stringThree + '#';
        l++
    }
    while (l < i);
    stringThree = stringThree + '\n';
}
console.log(stringThree);


// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const age = +prompt("скільки вам років?", "18");
if (age >= 0 && age <= 11) {
    console.log("Користувач - дитина");
} else if (age >= 12 && age <= 17) {
    console.log("Користувач - підліток");
} else if (age >= 18 && age <= 59) {
    console.log("Користувач - дорослий");
} else if (age >= 60) {
    console.log("Користувач - пенсіонер");
} else {
    console.log("Невірно введено вік");
}


// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const key = +prompt("введіть число 0 - 9", "");
switch (key) {
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    case 0:
        console.log(')');
        break;
    default:
        console.log('невірно набраний номер')
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let digitOne = 0;
let digitTwo = 0;

do {
    digitOne = +prompt("введіть перше число", "1");
    digitTwo = +prompt("введіть друге число", "10");
    if (digitTwo < digitOne) {
        alert('друге число має бути більшим за перше')
    }
}
while (digitTwo < digitOne);


var sum = 0;
for (let i = digitOne; i <= digitTwo; i++) {
    sum = sum + i;
}
console.log('Сума чисел всіх чисел у проміжку ' + digitOne + '-' + digitTwo + ' = ' + sum);
alert('Сума чисел всіх чисел у проміжку ' + digitOne + '-' + digitTwo + ' = ' + sum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.


let digitFive = +prompt("введіть перше число ", "9");
let digitSix = +prompt("введіть друге число ", "33");
const answerString = "Найбільший спільний дільник чисел " + digitFive + " та " + digitSix + " : ";
do {
    if (digitFive > digitSix) {
        digitFive = digitFive - digitSix;
    } else {
        digitSix = digitSix - digitFive;
    }
}
while (digitFive !== digitSix);

console.log(answerString + digitSix);


// Запитай у користувача число і виведи всі дільники цього числа.

const digitThree = +prompt("введіть число", "9");
let answer = 'Дільники числа ' + digitThree + ': ';
for (let i = 1; i <= digitThree; i++) {
    if (digitThree % i) {
        continue;
    } else {
        answer = answer + i + ' ';
    }
}
console.log(answer);

// Норма

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


let digitSeven;
do {
    digitSeven = +prompt('Введіть число з п\'яти розрядів', '12345')
}
while ((digitSeven.toFixed(0)).length != 5);

let array = [];

for (let i = 4; i >= 0; i--) {
    array[i] = (digitSeven - digitSeven % (Math.pow(10, i))) / (Math.pow(10, i));
    digitSeven = digitSeven - array[i] * Math.pow(10, i);
}

if (array[4] === array[0] && array[3] === array[1]) {
    console.log('Ура! Введене число є поліндромом!');
} else {
    console.log('Введене число не поліндром');
}







// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const check = +prompt('Введіть суму покупки', '12');
let answerTwo = 'Cума до сплати: ';

if (check < 200) {
    console.log(answerTwo + check.toFixed(2));
} else if (check > 200 && check <= 300) {
    console.log(answerTwo + (check * 0.97).toFixed(2));
} else if (check > 300 && check <= 500) {
    console.log(answerTwo + (check * 0.95).toFixed(2));
} else if (check > 500) {
    console.log(answerTwo + (check * 0.93).toFixed(2));
} else {
    console.log('Помилка');
}




// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let dod = 0;
let vid = 0;
let zer = 0;
let par = 0;
let nopar = 0;
let input;
for (let i = 1; i < 11; i++) {
    input = +prompt('введіть число №' + i);
    if (input > 0) {
        dod++;
    }
    if (input === 0) {
        zer++;
    }
    if (input < 0) {
        vid++;
    }
    if (input % 2) {
        nopar++;
    } else {
        par++;
    }
}
console.log('Статистика:\nВведено додатніх чисел: ' + dod + '\nВведено від\'ємних чисел: ' + vid + '\nВведено нулів: ' + zer + '\nВведено парних чисел: ' + par + '\nВведено непарних чисел: ' + nopar);

// // Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let count = 0;
const dict = [
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'П\'ятниця',
    'Субота',
    'Неділя']

while (confirm(dict[count] + '. Хочеш побачити наступний день?')) {
    count++;
    if (count > 6) {
        count = 0;
    }
}

// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, 
//<N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100,
// поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
var start = 0;
var end = 100;
var n = Math.round((end - start) / 2);

alert('Загадай число від  0 до 100');

do {
    if (confirm('Загадане число більше за ' + n + '?') === true) {
        start = n;
        n = n + Math.round((end - start) / 2);
    } else {
        end = n;
        n = n - Math.round((end - start) / 2);
    }

} while (n != end);
alert('Загадане число: ' + n);
console.log('Загадане число: ' + n);




// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
let multTable = '';
var k = 0;
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
        k = i * j;
        multTable = multTable + i + ' * ' + j + ' = ' + k + '\n';
    }
    multTable = multTable + '\n';
}
console.log(multTable);


