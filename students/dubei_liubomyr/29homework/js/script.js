//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
'use strict';
const nan1 = 0.1;
const nan2 = 0.2;
const sum = ((nan1 * 10 + nan2 * 10) / 10)
console.log(sum);


//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const nan3 = '1';
const nan4 = 2;
const sum2 = (+nan3 + nan4);
console.log(sum2);




//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const memorycard = prompt("what is the size of the memory card?", "");
const nan5 = 820;
const sum3 = ((memorycard / nan5).toFixed(2));
console.log(sum3);
