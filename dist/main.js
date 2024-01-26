/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    const body = document.querySelector('body'),
    content = body.querySelector('#content');
    
    
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
    
    //mediaquery for mobile screen
    
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
/* harmony import */ var _src_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/homepage */ "./src/homepage.js");



(0,_src_homepage__WEBPACK_IMPORTED_MODULE_0__.homepageLoad)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3JNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTitDOzs7QUFHL0MsMkRBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhZmUvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWZlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYWZlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhZmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhvbWVwYWdlTG9hZCgpIHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG4gICAgY29udGVudCA9IGJvZHkucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSxcbiAgICBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKSxcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcbiAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgZnVuY3Rpb24gaG92ZXJDb2xvciAoeCAsIGZvbnRDb2xvciA9IFwiI2ZmZlwiKSB7XG4gICAgICAgIHgub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gXCIjYzA2YjNlXCJcbiAgICAgICAgfVxuICAgICAgICB4Lm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gZm9udENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHguc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMnMgZWFzZVwiXG4gICAgfVxuXG4gICAgLy8gYm9keVxuICAgIGJvZHkuc3R5bGUubWFyZ2luID0gMDtcbiAgICBib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xuICAgIGJvZHkuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgYm9keS5zdHlsZS5mb250RmFtaWx5ID0gXCInUG9wcGlucycgLCBzYW5zLXNlcmlmXCI7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcIi4vYXNzZXRzL2hlcm8tYmcuanBnXCIpJ1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nICwgJ2FsbCAxcyBlYXNlJylcblxuICAgIC8vaGVhZGVyXG4gICAgLy9uYXYgYmFyXG4gICAgXG4gICAgLy9Ib21lLCBNZW51ICwgQWJvdXQgVXNcbiAgICBsZXQgbGlua3MgPSB1bDtcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdtZW51LWxpbmtzJyk7XG4gICAgbGlua3Muc3R5bGUubGlzdFN0eWxlVHlwZSA9IFwibm9uZVwiO1xuICAgIFxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lLnN0eWxlLm1hcmdpbiA9IFwiMFwiXG4gICAgaG9tZS5zdHlsZS5wYWRkaW5nID0gXCIwXCJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICBob3ZlckNvbG9yKGhvbWUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBob3ZlckNvbG9yKG1lbnUpXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgXG4gICAgbGV0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcycpO1xuICAgIGFib3V0VXMuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjMycHhcIlxuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgaG92ZXJDb2xvcihhYm91dFVzKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgICBcbiAgICAvL2hlYWRlclxuICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBoZWFkZXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgaGVhZGVyLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxuICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgXG4gICAgLy9uYXZcbiAgICBuYXYuc3R5bGUuY29sb3IgPSBcIiNmZmZcIlxuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBuYXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgbmF2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1iZXR3ZWVuXCJcbiAgICBuYXYuc3R5bGUubWF4V2lkdGggPSBcIjEyMDBweFwiO1xuICAgIG5hdi5zdHlsZS5tYXJnaW4gPSBcIjAgYXV0b1wiXG5cbiAgICBcbiAgICBcbiAgICAvL2xvZ29cbiAgICBsZXQgbG9nbyA9IHA7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdDYWZmZWluZSAnO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAnY28uJ1xuICAgIHNwYW4uc3R5bGUuY29sb3IgPSBcIiNjMDZiM2VcIlxuICAgIGxvZ28uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbG9nby5zdHlsZS5mb250U2l6ZSA9IFwiMi4xcmVtXCJcbiAgICBsb2dvLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiO1xuICAgIGhvdmVyQ29sb3IobG9nbyk7XG4gICAgXG5cbiAgICBcbiAgICAvL2xpbmtzXG4gICAgbGlua3Muc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBsaW5rcy5zdHlsZS5nYXAgPSBcIjQwcHhcIjtcbiAgICBcbiAgICBcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtzKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICAvL0hPTUVcbiAgICBcbiAgICAvL2hlcm8tU2VjdGlvbiBcbiAgICBjb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBoZXJvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gICAgXG4gICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcbiAgICBoZXJvUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaGVyb0Rpdi5jbGFzc0xpc3QuYWRkKCdoZXJvRGl2JylcbiAgICBcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCdoZXJvSGVhZCcpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJTdGFydCBZb3VyIERheSBXaXRoIEZyZXNoIENvZmZlZVwiXG4gICAgXG4gICAgaGVyb1AuY2xhc3NMaXN0LmFkZCgnaGVyb1R4dCcpO1xuICAgIGhlcm9QLnRleHRDb250ZW50ID0gXCJJbmR1bGdlIGluIHRoZSBnb29kbmVzcyBvZiBmcmVzaGx5IGJyZXdlZCBjb2ZmZWUsIGNyYWZ0ZWQgd2l0aCBsb3ZlIGFuZCBjYXJlLiBDb21lLCBzaXAsIGFuZCBzYXZvciB0aGUgbW9tZW50cyBvZiBnb29kbmVzcyBhdCBvdXIgY296eSBoYXZlbi5cIlxuICAgIFxuICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ29yZGVyQnRuJyk7XG4gICAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gYnRuSG92ZXJDb2xvciAoeCkge1xuICAgICAgICB4Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjYzA2YjNlXCIgICBcbiAgICAgICAgICAgIHguc3R5bGUuY29sb3IgPSBcIiNmZmZcIlxuICAgICAgICB9XG4gICAgICAgIHgub25tb3VzZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHguc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIlxuICAgICAgICB9XG4gICAgICAgIHguc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMnMgZWFzZVwiXG4gICAgfVxuICAgIFxuICAgIC8vaGVybyBzdHlsZVxuICAgIFxuICAgIFxuICAgIGhlcm9TZWN0aW9uLnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgaGVyb1NlY3Rpb24ucGFkZGluZyA9IFwiMCAyMHB4XCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUuY29sb3IgPSBcIiNmZmZcIlxuICAgIGhlcm9TZWN0aW9uLnN0eWxlLm1heFdpZHRoID0gXCIxMjAwcHhcIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5tYXJnaW4gPSBcIjAgYXV0b1wiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgaGVyb0Rpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXG4gICAgXG4gICAgaDEuc3R5bGUuZm9udFNpemUgPSBcIjNyZW1cIjtcbiAgICBoMS5zdHlsZS5tYXhXaWR0aCA9IFwiNjAwcHhcIjtcbiAgICBcbiAgICBoZXJvUC5zdHlsZS5mb250V2VpZ2h0ID0gXCIzMDBcIjtcbiAgICBoZXJvUC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjE1cHhcIjtcbiAgICBoZXJvUC5zdHlsZS5tYXhXaWR0aCA9IFwiNjAwcHhcIjsgICAgIFxuICAgIFxuICAgIFxuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaDEpXG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvUCk7XG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChvcmRlckJ0bik7XG4gICAgXG4gICAgb3JkZXJCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLm1hcmdpblRvcCA9IFwiMzhweFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLnBhZGRpbmcgPSBcIjEycHggMzBweFwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNnB4XCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgXG4gICAgYnRuSG92ZXJDb2xvcihvcmRlckJ0bik7XG4gICAgXG4gICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvU2VjdGlvbilcbiAgICBcbiAgICAvL21lZGlhcXVlcnkgZm9yIG1vYmlsZSBzY3JlZW5cbiAgICBcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDYwMHB4KScpO1xuICAgIFxuICAgIGZ1bmN0aW9uIG1vYmlsZVNjcmVlbihtZWRpYVF1ZXJ5KXtcbiAgICAgICBcbiAgICAgICAgaWYobWVkaWFRdWVyeS5tYXRjaGVzKXtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb2JpbGVTY3JlZW4obWVkaWFRdWVyeSk7XG4gICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnICwgKCkgPT4gbW9iaWxlU2NyZWVuKG1lZGlhUXVlcnkpKTtcbiAgICBcbn0gICAgXG4gICAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZUxvYWQgfSBmcm9tIFwiLi4vc3JjL2hvbWVwYWdlXCI7XG5cblxuaG9tZXBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9