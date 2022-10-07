'use strict'; // МІНІМУМ
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
//обсяг паливного баку, середня витрата палива на 100 км., водії), 
//і наступні методи для роботи з цим об'єктом:

var auto = {
  made: "Ukraine",
  model: "t-84",
  yearMade: 2009,
  speed: 70,
  fuel: 700,
  fuelKm: 200,
  drivers: 3,
  showInfo: function showInfo() {
    console.log("\u041A\u0440\u0430\u0457\u043D\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A ".concat(this.made, ", \u043C\u043E\u0434\u0435\u043B\u044C ").concat(this.model, ", \n        \u0440\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443 ").concat(this.yearMade, ", \u0441\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C ").concat(this.speed, ", \n        \u043E\u0431'\u0454\u043C \u0431\u0430\u043A\u0443 ").concat(this.fuel, ", \u0440\u043E\u0437\u0445\u0456\u0434 \u0442\u043E\u043F\u043B\u0438\u0432\u0430 ").concat(this.fuelKm, ", \u0432\u043E\u0434\u0456\u0457 ").concat(this.drivers, "."));
  },
  nameDriver: function nameDriver(name) {
    auto.nameDriver = name;
    console.log(auto.nameDriver);
  },
  auditNameDriver: function auditNameDriver() {
    if (auto.nameDriver) {
      console.log(auto.nameDriver);
    }

    ;
  },
  time: function time(km) {
    var hours = +(km / auto.speed).toFixed(1);
    var pause = +(hours / 4).toFixed(0);
    hours = hours + pause;
    var fuelIn = hours * auto.fuelKm;
    console.log("\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0433\u043E\u0434\u0438\u043D \u0434\u043B\u044F \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u0434\u0430\u043D\u043E\u0457 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 - ".concat(hours, ",\n        \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0442\u044C \u043F\u0430\u043B\u0438\u0432\u0430 - ").concat(fuelIn));
  }
};
console.log(auto); // Метод, який виводить на екран інформацію про автомобіль.

auto.showInfo(); // Додавання ім’я водія у список

auto.nameDriver("Serhii"); // Перевірка водія на наявність його ім’я у списку

auto.auditNameDriver(); // Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

auto.time(1000); // НОРМА
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

var timeAll = {
  hour: 1,
  minute: 10,
  second: 30,
  timeEnter: function timeEnter() {
    console.log("".concat(this.hour, " \u0433\u043E\u0434\u0438\u043D ").concat(this.minute, " \u0445\u0432\u0438\u043B\u0438\u043D ").concat(this.second, " \u0441\u0435\u043A\u0443\u043D\u0434"));
  },
  secondIn: function secondIn(sec) {
    do {
      if (sec >= 59 - this.second) {
        sec--;
        this.second++;
      } else {
        this.second = this.second + sec;
      }

      ;

      if (this.second === 60) {
        this.minute++;
        this.second = 0;
      }
    } while (this.second);

    if (sec >= 59 - this.second) {
      sec--;
      this.second++;
    } else {
      this.second = this.second + sec;
    }

    ;
    console.log("".concat(this.hour, " \u0433\u043E\u0434\u0438\u043D ").concat(this.minute, " \u0445\u0432\u0438\u043B\u0438\u043D ").concat(this.second, " \u0441\u0435\u043A\u0443\u043D\u0434"));
  },
  minuteIn: function minuteIn(min) {
    do {
      if (min >= 59 - this.minute) {
        min--;
        this.minute++;
      } else {
        this.minute = this.minute + min;
      }

      ;

      if (this.minute === 60) {
        this.hour++;
        this.minute = 0;
      }
    } while (this.minute);

    if (min >= 59 - this.minute) {
      min--;
      this.minute++;
    } else {
      this.minute = this.minute + min;
    }

    ;
    console.log("".concat(this.hour, " \u0433\u043E\u0434\u0438\u043D ").concat(this.minute, " \u0445\u0432\u0438\u043B\u0438\u043D ").concat(this.second, " \u0441\u0435\u043A\u0443\u043D\u0434"));
  },
  hourIn: function hourIn(newHour) {
    if (newHour >= 23 - this.hour) {
      this.hour = (24 - this.hour - newHour) * -1;
    } else {
      this.hour = this.hour + newHour;
    }

    ;
    console.log("".concat(this.hour, " \u0433\u043E\u0434\u0438\u043D ").concat(this.minute, " \u0445\u0432\u0438\u043B\u0438\u043D ").concat(this.second, " \u0441\u0435\u043A\u0443\u043D\u0434"));
  }
}; // Для виведення часу на екран.

timeAll.timeEnter(); // Зміни часу на передану кількість секунд.

timeAll.secondIn(50); // Зміни часу на передану кількість хвилин.

timeAll.minuteIn(55); // Зміни часу на передану кількість годин.

timeAll.hourIn(25); // Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», 
//а не «20:59:75». Також потрібно передбачити можливість того що користувач може
//передати 150 секунд, або 75 хвилин.