export function homepageLoad() {

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
    