/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutUspage.js":
/*!****************************!*\
  !*** ./src/aboutUspage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutUsPageLoad: () => (/* binding */ aboutUsPageLoad)
/* harmony export */ });
function aboutUsPageLoad () {
    console.log("Yo")

    const HOME = document.querySelector('#homeSection');
    const MENU = document.querySelector('#menuSection');
    const ABOUTUS = document.querySelector('#aboutUsSection');

    while(HOME.firstChild){
        HOME.removeChild(HOME.lastChild);
    }

    while (MENU.firstChild){
        MENU.removeChild(MENU.lastChild);
    }

}

/***/ }),

/***/ "./src/bodyNav.js":
/*!************************!*\
  !*** ./src/bodyNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bodyNav: () => (/* binding */ bodyNav)
/* harmony export */ });
/* harmony import */ var _src_menupage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/menupage */ "./src/menupage.js");
/* harmony import */ var _src_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/homepage */ "./src/homepage.js");
/* harmony import */ var _src_aboutUspage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/aboutUspage */ "./src/aboutUspage.js");





function bodyNav (){

    const body = document.querySelector('body');
    const header = document.createElement('header'),
    nav = document.createElement('nav'),
    p = document.createElement('p'),
    ul = document.createElement('ul'),
    span = document.createElement('span');

    function hoverColor (x , fontColor = "#fff") {
        x.onmouseover = function () {
            x.style.color = "#c06b3e"
        }
        x.onmouseout = function () {
            x.style.color = fontColor;
        }
        x.style.transition = "all 0.2s ease"
    }

    // body
    body.style.margin = 0;
    body.style.padding = 0;
    body.style.boxSizing = "border-box";
    body.style.fontFamily = "'Poppins' , sans-serif";
    body.style.background = 'url("./assets/hero-bg.jpg")'
    body.style.backgroundPosition = 'center';
    body.style.backgroundSize = 'cover';
    body.style.height = "100vh";
    body.style.overflow = "hidden"
    body.setAttribute('transition' , 'all 0.3s ease')

    //header
    //nav bar
    
    //Home, Menu , About Us
    let links = ul;
    links.classList.add('menu-links');
    links.style.listStyleType = "none";
    
    let home = document.createElement('li');
    home.style.margin = "0"
    home.style.padding = "0"
    home.classList.add('home');
    home.textContent = "Home"
    home.addEventListener('click', () => {
        const HOME = document.querySelector('#homeSection');
        if (!HOME.firstChild){
        (0,_src_homepage__WEBPACK_IMPORTED_MODULE_1__.homepageLoad)();
        }
    });
    home.style.cursor = "pointer"
    hoverColor(home)
    links.appendChild(home);
    
    let menu = document.createElement('li');
    menu.classList.add('menu');
    menu.addEventListener('click', () => {
        const MENU = document.querySelector('#menuSection');
        if (!MENU.firstChild)
        (0,_src_menupage__WEBPACK_IMPORTED_MODULE_0__.menuPageLoad)();

    });
    menu.style.cursor = "pointer"
    menu.textContent = "Menu";
    hoverColor(menu)
    links.appendChild(menu);
    
    let aboutUs = document.createElement('li');
    aboutUs.classList.add('aboutUs');
    aboutUs.style.marginRight = "32px"
    aboutUs.textContent = "About Us";
    aboutUs.style.cursor = "pointer"
    aboutUs.addEventListener('click', () => {
        const ABOUTUS = document.querySelector('#aboutUsSection');
        if (!ABOUTUS.firstChild)
        (0,_src_aboutUspage__WEBPACK_IMPORTED_MODULE_2__.aboutUsPageLoad)();

    });
    hoverColor(aboutUs);
    links.appendChild(aboutUs);
    
    //header
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.width = "100%"
    
    //nav
    nav.style.color = "#fff"
    nav.style.display = "flex"
    nav.style.alignItems = "center";
    nav.style.justifyContent = "space-between"
    nav.style.maxWidth = "1200px";
    nav.style.margin = "0 auto"

    
    
    //logo
    let logo = p;
    logo.classList.add('logo');
    logo.textContent = 'Caffeine ';
    span.textContent = 'co.'
    span.style.color = "#c06b3e"
    logo.appendChild(span);
    logo.style.fontSize = "2.1rem"
    logo.style.fontWeight = "600";
    logo.style.cursor = "pointer"
    logo.addEventListener('click', () => {
        const HOME = document.querySelector('#homeSection');
        if (!HOME.firstChild){
        (0,_src_homepage__WEBPACK_IMPORTED_MODULE_1__.homepageLoad)();
        }
    });
    hoverColor(logo);
    

    
    //links
    links.style.display = 'flex';
    links.style.gap = "40px";
    
    
    nav.appendChild(logo);
    nav.appendChild(links);
    header.appendChild(nav)
    body.appendChild(header);

    const mediaQuery = window.matchMedia('(max-width: 600px)');
    
    function mobileScreen(mediaQuery){
       
        if(mediaQuery.matches){
            nav.style.flexDirection = "column";
        }
        else  {
            nav.style.flexDirection = "row";
        }
    }
    
    mobileScreen(mediaQuery);
    mediaQuery.addEventListener('change' , () => mobileScreen(mediaQuery));
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homepageLoad: () => (/* binding */ homepageLoad)
/* harmony export */ });
/* harmony import */ var _src_menupage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/menupage */ "./src/menupage.js");


