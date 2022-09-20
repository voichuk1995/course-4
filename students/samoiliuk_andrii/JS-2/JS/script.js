"use strict";

//Мінімум
//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const a = 0.1;
const b = 0.2;
const sum1 = (a * 10 + b * 10) / 10;
console.log(sum1);

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const c = "1";
const d = 2;
const sum2 = +c + d;
console.log(sum2);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const flashVolume = parseInt(prompt('Enter flash volume in GB', '2'));
const fileCount = flashVolume * 1024 / 820;
const answer_1 = "Number of files: " + Math.floor(fileCount)
console.log(answer_1);


//Норма

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const moneyAmount = +prompt('How much money do you have?', '45.5');
const chocolatePrice = +prompt('What is the price of a chocolate', '5');
let answer_2 = 'You have ' + moneyAmount.toFixed(2) + '$\n' + 'Chocolate costs ' + chocolatePrice.toFixed(2) + '$\n';
const chocolateAmount = Math.floor(moneyAmount / chocolatePrice);
answer_2 = answer_2 + 'You can buy ' + chocolateAmount + ' chocolates\n';
const rest = (moneyAmount % chocolatePrice).toFixed(2);
answer_2 = answer_2 + 'You will keep ' + rest + '$';
console.log(answer_2);

//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const digit = parseInt(prompt('Enter 3-digit number', '123'));
const firstDigit = (digit - digit % 100) / 100;
const secondDigit = ((digit - firstDigit * 100) - (digit - firstDigit * 100) % 10) / 10;
const thirdDigit = digit - firstDigit * 100 - secondDigit * 10;
const upsideDownDigit = thirdDigit * 100 + secondDigit * 10 + firstDigit;
const answer_3 = 'Число задом наперед ' + upsideDownDigit;
console.log(answer_3);


//Максимум

//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let deposit = +prompt('What is the deposit?', '50.00');
const firstMonthIncome = deposit * (0.05 / 12);
deposit = deposit + firstMonthIncome;
const secondMonthIncome = (deposit) * (0.05 / 12);
const totalIncome = firstMonthIncome + secondMonthIncome;
const answer_4 = 'Your two month income is ' + totalIncome.toFixed(2);
console.log(answer_4);



//Що повернуть вирази:
// 2 && 0 && 3
//Всі числа окрім 0 це true. 0 це false
//true and false --> false, false and true -->false
//answer 0

console.log(2 && 0 && 3);


// 2 || 0 || 3
//true(2) or false(0) --> true(2)
//true(2) or true(3) --> true(2) 

console.log(2 || 0 || 3);


//2 && 0 || 3
//true(2) and false(0) --> false(0)
//false(0) or true(3) --> true(3)


console.log(2 && 0 || 3)

