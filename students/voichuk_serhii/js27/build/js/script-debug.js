'use strict'; // Мінімум
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

console.log((0.1 * 100 + 0.2 * 100) / 100); // Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

var str = "1";
var num = 2;
console.log(+str + num); // Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

var SIZE_1GB = 1000;
var FILE = 820;
var userSize = prompt("Який обсяг вашої флешки? Наприклад:", "2");
console.log(~~(userSize * SIZE_1GB / FILE)); // Норма
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

var money = prompt("Cума грошей в гаманці? Наприклад:", "200");
var prise = prompt("Ціна однієї шоколадки? Наприклад:", "50");
var quantity = ~~(money / prise);
var remainder = money - quantity * prise;
console.log("Кількість товарів: " + quantity + " Ваш залишок: " + remainder); // Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

var value = +prompt("Введіть тризначне число. Наприклад:");
var num1 = (value - value % 100) / 100;
var num2 = (value - value % 10) / 10;
var num3 = (value - value % 1) / 1;
console.log(num3, num2, num1); // Максимум
// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

var rate = +(5 / 12).toFixed(2);
var month = 2;
var amount = +prompt("Яка сумма вкладу? Наприклад: 2000");
var enter = amount * (rate * month) / 100;
console.log(enter); // Що повернуть вирази:
//  2 && 0 && 3 //  0
//  2 || 0 || 3 // 2
// 2 && 0 || 3 // 0