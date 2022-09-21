"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var users = [{
  user: "Kolya",
  id: 0
}, {
  user: "Vasya",
  id: 1
}, {
  user: "Kolya",
  id: 3
}, {
  user: "Viktor",
  id: 2
}, {
  user: "Vasya",
  id: 4
}];
var a = users.find(function (item, index, arr) {
  return item.user.toLowerCase() === "vasya";
});
console.log(a);
var b = users.filter(function (item, index, arr) {
  return item.user.toLowerCase() === "vasya";
});
console.log(b);

function getUserById(arr, id) {
  return arr.find(function (user) {
    return user.id === id;
  });
}

console.log(getUserById(users, 3));
var c = b.map(function (item, index, arr) {
  return _objectSpread({}, item);
});
console.log(c);

function getMapToArr(arr, key) {
  return arr.map(function (item) {
    return item[key];
  });
}

console.log(getMapToArr(users, 'user')); // const cart = [
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
  var cart = [];
  var productId = 1;
  return {
    addCart: function addCart(product) {
      if (!product) return;
      var indexProductSku = this.findIndexBySku(product.sku);

      if (indexProductSku === -1) {
        product.id = productId++;
        cart.push(product);
      } else {
        cart[indexProductSku].qty = cart[indexProductSku].qty + product.qty;
      }
    },
    findIndexBySku: function findIndexBySku(sku) {
      return cart.map(function (product) {
        return product.sku;
      }).indexOf(sku);
    },
    findProductBySku: function findProductBySku(sku) {},
    getCart: function getCart() {
      return cart.map(function (product) {
        return Object.assign({}, product);
      });
    },
    setQty: function setQty(sku, qty) {
      if (!sku && !qty) return;
      var indexProductSku = this.findIndexBySku(sku);

      if (indexProductSku !== -1) {
        cart[indexProductSku].qty = cart[indexProductSku].qty + qty;

        if (cart[indexProductSku].qty < 1) {
          this.removeProduct(sku);
        }
      }
    },
    removeProduct: function removeProduct(sku) {
      var indexProductSku = this.findIndexBySku(sku);

      if (indexProductSku !== -1) {
        return cart.splice(indexProductSku, 1);
      }
    },
    getTotalQty: function getTotalQty() {},
    getTotal: function getTotal() {}
  };
}

var myCart = cart();
myCart.addCart({
  sku: 1254,
  name: 'Product 1',
  qty: 5,
  price: 10
});
myCart.addCart({
  sku: 1254,
  name: 'Product 1',
  qty: 5,
  price: 10
});
myCart.addCart({
  sku: 1852,
  name: 'Product 2',
  qty: 1,
  price: 100
});
myCart.setQty(1852, 50);
myCart.setQty(1852, -55);
console.log(myCart.getCart());