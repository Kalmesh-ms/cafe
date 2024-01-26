import { menuPageLoad } from "../src/menupage";
import { homepageLoad } from "../src/homepage";
import { aboutUsPageLoad } from "../src/aboutUspage";


export function bodyNav (){

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
        homepageLoad();
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
        menuPageLoad();

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
        aboutUsPageLoad();

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
        homepageLoad();
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