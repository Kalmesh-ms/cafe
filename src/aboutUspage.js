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

}