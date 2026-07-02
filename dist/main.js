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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst aboutPage = () => {\r\n    return `\r\n        <div class=\"about-page animate-fade-in\">\r\n            <h1 class=\"page-title\">Mister MacGuffin's</h1>\r\n            <p class=\"tagline\">Serving Mysterious Dinners Since 1963</p>\r\n            \r\n            <div class=\"story-panel glass-panel\">\r\n                <h2>Our Enigmatic Origin</h2>\r\n                <p class=\"story-text\">\r\n                    Established in 1963 under circumstances that remain strictly classified, Mister MacGuffin's Mystery Diner is the world's premier establishment for enigmatic gastronomy. Our recipes are redacted, our ingredients are confidential, and our kitchen operates in absolute secrecy.\r\n                </p>\r\n                <p class=\"story-text\">\r\n                    Every dish is a puzzle, every flavor a clue. We do not ask what you want; we serve you what your destiny dictates. Dine with us, and decode the ultimate culinary mystery.\r\n                </p>\r\n            </div>\r\n            \r\n            <div class=\"background-div\">\r\n                <img class=\"hero-image\" src=\"images/pizza.jpg\" alt=\"A delicious, fresh-baked artisanal pizza emerging from a glowing brick oven\" />\r\n            </div>\r\n            \r\n            <footer class=\"footer\">\r\n                <p>© 1963-${new Date().getFullYear()} Mister MacGuffin's Diner. Crafted for mystery.</p>\r\n            </footer>\r\n        </div>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactUs = () => {\r\n    return `\r\n        <div class=\"contact-page animate-fade-in\">\r\n            <h1 class=\"page-title\">Send a Transmission</h1>\r\n            <p class=\"tagline\">Report mysterious occurrences or request a classified table booking.</p>\r\n            \r\n            <div class=\"form-container glass-panel\">\r\n                <form id=\"mystery-contact-form\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"contact-name\">Identify Yourself (Full Name)</label>\r\n                        <input type=\"text\" id=\"contact-name\" name=\"name\" required autocomplete=\"name\" placeholder=\"Agent Jane Doe\" />\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"contact-email\">Secure Communication Channel (Email)</label>\r\n                        <input type=\"email\" id=\"contact-email\" name=\"email\" required autocomplete=\"email\" placeholder=\"jane.doe@agency.com\" />\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"contact-message\">Encoded Message</label>\r\n                        <textarea id=\"contact-message\" name=\"message\" required minlength=\"10\" placeholder=\"State your coordinates and details of the gastronomic mystery...\" rows=\"4\"></textarea>\r\n                    </div>\r\n                    \r\n                    <button type=\"submit\" class=\"submit-btn\">Send Encrypted Message</button>\r\n                </form>\r\n            </div>\r\n            \r\n            <div class=\"background-div\">\r\n                <img class=\"hero-image\" src=\"images/write.jpg\" alt=\"A classic fountain pen resting on an elegant handwritten letter on a wooden table\" />\r\n            </div>\r\n            \r\n            <footer class=\"footer\">\r\n                <p>© 1963-${new Date().getFullYear()} Mister MacGuffin's Diner. Crafted for mystery.</p>\r\n            </footer>\r\n        </div>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\nconst menuBtn = document.querySelector('#menu-btn');\r\nconst aboutBtn = document.querySelector('#about-btn');\r\nconst contactBtn = document.querySelector('#contact-btn');\r\n\r\nlet currentPage = null;\r\n\r\nfunction routeFocus() {\r\n    const heading = contentDiv.querySelector('h1, h2, h3, h4, h5');\r\n    if (heading) {\r\n        heading.setAttribute('tabindex', '-1');\r\n        heading.focus();\r\n    } else {\r\n        contentDiv.setAttribute('tabindex', '-1');\r\n        contentDiv.focus();\r\n    }\r\n}\r\n\r\nfunction updateActiveButton(buttonId) {\r\n    document.querySelectorAll('.btn').forEach(btn => {\r\n        if (btn.id === buttonId) {\r\n            btn.classList.add('active');\r\n            btn.setAttribute('aria-selected', 'true');\r\n        } else {\r\n            btn.classList.remove('active');\r\n            btn.setAttribute('aria-selected', 'false');\r\n        }\r\n    });\r\n}\r\n\r\nfunction transitionTo(pageContentGenerator, buttonId) {\r\n    const newContent = pageContentGenerator();\r\n    if (currentPage === newContent) return;\r\n    \r\n    currentPage = newContent;\r\n    updateActiveButton(buttonId);\r\n    \r\n    if (!document.startViewTransition) {\r\n        contentDiv.innerHTML = newContent;\r\n        routeFocus();\r\n        return;\r\n    }\r\n    \r\n    const transition = document.startViewTransition(() => {\r\n        contentDiv.innerHTML = newContent;\r\n    });\r\n    \r\n    transition.finished.finally(() => {\r\n        routeFocus();\r\n    });\r\n}\r\n\r\n// Form Submission Handler (Event Delegation)\r\ndocument.addEventListener('submit', (e) => {\r\n    if (e.target && e.target.id === 'mystery-contact-form') {\r\n        e.preventDefault();\r\n        const form = e.target;\r\n        \r\n        if (!form.checkValidity()) {\r\n            form.classList.add('was-validated');\r\n            const firstInvalid = form.querySelector(':invalid');\r\n            if (firstInvalid) firstInvalid.focus();\r\n            return;\r\n        }\r\n        \r\n        const container = form.parentElement;\r\n        form.style.opacity = '0';\r\n        form.style.transform = 'translateY(10px)';\r\n        form.style.transition = 'opacity 0.3s ease, transform 0.3s ease';\r\n        \r\n        setTimeout(() => {\r\n            if (document.startViewTransition) {\r\n                document.startViewTransition(() => {\r\n                    renderSuccessMessage(container);\r\n                });\r\n            } else {\r\n                renderSuccessMessage(container);\r\n            }\r\n        }, 300);\r\n    }\r\n});\r\n\r\nfunction renderSuccessMessage(container) {\r\n    container.innerHTML = `\r\n        <div class=\"success-panel animate-fade-in\">\r\n            <div class=\"success-icon-wrapper\">\r\n                <i class=\"fas fa-envelope-open-text success-icon\"></i>\r\n            </div>\r\n            <h2>Transmission Encrypted</h2>\r\n            <p class=\"success-message-text\">Your report has been securely encoded. If your credentials match our clearance database, a contact agent will rendezvous at your coordinates.</p>\r\n            <p class=\"signature\">— Mister MacGuffin</p>\r\n        </div>\r\n    `;\r\n    const heading = container.querySelector('h2');\r\n    if (heading) {\r\n        heading.setAttribute('tabindex', '-1');\r\n        heading.focus();\r\n    }\r\n}\r\n\r\n// Event Listeners\r\nmenuBtn.addEventListener('click', () => transitionTo(_menu__WEBPACK_IMPORTED_MODULE_0__.default, 'menu-btn'));\r\naboutBtn.addEventListener('click', () => transitionTo(_about__WEBPACK_IMPORTED_MODULE_1__.default, 'about-btn'));\r\ncontactBtn.addEventListener('click', () => transitionTo(_contact__WEBPACK_IMPORTED_MODULE_2__.default, 'contact-btn'));\r\n\r\n// Initial Load\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    transitionTo(_about__WEBPACK_IMPORTED_MODULE_1__.default, 'about-btn');\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMenu = () => {\r\n    return `\r\n        <div class=\"menu-page animate-fade-in\">\r\n            <h1 class=\"page-title\">The Cryptic Menu</h1>\r\n            <p class=\"tagline\">Every dish is a puzzle, every flavor a clue.</p>\r\n            \r\n            <div class=\"menu-grid\">\r\n                <div class=\"menu-item glass-panel\">\r\n                    <div class=\"menu-item-image-wrapper\">\r\n                        <img src=\"images/salad.png\" alt=\"A vibrant, fresh salad featuring leafy greens, heirloom tomatoes, and edible flowers\" />\r\n                    </div>\r\n                    <div class=\"menu-item-info\">\r\n                        <h3>The Cipher Garden Salad</h3>\r\n                        <p class=\"food-description\">Crisp seasonal botanicals, microgreens, heirloom tomatoes, and a cryptographic citrus-herb vinaigrette.</p>\r\n                        <div class=\"menu-item-footer\">\r\n                            <span class=\"price\">$11.50</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"menu-item glass-panel\">\r\n                    <div class=\"menu-item-image-wrapper\">\r\n                        <img src=\"images/soup.png\" alt=\"A rich mushroom soup garnished with microgreens and truffle oil\" />\r\n                    </div>\r\n                    <div class=\"menu-item-info\">\r\n                        <h3>Whispering Truffle Soup</h3>\r\n                        <p class=\"food-description\">Slow-simmered wild forest mushrooms, roasted garlic, and black truffle essence, served with toasted rustic sourdough.</p>\r\n                        <div class=\"menu-item-footer\">\r\n                            <span class=\"price\">$14.59</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"menu-item glass-panel\">\r\n                    <div class=\"menu-item-image-wrapper\">\r\n                        <img src=\"images/pizza-sm.png\" alt=\"A hot stone-baked pizza with melted mozzarella, basil leaves, and pepperoni\" />\r\n                    </div>\r\n                    <div class=\"menu-item-info\">\r\n                        <h3>Enigma Stone-Baked Pizza</h3>\r\n                        <p class=\"food-description\">Fior di latte mozzarella, rich San Marzano tomato reduction, secret mountain herbs, and optional spicy calabrian salami.</p>\r\n                        <div class=\"menu-item-footer\">\r\n                            <span class=\"price\">$18.99</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"menu-item glass-panel\">\r\n                    <div class=\"menu-item-image-wrapper\">\r\n                        <img src=\"images/pasta.png\" alt=\"A beautifully plated nest of squid ink pasta topped with plump shrimp and fresh herbs\" />\r\n                    </div>\r\n                    <div class=\"menu-item-info\">\r\n                        <h3>Nebula Ink Linguine</h3>\r\n                        <p class=\"food-description\">Hand-crafted black squid ink linguine, pan-seared wild gulf shrimp, and a shimmering saffron-garlic white wine emulsion.</p>\r\n                        <div class=\"menu-item-footer\">\r\n                            <span class=\"price\">$22.99</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"background-div\">\r\n                <img class=\"hero-image\" src=\"images/restaurant.jpg\" alt=\"A dimly lit, luxurious restaurant dining room with glowing candle lamps\" />\r\n            </div>\r\n            \r\n            <footer class=\"footer\">\r\n                <p>© 1963-${new Date().getFullYear()} Mister MacGuffin's Diner. Crafted for mystery.</p>\r\n            </footer>\r\n        </div>\r\n    `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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