function homepageLoad(){
    const HOME = document.querySelector('#homeSection');
    const MENU = document.querySelector('#menuSection');
    const ABOUTUS = document.querySelector('#aboutUsSection');

    while(MENU.firstChild ){
        MENU.removeChild(MENU.lastChild);
    }
    while (ABOUTUS.firstChild){
        ABOUTUS.removeChild(ABOUTUS.lastChild);
    }

    document.querySelector('body').setAttribute('transition' , 'all 0.3s ease')
    
    //HOME
    
    //hero-Section 
    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');
    
    const heroDiv = document.createElement('div'),
    h1 = document.createElement('h1'),
    heroP = document.createElement('p'),
    orderBtn = document.createElement('button');

    heroDiv.classList.add('heroDiv')
    
    h1.classList.add('heroHead');
    h1.textContent = "Start Your Day With Fresh Coffee"
    
    heroP.classList.add('heroTxt');
    heroP.textContent = "Indulge in the goodness of freshly brewed coffee, crafted with love and care. Come, sip, and savor the moments of goodness at our cozy haven."
    
    orderBtn.classList.add('orderBtn');
    orderBtn.textContent = "Order Now"
    orderBtn.onclick = () => {
        ;(0,_src_menupage__WEBPACK_IMPORTED_MODULE_0__.menuPageLoad)();
    }
    
    
    function btnHoverColor (x) {
        x.onmouseover = function () {
            x.style.background = "#c06b3e"   
            x.style.color = "#fff"
        }
        x.onmouseout = function () {
            x.style.background = "#fff";
            x.style.color = "black"
        }
        x.style.transition = "all 0.2s ease"
    }
    
    //hero style
    
    
    heroSection.style.height = "100vh";
    heroSection.style.display = "flex";
    heroSection.style.alignItems = "center";
    heroSection.padding = "0 20px";
    heroSection.style.color = "#fff"
    heroSection.style.maxWidth = "1200px";
    heroSection.style.margin = "0 auto";
    heroSection.style.width = "90%";
    heroDiv.style.textAlign = "center"
    
    h1.style.fontSize = "3rem";
    h1.style.maxWidth = "600px";
    
    heroP.style.fontWeight = "300";
    heroP.style.marginTop = "15px";
    heroP.style.maxWidth = "600px";     
    
    
    heroDiv.appendChild(h1)
    heroDiv.appendChild(heroP);
    heroDiv.appendChild(orderBtn);
    
    orderBtn.style.background = "#fff";
    orderBtn.style.outline = "none";
    orderBtn.style.border = "none";
    orderBtn.style.fontSize = "1rem";
    orderBtn.style.fontWeight = "500";
    orderBtn.style.marginTop = "38px";
    orderBtn.style.padding = "12px 30px";
    orderBtn.style.borderRadius = "6px";
    orderBtn.style.cursor = "pointer";
    
    btnHoverColor(orderBtn);
    
    heroSection.appendChild(heroDiv);
    
    HOME.appendChild(heroSection)

    content.appendChild(HOME);
    
}    
    

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)
/* harmony export */ });

