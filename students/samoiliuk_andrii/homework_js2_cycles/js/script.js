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
    if (digitTwo <= digitOne) {
        console.log('друге число має бути більшим за перше');
    }
    digitOne = +prompt("введіть перше число", "1");
    digitTwo = +prompt("введіть друге число", "10");

}
while (digitTwo < digitOne);

let sum = 0;
for (let i = digitOne; i <= digitTwo; i++) {
    sum = sum + i;
}

const answerSumOfDigits = 'Сума чисел всіх чисел у проміжку ' + digitOne + '-' + digitTwo + ' = ' + sum;
console.log(answerSumOfDigits);


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.


const firstDigitForDeviderSearch = +prompt("введіть перше число ", "9");
const secondDigitForDeviderSearch = +prompt("введіть друге число ", "33");

let digitFive = firstDigitForDeviderSearch;
let digitSix = secondDigitForDeviderSearch;
do {
    if (digitFive > digitSix) {
        digitFive = digitFive - digitSix;
    } else {
        digitSix = digitSix - digitFive;
    }
}
while (digitFive !== digitSix);
const answerString = "Найбільший спільний дільник чисел " + firstDigitForDeviderSearch + " та " + secondDigitForDeviderSearch + " : " + digitSix;
console.log(answerString);


// Запитай у користувача число і виведи всі дільники цього числа.

const digitThree = +prompt("введіть число", "9");
let answer = 'Дільники числа ' + digitThree + ': ';
for (let i = 1; i <= digitThree; i++) {
    if (!(digitThree % i)) { answer = answer + i + ' ' };
}

console.log(answer);

// Норма

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


let normalDigit;
do {
    normalDigit = +prompt('Введіть число з п\'яти розрядів', '12345')
}
while ((normalDigit.toFixed(0)).length != 5);

let calcDigit = normalDigit;
let upsideDownDigit = 0;

for (let i = 4; i >= 0; i--) {
    upsideDownDigit = upsideDownDigit + (calcDigit - calcDigit % (Math.pow(10, i))) / (Math.pow(10, i)) * Math.pow(10, 4 - i);
    calcDigit = calcDigit - (calcDigit - calcDigit % (Math.pow(10, i)));
}

if (normalDigit === upsideDownDigit) {
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
    answerTwo = answerTwo + check.toFixed(2);
    console.log(answerTwo);
} else if (check > 200 && check <= 300) {
    answerTwo = answerTwo + (check * 0.97).toFixed(2);
    console.log(answerTwo);
} else if (check > 300 && check <= 500) {
    answerTwo = answerTwo + (check * 0.95).toFixed(2);
    console.log(answerTwo);
} else if (check > 500) {
    answerTwo = answerTwo + (check * 0.93).toFixed(2);
    console.log(answerTwo);
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

for (let i = 1; i < 11; i++) {
    let input = +prompt('введіть число №' + i);
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

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let count = 0;
let weekDay = "";
do {
    switch (count) {
        case 0:
            weekDay = 'Понеділок';
            break;
        case 1:
            weekDay = 'Вівторок';
            break;
        case 2:
            weekDay = 'Середа';
            break;
        case 3:
            weekDay = 'Четвер';
            break;
        case 4:
            weekDay = 'П\'ятниця';
            break;
        case 5:
            weekDay = 'Субота';
            break;
        case 6:
            weekDay = 'Неділя';
            break;
    }

    count++;
    if (count > 6) {
        count = 0;
    }
}
while (confirm(weekDay + '. Хочеш побачити наступний день?'));

// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, 
//<N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100,
// поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
var start = 0;
var end = 100;
var n = Math.round((end - start) / 2);

console.log('Загадай число від  0 до 100');

do {
    let ask = prompt('Загадане більше (>), меньше (<) чи дорівнює (=) ' + n + '?');
    if (ask === ">") {
        start = n;
        n = n + Math.round((end - start) / 2);
    } else if (ask === "<") {
        end = n;
        n = n - Math.round((end - start) / 2);
    } else if (ask === "=") {
        break;
    }
} while (n != end);

const guessedDigit = 'Загадане число: ' + n

console.log(guessedDigit);




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


