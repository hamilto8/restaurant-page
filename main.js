/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst aboutPage = () => {\r\n    return `\r\n        <div class=\"about-page\">\r\n        <h5 class=\"tagline\">Serving Mysterious Dinners Since 1963</h5>\r\n        <div class=\"history\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui tortor, lobortis ut mi et, consectetur dignissim ante. Suspendisse potenti. Suspendisse potenti. Praesent eu dui mattis tellus tincidunt aliquet. Vivamus lacinia, magna pharetra molestie porta, ex lectus suscipit est, ac eleifend lacus mauris quis mauris. Mauris laoreet at turpis nec tristique. Fusce eu laoreet diam. Vivamus quis elit sit amet est aliquam gravida eget et lectus. Cras vel tempor massa. In et quam tempor sapien porta suscipit vel eu ipsum.\r\n        </div>\r\n        <div class=\"background-div\">\r\n                <img class=\"hero-image\" src=\"/images/pizza.jpg\" />\r\n            </div>\r\n        </div>\r\n    `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst contactUs = () => {\r\n return `\r\n    <div class=\"contact-us\">\r\n        <h4>Contact Us:</h4>\r\n        <p>Shoot us an email!</p>\r\n    </div>\r\n `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nconst contentDiv = document.querySelector('#content');\r\nconst menuBtn =document.querySelector('#menu-btn');\r\nconst aboutBtn = document.querySelector('#about-btn');\r\nconst contactBtn = document.querySelector('#contact-btn');\r\n\r\n\r\n\r\n\r\n\r\nmenuBtn.addEventListener('click', switchView);\r\naboutBtn.addEventListener('click', showAbout);\r\ncontactBtn.addEventListener('click', showContact);\r\n\r\n\r\nfunction switchView(){\r\n    let el = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    contentDiv.innerHTML = el;\r\n}\r\n\r\nfunction showAbout(){\r\n    let el = (0,_about__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    contentDiv.innerHTML = el;\r\n}\r\n\r\nfunction showContact(){\r\n    let el = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n    contentDiv.innerHTML = el;\r\n}\r\n\r\nwindow.onload = showAbout();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst displayMenu = () => {\r\n    return `\r\n    <div class=\"menu\">\r\n        <div class=\"foods\">\r\n            <h4>Foods:</h4>\r\n            <div class=\"menu-item\">\r\n                <img src=\"/images/salad.png\"/>\r\n                <p>Salad: $1.50</p>\r\n            </div>\r\n            <div class=\"menu-item\">\r\n                <img src=\"/images/soup.png\"/>\r\n                <p>Soup: $7.59</p>\r\n            </div>\r\n            <div class=\"menu-item\">\r\n                <img src=\"/images/pizza-sm.png\"/>\r\n                <p>Pizza: $8.99</p>\r\n            </div>\r\n            <div class=\"menu-item\">\r\n                <img src=\"/images/pasta.png\"/>\r\n                <p>Pasta: $9.99</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"background-div\">\r\n        <img class=\"hero-image\" src=\"/images/restaurant.jpg\" />\r\n    </div>\r\n    </div>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;