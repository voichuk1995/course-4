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
        price: 35,
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
    array.map(function (element, index, array) {
        element.sum = element.price * element.quantity;
    })
    return array;
}

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
function displayShoppingList(array) {
    calculateSum(array);
    let shoppingList = "Cписок покупок:\n"
    let totalPrice = 0;
    let nameMaxLength = 0;
    array.map(function (element, index, array) {
        if (element.name.length > nameMaxLength) {
            nameMaxLength = element.name.length;
        }
    });
    array.map(function (element, index, array) {
        let spaces = nameMaxLength - element.name.length;
        let spaceIncert = "";
        for (let i = 0; i < spaces; i++) {
            spaceIncert = spaceIncert + " ";
        }
        if (!element.isBought) {
            shoppingList = shoppingList + element.name + spaceIncert + " " + element.quantity + element.units + "    " + element.price + "грн/" + element.units + " " + element.sum + " грн\n";
            totalPrice = totalPrice + +element.price * element.quantity;
        }
    });
    array.map(function (element, index, array) {
        let spaces = nameMaxLength - element.name.length;
        let spaceIncert = "";
        for (let i = 0; i < spaces; i++) {
            spaceIncert = spaceIncert + " ";
        }
        if (element.isBought) {
            shoppingList = shoppingList + element.name + spaceIncert + " " + element.quantity + element.units + "    " + element.price + "грн/" + element.units + " " + element.sum + " грн    V\n"
            totalPrice = totalPrice + +element.price * element.quantity;
        }
    });
    shoppingList = shoppingList + "----\nВартість покупок: " + totalPrice + " грн\n";
    console.log(shoppingList);
}

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function setAsBought(array, name) {
    array.map(function (element, index, array) {
        if (element.name.toLowerCase() === name.toLowerCase()) {
            element.isBought = true;
        }
    });
    return array;
}

displayShoppingList(shoppingList);
setAsBought(shoppingList, prompt("Який продукт куплено?", "Сир"));
displayShoppingList(shoppingList);


// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function removeItem(array, name) {
    let number = array.findIndex(function (element, index, array) {
        if (element.name.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    });
    if (number !== -1) {
        array.splice(number, 1);
    }
    return array;
}

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.



function addItem(array, name, price, quantity = 1, units = "шт") {
    if ((array !== undefined) && (name !== undefined) && (price !== undefined)) {
        let number = array.findIndex(function (element, index, array) {
            if (element.name.toLowerCase() === name.toLowerCase()) {
                return true;
            }
        });
        if (number === -1) {
            const newItem = {
                name: name,
                price: price,
                quantity: quantity,
                sum: price * quantity,
                units: units,
                isBought: false,
            }
            array.push(newItem);
            return array;
        } else {
            let newArray = array.map(function (element, index, array) {
                if (element.name.toLowerCase() === name.toLowerCase()) {
                    element.quantity = element.quantity + quantity;
                }

            })
            return newArray
        }
    }
}

const newCart = removeItem(shoppingList, prompt("Який продукт вилучити", "Вода"));
displayShoppingList(newCart);
addItem(shoppingList, prompt("Який продукт додати", "Майонез"), +prompt("Скільки коштує", '14'), +prompt("Скільки одиниць", '5'), prompt("Одиниці виміру", 'шт'));
displayShoppingList(shoppingList);


// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function totalPrice(array) {
    let totalPrice = 0;
    array.map(function (element, index, array) {
        totalPrice = totalPrice + +element.price * +element.quantity;
    })
    return totalPrice;
}

const total = "Загальна вартість усіх покупок: " + totalPrice(shoppingList) + " грн";
console.log(total);

// Підрахунок суми всіх (не) придбаних продуктів.
function boughtPrice(array) {
    let boughtPrice = 0;
    array.map(function (element, index, array) {
        if (element.isBought) {
            boughtPrice = boughtPrice + +element.price * +element.quantity;
        }

    })
    return boughtPrice;
}

const totalBought = "Загальна вартість усіх придбаних покупок: " + boughtPrice(shoppingList) + " грн";
console.log(totalBought);

function notBoughtPrice(array) {
    let notBoughtPrice = 0;
    array.map(function (element, index, array) {
        if (!element.isBought) {
            notBoughtPrice = notBoughtPrice + +element.price * +element.quantity;
        }

    })
    return notBoughtPrice;
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
        let List = "Відсортований список покупок:\n"
        let nameMaxLength = 0;
        array.map(function (element, index, array) {
            if (element.name.length > nameMaxLength) {
                nameMaxLength = element.name.length;
            }
        });
        array.map(function (element, index, array) {
            let spaces = nameMaxLength - element.name.length;
            let spaceIncert = "";
            for (let i = 0; i < spaces; i++) {
                spaceIncert = spaceIncert + " ";
            }
            List = List + element.name + spaceIncert + " " + element.quantity + element.units + "    " + element.price + "грн/" + element.units + " " + element.sum + " грн\n";
        });
        console.log(List);
    }
}

sortShopping(shoppingList, prompt("Введіть '>' щоб відсортувати список за зростанням або '<' щоб відсортувати список за спаданням", ">"));

