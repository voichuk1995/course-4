// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const shoppingList = [
    {
        sku: 1,
        name: "Вода",
        price: 15,
        quantity: 2,
        units: "шт",
        isBought: true,
    }, {
        sku: 2,
        name: "Пиво",
        price: 30,
        quantity: 6,
        units: "шт",
        isBought: false,
    }, {
        sku: 3,
        name: "Яйця",
        price: 36,
        quantity: 1,
        units: "шт",
        isBought: true,
    }, {
        sku: 4,
        name: "Сир",
        price: 35,
        quantity: 1,
        units: "кг",
        isBought: false,
    }, {
        sku: 5,
        name: "Помідори",
        price: 50,
        quantity: 1,
        units: "кг",
        isBought: false,
    }, {
        sku: 6,
        name: "Печиво",
        price: 20,
        quantity: 1,
        units: "кг",
        isBought: true,
    },
];

function displayShoppingList(array) {
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
            shoppingList = shoppingList + element.name + spaceIncert + " " + element.quantity + element.units + "    " + element.price + "грн/" + element.units + " " + element.price * +element.quantity + " грн\n";
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
            shoppingList = shoppingList + element.name + spaceIncert + " " + element.quantity + element.units + "    " + element.price + "грн/" + element.units + " " + element.price * +element.quantity + " грн    V\n"
            totalPrice = totalPrice + +element.price * element.quantity;
        }
    });
    shoppingList = shoppingList + "----\nВартість покупок: " + totalPrice + " грн\n";
    console.log(shoppingList);
}

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
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.





// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
