// Мінімум

// 1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const userAge = +prompt('Сколько Вам лет?', '0')
if (userAge >= 0 && userAge <= 11) {
    alert('Вы ребёнок!');
} else if (userAge >= 12 && userAge <= 17) {
    alert('Вы подросток!');
} else if (userAge >= 18 && userAge <= 59) {
    alert('Вы взрослый!');
} else if (userAge >= 60 && userAge <= 120) {
    alert('Вы пенсионер!');
} else {
    alert('Ошибочное значение')
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const userNumb = +prompt('Введите любое число от 0 до 9?', '')
switch (userNumb) {
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
        console.log(')');
        break;
    default:
        console.log('Ошибка');
}


// // 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const numberRange = +prompt('Введите первое число диапазона чисел', ' ');
const secondnumberRange = +prompt('Введите второе число диапазона чисел', ' ');
let sumNumbers = 0;
for (let i = numberRange; i <= secondnumberRange; i++) {
    sumNumbers = i + sumNumbers;
}
console.log(sumNumbers);

// // 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const firstNumb = +prompt('Введите любое число', ' ');
const secondNumb = +prompt('Введите любое число', ' ');
const minNumber = firstNumb < secondNumb ? firstNumb : secondNumb;
let commonDivider;
for (let i = minNumber; i >= 1; i--) {
    if ((firstNumb && secondNumb) % i === 0) {
        commonDivider = i;
    }
}
alert('Наибольший общий делитель: ' + commonDivider);

// 5. Запитай у користувача число і виведи всі дільники цього числа.
const anyNumb = +prompt('Введите любое число?', ' ');
const allDividers = [];
for (let i = 1; i <= anyNumb; i++) {
    if (anyNumb % i === 0) {
        allDividers.push(i);
    }
}
alert('Все делители данного числа: ' + allDividers);

// Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const fivedigitNumber = +prompt('Введите пятизначное число', ' ');
const firstDigit = fivedigitNumber % 10;
const secondDigit = ~~(fivedigitNumber / 10) % 10;
const thirdDigit = ~~(fivedigitNumber / 100) % 10;
const fourthdDigit = ~~(fivedigitNumber / 1000) % 10;
const fifthDigit = ~~(fivedigitNumber / 10000) % 10;
if (firstDigit === fifthDigit && secondDigit === fourthdDigit) {
    alert(fivedigitNumber + ' полиндром');
} else {
    alert(fivedigitNumber + ' не полиндром');
}

// // 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// // від 200 до 300 - знижка буде 3%; 
// // від 300 до 500 - 5%;
// // від 500 і вище - 7%.
const purchaseAmount = +prompt('Какая сумма покупки?', ' ');
let afterDiscount = purchaseAmount;
if (200 <= purchaseAmount && purchaseAmount < 300) {
    afterDiscount = purchaseAmount - (purchaseAmount * 0.03);
} else if (300 <= purchaseAmount && purchaseAmount < 500) {
    afterDiscount = purchaseAmount - (purchaseAmount * 0.05);
} else if (500 <= purchaseAmount) {
    afterDiscount = purchaseAmount - (purchaseAmount * 0.07);
}
alert('Сумма со скидкой: ' + afterDiscount + ' грн');


// 3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


// 4.Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let dayWeek = ['Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
];
let i = 0;

while (confirm(dayWeek[i % 7] + '. Хотите увидеть следующий день?')) {
    i++;
}
