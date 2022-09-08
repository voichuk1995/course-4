"use strict";

//Мінімум
//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
console.log('Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.');
const a = 0.1;
const b = 0.2;
const sum1 = (a * 10 + b * 10) / 10;
console.log(sum1);

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
console.log('Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.');
const c = "1";
const d = 2;
const sum2 = +c + +d;
console.log(sum2);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const flashVolume = parseInt(prompt('Task 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.\nEnter flash volume in GB', '2'));
const fileCount = flashVolume * 1024 / 820;
console.log("Number of files: " + Math.floor(fileCount));


//Норма

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const moneyAmount = parseFloat(prompt('Task 4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.\nHow much money do you have?', '45.5')).toFixed(2);
const chocolatePrice = parseFloat(prompt('Task 4. \nWhat is the price of a chocolate', '5')).toFixed(2);
console.log('You have ' + moneyAmount + '$');
console.log('Chocolate costs ' + chocolatePrice + '$');
const chocolateAmount = Math.floor(moneyAmount / chocolatePrice);
console.log('You can buy ' + chocolateAmount + ' chocolates');
const rest = (moneyAmount % chocolatePrice).toFixed(2);
console.log('You will keep ' + rest + '$');

//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const digit = parseInt(prompt('Enter 3-digit number', '123'));
const firstDigit = (digit - digit % 100) / 100;
const secondDigit = ((digit - firstDigit * 100) - (digit - firstDigit * 100) % 10) / 10;
const thirdDigit = digit - firstDigit * 100 - secondDigit * 10;
const upsideDownDigit = thirdDigit * 100 + secondDigit * 10 + firstDigit;
console.log('Число задом наперед ' + upsideDownDigit);


//Максимум

//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let deposit = parseFloat(prompt('What is the deposit?', '50.00')).toFixed(2);
const firstMonthIncome = parseFloat((deposit * (0.05 / 12)).toFixed(2));
deposit = +deposit + +firstMonthIncome;
console.log(deposit);
const secondMonthIncome = (deposit) * (0.05 / 12);
const totalIncome = firstMonthIncome + secondMonthIncome;
console.log('Your two month income is ' + totalIncome.toFixed(2));



//Що повернуть вирази:
// 2 && 0 && 3
//Всі числа окрім 0 це true. 0 це false
//true and false --> false, false and true -->false
//answer 0

console.log(2 && 0 && 3);


// 2 || 0 || 3
//true(2) or false(0) --> true(2)
//true(2) or true(3) --> true(2) ??? ask

console.log(2 || 0 || 3);


//2 && 0 || 3
//true(2) and false(0) --> false(0)
//false(0) or true(3) --> true(3)


console.log(2 && 0 || 3)

