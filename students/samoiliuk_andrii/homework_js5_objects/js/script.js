// // Мінімум

// // Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// // Метод, який виводить на екран інформацію про автомобіль.
// // Додавання ім’я водія у список
// // Перевірка водія на наявність його ім’я у списку
// // Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

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
//             return "Водій не знайдений";
//         } else {
//             return "Водій знайдений";
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




// Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

function isInteger(a) {
    a = +a;
    if (!isNaN(a) && (!(a % 1)) && (a >= 0)) {
        return true;
    } else { return false }
}


const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    display: function () {
        console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
    },
    validate: function () {
        let seconds = +this.seconds;
        let minutes = +this.minutes;
        let hours = +this.hours;
        if (seconds >= 60) {
            minutes = minutes + (seconds - seconds % 60) / 60;
            seconds = seconds % 60;
        }
        if (minutes >= 60) {
            hours = hours + (minutes - minutes % 60) / 60;
            minutes = minutes % 60;
        }
        if (hours >= 24) {
            hours = hours % 24;
        }

        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
    },
    addSeconds: function (a) {
        if (isInteger(a)) {
            let seconds = +this.seconds;
            seconds = seconds + +a;
            this.seconds = seconds;
            this.validate();
        }
    },
    addMinutes: function (a) {
        if (isInteger(a)) {
            let minutes = +this.minutes;
            minutes = minutes + +a;
            this.minutes = minutes;
            this.validate();
        }
    },
    addHours: function (a) {
        if (isInteger(a)) {
            this.hours = +this.hours + +a;
            this.validate();
        }
    },


}
time.display();
time.addSeconds(prompt("Скільки секунд додати", "45"));
time.display();
time.addMinutes(prompt("Скільки хвилин додати", "45"));
time.display();
time.addHours(prompt("Скільки годин додати", "25"));
time.display();






// Максимум

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)
