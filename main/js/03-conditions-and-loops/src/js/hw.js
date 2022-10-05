// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// просте рішення для 5-ти значного числа, виконується тільки для 5-ти значних чисел

const number = 12321;
let isPolindrom = false;

for (let i = 0; i < 2; i++) {
    const lastNumber = (i > 0 ? ~~(number / 10) : number) % 10;

    const firstDivider = i > 0 ? 1000 : 10000;
    const firstNumber = ~~(number / firstDivider) % 10;

    if (lastNumber !== firstNumber) {
        isPolindrom = false;
        break;
    } else {
        isPolindrom = true;
    }
}

console.log(isPolindrom);

// рішення для чисел будь якої довжени, виконується для всіх чисел
const number1 = 3212123;
let tmpNumber = number1;
let isPolindrom1 = false;
let counter = 0;

//взнаємо кількість розрядів числа
while (true) {
    tmpNumber = ~~(tmpNumber / 10);
    counter++;
    if (tmpNumber === 0) break;
}
//якщо число однорозрядне це поліндром
isPolindrom1 = counter === 1;

//якщо число містить четну кількість розрядім це не поліндром
if (counter % 2 && !isPolindrom1) {
    let tmpLastNumber = number1;
    let firstNumberDivider = 1;

    for (let y = 0; y < counter - 1; y++) {
        firstNumberDivider = firstNumberDivider * 10;
    }

    for (let i = 0; i < ~~(counter / 2); i++) {
        const lastNumber = tmpLastNumber % 10;

        tmpLastNumber = ~~(tmpLastNumber / 10);

        const firstNumder = ~~(number1 / firstNumberDivider) % 10;

        firstNumberDivider = ~~(firstNumberDivider / 10);

        if (lastNumber !== firstNumder) {
            isPolindrom1 = false;
            break;
        } else {
            isPolindrom1 = true;
        }
    }
}

console.log(isPolindrom1)


//Гра «Вгадай число». 
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
const moreSymbol = '>';
const lessSymbol = '<';
const equalsSymbol = '==';

for (let i = 0; i < 101; i++) {
    let max = 101;
    let min = 0;
    let middle;
    let resalt = 0;
    let answer;

    while (answer !== equalsSymbol) {
        middle = Math.floor((min + max) / 2);

        let question = 'Ваше число ' + moreSymbol + ' ' + middle + ', ';
        question = question + lessSymbol + ' ' + middle + ' або ';
        question = question + equalsSymbol + ' ' + middle;

        answer = i === middle ? '==' : i > middle ? '>' : '<'; //prompt(question, '');

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

    const message = 'Ви загадили ' + resalt;

    console.log(message, i);
}

//піраміди )

const height = 5;

let piramid = '';
let piramid1 = '';
let piramid2 = '';

for (let i = 0; i <= height; i++) {

    for (let y = 0; y < i + 1; y++) {
        piramid = piramid + '#';
    }

    piramid = piramid + '\n';
}

for (let i = 0; i <= height; i++) {
    for (let h = height - i; h > 0; h--) {
        piramid1 = piramid1 + ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        piramid1 = piramid1 + '#';
    }

    piramid1 = piramid1 + '\n';
}

for (let i = 0; i <= height; i++) {
    for (let h = height - i; h > 0; h--) {
        piramid2 = piramid2 + ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        piramid2 = piramid2 + '#';
    }

    piramid2 = piramid2 + '  ';

    for (let q = 0; q < i + 1; q++) {
        piramid2 = piramid2 + '#';
    }

    piramid2 = piramid2 + '\n';
}

console.log(piramid);

console.log(piramid1);

console.log(piramid2);

//таблиця множення відформатована

let table = 'Таблиця множення\n';

for (let i = 1; i < 10; i++) {
    for (let y = 1; y <= 10; y++) {
        const resalt = i * y;
        table = table + i + ' * ';
        table = table + (y < 10 ? '0' + y : y);
        table = table + ' = ';
        table = table + ((resalt < 10) ? '0' + resalt : resalt);
        table = table + '\n';
    }

    table = table + '\n';
}

console.log(table);
