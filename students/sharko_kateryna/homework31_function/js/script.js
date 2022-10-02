// Мінімум

// 1. Напиши всі можливі варіанти створення функцій.
function exampleFirst(a, b) {
    console.log();
}

const getSecond = function (c, d) {
    console.log(c - d);
}

const getThird = (k, l) => k + l;


// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function getArgumentsLength() {
    console.log(arguments.length);
}
getArgumentsLength(2, 5, 6, 79);

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function getNumber(firstNumb, secondNumb) {
    if (firstNumb < secondNumb) {
        return -1;
    }
    if (firstNumb > secondNumb) {
        return 1;
    }
    if (firstNumb === secondNumb) {
        return 0;
    }
}
console.log(getNumber(45, 91))

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function calcFactorial(userNumber) {
    let factorialNumb = userNumber;
    for (let i = userNumber - 1; i > 0; i--) {
        factorialNumb = factorialNumb * i;
    }
    return factorialNumb;
}
console.log(calcFactorial(6));

// 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function getAllNumber(numberOne, numberTwo, numberThree) {
    return +(numberOne * 100 + numberTwo * 10 + numberThree);
}
console.log(getAllNumber(6, 2, 0))

// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calcSquare(length, width) {
    if (width !== undefined) {
        return length * width;
    } else {
        return length ** 2;
    }
}
console.log(calcSquare(6, 11));


// Норма

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function checkPerfectNumb(anyNumber) {
    let allDividers = 0;
    for (let i = anyNumber - 1; i > 0; i--) {
        if (anyNumber % i === 0) {
            allDividers = allDividers + i;
        }
    }
    return allDividers === anyNumber;
}
console.log(checkPerfectNumb(28));

// 2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function getPerfectNumb(minNumber, maxNumber) {
    let allPerfectNumb = '';
    for (let i = maxNumber; i > minNumber; i--) {
        if (checkPerfectNumb(i)) {
            allPerfectNumb = allPerfectNumb + (allPerfectNumb ? ', ' : '') + i;
        }
    }
    return allPerfectNumb;
}
console.log(getPerfectNumb(3, 165));
