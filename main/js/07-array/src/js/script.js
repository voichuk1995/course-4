const arr = [10, 1, 2, 3, 4, 5, 6, 7];
const arr1 = Array(100);

// arr1[5] = 0;
// arr[1] = 10;

//console.log(arr[arr.length - 1], arr1);

//arr.length = 0;


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// console.log(arr.push(123, 10));
// console.log(arr.pop());

arr.shift();
arr.unshift(123);


// console.log(arr, arr1);

const d = [1, 23, 34, 42, 34, 34, 6, 63, 47, 34, 87, 56, 7, 89, 56, 7, 34, 99, 34, 67, 89, 45, 6, 74, 34];
//odd even

const a = d.slice() //d.concat() //[...d];
d.push(17457)

// console.log(d.includes(340));
// console.log(d.indexOf(25411));

function getIndexOfArray(array, findData) {
    const findNumber = findData;
    let index = array.indexOf(findNumber);
    const findIndex = [];

    while (index !== -1) {
        findIndex.push(index);

        index = array.indexOf(findNumber, index + 1);
    }

    return findIndex;
}

const f = getIndexOfArray(d, 34);

console.log(f);

// f.forEach(function (item, index, arr) {
//     d.splice(item, 1, 0);
// });

[1, 2, 4].forEach(function (nuber) {
    console.log(nuber);
});

function deleteItemOfArray(array, indexArray, replaseNumber, isMutatoin = false) {
    if (isMutatoin) array = [...array];

    indexArray.forEach(function (item) {
        array.splice(item, 1, replaseNumber);
    });

    if (isMutatoin) return array;
}

console.log(deleteItemOfArray(d, getIndexOfArray(d, 34), 55));

console.log(d);

// console.log(d.splice(5, 0, 150, 150, 150), d)
//console.log(d);
