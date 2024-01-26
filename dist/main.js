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

    let wrapper = document.createElement('div'),
    ownerInfo = document.createElement('div'),
    name = document.createElement('a'),
    owner = document.createElement('div'),
    openInfo = document.createElement('div'),
    openText = document.createElement('p'),
    week = document.createElement('p'),
    time = document.createElement('p'),
    locationInfo = document.createElement('a');

    wrapper.classList.add('wrapper')
    ownerInfo.classList.add('ownerInfo')
    name.classList.add('name')
    owner.classList.add('owner')
    openInfo.classList.add('openInfo')
    openText.classList.add('openText')
    week.classList.add('week')
    time.classList.add('time')
    locationInfo.classList.add('location')

    name.textContent = "KALMESH M S"
    name.style.fontSize = "28px"
    name.style.fontWeight = "500"
    name.href = "https://github.com/Kalmesh-ms/cafe"
    name.target = "_blank"
    name.style.color = "rgba(255,255,255,0.6)"
    name.addEventListener('mouseover', () =>{
        name.style.color = "rgba(255,255,255)"
        owner.style.color = "rgba(255,255,255)"
    })
    name.style.textDecoration = "none";
    name.style.letterSpacing = "7px"
    name.style.borderBottom = '1px solid rgba(255,255,255,0.6)'


    owner.textContent = "OWNER"
    owner.style.fontSize = "23px"
    owner.style.fontWeight = "500"
    owner.style.letterSpacing = "10px"
    owner.style.color = "rgba(255,255,255,0.6)"
    owner.addEventListener('mouseover', () =>{
        name.style.color = "rgba(255,255,255)"
        owner.style.color = "rgba(255,255,255)"
    })
    owner.style.cursor = "pointer"



    function styleEl (el , txt , parent , space = "18px"){
        el.textContent = txt
        el.style.fontSize = "23px"
        el.style.letterSpacing = space;
        el.style.margin = "0"
        el.style.color = "rgba(255,255,255,0.6)"
        // el.style.borderBottom = "1px solid rgba(255,255,255,0.6)"
        el.addEventListener('mouseover', () =>{
            el.style.color = "rgba(255,255,255)"
        })
        parent.appendChild(el);
    }

    styleEl(openText, "OPEN" , openInfo);
    styleEl(week , "MON - FRI", openInfo );
    styleEl(time , " 6  -  8 " , openInfo );
    
    openInfo.style.cursor = "pointer"

 
    wrapper.style.backdropFilter = "blur(4px)"
    wrapper.style.background = "rgba(0,0,0,0.5)"
    wrapper.style.maxWidth = "400px"
    wrapper.style.width = "100%"
    wrapper.style.height = "500px"
    wrapper.style.margin = "200px auto"
    wrapper.style.padding = "50px"
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column"
    wrapper.style.justifyContent = "space-evenly"
    wrapper.style.textAlign = "center"
    // wrapper.style.gap = "50px"

    ownerInfo.appendChild(name);
    ownerInfo.appendChild(owner);

    styleEl(locationInfo , "" , wrapper);

    locationInfo.textContent = "BENGALURU KARNATAKA INDIA"
    locationInfo.style.textAlign = "center"

    wrapper.appendChild(ownerInfo);
    wrapper.appendChild(openInfo);
    wrapper.appendChild(locationInfo);

    ABOUTUS.appendChild(wrapper);




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
    logo.style.padding = "0 15px"
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
            x.style.transform = "scale(0.8)"
        }
        x.onmouseout = function () {
            x.style.background = "#fff";
            x.style.color = "black"
            x.style.transform = "scale(1)"
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
    menuItems.style.background = "rgba(0,0,0,0.5)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIK0M7QUFDQTtBQUNNOzs7QUFHOUM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFZOztBQUVwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFlOztBQUV2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuSitDOztBQUV4QztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkdPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUN0SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ007QUFDTTs7QUFFckQ7OztBQUdBLHFEQUFPO0FBQ1AsZ0JBQWdCLGlFQUFlLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWZlLy4vc3JjL2Fib3V0VXNwYWdlLmpzIiwid2VicGFjazovL2NhZmUvLi9zcmMvYm9keU5hdi5qcyIsIndlYnBhY2s6Ly9jYWZlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2NhZmUvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWZlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYWZlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhZmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFib3V0VXNQYWdlTG9hZCAoKSB7XG4gICAgY29uc29sZS5sb2coXCJZb1wiKVxuXG4gICAgY29uc3QgSE9NRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lU2VjdGlvbicpO1xuICAgIGNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudVNlY3Rpb24nKTtcbiAgICBjb25zdCBBQk9VVFVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0VXNTZWN0aW9uJyk7XG5cbiAgICB3aGlsZShIT01FLmZpcnN0Q2hpbGQpe1xuICAgICAgICBIT01FLnJlbW92ZUNoaWxkKEhPTUUubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoTUVOVS5maXJzdENoaWxkKXtcbiAgICAgICAgTUVOVS5yZW1vdmVDaGlsZChNRU5VLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBvd25lckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLFxuICAgIG93bmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgb3BlbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBvcGVuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgIHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgbG9jYXRpb25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJylcbiAgICBvd25lckluZm8uY2xhc3NMaXN0LmFkZCgnb3duZXJJbmZvJylcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKVxuICAgIG93bmVyLmNsYXNzTGlzdC5hZGQoJ293bmVyJylcbiAgICBvcGVuSW5mby5jbGFzc0xpc3QuYWRkKCdvcGVuSW5mbycpXG4gICAgb3BlblRleHQuY2xhc3NMaXN0LmFkZCgnb3BlblRleHQnKVxuICAgIHdlZWsuY2xhc3NMaXN0LmFkZCgnd2VlaycpXG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJylcbiAgICBsb2NhdGlvbkluZm8uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKVxuXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IFwiS0FMTUVTSCBNIFNcIlxuICAgIG5hbWUuc3R5bGUuZm9udFNpemUgPSBcIjI4cHhcIlxuICAgIG5hbWUuc3R5bGUuZm9udFdlaWdodCA9IFwiNTAwXCJcbiAgICBuYW1lLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9LYWxtZXNoLW1zL2NhZmVcIlxuICAgIG5hbWUudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgIG5hbWUuc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC42KVwiXG4gICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PntcbiAgICAgICAgbmFtZS5zdHlsZS5jb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSlcIlxuICAgICAgICBvd25lci5zdHlsZS5jb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSlcIlxuICAgIH0pXG4gICAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgIG5hbWUuc3R5bGUubGV0dGVyU3BhY2luZyA9IFwiN3B4XCJcbiAgICBuYW1lLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpJ1xuXG5cbiAgICBvd25lci50ZXh0Q29udGVudCA9IFwiT1dORVJcIlxuICAgIG93bmVyLnN0eWxlLmZvbnRTaXplID0gXCIyM3B4XCJcbiAgICBvd25lci5zdHlsZS5mb250V2VpZ2h0ID0gXCI1MDBcIlxuICAgIG93bmVyLnN0eWxlLmxldHRlclNwYWNpbmcgPSBcIjEwcHhcIlxuICAgIG93bmVyLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNilcIlxuICAgIG93bmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+e1xuICAgICAgICBuYW1lLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1KVwiXG4gICAgICAgIG93bmVyLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1KVwiXG4gICAgfSlcbiAgICBvd25lci5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuXG5cblxuICAgIGZ1bmN0aW9uIHN0eWxlRWwgKGVsICwgdHh0ICwgcGFyZW50ICwgc3BhY2UgPSBcIjE4cHhcIil7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdHh0XG4gICAgICAgIGVsLnN0eWxlLmZvbnRTaXplID0gXCIyM3B4XCJcbiAgICAgICAgZWwuc3R5bGUubGV0dGVyU3BhY2luZyA9IHNwYWNlO1xuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBcIlxuICAgICAgICBlbC5zdHlsZS5jb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjYpXCJcbiAgICAgICAgLy8gZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpXCJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT57XG4gICAgICAgICAgICBlbC5zdHlsZS5jb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSlcIlxuICAgICAgICB9KVxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIHN0eWxlRWwob3BlblRleHQsIFwiT1BFTlwiICwgb3BlbkluZm8pO1xuICAgIHN0eWxlRWwod2VlayAsIFwiTU9OIC0gRlJJXCIsIG9wZW5JbmZvICk7XG4gICAgc3R5bGVFbCh0aW1lICwgXCIgNiAgLSAgOCBcIiAsIG9wZW5JbmZvICk7XG4gICAgXG4gICAgb3BlbkluZm8uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcblxuIFxuICAgIHdyYXBwZXIuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoNHB4KVwiXG4gICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLDAuNSlcIlxuICAgIHdyYXBwZXIuc3R5bGUubWF4V2lkdGggPSBcIjQwMHB4XCJcbiAgICB3cmFwcGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCJcbiAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IFwiNTAwcHhcIlxuICAgIHdyYXBwZXIuc3R5bGUubWFyZ2luID0gXCIyMDBweCBhdXRvXCJcbiAgICB3cmFwcGVyLnN0eWxlLnBhZGRpbmcgPSBcIjUwcHhcIlxuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHdyYXBwZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCJcbiAgICB3cmFwcGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1ldmVubHlcIlxuICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuICAgIC8vIHdyYXBwZXIuc3R5bGUuZ2FwID0gXCI1MHB4XCJcblxuICAgIG93bmVySW5mby5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBvd25lckluZm8uYXBwZW5kQ2hpbGQob3duZXIpO1xuXG4gICAgc3R5bGVFbChsb2NhdGlvbkluZm8gLCBcIlwiICwgd3JhcHBlcik7XG5cbiAgICBsb2NhdGlvbkluZm8udGV4dENvbnRlbnQgPSBcIkJFTkdBTFVSVSBLQVJOQVRBS0EgSU5ESUFcIlxuICAgIGxvY2F0aW9uSW5mby5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG93bmVySW5mbyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChvcGVuSW5mbyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsb2NhdGlvbkluZm8pO1xuXG4gICAgQUJPVVRVUy5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuXG5cblxufSIsImltcG9ydCB7IG1lbnVQYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvbWVudXBhZ2VcIjtcbmltcG9ydCB7IGhvbWVwYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGFib3V0VXNQYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvYWJvdXRVc3BhZ2VcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gYm9keU5hdiAoKXtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyksXG4gICAgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JyksXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGZ1bmN0aW9uIGhvdmVyQ29sb3IgKHggLCBmb250Q29sb3IgPSBcIiNmZmZcIikge1xuICAgICAgICB4Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiI2MwNmIzZVwiXG4gICAgICAgIH1cbiAgICAgICAgeC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IGZvbnRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB4LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzIGVhc2VcIlxuICAgIH1cblxuICAgIC8vIGJvZHlcbiAgICBib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgYm9keS5zdHlsZS5wYWRkaW5nID0gMDtcbiAgICBib2R5LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIGJvZHkuc3R5bGUuZm9udEZhbWlseSA9IFwiJ1BvcHBpbnMnICwgc2Fucy1zZXJpZlwiO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCIuL2Fzc2V0cy9oZXJvLWJnLmpwZ1wiKSdcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nICwgJ2FsbCAwLjNzIGVhc2UnKVxuXG4gICAgLy9oZWFkZXJcbiAgICAvL25hdiBiYXJcbiAgICBcbiAgICAvL0hvbWUsIE1lbnUgLCBBYm91dCBVc1xuICAgIGxldCBsaW5rcyA9IHVsO1xuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlua3MnKTtcbiAgICBsaW5rcy5zdHlsZS5saXN0U3R5bGVUeXBlID0gXCJub25lXCI7XG4gICAgXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvbWUuc3R5bGUubWFyZ2luID0gXCIwXCJcbiAgICBob21lLnN0eWxlLnBhZGRpbmcgPSBcIjBcIlxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IEhPTUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZVNlY3Rpb24nKTtcbiAgICAgICAgaWYgKCFIT01FLmZpcnN0Q2hpbGQpe1xuICAgICAgICBob21lcGFnZUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGhvbWUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcbiAgICBob3ZlckNvbG9yKGhvbWUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudVNlY3Rpb24nKTtcbiAgICAgICAgaWYgKCFNRU5VLmZpcnN0Q2hpbGQpXG4gICAgICAgIG1lbnVQYWdlTG9hZCgpO1xuXG4gICAgfSk7XG4gICAgbWVudS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBob3ZlckNvbG9yKG1lbnUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgbGV0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcycpO1xuICAgIGFib3V0VXMuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjMycHhcIlxuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgYWJvdXRVcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuICAgIGFib3V0VXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IEFCT1VUVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRVc1NlY3Rpb24nKTtcbiAgICAgICAgaWYgKCFBQk9VVFVTLmZpcnN0Q2hpbGQpXG4gICAgICAgIGFib3V0VXNQYWdlTG9hZCgpO1xuXG4gICAgfSk7XG4gICAgaG92ZXJDb2xvcihhYm91dFVzKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgICBcbiAgICAvL2hlYWRlclxuICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBoZWFkZXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgaGVhZGVyLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxuICAgIFxuICAgIC8vbmF2XG4gICAgbmF2LnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgbmF2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIG5hdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiXG4gICAgbmF2LnN0eWxlLm1heFdpZHRoID0gXCIxMjAwcHhcIjtcbiAgICBuYXYuc3R5bGUubWFyZ2luID0gXCIwIGF1dG9cIlxuXG4gICAgXG4gICAgXG4gICAgLy9sb2dvXG4gICAgbGV0IGxvZ28gPSBwO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnQ2FmZmVpbmUgJztcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJ2NvLidcbiAgICBzcGFuLnN0eWxlLmNvbG9yID0gXCIjYzA2YjNlXCJcbiAgICBsb2dvLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGxvZ28uc3R5bGUuZm9udFNpemUgPSBcIjIuMXJlbVwiXG4gICAgbG9nby5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICBsb2dvLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgSE9NRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lU2VjdGlvbicpO1xuICAgICAgICBpZiAoIUhPTUUuZmlyc3RDaGlsZCl7XG4gICAgICAgIGhvbWVwYWdlTG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbG9nby5zdHlsZS5wYWRkaW5nID0gXCIwIDE1cHhcIlxuICAgIGhvdmVyQ29sb3IobG9nbyk7XG4gICAgXG5cbiAgICBcbiAgICAvL2xpbmtzXG4gICAgbGlua3Muc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBsaW5rcy5zdHlsZS5nYXAgPSBcIjQwcHhcIjtcbiAgICBcbiAgICBcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtzKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjAwcHgpJyk7XG4gICAgXG4gICAgZnVuY3Rpb24gbW9iaWxlU2NyZWVuKG1lZGlhUXVlcnkpe1xuICAgICAgIFxuICAgICAgICBpZihtZWRpYVF1ZXJ5Lm1hdGNoZXMpe1xuICAgICAgICAgICAgbmF2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb2JpbGVTY3JlZW4obWVkaWFRdWVyeSk7XG4gICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnICwgKCkgPT4gbW9iaWxlU2NyZWVuKG1lZGlhUXVlcnkpKTtcbn0iLCJpbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi4vc3JjL21lbnVwYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lcGFnZUxvYWQoKXtcbiAgICBjb25zdCBIT01FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVTZWN0aW9uJyk7XG4gICAgY29uc3QgTUVOVSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51U2VjdGlvbicpO1xuICAgIGNvbnN0IEFCT1VUVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRVc1NlY3Rpb24nKTtcblxuICAgIHdoaWxlKE1FTlUuZmlyc3RDaGlsZCApe1xuICAgICAgICBNRU5VLnJlbW92ZUNoaWxkKE1FTlUubGFzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKEFCT1VUVVMuZmlyc3RDaGlsZCl7XG4gICAgICAgIEFCT1VUVVMucmVtb3ZlQ2hpbGQoQUJPVVRVUy5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nICwgJ2FsbCAwLjNzIGVhc2UnKVxuICAgIFxuICAgIC8vSE9NRVxuICAgIFxuICAgIC8vaGVyby1TZWN0aW9uIFxuICAgIGNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBcbiAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxuICAgIGhlcm9QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgIG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm9EaXYnKVxuICAgIFxuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ2hlcm9IZWFkJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIlN0YXJ0IFlvdXIgRGF5IFdpdGggRnJlc2ggQ29mZmVlXCJcbiAgICBcbiAgICBoZXJvUC5jbGFzc0xpc3QuYWRkKCdoZXJvVHh0Jyk7XG4gICAgaGVyb1AudGV4dENvbnRlbnQgPSBcIkluZHVsZ2UgaW4gdGhlIGdvb2RuZXNzIG9mIGZyZXNobHkgYnJld2VkIGNvZmZlZSwgY3JhZnRlZCB3aXRoIGxvdmUgYW5kIGNhcmUuIENvbWUsIHNpcCwgYW5kIHNhdm9yIHRoZSBtb21lbnRzIG9mIGdvb2RuZXNzIGF0IG91ciBjb3p5IGhhdmVuLlwiXG4gICAgXG4gICAgb3JkZXJCdG4uY2xhc3NMaXN0LmFkZCgnb3JkZXJCdG4nKTtcbiAgICBvcmRlckJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCJcbiAgICBvcmRlckJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBtZW51UGFnZUxvYWQoKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gYnRuSG92ZXJDb2xvciAoeCkge1xuICAgICAgICB4Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjYzA2YjNlXCIgICBcbiAgICAgICAgICAgIHguc3R5bGUuY29sb3IgPSBcIiNmZmZcIlxuICAgICAgICAgICAgeC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDAuOClcIlxuICAgICAgICB9XG4gICAgICAgIHgub25tb3VzZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHguc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgeC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcbiAgICAgICAgfVxuICAgICAgICB4LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzIGVhc2VcIlxuICAgIH1cbiAgICBcbiAgICAvL2hlcm8gc3R5bGVcbiAgICBcbiAgICBcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIGhlcm9TZWN0aW9uLnBhZGRpbmcgPSBcIjAgMjBweFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5tYXhXaWR0aCA9IFwiMTIwMHB4XCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUubWFyZ2luID0gXCIwIGF1dG9cIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS53aWR0aCA9IFwiOTAlXCI7XG4gICAgaGVyb0Rpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXG4gICAgXG4gICAgaDEuc3R5bGUuZm9udFNpemUgPSBcIjNyZW1cIjtcbiAgICBoMS5zdHlsZS5tYXhXaWR0aCA9IFwiNjAwcHhcIjtcbiAgICBcbiAgICBoZXJvUC5zdHlsZS5mb250V2VpZ2h0ID0gXCIzMDBcIjtcbiAgICBoZXJvUC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjE1cHhcIjtcbiAgICBoZXJvUC5zdHlsZS5tYXhXaWR0aCA9IFwiNjAwcHhcIjsgICAgIFxuICAgIFxuICAgIFxuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaDEpXG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvUCk7XG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChvcmRlckJ0bik7XG4gICAgXG4gICAgb3JkZXJCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLm1hcmdpblRvcCA9IFwiMzhweFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLnBhZGRpbmcgPSBcIjEycHggMzBweFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNnB4XCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgXG4gICAgYnRuSG92ZXJDb2xvcihvcmRlckJ0bik7XG4gICAgXG4gICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgXG4gICAgSE9NRS5hcHBlbmRDaGlsZChoZXJvU2VjdGlvbilcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSE9NRSk7XG4gICAgXG59ICAgIFxuICAgICIsIlxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVQYWdlTG9hZCAoKSB7XG5cbiAgICBjb25zdCBIT01FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVTZWN0aW9uJyk7XG4gICAgY29uc3QgTUVOVSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51U2VjdGlvbicpO1xuICAgIGNvbnN0IEFCT1VUVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRVc1NlY3Rpb24nKTtcblxuICAgIHdoaWxlKEhPTUUuZmlyc3RDaGlsZCl7XG4gICAgICAgIEhPTUUucmVtb3ZlQ2hpbGQoSE9NRS5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdoaWxlIChBQk9VVFVTLmZpcnN0Q2hpbGQpe1xuICAgICAgICBBQk9VVFVTLnJlbW92ZUNoaWxkKEFCT1VUVVMubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCd0cmFuc2l0aW9uJyAsICdhbGwgMC4zcyBlYXNlJylcblxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtcy5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig0cHgpXCJcbiAgICBtZW51SXRlbXMuc3R5bGUubWF4V2lkdGggPSBcIjE1MDBweFwiXG4gICAgbWVudUl0ZW1zLnN0eWxlLmhlaWdodCA9IFwiNjAwcHhcIlxuICAgIG1lbnVJdGVtcy5zdHlsZS5tYXJnaW4gPSBcIjE4MHB4IGF1dG8gNDBweCBhdXRvXCJcbiAgICBtZW51SXRlbXMuc3R5bGUucGFkZGluZyA9IFwiMjBweFwiXG4gICAgbWVudUl0ZW1zLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBtZW51SXRlbXMuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCJcbiAgICBtZW51SXRlbXMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWFyb3VuZFwiO1xuICAgIG1lbnVJdGVtcy5zdHlsZS5qdXN0aWZ5SXRlbXMgPSBcImNlbnRlclwiXG4gICAgbWVudUl0ZW1zLnN0eWxlLnJvd0dhcCA9ICc4MHB4J1xuICAgIG1lbnVJdGVtcy5zdHlsZS5jb2x1bW5HYXAgPSAnODBweCdcbiAgICBtZW51SXRlbXMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjUpXCJcbiAgICBtZW51SXRlbXMuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KGF1dG8tZml0ICwgbWlubWF4KDIwMHB4ICwgMzAwcHgpKVwiXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbSAobmFtZSAsIHBhdGggLCBwcmljZSl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG4gICAgICAgIGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgICBidXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgaXRlbS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIlxuICAgICAgICBpdGVtLnN0eWxlLm1heFdpZHRoID0gXCIyODBweFwiXG4gICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPVwiMTAwJVwiXG4gICAgICAgIFxuXG4gICAgICAgIGl0ZW1JbWcuc3JjID0gcGF0aDtcbiAgICAgICAgaXRlbUltZy5zdHlsZS5oZWlnaHQgPSBcIjE4MHB4XCI7XG4gICAgICAgIGl0ZW1JbWcuc3R5bGUud2lkdGggPSBcIjI4MHB4XCJcbiAgICAgICAgaXRlbUltZy5hbHQgPSBuYW1lICsgXCIgXCIgKyBcInBpY1wiO1xuICAgICAgICBpdGVtSW1nLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiNHB4IHNvbGlkICNjMDZiM2VcIlxuICAgICAgICBpdGVtSW1nLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG5cbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lIDtcbiAgICAgICAgaXRlbU5hbWUuc3R5bGUuY29sb3IgPSBcIiNmZmZcIlxuICAgICAgICBpdGVtTmFtZS5zdHlsZS5mb250RmFtaWx5ID0gXCJSb2JvdG9cIlxuICAgICAgICBpdGVtTmFtZS5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIlxuXG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoYnV5KTtcbiAgICAgICAgZGV0YWlscy5zdHlsZS5wYWRkaW5nID0gXCIxMHB4IDBcIlxuICAgICAgICBkZXRhaWxzLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMXB4IHNvbGlkIGdyZXlcIlxuXG4gICAgICAgIGRldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBkZXRhaWxzLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiXG4gICAgICAgIGRldGFpbHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcblxuICAgICAgICBidXkudGV4dENvbnRlbnQgPSBcIkFERFwiXG4gICAgICAgIGJ1eS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIlxuICAgICAgICBidXkuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiXG4gICAgICAgIGJ1eS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiXG4gICAgICAgIGJ1eS5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgICAgIGJ1eS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjYzA2YjNlXCJcbiAgICAgICAgYnV5LnN0eWxlLnBhZGRpbmcgPSBcIjhweCAyMHB4XCJcbiAgICAgICAgYnV5LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiXG4gICAgICAgIGJ1eS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuXG4gICAgICAgIGZ1bmN0aW9uIGJ0bkhvdmVyQ29sb3IgKHgpIHtcbiAgICAgICAgICAgIHgub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgeC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCIgICBcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gXCIjYzA2YjNlXCJcbiAgICAgICAgICAgICAgICB4LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMC44KVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4Lm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgeC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjYzA2YjNlXCI7XG4gICAgICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgeC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHguc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMnMgZWFzZVwiXG4gICAgICAgIH1cblxuICAgICAgICBidG5Ib3ZlckNvbG9yKGJ1eSk7XG5cbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgICAgIGl0ZW1QcmljZS5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpXG5cbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgICAgICBtZW51SXRlbXMuYXBwZW5kKGl0ZW0pO1xuXG4gICAgfVxuICAgIE1FTlUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQUZGT0dBVE9cIiAsIFwiLi9hc3NldHMvYWZmb2dhdG8ucG5nXCIgLCBcIiQ2LjUwXCIpO1xuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQU1FUklDQU5PXCIgLCBcIi4vYXNzZXRzL2FtZXJpY2Fuby5wbmdcIiAsIFwiJDQuMDBcIik7XG4gICAgY3JlYXRlTWVudUl0ZW0oXCJDQVBQVUNDSU5PXCIgLCBcIi4vYXNzZXRzL2NhcHB1Y2Npbm8ucG5nXCIgLCBcIiQ1LjUwXCIpO1xuICAgIGNyZWF0ZU1lbnVJdGVtKFwiQ09SVEFET1wiICwgXCIuL2Fzc2V0cy9jb3J0YWRvLnBuZ1wiICwgXCIkNC41MFwiKTtcbiAgICBjcmVhdGVNZW51SXRlbShcIkVYUFJFU1NPXCIgLCBcIi4vYXNzZXRzL2V4cHJlc3NvLnBuZ1wiICwgXCIkMy41MFwiKTtcbiAgICBjcmVhdGVNZW51SXRlbShcIkxBVFRFXCIgLCBcIi4vYXNzZXRzL2xhdHRlLnBuZ1wiICwgXCIkNS41MFwiKTtcbiAgICBjcmVhdGVNZW51SXRlbShcIk1BQ0NISUFUT1wiICwgXCIuL2Fzc2V0cy9tYWNjaGlhdG8ucG5nXCIgLCBcIiQ0LjUwXCIpO1xuICAgIGNyZWF0ZU1lbnVJdGVtKFwiTU9DSEFcIiAsIFwiLi9hc3NldHMvbW9jaGFjY2luby5wbmdcIiAsIFwiJDYuMDBcIik7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGJvZHlOYXYgfSBmcm9tIFwiLi4vc3JjL2JvZHlOYXZcIjtcbmltcG9ydCB7IGhvbWVwYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGFib3V0VXNQYWdlTG9hZCB9IGZyb20gXCIuLi9zcmMvYWJvdXRVc3BhZ2VcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuYm9keU5hdigpO1xud2luZG93Lm9ubG9hZCA9IGFib3V0VXNQYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==