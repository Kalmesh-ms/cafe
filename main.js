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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homepageLoad: () => (/* binding */ homepageLoad)\n/* harmony export */ });\nfunction homepageLoad() {\n    const body = document.querySelector('body'),\n    content = body.querySelector('#content');\n\n    const brownie = \"#c06b3e\";\n    \n    \n    const header = document.createElement('header'),\n    nav = document.createElement('nav'),\n    p = document.createElement('p'),\n    ul = document.createElement('ul'),\n    span = document.createElement('span');\n\n    function hoverColor (x) {\n        x.onmouseover = function () {\n            x.style.color = \"#c06b3e\"\n        }\n        x.onmouseout = function () {\n            x.style.color = \"#fff\"\n        }\n        x.style.transition = \"all 0.2s ease\"\n    }\n\n\n    // body\n    body.style.margin = 0;\n    body.style.padding = 0;\n    body.style.boxSizing = \"border-box\";\n    body.style.fontFamily = \"'Poppins' , sans-serif\";\n    body.style.background = 'url(\"../src/hero-bg.jpg\")'\n    body.style.backgroundPosition = 'center';\n    body.style.backgroundSize = 'cover';\n    body.style.height = \"100vh\";\n    body.setAttribute('transition' , 'all 1s ease')\n\n    //header\n    //nav bar\n\n    //Home, Menu , About Us\n    let links = ul;\n    links.classList.add('menu-links');\n    links.style.listStyleType = \"none\";\n\n    let home = document.createElement('li');\n    home.style.margin = \"0\"\n    home.style.padding = \"0\"\n    home.classList.add('home');\n    home.textContent = \"Home\"\n    hoverColor(home)\n    links.appendChild(home);\n\n    let menu = document.createElement('li');\n    menu.classList.add('menu');\n    menu.textContent = \"Menu\";\n    hoverColor(menu)\n    links.appendChild(menu);\n\n    let aboutUs = document.createElement('li');\n    aboutUs.classList.add('aboutUs');\n    aboutUs.textContent = \"About Us\";\n    hoverColor(aboutUs);\n    links.appendChild(aboutUs);\n\n    //header\n    header.style.position = \"fixed\";\n    header.style.top = \"0\";\n    header.style.left = \"0\";\n    header.style.width = \"100%\"\n    header.style.padding = \"20px\";\n\n    //nav\n    nav.style.color = \"#fff\"\n    nav.style.display = \"flex\"\n    nav.style.alignItems = \"center\";\n    nav.style.justifyContent = \"space-between\"\n    nav.style.maxWidth = \"1200px\";\n    nav.style.margin = \"0 auto\"\n\n    \n    \n    //logo\n    let logo = p;\n    logo.classList.add('logo');\n    logo.textContent = 'Caffeine ';\n    span.textContent = 'co.'\n    span.style.color = \"#c06b3e\"\n    logo.appendChild(span);\n    logo.style.fontSize = \"2.1rem\"\n    logo.style.fontWeight = \"600\";\n    hoverColor(logo);\n\n\n\n    //links\n    links.style.display = 'flex';\n    links.style.gap = \"40px\";\n\n\n    nav.appendChild(logo);\n    nav.appendChild(links);\n    header.appendChild(nav)\n    content.appendChild(header);\n\n    //HOME\n\n    //hero-Section \n    const heroSection = document.createElement('section');\n    heroSection.classList.add('hero');\n\n    const heroDiv = document.createElement('div'),\n    h1 = document.createElement('h1'),\n    heroP = document.createElement('p'),\n    orderBtn = document.createElement('button');\n\n    heroDiv.classList.add('heroDiv')\n\n    h1.classList.add('heroHead');\n    h1.textContent = \"Start Your Day With Fresh Coffee\"\n\n    heroP.classList.add('heroTxt');\n    heroP.textContent = \"Indulge in the goodness of freshly brewed coffee, crafted with love and care. Come, sip, and savor the moments of goodness at our cozy haven.\"\n\n    orderBtn.classList.add('orderBtn');\n    orderBtn.textContent = \"Order Now\"\n\n\n    function btnHoverColor (x) {\n        x.onmouseover = function () {\n            x.style.background = \"#c06b3e\"   \n            x.style.color = \"#fff\"\n        }\n        x.onmouseout = function () {\n            x.style.background = \"#fff\";\n            x.style.color = \"black\"\n        }\n        x.style.transition = \"all 0.2s ease\"\n    }\n\n    //hero style\n\n\n    heroSection.style.height = \"100vh\";\n    heroSection.style.display = \"flex\";\n    heroSection.style.alignItems = \"center\";\n    heroSection.padding = \"0 20px\";\n    heroSection.style.color = \"#fff\"\n    heroSection.style.maxWidth = \"1200px\";\n    heroSection.style.margin = \"0 auto\";\n    heroSection.style.width = \"100%\";\n\n    h1.style.fontSize = \"3rem\";\n    h1.style.maxWidth = \"600px\";\n    h1.style.color = \"\"\n\n    heroP.style.fontWeight = \"300\";\n    heroP.style.marginTop = \"15px\";\n    heroP.style.maxWidth = \"600px\";     \n\n\n    heroDiv.appendChild(h1)\n    heroDiv.appendChild(heroP);\n    heroDiv.appendChild(orderBtn);\n\n    orderBtn.style.background = \"#fff\";\n    orderBtn.style.outline = \"none\";\n    orderBtn.style.border = \"none\";\n    orderBtn.style.fontSize = \"1rem\";\n    orderBtn.style.fontWeight = \"500\";\n    orderBtn.style.marginTop = \"38px\";\n    orderBtn.style.padding = \"12px 30px\";\n    orderBtn.style.borderRadius = \"6px\";\n    orderBtn.style.cursor = \"pointer\";\n\n    btnHoverColor(orderBtn);\n\n    heroSection.appendChild(heroDiv);\n\n    content.appendChild(heroSection)\n\n\n    const mediaQuery = window.matchMedia('(max-width: 850px');\n\n\n}    \n    \n\n//# sourceURL=webpack://cafe/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homepageLoad)();\n\n//# sourceURL=webpack://cafe/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;