//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
'use strict';
const nan1 = 0.1;
const nan2 = 0.2;
console.log((nan1 * 10 + nan2 * 10) / 10)


//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const nan3 = '1';
const nan4 = 2;
console.log(+nan3 + nan4);




//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const memorycard = prompt("what is the size of the memory card?", "");
const nan5 = 820;
console.log((memorycard / nan5).toFixed(2));