function menuPageLoad () {

    const HOME = document.querySelector('#homeSection');
    const MENU = document.querySelector('#menuSection');
    const ABOUTUS = document.querySelector('#aboutUsSection');

    while(HOME.firstChild){
        HOME.removeChild(HOME.lastChild);
    }

    while (ABOUTUS.firstChild){
        ABOUTUS.removeChild(ABOUTUS.lastChild);
    }

    document.querySelector('body').setAttribute('transition' , 'all 0.3s ease')

    
    const menuItems = document.createElement('div');

    menuItems.style.backdropFilter = "blur(4px)"

    menuItems.style.maxWidth = "1500px"
    menuItems.style.height = "600px"
    menuItems.style.margin = "180px auto 40px auto"
    menuItems.style.padding = "20px"
    menuItems.style.display = "grid";
    menuItems.style.overflowY = "auto"
    menuItems.style.justifyContent = "space-around";
    menuItems.style.justifyItems = "center"
    menuItems.style.rowGap = '80px'
    menuItems.style.columnGap = '80px'
    menuItems.style.gridTemplateColumns = "repeat(auto-fit , minmax(200px , 300px))"

    function createMenuItem (name , path , price){
        const item = document.createElement('div'),
        itemName = document.createElement('div'),
        itemImg = document.createElement("img"),
        details = document.createElement('div'),
        itemPrice = document.createElement('span'),
        buy = document.createElement('button');

        item.style.display = "flex";
        item.style.flexDirection = "column"
        item.style.maxWidth = "280px"
        item.style.width ="100%"
        

        itemImg.src = path;
        itemImg.style.height = "180px";
        itemImg.style.width = "280px"
        itemImg.alt = name + " " + "pic";
        itemImg.style.borderBottom = "4px solid #c06b3e"
        itemImg.style.borderRadius = "10px"

        itemName.textContent = name ;
        itemName.style.color = "#fff"
        itemName.style.fontFamily = "Roboto"
        itemName.style.fontWeight = "600"

        details.appendChild(itemName);
        details.appendChild(itemPrice);
        details.appendChild(buy);
        details.style.padding = "10px 0"
        details.style.borderBottom = "1px solid grey"

        details.style.display = "flex";
        details.style.alignItems = "center"
        details.style.justifyContent = "space-between";

        buy.textContent = "ADD"
        buy.style.border = "none"
        buy.style.outline = "none"
        buy.style.borderRadius = "5px"
        buy.style.color = "#fff"
        buy.style.background = "#c06b3e"
        buy.style.padding = "8px 20px"
        buy.style.fontWeight = "600"
        buy.style.cursor = "pointer"

        function btnHoverColor (x) {
            x.onmouseover = function () {
                x.style.background = "#fff"   
                x.style.color = "#c06b3e"
                x.style.transform = "scale(0.8)"
            }
            x.onmouseout = function () {
                x.style.background = "#c06b3e";
                x.style.color = "#fff"
                x.style.transform = "scale(1)"
            }
            x.style.transition = "all 0.2s ease"
        }

        btnHoverColor(buy);

        itemPrice.textContent = price;
        itemPrice.style.color = "#fff"

        item.classList.add('item');
        details.classList.add('details')

        item.appendChild(itemImg);
        item.appendChild(details);

        menuItems.append(item);

    }
    MENU.appendChild(menuItems);

    createMenuItem("AFFOGATO" , "./assets/affogato.png" , "$6.50");
    createMenuItem("AMERICANO" , "./assets/americano.png" , "$4.00");
    createMenuItem("CAPPUCCINO" , "./assets/cappuccino.png" , "$5.50");
    createMenuItem("CORTADO" , "./assets/cortado.png" , "$4.50");
    createMenuItem("EXPRESSO" , "./assets/expresso.png" , "$3.50");
    createMenuItem("LATTE" , "./assets/latte.png" , "$5.50");
    createMenuItem("MACCHIATO" , "./assets/macchiato.png" , "$4.50");
    createMenuItem("MOCHA" , "./assets/mochaccino.png" , "$6.00");

}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_bodyNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/bodyNav */ "./src/bodyNav.js");
/* harmony import */ var _src_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/homepage */ "./src/homepage.js");
/* harmony import */ var _src_aboutUspage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/aboutUspage */ "./src/aboutUspage.js");




