'use strict'

// МІНІМУМ

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
//обсяг паливного баку, середня витрата палива на 100 км., водії), 
//і наступні методи для роботи з цим об'єктом:

const auto = {
    made: "Ukraine",
    model: "t-84",
    yearMade: 2009,
    speed: 70,
    fuel: 700,
    fuelKm: 200,
    drivers: 3,
    showInfo: function(){
        console.log(`Країна виробник ${this.made}, модель ${this.model}, 
        рік випуску ${this.yearMade}, середня швидкість ${this.speed}, 
        об'єм баку ${this.fuel}, розхід топлива ${this.fuelKm}, водії ${this.drivers}.`);
    },
    nameDriver(name){
        auto.nameDriver = name;
        console.log(auto.nameDriver);
    },
    auditNameDriver(){
        if(auto.nameDriver){
            console.log(auto.nameDriver);
        };
    },
    time(km){
        let hours = +(km / auto.speed).toFixed(1);
        let pause = +(hours / 4).toFixed(0);
        hours = hours + pause;
        let fuelIn = (hours * auto.fuelKm);

        console.log(`Потрібна кількість годин для подолання заданої відстані - ${hours},
        потрібна кількіть палива - ${fuelIn}`);
    },
};
console.log(auto);

// Метод, який виводить на екран інформацію про автомобіль.
auto.showInfo();

// Додавання ім’я водія у список
auto.nameDriver("Serhii");

// Перевірка водія на наявність його ім’я у списку
auto.auditNameDriver();

// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
auto.time(1000);

// НОРМА

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
const timeAll = {
    hour: 1,
    minute: 10,
    second: 30,
    timeEnter: function(){
        console.log(`${this.hour} годин ${this.minute} хвилин ${this.second} секунд`);
    },
    secondIn: function(sec){
        do{
            if(sec >= 59 - this.second){
                sec--;
                this.second++;
            } else {
                this.second = this.second + sec;
            };

            if(this.second === 60){
                this.minute++;
                this.second = 0;
                
            }
        } while(this.second)
        
        if(sec >= 59 - this.second){
            sec--;
            this.second++;
        } else {
            this.second = this.second + sec;
        };

        console.log(`${this.hour} годин ${this.minute} хвилин ${this.second} секунд`);
        
    },
    minuteIn: function(min){
        do{
            if(min >= 59 - this.minute){
                min--;
                this.minute++;
            } else {
                this.minute = this.minute + min;
            };

            if(this.minute === 60){
                this.hour++;
                this.minute = 0;
                
            }
        } while(this.minute)
        
        if(min >= 59 - this.minute){
            min--;
            this.minute++;
        } else {
            this.minute = this.minute + min;
        };

        console.log(`${this.hour} годин ${this.minute} хвилин ${this.second} секунд`);
        
    },
    hourIn: function(newHour){
        if(newHour >= 23 - this.hour){
            this.hour = ((24 - this.hour) - newHour) * (-1);

        } else {
            this.hour = this.hour + newHour;
        };
        console.log(`${this.hour} годин ${this.minute} хвилин ${this.second} секунд`);
    },
}
// Для виведення часу на екран.
timeAll.timeEnter();

// Зміни часу на передану кількість секунд.
timeAll.secondIn(50);

// Зміни часу на передану кількість хвилин.
timeAll.minuteIn(55);

// Зміни часу на передану кількість годин.
timeAll.hourIn(25);

// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», 
//а не «20:59:75». Також потрібно передбачити можливість того що користувач може
//передати 150 секунд, або 75 хвилин.
