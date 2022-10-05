//Мінімум

//1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const summNumber = (0.1 * 10 + 0.2 * 10) / 10;
console.log(summNumber);

//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const firstNumb = '1';
const seconsNumb = 2;
const summNumb = +firstNumb + seconsNumb;
console.log(+summNumb)

//3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const volumeFlash = +prompt('Какой объём флешки в Гб?', ' ');
const fileSize = 820;
const numberFiles = Math.floor((volumeFlash * 1024) / fileSize);
console.log(numberFiles)

//Норма

//1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const amountMoney = +prompt('Сколько денег у Вас в кошельке?', ' ');
const chocolatePrice = +prompt('Цена шоколадки?', ' ');
const piecesChocolates = Math.floor(amountMoney / chocolatePrice);
const changeAmount = (amountMoney - (chocolatePrice * piecesChocolates)).toFixed(2);
console.log('Вы можете купить ' + piecesChocolates + ' шоколадок');
console.log('У вас останется ' + changeAmount + ' гривен')

//2.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const threedigitNumber = +prompt('Введите трёхзначное число', ' ');
const thirdDigit = threedigitNumber % 10;
const secondDigit = ~~(threedigitNumber / 10) % 10;
const firstDigit = ~~(threedigitNumber / 100) % 10;
const userNumbRevers = +(' ' + thirdDigit + secondDigit + firstDigit)
//Пустая строка, чтоб числа между собой не суммировались
console.log(userNumbRevers)


// Максимум

// 1.Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const depositAmount = prompt('Какая сумма вклада?', ' ');
const depositTerm = 2;
const annualInterest = 5;
const percentYear = depositAmount / 100 * annualInterest;
const interestAmount = percentYear / 12 * depositTerm;
console.log(interestAmount);


// 2. Що повернуть вирази:

/*2 && 0 && 3 - 0,

 2 || 0 || 3 - 2,

2 && 0 || 3 - 3*/