const content = document.querySelector('#content');


(0,_src_bodyNav__WEBPACK_IMPORTED_MODULE_0__.bodyNav)();
window.onload = (0,_src_aboutUspage__WEBPACK_IMPORTED_MODULE_2__.aboutUsPageLoad)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZitDO0FBQ0E7QUFDTTs7O0FBRzlDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVk7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBWTs7QUFFcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBZTs7QUFFdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVk7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xKK0M7O0FBRXhDO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pHTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDdkhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNNO0FBQ007O0FBRXJEOzs7QUFHQSxxREFBTztBQUNQLGdCQUFnQixpRUFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FmZS8uL3NyYy9hYm91dFVzcGFnZS5qcyIsIndlYnBhY2s6Ly9jYWZlLy4vc3JjL2JvZHlOYXYuanMiLCJ3ZWJwYWNrOi8vY2FmZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9jYWZlLy4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL2NhZmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhZmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWZlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhYm91dFVzUGFnZUxvYWQgKCkge1xuICAgIGNvbnNvbGUubG9nKFwiWW9cIilcblxuICAgIGNvbnN0IEhPTUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZVNlY3Rpb24nKTtcbiAgICBjb25zdCBNRU5VID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVTZWN0aW9uJyk7XG4gICAgY29uc3QgQUJPVVRVUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dFVzU2VjdGlvbicpO1xuXG4gICAgd2hpbGUoSE9NRS5maXJzdENoaWxkKXtcbiAgICAgICAgSE9NRS5yZW1vdmVDaGlsZChIT01FLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKE1FTlUuZmlyc3RDaGlsZCl7XG4gICAgICAgIE1FTlUucmVtb3ZlQ2hpbGQoTUVOVS5sYXN0Q2hpbGQpO1xuICAgIH1cblxufSIsImltcG9ydCB7IG1lbnVQYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvbWVudXBhZ2VcIjtcbmltcG9ydCB7IGhvbWVwYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGFib3V0VXNQYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvYWJvdXRVc3BhZ2VcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gYm9keU5hdiAoKXtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyksXG4gICAgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JyksXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGZ1bmN0aW9uIGhvdmVyQ29sb3IgKHggLCBmb250Q29sb3IgPSBcIiNmZmZcIikge1xuICAgICAgICB4Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiI2MwNmIzZVwiXG4gICAgICAgIH1cbiAgICAgICAgeC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IGZvbnRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB4LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzIGVhc2VcIlxuICAgIH1cblxuICAgIC8vIGJvZHlcbiAgICBib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgYm9keS5zdHlsZS5wYWRkaW5nID0gMDtcbiAgICBib2R5LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIGJvZHkuc3R5bGUuZm9udEZhbWlseSA9IFwiJ1BvcHBpbnMnICwgc2Fucy1zZXJpZlwiO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCIuL2Fzc2V0cy9oZXJvLWJnLmpwZ1wiKSdcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nICwgJ2FsbCAwLjNzIGVhc2UnKVxuXG4gICAgLy9oZWFkZXJcbiAgICAvL25hdiBiYXJcbiAgICBcbiAgICAvL0hvbWUsIE1lbnUgLCBBYm91dCBVc1xuICAgIGxldCBsaW5rcyA9IHVsO1xuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlua3MnKTtcbiAgICBsaW5rcy5zdHlsZS5saXN0U3R5bGVUeXBlID0gXCJub25lXCI7XG4gICAgXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvbWUuc3R5bGUubWFyZ2luID0gXCIwXCJcbiAgICBob21lLnN0eWxlLnBhZGRpbmcgPSBcIjBcIlxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IEhPTUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZVNlY3Rpb24nKTtcbiAgICAgICAgaWYgKCFIT01FLmZpcnN0Q2hpbGQpe1xuICAgICAgICBob21lcGFnZUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGhvbWUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcbiAgICBob3ZlckNvbG9yKGhvbWUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudVNlY3Rpb24nKTtcbiAgICAgICAgaWYgKCFNRU5VLmZpcnN0Q2hpbGQpXG4gICAgICAgIG1lbnVQYWdlTG9hZCgpO1xuXG4gICAgfSk7XG4gICAgbWVudS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBob3ZlckNvbG9yKG1lbnUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgbGV0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcycpO1xuICAgIGFib3V0VXMuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjMycHhcIlxuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgYWJvdXRVcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuICAgIGFib3V0VXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IEFCT1VUVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRVc1NlY3Rpb24nKTtcbiAgICAgICAgaWYgKCFBQk9VVFVTLmZpcnN0Q2hpbGQpXG4gICAgICAgIGFib3V0VXNQYWdlTG9hZCgpO1xuXG4gICAgfSk7XG4gICAgaG92ZXJDb2xvcihhYm91dFVzKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgICBcbiAgICAvL2hlYWRlclxuICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBoZWFkZXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgaGVhZGVyLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxuICAgIFxuICAgIC8vbmF2XG4gICAgbmF2LnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgbmF2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIG5hdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiXG4gICAgbmF2LnN0eWxlLm1heFdpZHRoID0gXCIxMjAwcHhcIjtcbiAgICBuYXYuc3R5bGUubWFyZ2luID0gXCIwIGF1dG9cIlxuXG4gICAgXG4gICAgXG4gICAgLy9sb2dvXG4gICAgbGV0IGxvZ28gPSBwO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnQ2FmZmVpbmUgJztcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJ2NvLidcbiAgICBzcGFuLnN0eWxlLmNvbG9yID0gXCIjYzA2YjNlXCJcbiAgICBsb2dvLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGxvZ28uc3R5bGUuZm9udFNpemUgPSBcIjIuMXJlbVwiXG4gICAgbG9nby5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICBsb2dvLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgSE9NRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lU2VjdGlvbicpO1xuICAgICAgICBpZiAoIUhPTUUuZmlyc3RDaGlsZCl7XG4gICAgICAgIGhvbWVwYWdlTG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaG92ZXJDb2xvcihsb2dvKTtcbiAgICBcblxuICAgIFxuICAgIC8vbGlua3NcbiAgICBsaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGxpbmtzLnN0eWxlLmdhcCA9IFwiNDBweFwiO1xuICAgIFxuICAgIFxuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobGlua3MpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MDBweCknKTtcbiAgICBcbiAgICBmdW5jdGlvbiBtb2JpbGVTY3JlZW4obWVkaWFRdWVyeSl7XG4gICAgICAgXG4gICAgICAgIGlmKG1lZGlhUXVlcnkubWF0Y2hlcyl7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSAge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vYmlsZVNjcmVlbihtZWRpYVF1ZXJ5KTtcbiAgICBtZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScgLCAoKSA9PiBtb2JpbGVTY3JlZW4obWVkaWFRdWVyeSkpO1xufSIsImltcG9ydCB7IG1lbnVQYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvbWVudXBhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVwYWdlTG9hZCgpe1xuICAgIGNvbnN0IEhPTUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZVNlY3Rpb24nKTtcbiAgICBjb25zdCBNRU5VID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVTZWN0aW9uJyk7XG4gICAgY29uc3QgQUJPVVRVUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dFVzU2VjdGlvbicpO1xuXG4gICAgd2hpbGUoTUVOVS5maXJzdENoaWxkICl7XG4gICAgICAgIE1FTlUucmVtb3ZlQ2hpbGQoTUVOVS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICB3aGlsZSAoQUJPVVRVUy5maXJzdENoaWxkKXtcbiAgICAgICAgQUJPVVRVUy5yZW1vdmVDaGlsZChBQk9VVFVTLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgndHJhbnNpdGlvbicgLCAnYWxsIDAuM3MgZWFzZScpXG4gICAgXG4gICAgLy9IT01FXG4gICAgXG4gICAgLy9oZXJvLVNlY3Rpb24gXG4gICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVyb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIFxuICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXG4gICAgaGVyb1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVyb0RpdicpXG4gICAgXG4gICAgaDEuY2xhc3NMaXN0LmFkZCgnaGVyb0hlYWQnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiU3RhcnQgWW91ciBEYXkgV2l0aCBGcmVzaCBDb2ZmZWVcIlxuICAgIFxuICAgIGhlcm9QLmNsYXNzTGlzdC5hZGQoJ2hlcm9UeHQnKTtcbiAgICBoZXJvUC50ZXh0Q29udGVudCA9IFwiSW5kdWxnZSBpbiB0aGUgZ29vZG5lc3Mgb2YgZnJlc2hseSBicmV3ZWQgY29mZmVlLCBjcmFmdGVkIHdpdGggbG92ZSBhbmQgY2FyZS4gQ29tZSwgc2lwLCBhbmQgc2F2b3IgdGhlIG1vbWVudHMgb2YgZ29vZG5lc3MgYXQgb3VyIGNvenkgaGF2ZW4uXCJcbiAgICBcbiAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKCdvcmRlckJ0bicpO1xuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIlxuICAgIG9yZGVyQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1lbnVQYWdlTG9hZCgpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBidG5Ib3ZlckNvbG9yICh4KSB7XG4gICAgICAgIHgub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB4LnN0eWxlLmJhY2tncm91bmQgPSBcIiNjMDZiM2VcIiAgIFxuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgICAgIH1cbiAgICAgICAgeC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCI7XG4gICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gXCJibGFja1wiXG4gICAgICAgIH1cbiAgICAgICAgeC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4ycyBlYXNlXCJcbiAgICB9XG4gICAgXG4gICAgLy9oZXJvIHN0eWxlXG4gICAgXG4gICAgXG4gICAgaGVyb1NlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBoZXJvU2VjdGlvbi5wYWRkaW5nID0gXCIwIDIwcHhcIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgaGVyb1NlY3Rpb24uc3R5bGUubWF4V2lkdGggPSBcIjEyMDBweFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLm1hcmdpbiA9IFwiMCBhdXRvXCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUud2lkdGggPSBcIjkwJVwiO1xuICAgIGhlcm9EaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuICAgIFxuICAgIGgxLnN0eWxlLmZvbnRTaXplID0gXCIzcmVtXCI7XG4gICAgaDEuc3R5bGUubWF4V2lkdGggPSBcIjYwMHB4XCI7XG4gICAgXG4gICAgaGVyb1Auc3R5bGUuZm9udFdlaWdodCA9IFwiMzAwXCI7XG4gICAgaGVyb1Auc3R5bGUubWFyZ2luVG9wID0gXCIxNXB4XCI7XG4gICAgaGVyb1Auc3R5bGUubWF4V2lkdGggPSBcIjYwMHB4XCI7ICAgICBcbiAgICBcbiAgICBcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGgxKVxuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb1ApO1xuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xuICAgIFxuICAgIG9yZGVyQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gXCI1MDBcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjM4cHhcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5wYWRkaW5nID0gXCIxMnB4IDMwcHhcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjZweFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIFxuICAgIGJ0bkhvdmVyQ29sb3Iob3JkZXJCdG4pO1xuICAgIFxuICAgIGhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9EaXYpO1xuICAgIFxuICAgIEhPTUUuYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKEhPTUUpO1xuICAgIFxufSAgICBcbiAgICAiLCJcbmV4cG9ydCBmdW5jdGlvbiBtZW51UGFnZUxvYWQgKCkge1xuXG4gICAgY29uc3QgSE9NRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lU2VjdGlvbicpO1xuICAgIGNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudVNlY3Rpb24nKTtcbiAgICBjb25zdCBBQk9VVFVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0VXNTZWN0aW9uJyk7XG5cbiAgICB3aGlsZShIT01FLmZpcnN0Q2hpbGQpe1xuICAgICAgICBIT01FLnJlbW92ZUNoaWxkKEhPTUUubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoQUJPVVRVUy5maXJzdENoaWxkKXtcbiAgICAgICAgQUJPVVRVUy5yZW1vdmVDaGlsZChBQk9VVFVTLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgndHJhbnNpdGlvbicgLCAnYWxsIDAuM3MgZWFzZScpXG5cbiAgICBcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1lbnVJdGVtcy5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig0cHgpXCJcblxuICAgIG1lbnVJdGVtcy5zdHlsZS5tYXhXaWR0aCA9IFwiMTUwMHB4XCJcbiAgICBtZW51SXRlbXMuc3R5bGUuaGVpZ2h0ID0gXCI2MDBweFwiXG4gICAgbWVudUl0ZW1zLnN0eWxlLm1hcmdpbiA9IFwiMTgwcHggYXV0byA0MHB4IGF1dG9cIlxuICAgIG1lbnVJdGVtcy5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCJcbiAgICBtZW51SXRlbXMuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIG1lbnVJdGVtcy5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIlxuICAgIG1lbnVJdGVtcy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYXJvdW5kXCI7XG4gICAgbWVudUl0ZW1zLnN0eWxlLmp1c3RpZnlJdGVtcyA9IFwiY2VudGVyXCJcbiAgICBtZW51SXRlbXMuc3R5bGUucm93R2FwID0gJzgwcHgnXG4gICAgbWVudUl0ZW1zLnN0eWxlLmNvbHVtbkdhcCA9ICc4MHB4J1xuICAgIG1lbnVJdGVtcy5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoYXV0by1maXQgLCBtaW5tYXgoMjAwcHggLCAzMDBweCkpXCJcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtIChuYW1lICwgcGF0aCAsIHByaWNlKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcbiAgICAgICAgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICAgIGJ1eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBpdGVtLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiXG4gICAgICAgIGl0ZW0uc3R5bGUubWF4V2lkdGggPSBcIjI4MHB4XCJcbiAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9XCIxMDAlXCJcbiAgICAgICAgXG5cbiAgICAgICAgaXRlbUltZy5zcmMgPSBwYXRoO1xuICAgICAgICBpdGVtSW1nLnN0eWxlLmhlaWdodCA9IFwiMTgwcHhcIjtcbiAgICAgICAgaXRlbUltZy5zdHlsZS53aWR0aCA9IFwiMjgwcHhcIlxuICAgICAgICBpdGVtSW1nLmFsdCA9IG5hbWUgKyBcIiBcIiArIFwicGljXCI7XG4gICAgICAgIGl0ZW1JbWcuc3R5bGUuYm9yZGVyQm90dG9tID0gXCI0cHggc29saWQgI2MwNmIzZVwiXG4gICAgICAgIGl0ZW1JbWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcblxuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWUgO1xuICAgICAgICBpdGVtTmFtZS5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgICAgIGl0ZW1OYW1lLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlJvYm90b1wiXG4gICAgICAgIGl0ZW1OYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiXG5cbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChidXkpO1xuICAgICAgICBkZXRhaWxzLnN0eWxlLnBhZGRpbmcgPSBcIjEwcHggMFwiXG4gICAgICAgIGRldGFpbHMuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIxcHggc29saWQgZ3JleVwiXG5cbiAgICAgICAgZGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGRldGFpbHMuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCJcbiAgICAgICAgZGV0YWlscy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiO1xuXG4gICAgICAgIGJ1eS50ZXh0Q29udGVudCA9IFwiQUREXCJcbiAgICAgICAgYnV5LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiXG4gICAgICAgIGJ1eS5zdHlsZS5vdXRsaW5lID0gXCJub25lXCJcbiAgICAgICAgYnV5LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCJcbiAgICAgICAgYnV5LnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcbiAgICAgICAgYnV5LnN0eWxlLmJhY2tncm91bmQgPSBcIiNjMDZiM2VcIlxuICAgICAgICBidXkuc3R5bGUucGFkZGluZyA9IFwiOHB4IDIwcHhcIlxuICAgICAgICBidXkuc3R5bGUuZm9udFdlaWdodCA9IFwiNjAwXCJcbiAgICAgICAgYnV5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG5cbiAgICAgICAgZnVuY3Rpb24gYnRuSG92ZXJDb2xvciAoeCkge1xuICAgICAgICAgICAgeC5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZcIiAgIFxuICAgICAgICAgICAgICAgIHguc3R5bGUuY29sb3IgPSBcIiNjMDZiM2VcIlxuICAgICAgICAgICAgICAgIHguc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwLjgpXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHgub25tb3VzZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmJhY2tncm91bmQgPSBcIiNjMDZiM2VcIjtcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcbiAgICAgICAgICAgICAgICB4LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4ycyBlYXNlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bkhvdmVyQ29sb3IoYnV5KTtcblxuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICAgICAgaXRlbVByaWNlLnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcblxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJylcblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmQoaXRlbSk7XG5cbiAgICB9XG4gICAgTUVOVS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJBRkZPR0FUT1wiICwgXCIuL2Fzc2V0cy9hZmZvZ2F0by5wbmdcIiAsIFwiJDYuNTBcIik7XG4gICAgY3JlYXRlTWVudUl0ZW0oXCJBTUVSSUNBTk9cIiAsIFwiLi9hc3NldHMvYW1lcmljYW5vLnBuZ1wiICwgXCIkNC4wMFwiKTtcbiAgICBjcmVhdGVNZW51SXRlbShcIkNBUFBVQ0NJTk9cIiAsIFwiLi9hc3NldHMvY2FwcHVjY2luby5wbmdcIiAsIFwiJDUuNTBcIik7XG4gICAgY3JlYXRlTWVudUl0ZW0oXCJDT1JUQURPXCIgLCBcIi4vYXNzZXRzL2NvcnRhZG8ucG5nXCIgLCBcIiQ0LjUwXCIpO1xuICAgIGNyZWF0ZU1lbnVJdGVtKFwiRVhQUkVTU09cIiAsIFwiLi9hc3NldHMvZXhwcmVzc28ucG5nXCIgLCBcIiQzLjUwXCIpO1xuICAgIGNyZWF0ZU1lbnVJdGVtKFwiTEFUVEVcIiAsIFwiLi9hc3NldHMvbGF0dGUucG5nXCIgLCBcIiQ1LjUwXCIpO1xuICAgIGNyZWF0ZU1lbnVJdGVtKFwiTUFDQ0hJQVRPXCIgLCBcIi4vYXNzZXRzL21hY2NoaWF0by5wbmdcIiAsIFwiJDQuNTBcIik7XG4gICAgY3JlYXRlTWVudUl0ZW0oXCJNT0NIQVwiICwgXCIuL2Fzc2V0cy9tb2NoYWNjaW5vLnBuZ1wiICwgXCIkNi4wMFwiKTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYm9keU5hdiB9IGZyb20gXCIuLi9zcmMvYm9keU5hdlwiO1xuaW1wb3J0IHsgaG9tZXBhZ2VMb2FkIH0gZnJvbSBcIi4uL3NyYy9ob21lcGFnZVwiO1xuaW1wb3J0IHsgYWJvdXRVc1BhZ2VMb2FkIH0gZnJvbSBcIi4uL3NyYy9hYm91dFVzcGFnZVwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG5ib2R5TmF2KCk7XG53aW5kb3cub25sb2FkID0gYWJvdXRVc1BhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9