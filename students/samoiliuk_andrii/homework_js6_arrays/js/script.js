// Мінімум
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

const shoppingList = [
    {
        name: "Вода",
        price: 15,
        quantity: 2,
        units: "шт",
        isBought: false,
    }, {
        name: "Пиво",
        price: 30,
        quantity: 6,
        units: "шт",
        isBought: false,
    }, {
        name: "Яйця",
        price: 36,
        quantity: 1,
        units: "шт",
        isBought: true,
    }, {
        name: "Сир",
        price: 350,
        quantity: 1,
        units: "кг",
        isBought: false,
    }, {
        name: "Помідори",
        price: 50,
        quantity: 1,
        units: "кг",
        isBought: false,
    }, {
        name: "Печиво",
        price: 20,
        quantity: 1,
        units: "кг",
        isBought: true,
    },
];

function calculateSum(array) {
    for (let element of array) {
        element.sum = element.price * element.quantity;
    }
    return array;
}

function sortByBought(array) {
    array.sort(function (a, b) {
        if (a.isBought > b.isBought) { return 1 };
        if (a.isBought < b.isBought) { return -1 };
    })
}

function longestNameLength(array) {
    let nameMaxLength = 0;
    array.forEach(element => {
        if (element.name.length > nameMaxLength) {
            nameMaxLength = element.name.length;
        }
    });
    return nameMaxLength;
}

function getIndex(array, productName) {
    let arrayIndex = array.findIndex(function (element) {
        if (element.name.toLowerCase() === productName.toLowerCase()) {
            return true;
        }

    })
    return arrayIndex;
}

function makeString(element, nameMaxLength) {
    const spaces = nameMaxLength - element.name.length;
    let spaceIncert = "";
    for (let i = 0; i < spaces; i++) {
        spaceIncert = spaceIncert + " ";
    }
    let string = element.name + spaceIncert + " " + element.quantity + element.units + "    " + element.price + "грн/" + element.units + " " + element.sum + " грн";
    if (element.isBought) { string = string + '  V\n' } else { string = string + '\n' };
    return string;
}

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
function displayShoppingList(array) {
    calculateSum(array);
    sortByBought(array);
    let shoppingList = "Cписок покупок:\n"
    array.forEach(function (element, index, array) {
        shoppingList = shoppingList + makeString(element, longestNameLength(array));
    }
    );
    console.log(shoppingList);
}

displayShoppingList(shoppingList);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function setAsBought(array, productName) {
    const index = getIndex(array, productName);
    if (index !== -1) {
        array[index].isBought = true;
    }
    return array;
}

setAsBought(shoppingList, prompt("Який продукт куплено?", "Сир"));
displayShoppingList(shoppingList);


// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function removeItem(array, productName) {
    const indexToDelete = getIndex(array, productName);
    let newArray = [];
    if (indexToDelete !== -1) {
        newArray = array.filter(function (element, index, array) {
            if (index !== indexToDelete) { return true; };
        });
    }
    return newArray;
}

const shoppingListRemoved = removeItem(shoppingList, prompt("Який елемент видалити", "Сир"));

displayShoppingList(shoppingListRemoved);


// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, 
// якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addItem(array, name) {
    if ((array !== undefined) && (name !== undefined)) {
        const addingIndex = getIndex(array, name);
        if (addingIndex !== -1) {
            array[addingIndex].quantity = array[addingIndex].quantity + +prompt("Скільки додати?", '1');
            array[addingIndex].sum = array[addingIndex].quantity * array[addingIndex].price;
        } else {
            const newPrice = +prompt("Яка ціна", '10');
            const newQuantity = +prompt("Скільки додати?", '1');
            const newItem = {
                name: name,
                price: newPrice,
                quantity: newQuantity,
                sum: newPrice * newQuantity,
                units: prompt("Які одиниці?", 'шт'),
                isBought: false,
            }
            array.push(newItem);
            return array;
        }
    }
}

addItem(shoppingList, prompt("Який продукт додати", "Майонез"));
displayShoppingList(shoppingList);


// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function totalPrice(array) {
    return array.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.price * currentValue.quantity;
    }, 0)
}

const total = "Загальна вартість усіх покупок: " + totalPrice(shoppingList) + " грн";
console.log(total);

// Підрахунок суми всіх (не) придбаних продуктів.
function boughtPrice(array) {
    const newArray = array.filter(function (element) {
        return element.isBought
    });
    return totalPrice(newArray);
}

const totalBought = "Загальна вартість усіх придбаних покупок: " + boughtPrice(shoppingList) + " грн";
console.log(totalBought);

function notBoughtPrice(array) {
    const newArray = array.filter(function (element) {
        return !element.isBought
    });
    return totalPrice(newArray);
}

const totalNotBought = "Загальна вартість усіх не придбаних покупок: " + notBoughtPrice(shoppingList) + " грн";
console.log(totalNotBought);

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function sortShopping(array, sort = ">") {
    if (sort === ">" || sort === "<") {
        calculateSum(array);
        if (sort === ">") {
            array.sort(function (a, b) {
                return a.sum - b.sum;
            });
        }
        if (sort === "<") {
            array.sort(function (a, b) {
                return b.sum - a.sum;
            });
        }
        let sortedList = "Відсортований список покупок:\n"
        array.forEach(function (element, index, array) {
            sortedList = sortedList + makeString(element, longestNameLength(array));
        }
        );
        console.log(sortedList);
    }
}

sortShopping(shoppingList, prompt("Введіть '>' щоб відсортувати список за зростанням або '<' щоб відсортувати список за спаданням", ">"));

