const users = [
    {
        user: "Kolya",
        id: 0
    },
    {
        user: "Vasya",
        id: 1
    },
    {
        user: "Kolya",
        id: 3
    },
    {
        user: "Viktor",
        id: 2
    },
    {
        user: "Vasya",
        id: 4
    },
];

const a = users.find(function (item, index, arr) {
    return item.user.toLowerCase() === "vasya";
});

console.log(a);

const b = users.filter(function (item, index, arr) {
    return item.user.toLowerCase() === "vasya";
});

console.log(b);

function getUserById(arr, id) {
    return arr.find(function (user) {
        return user.id === id;
    });
}

console.log(getUserById(users, 3));

const c = b.map(function (item, index, arr) {
    return {
        ...item
    };
});

console.log(c);

function getMapToArr(arr, key) {
    return arr.map(item => item[key]);
}

console.log(getMapToArr(users, 'user'));

// const cart = [
//     {
//         id: 0,
//         name: 'Product 1',
//         qty: 2,
//         price: 150,
//     },
//     {
//         id: 1,
//         name: 'Product 2',
//         qty: 1,
//         price: 50,
//     },
//     {
//         id: 2,
//         name: 'Product 3',
//         qty: 5,
//         price: 10,
//     }
// ];

// const total = cart.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.qty * currentValue.price;
// }, 0);

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(function (acc, curVal) {
//     console.log(acc, curVal);
//     return acc + curVal;
// }));

// console.log(total);

function cart() {
    const cart = [];
    let productId = 1;

    return {
        addCart(product) {
            if (!product) return;

            const indexProductSku = this.findIndexBySku(product.sku);

            if (indexProductSku === -1) {
                product.id = productId++;
                cart.push(product);
            } else {
                cart[indexProductSku].qty = cart[indexProductSku].qty + product.qty;
            }
        },
        findIndexBySku(sku) {
            return cart.map(product => product.sku).indexOf(sku);
        },
        findProductBySku(sku) {

        },
        getCart() {
            return cart.map(function (product) {
                return Object.assign({}, product);
            });
        },
        setQty(sku, qty) {
            if (!sku && !qty) return;

            const indexProductSku = this.findIndexBySku(sku);

            if (indexProductSku !== -1) {
                cart[indexProductSku].qty = cart[indexProductSku].qty + qty;

                if (cart[indexProductSku].qty < 1) {
                    this.removeProduct(sku);
                }
            }
        },
        removeProduct(sku) {
            const indexProductSku = this.findIndexBySku(sku);

            if (indexProductSku !== -1) {
                return cart.splice(indexProductSku, 1);
            }
        },
        getTotalQty() {

        },
        getTotal() {

        },
    };
}


const myCart = cart();


myCart.addCart({
    sku: 1254,
    name: 'Product 1',
    qty: 5,
    price: 10,
});

myCart.addCart({
    sku: 1254,
    name: 'Product 1',
    qty: 5,
    price: 10,
})

myCart.addCart({
    sku: 1852,
    name: 'Product 2',
    qty: 1,
    price: 100,
});

myCart.setQty(1852, 50);

myCart.setQty(1852, -55);

console.log(myCart.getCart());
