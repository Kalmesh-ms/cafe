
export function menuPageLoad () {

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