// // // Мінімум

// // // Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// // // Метод, який виводить на екран інформацію про автомобіль.
// // // Додавання ім’я водія у список
// // // Перевірка водія на наявність його ім’я у списку
// // // Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

// const car = {
//     vendor: "Toyota",
//     model: "Camry",
//     year: "2008",
//     avgSpeed: 100,
//     fuelTank: 60,
//     consumption: 11,
//     drivers: "Andrii, Maryna, Nastia",

//     displayInfo: function () {
//         let answer = "Car information:\n"
//         for (let key in this) {
//             if (typeof this[key] !== 'function') {
//                 answer = answer + key + ": " + this[key] + "\n";
//             }
//         }
//         console.log(answer);
//     },

//     addUser: function (name) {
//         this.drivers = this.drivers + ", " + name;
//     },

//     checkUser: function (name) {
//         if (this.drivers.search(name) === -1) {
//             return false;
//         } else {
//             return true;
//         };
//     },

//     timeAndFuelCalculation: function (distance) {
//         const time = distance / this.avgSpeed;
//         let restTime = (time - time % 4) / 4;
//         if (!(time % 4)) { restTime = restTime - 1 };
//         let totalTime = time + restTime;
//         if (totalTime < 0) { totalTime = 0 };
//         const hours = totalTime - totalTime % 1;
//         const minutes = (totalTime % 1) * 60;
//         let answer = "Час поїздки з урахуванням відпочинку: " + hours.toFixed(0) + " годин " + minutes.toFixed(0) + " хвилин\n";
//         const fuel = this.consumption / 100 * distance;
//         answer = answer + "Витрата пального у літрах: " + fuel.toFixed(1);
//         return answer;
//     }

// }

// car.displayInfo();

// console.log(car.drivers);
// car.addUser(prompt("Введіть імʼя нового водія", "Masha"));
// console.log(car.drivers);

// console.log(car.checkUser(prompt("Введіть імʼя водія для перевірки", "Masha")));
// console.log(car.timeAndFuelCalculation(+prompt("Введіть відстань в кілометрах", "")));




// // Норма

// // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// // Для виведення часу на екран.
// // Зміни часу на передану кількість секунд.
// // Зміни часу на передану кількість хвилин.
// // Зміни часу на передану кількість годин.
// // Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

// function isInteger(a) {
//     if (!isNaN(a) && (!(a % 1)) && (a >= 0)) {
//         return true;
//     } else { return false }
// }


// const time = {
//     hours: 0,
//     minutes: 0,
//     seconds: 0,

//     display: function () {
//         console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
//     },

//     addSeconds: function (a) {
//         if (isInteger(a)) {
//             this.seconds = this.seconds + a;
//         }
//         if (this.seconds >= 60) {
//             let minutes = (this.seconds - this.seconds % 60) / 60;
//             this.seconds = this.seconds - minutes * 60;
//             this.addMinutes(minutes);
//         }
//     },

//     addMinutes: function (a) {
//         if (isInteger(a)) {
//             this.minutes = this.minutes + a;
//         }
//         if (this.minutes >= 60) {
//             let hours = (this.minutes - this.minutes % 60) / 60;
//             this.minutes = this.minutes - hours * 60;
//             this.addHours(hours);
//         }
//     },

//     addHours: function (a) {
//         if (isInteger(a)) {
//             this.hours = this.hours + a;
//             if (this.hours >= 24) {
//                 this.hours = this.hours % 24;
//             }
//         }
//     },

// }
// time.display();
// time.addSeconds(+prompt("Скільки секунд додати", "45"));
// time.display();
// time.addMinutes(+prompt("Скільки хвилин додати", "45"));
// time.display();
// time.addHours(+prompt("Скільки годин додати", "25"));
// time.display();


// // Максимум

// // Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// // Складання 2-х об'єктів-дробів.
// // Віднімання 2-х об'єктів-дробів.
// // Множення 2-х об'єктів-дробів.
// // Ділення 2-х об'єктів-дробів.
// // Скорочення об'єкта-дробу.
// // (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)


const drib = {
    display: function (drib) {
        if (drib.numerator === 0) {
            console.log("0")
        } else if (drib.denominator === 1) {
            console.log(drib.numerator)
        } else if (Math.abs(drib.numerator) === Math.abs(drib.denominator)) {
            console.log(drib.numerator / drib.denominator)
        } else {
            console.log(drib.numerator + '/' + drib.denominator);
        }
    },

    simplify: function (obj) {
        let digitFive = Math.abs(obj.numerator);
        let digitSix = Math.abs(obj.denominator);
        if ((digitFive !== digitSix) && digitSix != 0 && digitFive != 0) {
            do {
                if (digitFive > digitSix) {
                    digitFive = digitFive - digitSix;
                } else {
                    digitSix = digitSix - digitFive;
                }
            }
            while (digitFive !== digitSix);
        }
        obj.numerator = obj.numerator / digitSix;
        obj.denominator = obj.denominator / digitSix;
        return obj;
    },

    makeCommon: function (dribFirst, dribSecond) {
        if (dribFirst.denominator !== dribSecond.denominator) {
            const a = dribFirst.numerator * dribSecond.denominator;
            const b = dribFirst.denominator * dribSecond.denominator;
            const c = dribSecond.numerator * dribFirst.denominator;
            dribFirst.numerator = a;
            dribSecond.numerator = c;
            dribFirst.denominator = b;
            dribSecond.denominator = b;
        }
        return dribFirst, dribSecond;
    },

    add: function (dribFirst, dribSecond) {
        this.makeCommon(dribFirst, dribSecond);
        const a = {
            numerator: dribFirst.numerator + dribSecond.numerator,
            denominator: dribFirst.denominator,
        }
        this.simplify(a);
        return a;
    },

    subtract: function (dribFirst, dribSecond) {
        this.makeCommon(dribFirst, dribSecond);
        const a = {
            numerator: dribFirst.numerator - dribSecond.numerator,
            denominator: dribFirst.denominator,
        }
        this.simplify(a);
        return a;
    },
    multiply: function (dribFirst, dribSecond) {
        const a = {
            numerator: dribFirst.numerator * dribSecond.numerator,
            denominator: dribFirst.denominator * dribSecond.denominator,
        }
        this.simplify(a);
        return a;
    },
    divide: function (dribFirst, dribSecond) {
        const a = {
            numerator: dribFirst.numerator * dribSecond.denominator,
            denominator: dribFirst.denominator * dribSecond.numerator,
        }
        this.simplify(a);
        return a;
    }
}

const nomFirst = +prompt("Введіть чисельник першого дробу", "2");
const denomFirst = +prompt("Введіть знаменник першого дробу", "3");
const nomSecond = +prompt("Введіть чисельник другого дробу", "5");
const denomSecond = +prompt("Введіть знаменник другого дробу", "8");

const f = {
    numerator: nomFirst,
    denominator: denomFirst,
}

const g = {
    numerator: nomSecond,
    denominator: denomSecond,
}

console.log("Введені дроби:");
drib.display(f);
drib.display(g);

const h = drib.add(f, g);
console.log("Сума:");
drib.display(h);



const k = drib.subtract(f, g);
console.log("Різниця:");
drib.display(k);



const l = drib.multiply(f, g);
console.log("Добуток:");
drib.display(l);



const m = drib.divide(f, g);
console.log("Частка:");
drib.display(m);

