export function aboutUsPageLoad () {
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