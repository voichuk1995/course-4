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
    return arguments.length;
}

let array = [];
let i = 0;

do {
    array[i] = prompt("введіть аргумент");
    i++;
} while (confirm("Хочете ввести ще один аргумент") === true);

const answer = "Кількість аргументів: " + length(...array);
console.log(answer);




// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function numCompare(a, b) {
    a = +a;
    b = +b;
    if (typeof a === 'number' && (isNaN(a) === false) && typeof b === 'number' && (isNaN(b) === false)) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        }

    } else {
        return "error";
    }
}

console.log(numCompare(prompt("Введіть перше число для порівняння", "1"), prompt("Введіть друге число для порівняння", "-4")));




// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(a) {
    a = +a;
    let ans = 1;
    if (typeof a === 'number' && isNaN(a) === false && a >= 0) {
        if (a === 0) {
            ans = 1;
            return ans;
        } else {
            for (let i = 1; i <= a; i++) {
                ans = ans * i;
            }
            return ans;
        }
    } else { return "неможливо обчислити" }

}

console.log(factorial(prompt("Введіть число для обчислення факторіалу", "")));





// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function numberCreator(a, b, c) {
    if ((typeof a === 'number') && (typeof b === 'number') && (typeof c === 'number') && (a.toFixed(0).length === 1) && (b.toFixed(0).length === 1) && (c.toFixed(0).length === 1)) {
        return a * 100 + b * 10 + c;
    } else {
        return 'error';
    }

}
console.log(numberCreator(+prompt("Введіть перше число", "1"), +prompt("Введіть друге число", "2"), +prompt("Введіть третє число", "3")));


// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function rectArea(a, b) {
    a = +a;
    b = +b;
    if (arguments.length === 1) {
        if (typeof a === 'number' && (isNaN(a) === false) && (a >= 0)) {
            return a * a;
        } else { return 'error'; }
    } else {
        if (typeof a === 'number' && (isNaN(a) === false) && (a >= 0) && typeof b === 'number' && (isNaN(b) === false) && (b >= 0)) { return a * b; } else { return "error"; }
    }
}

console.log(rectArea(prompt("Введіть висоту прямокутника", "50"), prompt("Введіть ширину прямокутника", "25")));
console.log(rectArea(prompt("Введіть ширину квадрата", "50")));


// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNumber(a) {
    a = +a;
    if (typeof a === 'number' && isNaN(a) === false && a > 0 && a % 1 === 0) {
        let deviders = [];
        for (let i = 0; i < a; i++) {
            if (a % i === 0) {
                deviders.push(i);
            }
        }

        let b = 0;
        for (let i in deviders) {
            b = b + deviders[i];
        }


        if (a === b) {
            return true;
        } else {
            return false;
        }

    }
    else {
        return false;
    }
}

console.log(perfectNumber(prompt("введіть натуральне число для перевірки на досконалість", "1")));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function isPerfect(a, b) {
    a = +a;
    b = +b;
    let answer = []
    if (typeof a === 'number' && isNaN(a) === false && a > 0 && a % 1 === 0 && typeof b === 'number' && isNaN(b) === false && b > 0 && b % 1 === 0 && b > a) {
        for (let i = a; i <= b; i++) {
            if (perfectNumber(i) === true) {
                answer.push(i);
            }
        }
        return answer;
    } else { return "невірний діапазон" }
}

console.log(isPerfect(prompt("Введіть початок діапазону пошуку досконалих чисел", "1"), prompt("Введіть кінець діапазону пошуку досконалих чисел", "1")))
