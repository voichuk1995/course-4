//Мінімум
//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const firstNumber = 0.1;
const secondNumber = 0.2;
const resultNumber = firstNumber + secondNumber;
const fixedResult = +resultNumber.toFixed(1);
console.log(fixedResult);


//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
//добийся математично правильної відповіді.
let firstString = "1";
let secondNum = 2;
let resultStrNum = +firstString + secondNum;
console.log(resultStrNum);

//3. Користувач вказує обсяг флешки в Гб. 
//Програма повинна порахувати скільки файлів розміром 
//в 820 Мб поміщається на флешку.

const userGB = +prompt('Please, enter capasity of your flashcard in GB');
const fileSize = 820;
const mbAmount = 1024;
const filesResult = Math.round((userGB * mbAmount) / fileSize) + ' files';
console.log(filesResult);

// --Норма--
//1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
//Програма виводить скільки шоколадок може купити користувач
// і скільки здачі у нього залишиться.

const userAmount = +prompt('Please, enter your money amount');
const userChocolatePrice = +prompt('Please, enter price for one chocolate');
const numberOfChocolates = Math.floor(userAmount / userChocolatePrice);
const resultMoneyChange = userAmount % userChocolatePrice;
const buyResult = 'You can buy ' + numberOfChocolates
    + ' chocolates and your money change is ' + resultMoneyChange + ' hryvnias';
console.log(buyResult);
