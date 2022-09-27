"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var database = [{
  id: 1,
  //ok
  name: "Ноутбук Asus ROG Zephyrus Duo 15 GX550LXS-HC068R",
  price: 134999,
  specialPrice: 134999,
  labels: {
    new: "Новинка"
  },
  characteristics: {
    display: "Екран 15.6\" IPS (3840x2160) Ultra HD 4K, матовий",
    processor: "Intel Core i9-10980HK (2.4 — 5.3 ГГц)",
    memory: "RAM 32 ГБ",
    storage: "SSD 2 ТБ (2 х 1 ТБ)",
    video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
    os: "Windows 10 Pro"
  },
  instock: false,
  img: "1.jpg",
  sku: "SDW123",
  rating: 5,
  reviews: 145
}, {
  id: 2,
  name: "Ноутбук Asus ROG Zephyrus S17 GX701LXS-HG027T",
  price: 96999,
  specialPrice: 90999,
  labels: {
    freeShipping: "Бесплатная доставка",
    new: "Новинка"
  },
  characteristics: {
    display: "Екран 17.3\" IPS (1920x1080) Full HD 300 Гц, матовий",
    processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
    memory: "RAM 32 ГБ",
    storage: "SSD 1 ТБ",
    video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
    os: "Windows 10 Home"
  },
  instock: true,
  img: "2.jpg",
  sku: "QWE321",
  rating: 4,
  reviews: 10
}, {
  id: 3,
  name: "Ноутбук Asus ROG Zephyrus S15 GX502LXS-HF098T",
  price: 89999,
  specialPrice: 89999,
  labels: {
    bestPrice: "Спер цена"
  },
  characteristics: {
    display: "Екран 17.3\" IPS (1920x1080) Full HD 300 Гц, матовий",
    processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
    memory: "RAM 32 ГБ",
    storage: "SSD 1 ТБ (2 x 512 ГБ)",
    video: "nVidia GeForce RTX 2080 Super Max-Q, 8 ГБ",
    os: "Windows 10 Home"
  },
  instock: false,
  img: "3.jpg",
  sku: "CXZ221",
  rating: 3,
  reviews: 15
}, {
  id: 4,
  name: "Ноутбук Asus ExpertBook B9400CEA-KC0178R",
  price: 86599,
  specialPrice: 76599,
  labels: {},
  characteristics: {
    display: "Екран 14.0\" IPS (1920x1080) Full HD, матовий",
    processor: "Intel Core i7-1165G7 (2.8 — 4.7 ГГц)",
    memory: "RAM 32 ГБ",
    storage: "SSD 4 ТБ (2 х 2 ТБ)",
    video: " Intel Iris Xe Graphics",
    os: "Windows 10 Pro 64 bit"
  },
  instock: true,
  img: "4.jpg",
  sku: "FGH721",
  rating: 5,
  reviews: 12
}, {
  id: 5,
  name: "Ноутбук Asus ROG Strix SCAR 15 G533QS-HF078T",
  price: 86599,
  specialPrice: 86599,
  labels: {},
  characteristics: {
    display: "Экран 15.6\" IPS (1920x1080) Full HD 300 Гц, матовый",
    processor: "AMD Ryzen 7 5800H (3.2 - 4.4 ГГц)",
    memory: "RAM 16 ГБ",
    storage: "SSD 512 ГБ",
    video: "nVidia GeForce RTX 3080, 16 ГБ",
    os: "Windows 10 Home 64bit"
  },
  instock: true,
  img: "5.jpg",
  sku: "FGH721",
  rating: 2,
  reviews: 10
}, {
  id: 6,
  name: "Ноутбук Asus ROG Zephyrus S17 GX701LWS-HG121T",
  price: 79999,
  specialPrice: 49999,
  labels: {
    new: "Новинка"
  },
  characteristics: {
    display: "Екран 17.3\" IPS (1920x1080) Full HD 300 Гц, матовий",
    processor: "Intel Core i7-10750H (2.6 — 5.0 ГГц)",
    memory: "RAM 16 ГБ",
    storage: "SSD 512 ГБ",
    video: "nVidia GeForce RTX 2070 Super, 8 ГБ",
    os: "Windows 10 Home"
  },
  instock: true,
  img: "6.jpg",
  sku: "RFV821",
  rating: 5,
  reviews: 145
}];

