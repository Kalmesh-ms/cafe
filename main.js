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

    const brownie = "#c06b3e";
    
    
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
    // body.style.background = "url('../src/assets/latte.png')"
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
    
    h1.style.fontSize = "3rem";
    h1.style.maxWidth = "600px";
    h1.style.color = ""
    
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
    
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    
    function mobileScreen(mediaQuery){
       
        if(mediaQuery.matches){
          
            links.style.position = "fixed";
            links.style.right = "-300px";
            links.style.top = "0";
            links.style.height = "100vh";
            links.style.width = "170px";
            links.style.background = "#fff";
            links.style.margin = "0";
            links.style.flexDirection = "column";
            links.style.color = "#000"
            links.style.padding = "70px 40px 0"
            links.setAttribute('transition' , 'all 0.15s ease')
            hoverColor(home, "#000");
            hoverColor(menu , "#000");
            hoverColor(aboutUs , "#000");

            
            const optionsBtn = document.createElement('span');
            optionsBtn.classList.add("material-symbols-outlined");
            optionsBtn.setAttribute('id' , 'optionsBtn');
            optionsBtn.style.color = "#fff"
            optionsBtn.textContent = "menu"
            optionsBtn.style.position = "absolute"
            optionsBtn.style.right = "50px";
            optionsBtn.style.top = "20px";
            optionsBtn.style.cursor = "pointer";
            
            const closeOptionsBtn = document.createElement('span');
            closeOptionsBtn.classList.add('material-symbols-outlined');
            closeOptionsBtn.setAttribute('id' , 'closeOptionsBtn')
            closeOptionsBtn.textContent = "close";
            closeOptionsBtn.style.position = "absolute"
            closeOptionsBtn.style.right = "50px";
            closeOptionsBtn.style.top = "20px";
            closeOptionsBtn.style.color = "#000"
            closeOptionsBtn.style.cursor = "pointer";
            
            nav.appendChild(optionsBtn);
            optionsBtn.addEventListener('click' , () => {
                links.style.right = "0";
                links.style.color = "#000"
                nav.appendChild(closeOptionsBtn);
            } )

            closeOptionsBtn.addEventListener ('click' , () => {
                links.style.right = "-300px";
                nav.removeChild(closeOptionsBtn);
            } )

        }
        else  return;
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
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");


(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homepageLoad)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDcFBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDLHVEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWZlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2NhZmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FmZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhZmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWZlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBob21lcGFnZUxvYWQoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgIGNvbnRlbnQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBicm93bmllID0gXCIjYzA2YjNlXCI7XG4gICAgXG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyksXG4gICAgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JyksXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGZ1bmN0aW9uIGhvdmVyQ29sb3IgKHggLCBmb250Q29sb3IgPSBcIiNmZmZcIikge1xuICAgICAgICB4Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiI2MwNmIzZVwiXG4gICAgICAgIH1cbiAgICAgICAgeC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IGZvbnRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB4LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzIGVhc2VcIlxuICAgIH1cblxuICAgIC8vIGJvZHlcbiAgICBib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgYm9keS5zdHlsZS5wYWRkaW5nID0gMDtcbiAgICBib2R5LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIGJvZHkuc3R5bGUuZm9udEZhbWlseSA9IFwiJ1BvcHBpbnMnICwgc2Fucy1zZXJpZlwiO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCIuL2Fzc2V0cy9oZXJvLWJnLmpwZ1wiKSdcbiAgICAvLyBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcInVybCgnLi4vc3JjL2Fzc2V0cy9sYXR0ZS5wbmcnKVwiXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICBib2R5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgndHJhbnNpdGlvbicgLCAnYWxsIDFzIGVhc2UnKVxuXG4gICAgLy9oZWFkZXJcbiAgICAvL25hdiBiYXJcbiAgICBcbiAgICAvL0hvbWUsIE1lbnUgLCBBYm91dCBVc1xuICAgIGxldCBsaW5rcyA9IHVsO1xuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlua3MnKTtcbiAgICBsaW5rcy5zdHlsZS5saXN0U3R5bGVUeXBlID0gXCJub25lXCI7XG4gICAgXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvbWUuc3R5bGUubWFyZ2luID0gXCIwXCJcbiAgICBob21lLnN0eWxlLnBhZGRpbmcgPSBcIjBcIlxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIGhvdmVyQ29sb3IoaG9tZSlcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChob21lKTtcbiAgICBcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGhvdmVyQ29sb3IobWVudSlcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBcbiAgICBsZXQgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdhYm91dFVzJyk7XG4gICAgYWJvdXRVcy50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgICBob3ZlckNvbG9yKGFib3V0VXMpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGFib3V0VXMpO1xuICAgIFxuICAgIC8vaGVhZGVyXG4gICAgaGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIGhlYWRlci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICBoZWFkZXIuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgIGhlYWRlci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiXG4gICAgaGVhZGVyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgICBcbiAgICAvL25hdlxuICAgIG5hdi5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIG5hdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBuYXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIlxuICAgIG5hdi5zdHlsZS5tYXhXaWR0aCA9IFwiMTIwMHB4XCI7XG4gICAgbmF2LnN0eWxlLm1hcmdpbiA9IFwiMCBhdXRvXCJcblxuICAgIFxuICAgIFxuICAgIC8vbG9nb1xuICAgIGxldCBsb2dvID0gcDtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ0NhZmZlaW5lICc7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9ICdjby4nXG4gICAgc3Bhbi5zdHlsZS5jb2xvciA9IFwiI2MwNmIzZVwiXG4gICAgbG9nby5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBsb2dvLnN0eWxlLmZvbnRTaXplID0gXCIyLjFyZW1cIlxuICAgIGxvZ28uc3R5bGUuZm9udFdlaWdodCA9IFwiNjAwXCI7XG4gICAgaG92ZXJDb2xvcihsb2dvKTtcbiAgICBcblxuICAgIFxuICAgIC8vbGlua3NcbiAgICBsaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGxpbmtzLnN0eWxlLmdhcCA9IFwiNDBweFwiO1xuICAgIFxuICAgIFxuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobGlua3MpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIC8vSE9NRVxuICAgIFxuICAgIC8vaGVyby1TZWN0aW9uIFxuICAgIGNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBcbiAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxuICAgIGhlcm9QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgIG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm9EaXYnKVxuICAgIFxuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ2hlcm9IZWFkJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIlN0YXJ0IFlvdXIgRGF5IFdpdGggRnJlc2ggQ29mZmVlXCJcbiAgICBcbiAgICBoZXJvUC5jbGFzc0xpc3QuYWRkKCdoZXJvVHh0Jyk7XG4gICAgaGVyb1AudGV4dENvbnRlbnQgPSBcIkluZHVsZ2UgaW4gdGhlIGdvb2RuZXNzIG9mIGZyZXNobHkgYnJld2VkIGNvZmZlZSwgY3JhZnRlZCB3aXRoIGxvdmUgYW5kIGNhcmUuIENvbWUsIHNpcCwgYW5kIHNhdm9yIHRoZSBtb21lbnRzIG9mIGdvb2RuZXNzIGF0IG91ciBjb3p5IGhhdmVuLlwiXG4gICAgXG4gICAgb3JkZXJCdG4uY2xhc3NMaXN0LmFkZCgnb3JkZXJCdG4nKTtcbiAgICBvcmRlckJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCJcbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBidG5Ib3ZlckNvbG9yICh4KSB7XG4gICAgICAgIHgub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB4LnN0eWxlLmJhY2tncm91bmQgPSBcIiNjMDZiM2VcIiAgIFxuICAgICAgICAgICAgeC5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgICAgIH1cbiAgICAgICAgeC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCI7XG4gICAgICAgICAgICB4LnN0eWxlLmNvbG9yID0gXCJibGFja1wiXG4gICAgICAgIH1cbiAgICAgICAgeC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4ycyBlYXNlXCJcbiAgICB9XG4gICAgXG4gICAgLy9oZXJvIHN0eWxlXG4gICAgXG4gICAgXG4gICAgaGVyb1NlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBoZXJvU2VjdGlvbi5wYWRkaW5nID0gXCIwIDIwcHhcIjtcbiAgICBoZXJvU2VjdGlvbi5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiXG4gICAgaGVyb1NlY3Rpb24uc3R5bGUubWF4V2lkdGggPSBcIjEyMDBweFwiO1xuICAgIGhlcm9TZWN0aW9uLnN0eWxlLm1hcmdpbiA9IFwiMCBhdXRvXCI7XG4gICAgaGVyb1NlY3Rpb24uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBcbiAgICBoMS5zdHlsZS5mb250U2l6ZSA9IFwiM3JlbVwiO1xuICAgIGgxLnN0eWxlLm1heFdpZHRoID0gXCI2MDBweFwiO1xuICAgIGgxLnN0eWxlLmNvbG9yID0gXCJcIlxuICAgIFxuICAgIGhlcm9QLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjMwMFwiO1xuICAgIGhlcm9QLnN0eWxlLm1hcmdpblRvcCA9IFwiMTVweFwiO1xuICAgIGhlcm9QLnN0eWxlLm1heFdpZHRoID0gXCI2MDBweFwiOyAgICAgXG4gICAgXG4gICAgXG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoMSlcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9QKTtcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKG9yZGVyQnRuKTtcbiAgICBcbiAgICBvcmRlckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCI7XG4gICAgb3JkZXJCdG4uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIG9yZGVyQnRuLnN0eWxlLmZvbnRTaXplID0gXCIxcmVtXCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuZm9udFdlaWdodCA9IFwiNTAwXCI7XG4gICAgb3JkZXJCdG4uc3R5bGUubWFyZ2luVG9wID0gXCIzOHB4XCI7XG4gICAgb3JkZXJCdG4uc3R5bGUucGFkZGluZyA9IFwiMTJweCAzMHB4XCI7XG4gICAgb3JkZXJCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcbiAgICBvcmRlckJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBcbiAgICBidG5Ib3ZlckNvbG9yKG9yZGVyQnRuKTtcbiAgICBcbiAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm9TZWN0aW9uKVxuICAgIFxuICAgIC8vbWVkaWFxdWVyeSBmb3IgbW9iaWxlIHNjcmVlblxuICAgIFxuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTAwcHgpJyk7XG4gICAgXG4gICAgZnVuY3Rpb24gbW9iaWxlU2NyZWVuKG1lZGlhUXVlcnkpe1xuICAgICAgIFxuICAgICAgICBpZihtZWRpYVF1ZXJ5Lm1hdGNoZXMpe1xuICAgICAgICAgIFxuICAgICAgICAgICAgbGlua3Muc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICBsaW5rcy5zdHlsZS5yaWdodCA9IFwiLTMwMHB4XCI7XG4gICAgICAgICAgICBsaW5rcy5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgIGxpbmtzLnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICAgICAgICAgIGxpbmtzLnN0eWxlLndpZHRoID0gXCIxNzBweFwiO1xuICAgICAgICAgICAgbGlua3Muc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xuICAgICAgICAgICAgbGlua3Muc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgICAgICAgICBsaW5rcy5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIGxpbmtzLnN0eWxlLmNvbG9yID0gXCIjMDAwXCJcbiAgICAgICAgICAgIGxpbmtzLnN0eWxlLnBhZGRpbmcgPSBcIjcwcHggNDBweCAwXCJcbiAgICAgICAgICAgIGxpbmtzLnNldEF0dHJpYnV0ZSgndHJhbnNpdGlvbicgLCAnYWxsIDAuMTVzIGVhc2UnKVxuICAgICAgICAgICAgaG92ZXJDb2xvcihob21lLCBcIiMwMDBcIik7XG4gICAgICAgICAgICBob3ZlckNvbG9yKG1lbnUgLCBcIiMwMDBcIik7XG4gICAgICAgICAgICBob3ZlckNvbG9yKGFib3V0VXMgLCBcIiMwMDBcIik7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIG9wdGlvbnNCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgICAgICAgICBvcHRpb25zQnRuLnNldEF0dHJpYnV0ZSgnaWQnICwgJ29wdGlvbnNCdG4nKTtcbiAgICAgICAgICAgIG9wdGlvbnNCdG4uc3R5bGUuY29sb3IgPSBcIiNmZmZcIlxuICAgICAgICAgICAgb3B0aW9uc0J0bi50ZXh0Q29udGVudCA9IFwibWVudVwiXG4gICAgICAgICAgICBvcHRpb25zQnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBvcHRpb25zQnRuLnN0eWxlLnJpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICAgICAgICBvcHRpb25zQnRuLnN0eWxlLnRvcCA9IFwiMjBweFwiO1xuICAgICAgICAgICAgb3B0aW9uc0J0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2xvc2VPcHRpb25zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgY2xvc2VPcHRpb25zQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgIGNsb3NlT3B0aW9uc0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdjbG9zZU9wdGlvbnNCdG4nKVxuICAgICAgICAgICAgY2xvc2VPcHRpb25zQnRuLnRleHRDb250ZW50ID0gXCJjbG9zZVwiO1xuICAgICAgICAgICAgY2xvc2VPcHRpb25zQnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBjbG9zZU9wdGlvbnNCdG4uc3R5bGUucmlnaHQgPSBcIjUwcHhcIjtcbiAgICAgICAgICAgIGNsb3NlT3B0aW9uc0J0bi5zdHlsZS50b3AgPSBcIjIwcHhcIjtcbiAgICAgICAgICAgIGNsb3NlT3B0aW9uc0J0bi5zdHlsZS5jb2xvciA9IFwiIzAwMFwiXG4gICAgICAgICAgICBjbG9zZU9wdGlvbnNCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChvcHRpb25zQnRuKTtcbiAgICAgICAgICAgIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmtzLnN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgbGlua3Muc3R5bGUuY29sb3IgPSBcIiMwMDBcIlxuICAgICAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChjbG9zZU9wdGlvbnNCdG4pO1xuICAgICAgICAgICAgfSApXG5cbiAgICAgICAgICAgIGNsb3NlT3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snICwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmtzLnN0eWxlLnJpZ2h0ID0gXCItMzAwcHhcIjtcbiAgICAgICAgICAgICAgICBuYXYucmVtb3ZlQ2hpbGQoY2xvc2VPcHRpb25zQnRuKTtcbiAgICAgICAgICAgIH0gKVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBtb2JpbGVTY3JlZW4obWVkaWFRdWVyeSk7XG4gICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnICwgKCkgPT4gbW9iaWxlU2NyZWVuKG1lZGlhUXVlcnkpKTtcbiAgICBcbn0gICAgXG4gICAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZUxvYWQgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5ob21lcGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=