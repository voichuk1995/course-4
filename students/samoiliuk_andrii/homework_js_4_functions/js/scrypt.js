"use strict"

// Мінімум

// Напиши всі можливі варіанти створення функцій.

function fun() {
    console.log("Hello world");
}

let funcExample = function () {
    console.log("Hello world");
}

let funcArrowMultiply = (a, b) => a * b;


// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function length() {
    console.log(arguments.length);
}

length(1, 2, 3, 4, 5, 6);



// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function isNumber(a) {
    if (typeof a === 'number' && (!isNaN(a))) {
        return true
    } else { return false }
}

function isNatural(a) {
    if (isNumber(a) && a > 0 && a % 1 == 0) {
        return true;
    } else { return false }
}


function numCompare(a, b) {
    a = +a;
    b = +b;
    if (isNumber(a) && isNumber(b)) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        }
    } else {
        throw "error";
    }
}

console.log(numCompare(prompt("Введіть перше число для порівняння", "1"), prompt("Введіть друге число для порівняння", "-4")));




// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(a) {
    a = +a;
    let ans = 1;
    if (isNumber(a) && a >= 0) {
        if (a === 0) {
            ans = 1;
            return ans;
        } else {
            for (let i = 1; i <= a; i++) {
                ans = ans * i;
            }
            return ans;
        }
    } else { throw "wrong input" }

}

console.log(factorial(prompt("Введіть число для обчислення факторіалу", "")));


// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function numberCreator(a, b, c) {
    if (isNumber(a) && isNumber(b) && isNumber(c) && (a.toFixed(0).length === 1) && (b.toFixed(0).length === 1) && (c.toFixed(0).length === 1)) {
        return a * 100 + b * 10 + c;
    } else {
        throw 'wrong input';
    }

}
console.log(numberCreator(+prompt("Введіть перше число", "1"), +prompt("Введіть друге число", "2"), +prompt("Введіть третє число", "3")));


// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function rectArea(a, b) {
    a = +a;
    b = +b;
    if (arguments.length === 1) {
        if (isNumber(a) && (a >= 0)) { return a * a; } else { throw 'wrong input'; }
    } else {
        if (isNumber(a) && (a >= 0) && isNumber(b) && (b >= 0)) { return a * b; } else { throw 'wrong input'; }
    }
}

console.log(rectArea(prompt("Введіть висоту прямокутника", "50"), prompt("Введіть ширину прямокутника", "25")));
console.log(rectArea(prompt("Введіть ширину квадрата", "50")));


// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(a) {
    a = +a;
    if (isNatural(a)) {
        let sum = 0;
        for (let i = 0; i < a; i++) {
            if (a % i === 0) {
                sum = sum + i;
            }
        }
        if (sum === a) {
            return true;
        } else {
            return false;
        }
    }
    else {
        throw "wrong input";
    }
}

console.log(isPerfectNumber(prompt("введіть натуральне число для перевірки на досконалість", "1")));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function searchPerfect(a, b) {
    a = +a;
    b = +b;
    if (isNatural(a) && isNatural(b) && a < b) {
        for (let i = a; i <= b; i++) {
            if (isPerfectNumber(i)) { console.log(i); }
        }
    } else { throw "wrong input" }
}

searchPerfect(prompt("Введіть початок діапазону пошуку досконалих чисел", "1"), prompt("Введіть кінець діапазону пошуку досконалих чисел", "1"))