function generateProductCardHTML(item) {
  var productCardHTML = '<div class="productCard">';
  productCardHTML = productCardHTML + "<div class=\"productCard__labelContainer\">";

  if (!item.labels.new) {
    productCardHTML = productCardHTML + "<div class=\"label\"><img src=\"./images/new.png\" alt=\"new\" class=\"label__picture\"></div>";
  }

  if (!item.labels.bestPrice) {
    productCardHTML = productCardHTML + "<div class=\"label\"><img src=\"./images/best-price.png\" alt=\"best price\" class=\"label__picture\"></div>";
  }

  if (!item.labels.freeShipping) {
    productCardHTML = productCardHTML + "<div class=\"label\"><img src=\"./images/free_shipping.png\" alt=\"new\" class=\"label__picture\"></div>";
  }

  productCardHTML = productCardHTML + "</div>";
  productCardHTML = productCardHTML + "<div class=\"productCard__picture\">\n    <img src=\"./images/".concat(item.img, " \" class=\"picture\" alt=\"product image\">\n    </div>\n    <h2 class=\"name productCard__name\">").concat(item.name, "</h2>\n    <ul class=\"productCard__tech tech\">\n");

  for (var i in item.characteristics) {
    productCardHTML = productCardHTML + "<li class=\"tech__item\">".concat(item.characteristics[i], "</li>\n");
  }

  productCardHTML = productCardHTML + "</ul>\n    <div class=\"productCard__row\">\n        <div class=\"productCard__rating\">\n            <div class=\"rating\">\n                <div class=\"rating__gray\"></div>\n                <div class=\"rating__yellow rating__yellow_".concat(item.rating, "\"></div>\n            </div>\n        </div>\n        <div class=\"productCard__reviews\"><a href=\"#\" class=\"review\">").concat(item.reviews, " reviews</a></div>\n    </div>\n    <div class=\"productCard__row\">\n        <div class=\"productCard__price\">");

  if (item.price === item.specialPrice) {
    productCardHTML = productCardHTML + "<div class=\"price\">86599</div>";
  } else {
    productCardHTML = productCardHTML + "\n        <div class=\"price_old\">".concat(item.price, "</div>\n        <div class=\"price_special\">").concat(item.specialPrice, "</div>");
  }

  productCardHTML = productCardHTML + "</div >\n            <div class=\"productCard__quantity\">\n                <div class=\"qty\">\n                    <label class=\"qty__label\" for=\"\">Qty</label>\n                    <div class=\"qty__wrapper\">\n                        <button class=\"qty__btn\" type=\"button\">-</button>\n                        <input class=\"qty__input-qty\" value=\"1\" type=\"number\">\n                            <button class=\"qty__btn\" type=\"button\">+</button>\n                    </div>\n                </div>\n            </div>\n    </div > \n    <div class=\"productCard__buttons\">";

  if (item.instock) {
    productCardHTML = productCardHTML + " <a href=\"#\" class=\"button button_add\">Add to cart</a>";
  } else {
    productCardHTML = productCardHTML + "  <a href=\"#\" class=\"button button_inform\">Out of stock</a>";
  }

  productCardHTML = productCardHTML + '\n</div>\n</div>';
  return productCardHTML;
}

function sortByStock(array) {
  array.sort(function compareFn(a, b) {
    if (a.instock > b.instock) {
      return -1;
    } else {
      return 1;
    }
  });
  return array;
}

function displayProducts(array) {
  var _iterator = _createForOfIteratorHelper(array),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var newDiv = document.createElement("div");
      newDiv.classList.add("col-3", "col-md-4", "col-sm-6", "col-xs-12");
      var newContent = generateProductCardHTML(item);
      newDiv.innerHTML = newContent;
      document.getElementById("productContainer").appendChild(newDiv);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

sortByStock(database);
displayProducts(database);