"use strict";

// const myAge = 'y';
// if (myAge >= 18) {
//     console.log(111);
// } else {
//     console.log(222);
// }
// if (myAge >= 18 && myAge < 25) {
//     console.log('18-24');
// } else if (myAge >= 25) {
//     console.log('25+');
// } else {
//     console.log('<18');
// }
// switch (myAge) {
//     case 'y':
//         console.log(5);
//     case 'a':
//     case 'e':
//         console.log('6-7');
//         break;
//     default:
//         console.log('dasfasdf');
// }
// if (myAge === 5) {
//     console.log(5);
// } else if (myAge === 6) {
//     console.log(6);
// } else {
//     console.log('dasFasdf'.toLowerCase());
// }
// const isTrue = prompt('dfghdrtf', '') ? '+' : '-';
// console.log(isTrue)
var number = 50;
var i = 0; // console.log(i++);
// console.log(++i);
// while (number > i++) {
//     console.log(i);
// }

"#-#-#"; // let myAge;
// do {
//     myAge = +prompt('age?', '');
// } while (!myAge || myAge < 0 || myAge > 120);

2 + 2 * 2; // for (let i = 5; i < number; i = i + 5) {
//     console.log(i);
// }

var string = "dfsg;idrhesg;haesgluhes";
console.log(string[0], string[1], string.length); // for (; true ;) {
// }

while (true) {
  i++;
  if (!(i % 2)) continue;
  console.log(i);
  if (i > 5) break;
}

var pole = '';

for (var _i = 0; _i < 10; _i++) {
  console.log(_i);

  for (var y = 0; y < 9; y++) {
    pole = pole + '#';
  }

  pole = pole + '\n';
}

console.log(pole); // #
// ##
// ###
// ####
// #####
// ######
//      #
//     ##
//    ###
//   ####
//  #####
// ######
//      #  #
//     ##  ##
//    ###  ###
//   ####  ####
//  #####  #####
// ######  ######