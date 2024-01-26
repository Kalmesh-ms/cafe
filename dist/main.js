/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bodyNav.js":
/*!************************!*\
  !*** ./src/bodyNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bodyNav: () => (/* binding */ bodyNav)
/* harmony export */ });
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
    body.setAttribute('transition' , 'all 1s ease')

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
    hoverColor(home)
    links.appendChild(home);
    
    let menu = document.createElement('li');
    menu.classList.add('menu');
    menu.textContent = "Menu";
    hoverColor(menu)
    links.appendChild(menu);
    
    let aboutUs = document.createElement('li');
    aboutUs.classList.add('aboutUs');
    aboutUs.style.marginRight = "32px"
    aboutUs.textContent = "About Us";
    hoverColor(aboutUs);
    links.appendChild(aboutUs);
    
    //header
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.width = "100%"
    header.style.padding = "20px";
    
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
    hoverColor(logo);
    

    
    //links
    links.style.display = 'flex';
    links.style.gap = "40px";
    
    
    nav.appendChild(logo);
    nav.appendChild(links);
    header.appendChild(nav)
    content.appendChild(header);

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

function homepageLoad() {


    const content = document.querySelector('#content');

    
    
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
    heroSection.style.width = "100%";
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
    
    content.appendChild(heroSection)
    
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



(0,_src_bodyNav__WEBPACK_IMPORTED_MODULE_0__.bodyNav)();
(0,_src_homepage__WEBPACK_IMPORTED_MODULE_1__.homepageLoad)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9HTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNyRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDTTs7QUFFL0MscURBQU87QUFDUCwyREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FmZS8uL3NyYy9ib2R5TmF2LmpzIiwid2VicGFjazovL2NhZmUvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWZlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYWZlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhZmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGJvZHlOYXYgKCl7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSxcbiAgICBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKSxcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcbiAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgZnVuY3Rpb24gaG92ZXJDb2xvciAoeCAsIGZvbnRDb2xvciA9IFwiI2ZmZlwiKSB7XG4gICAgICAgIHgub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gXCIjYzA2YjNlXCJcbiAgICAgICAgfVxuICAgICAgICB4Lm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gZm9udENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHguc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMnMgZWFzZVwiXG4gICAgfVxuXG4gICAgLy8gYm9keVxuICAgIGJvZHkuc3R5bGUubWFyZ2luID0gMDtcbiAgICBib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgIGJvZHkuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgYm9keS5zdHlsZS5mb250RmFtaWx5ID0gXCInUG9wcGlucycgLCBzYW5zLXNlcmlmXCI7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcIi4vYXNzZXRzL2hlcm8tYmcuanBnXCIpJ1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nICwgJ2FsbCAxcyBlYXNlJylcblxuICAgIC8vaGVhZGVyXG4gICAgLy9uYXYgYmFyXG4gICAgXG4gICAgLy9Ib21lLCBNZW51ICwgQWJvdXQgVXNcbiAgICBsZXQgbGlua3MgPSB1bDtcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdtZW51LWxpbmtzJyk7XG4gICAgbGlua3Muc3R5bGUubGlzdFN0eWxlVHlwZSA9IFwibm9uZVwiO1xuICAgIFxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lLnN0eWxlLm1hcmdpbiA9IFwiMFwiXG4gICAgaG9tZS5zdHlsZS5wYWRkaW5nID0gXCIwXCJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICBob3ZlckNvbG9yKGhvbWUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBob3ZlckNvbG9yKG1lbnUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgbGV0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcycpO1xuICAgIGFib3V0VXMuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjMycHhcIlxuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgaG92ZXJDb2xvcihhYm91dFVzKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgICBcbiAgICAvL2hlYWRlclxuICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBoZWFkZXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgaGVhZGVyLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxuICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgXG4gICAgLy9uYXZcbiAgICBuYXYuc3R5bGUuY29sb3IgPSBcIiNmZmZcIlxuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBuYXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgbmF2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1iZXR3ZWVuXCJcbiAgICBuYXYuc3R5bGUubWF4V2lkdGggPSBcIjEyMDBweFwiO1xuICAgIG5hdi5zdHlsZS5tYXJnaW4gPSBcIjAgYXV0b1wiXG5cbiAgICBcbiAgICBcbiAgICAvL2xvZ29cbiAgICBsZXQgbG9nbyA9IHA7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdDYWZmZWluZSAnO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAnY28uJ1xuICAgIHNwYW4uc3R5bGUuY29sb3IgPSBcIiNjMDZiM2VcIlxuICAgIGxvZ28uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbG9nby5zdHlsZS5mb250U2l6ZSA9IFwiMi4xcmVtXCJcbiAgICBsb2dvLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiO1xuICAgIGhvdmVyQ29sb3IobG9nbyk7XG4gICAgXG5cbiAgICBcbiAgICAvL2xpbmtzXG4gICAgbGlua3Muc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBsaW5rcy5zdHlsZS5nYXAgPSBcIjQwcHhcIjtcbiAgICBcbiAgICBcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtzKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjAwcHgpJyk7XG4gICAgXG4gICAgZnVuY3Rpb24gbW9iaWxlU2NyZWVuKG1lZGlhUXVlcnkpe1xuICAgICAgIFxuICAgICAgICBpZihtZWRpYVF1ZXJ5Lm1hdGNoZXMpe1xuICAgICAgICAgICAgbmF2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb2JpbGVTY3JlZW4obWVkaWFRdWVyeSk7XG4gICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnICwgKCkgPT4gbW9iaWxlU2NyZWVuKG1lZGlhUXVlcnkpKTtcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBob21lcGFnZUxvYWQoKSB7XG5cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgXG4gICAgXG4gICAgLy9IT01FXG4gICAgXG4gICAgLy9oZXJvLVNlY3Rpb24gXG4gICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaGVyb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIFxuICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXG4gICAgaGVyb1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVyb0RpdicpXG4gICAgXG4gICAgaDEuY2xhc3NMaXN0LmFkZCgnaGVyb0hlYWQnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiU3RhcnQgWW91ciBEYXkgV2l0aCBGcmVzaCBDb2ZmZWVcIlxuICAgIFxuICAgIGhlcm9QLmNsYXNzTGlzdC5hZGQoJ2hlcm9UeHQnKTtcbiAgICBoZXJvUC50ZXh0Q29udGVudCA9IFwiSW5kdWxnZSBpbiB0aGUgZ29vZG5lc3Mgb2YgZnJlc2hseSBicmV3ZWQgY29mZmVlLCBjcmFmdGVkIHdpdGggbG92ZSBhbmQgY2FyZS4gQ29tZSwgc2lwLCBhbmQgc2F2b3IgdGhlIG1vbWVudHMgb2YgZ29vZG5lc3MgYXQgb3VyIGNvenkgaGF2ZW4uXCJcbiAgICBcbiAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKCdvcmRlckJ0bicpO1xuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIlxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIGJ0bkhvdmVyQ29sb3IgKHgpIHtcbiAgICAgICAgeC5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHguc3R5bGUuYmFja2dyb3VuZCA9IFwiI2MwNmIzZVwiICAgXG4gICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcbiAgICAgICAgfVxuICAgICAgICB4Lm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB4LnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZcIjtcbiAgICAgICAgICAgIHguc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgfVxuICAgICAgICB4LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzIGVhc2VcIlxuICAgIH1cbiAgICBcbiAgICAvL2hlcm8gc3R5bGVcbiAgICBcbiAgICBcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIGhlcm9TZWN0aW9uLnBhZGRpbmcgPSBcIjAgMjBweFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLmNvbG9yID0gXCIjZmZmXCJcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5tYXhXaWR0aCA9IFwiMTIwMHB4XCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUubWFyZ2luID0gXCIwIGF1dG9cIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGhlcm9EaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuICAgIFxuICAgIGgxLnN0eWxlLmZvbnRTaXplID0gXCIzcmVtXCI7XG4gICAgaDEuc3R5bGUubWF4V2lkdGggPSBcIjYwMHB4XCI7XG4gICAgXG4gICAgaGVyb1Auc3R5bGUuZm9udFdlaWdodCA9IFwiMzAwXCI7XG4gICAgaGVyb1Auc3R5bGUubWFyZ2luVG9wID0gXCIxNXB4XCI7XG4gICAgaGVyb1Auc3R5bGUubWF4V2lkdGggPSBcIjYwMHB4XCI7ICAgICBcbiAgICBcbiAgICBcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGgxKVxuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb1ApO1xuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xuICAgIFxuICAgIG9yZGVyQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gXCI1MDBcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjM4cHhcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5wYWRkaW5nID0gXCIxMnB4IDMwcHhcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjZweFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIFxuICAgIGJ0bkhvdmVyQ29sb3Iob3JkZXJCdG4pO1xuICAgIFxuICAgIGhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9EaXYpO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pXG4gICAgXG59ICAgIFxuICAgICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYm9keU5hdiB9IGZyb20gXCIuLi9zcmMvYm9keU5hdlwiO1xuaW1wb3J0IHsgaG9tZXBhZ2VMb2FkIH0gZnJvbSBcIi4uL3NyYy9ob21lcGFnZVwiO1xuXG5ib2R5TmF2KCk7XG5ob21lcGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=