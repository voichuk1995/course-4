'use strict'

// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let age = +prompt("Введіть свій вік?", "");
if( age <= 11 ) {
    console.log("Дитина");
    
    } else if(age >= 12 && age <= 17){
    console.log("Підліток");
    
    } else if(age >= 18 && age <= 59){
    console.log("Дорослий");
    
    } else if(age >= 60 && age <= 120){
    console.log("Пенсіонер");
    
    } else  {
    console.log("Помилка");
    };

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let num = +prompt("Введіть число від 0 до 9");
switch(num){
    case 0:
        console.log("~");
        break;
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break; 
    default:
        console.log("Помилка");
        break;      
};

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let numFirst = +prompt("Введіть початкове число");
let numLast = +prompt("Введіть кінцеве число");
let sumAll = 0;
while ( numFirst <= numLast){
    sumAll += numFirst;
    numFirst++;
};
console.log(sumAll);


// Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let num1 = 12321;//+prompt("Введіть п’ятирозрядне число");
let a;
let b;
let c;
let d;
let e;
let num2;

if ( num1 > 9999 && num1 <100000){
   a = num1 % 10;
   console.log(a);

   b = (((num1 - a) / 10) % 10) * 10;
   console.log(b);

   c = (((num1 - (a + b)) / 100) % 10) * 100;
   console.log(c);

   d = (((num1 - (a + b + c)) / 1000) % 10) * 1000;
   console.log(d);

   e = (((num1 - (a + b + c + d)) / 10000) % 10) * 10000;
   console.log(e);
   
   num2 = +(a.toString() + (b / 10) + (c / 100) + (d / 1000) + (e / 10000));
   console.log(num2);

   if(num1 === num2){
    console.log("Число паліндром");
   }    else {
    console.log("Число не паліндром");
   }
};

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let sumBy = 270;//+prompt("Введіть число");
let sumFin;

if(sumBy >= 200 && sumBy <=300){
    sumFin = sumBy - ((sumBy / 100 ) * 3).toFixed(0);
    console.log(sumFin);
} else if(sumBy >= 300 && sumBy <500){
    sumFin = sumBy - ((sumBy / 100 ) * 5).toFixed(0);
    console.log(sumFin);
}   else if (sumBy >= 500){
    sumFin = sumBy - ((sumBy / 100 ) * 7).toFixed(0);
    console.log(sumFin);
};


// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, 
// від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


let even = 0;
let odd = 0;
let minus = 0;
let plus = 0;
let zero = 0;

for(let i = 0; i < 10; i++){
    let numAsk = +prompt("Введіть число");

    if(numAsk < 0){
        minus++;
    } else if(numAsk === 0){
        zero++;
    } else if(numAsk > 0){
        plus++;
    }

    if((numAsk % 2) === 0){
        even++;
    } else if ((numAsk % 2) === 1 || -1){
        odd++;
    }; 
};

console.log("Від'ємних чисел - " + minus);
console.log("Додатніх чисел - " + plus);
console.log("Нулевих чисел - " + zero);
console.log("Парних чисел - " + even);
console.log("Не парних чисел - " + odd);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір,
// поки користувач натискає OK.

const monday = "Monday";
const tuesday = "Tuesday";
const wednesday = "Wednesday";
const thursday = "Thursday";
const friday = "Friday";
const saturday = "Saturday";
const sunday = "Sunday";

let day = monday;

while(day){
    if(day === monday){
        day = confirm("Monday. Хочеш побачити наступний день?");
        if (day === true){
            day = tuesday;
        }
    } else if(day === tuesday){
        day = confirm("Tuesday. Хочеш побачити наступний день?");
        if (day === true){
            day = wednesday;
        };
    } else if(day === wednesday){
        day = confirm("Wednesday. Хочеш побачити наступний день?");
        if (day === true){
            day = thursday;
        };        
    } else if(day === thursday){
        day = confirm("Thursday. Хочеш побачити наступний день?");
        if (day === true){
            day = friday;
        };        
    } else if(day === friday){
        day = confirm("Friday. Хочеш побачити наступний день?");
        if (day === true){
            day = saturday;
        };
    } else if(day === saturday){
        day = confirm("Saturday. Хочеш побачити наступний день?");
        if (day === true){
            day = sunday;
        };
    } else if(day === sunday){
        day = confirm("Sunday. Хочеш побачити наступний день?");
        if (day === true){
            day = monday;
        };
    };
};


// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
//кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, 
//<N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, 
//поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
//І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


let first = 0;
let last = 100;
let yourNum = Math.round((last - first) / 2);

do {
    let quest = prompt("Ваше число більше (>), меньше (<) чи дорівнює (=) " + yourNum + "?");
        if (quest == ">") {
            first = yourNum;
            yourNum = yourNum + Math.round((last - first) / 2);
        } else if (quest == "<") {
            last = yourNum;
            yourNum = yourNum - Math.round((last - first) / 2);
        } else if (quest === "=") {
            break;
        };
} while (true);

const yourNumber = "Ваше число: " + yourNum;
console.log(yourNumber);

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

let startNum = 2;
let finNum = 1;

do{
    for(let a = 0; a < 10; a++){
        let result = startNum * finNum;
        console.log(`${startNum} * ${finNum} = ${result}`);
        finNum++;
    };
    console.log("");
    finNum = 1;
    startNum++
} while (startNum <= 9);
