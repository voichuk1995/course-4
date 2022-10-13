/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_gallery.js":
/*!****************************!*\
  !*** ./src/js/_gallery.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function gallery() {
  var lightbox = GLightbox({
    selector: ".glightbox",
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'fade',
    cssEfects: {
      fade: {
        in: 'fadeIn',
        out: 'fadeOut'
      },
      zoom: {
        in: 'zoomIn',
        out: 'zoomOut'
      }
    }
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ }),

/***/ "./src/js/_googleMaps.js":
/*!*******************************!*\
  !*** ./src/js/_googleMaps.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.659169691196986,
      lng: -73.87447042595684
    },
    zoom: 13
  });
  var myPoint = {
    lat: 40.67479451520267,
    lng: -73.89884634163067
  };
  new google.maps.Marker({
    position: myPoint,
    map: map,
    icon: "../images/maps_pin.svg"
  });
}
;
window.initMap = initMap;
/* harmony default export */ __webpack_exports__["default"] = (initMap);

/***/ }),

/***/ "./src/js/_headerSwiper.js":
/*!*********************************!*\
  !*** ./src/js/_headerSwiper.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function headerSwiper() {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination"
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (headerSwiper);

/***/ }),

/***/ "./src/js/_newsSlicker.js":
/*!********************************!*\
  !*** ./src/js/_newsSlicker.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function newsSlicker() {
  $(document).ready(function () {
    $('.mySlick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      dotsClass: 'slick-dots'
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (newsSlicker);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headerSwiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_headerSwiper */ "./src/js/_headerSwiper.js");
/* harmony import */ var _newsSlicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_newsSlicker */ "./src/js/_newsSlicker.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_gallery */ "./src/js/_gallery.js");
/* harmony import */ var _googleMaps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_googleMaps */ "./src/js/_googleMaps.js");




(0,_headerSwiper__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_newsSlicker__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_gallery__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/_gallery.js");
/******/ 	__webpack_require__("./src/js/_googleMaps.js");
/******/ 	__webpack_require__("./src/js/_headerSwiper.js");
/******/ 	__webpack_require__("./src/js/_newsSlicker.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map