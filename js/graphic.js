function loadPage(page) {
    actualPage = pages[page];
    /*PAGE LOAD FROM PAGE PROPERTIES OF actualPage*/
    /*DELETE*/
    if (actualPage.page.deletBodyContent) {
        document.body.innerHTML = "";
    };
    if (actualPage.page.indexFirstLoad) {
        var titleBar = document.getElementById("titlebar");
        titleBar.parentNode.removeChild(titleBar);
    };
    if (actualPage.page.deleteMenu) {
        var menu = document.getElementById("menu");
        menu.parentNode.removeChild(menu);
    };
    if (actualPage.page.deleteCardFlow) {
        var cardFlow = document.getElementById("cardflow");
        cardFlow.parentNode.removeChild(cardFlow);
    };
    if (actualPage.page.deleteConnectCard) {
        var connectCard = document.getElementById("connectcard");
        connectCard.parentNode.removeChild(connectCard);
    };
    /*CREATE*/
    if (actualPage.page.createTitleBar) {
        createTitleBar();
    };
    if (actualPage.page.createMenu) {
        createMenu();
    };
    if (actualPage.page.createCardFlow) {
        createCardFlow();
    };
    if (actualPage.page.createConnectCard) {
        createConnectCard();
    };
    if (actualPage.page.createCardView) {
        createCardView();
    };
    /*CHANGE*/
    if (actualPage.page.changeWindowTitle) {
        changeWindowTitle();
    };
    if (actualPage.page.changeTitleBar) {
        changeTitleBar();
    };
    if (actualPage.page.changeMenu) {
        changeMenu();
    };
    if (actualPage.page.changeCardFlow) {
        changeCardFlow();
    };
    if (actualPage.page.changePageBackground) {
        changePageBackground()
    };
}
//GRAPHIC FUNCTIONS
//CREATE FUNCTIONS

function createTitleBar() {
    var titleBar = document.createElement("div");
    titleBar.id = "titlebar";
    var closeButton = document.createElement("button");
    closeButton.id = "closebutton";
    titleBar.appendChild(closeButton);
    var maximizeButton = document.createElement("button");
    maximizeButton.id = "maximizebutton";
    titleBar.appendChild(maximizeButton);
    document.body.appendChild(titleBar);
    closeButton.addEventListener("click", function() {
        appWindow.close();
    });
    maximizeButton.addEventListener("click", function() {
        appWindow[appWindow.isMaximized() ? "restore" : "maximize"]();
    });
}

function createMenu() {
    var menu = document.createElement("div");
    menu.id = "menu";
    var menuHeader = document.createElement("div");
    menuHeader.id = "menuheader";
    menuHeader.classList.add(actualPage.menuheader.headercolor);
    var pageTitle = document.createElement("span");
    pageTitle.id = "pagetitle";
    menuHeader.appendChild(pageTitle);
    menu.appendChild(menuHeader);
    pageTitle.innerText = actualPage.menuheader.pagetitle;
    var menuButton1 = document.createElement("button");
    if (typeof actualPage.menu[1] != 'undefined') {
        menuButton1.innerHTML = actualPage.menu[1].caption;
        menuButton1.classList.add("menubutton");
        menuButton1.addEventListener("click", function() {
            loadPage(actualPage.menu[1].load);
        });
        menuButton1.id = "menu1";
        menu.appendChild(menuButton1);
    };
    var menuButton2 = document.createElement("button");
    if (typeof actualPage.menu[2] != 'undefined') {
        menuButton2.innerHTML = actualPage.menu[2].caption;
        menuButton2.classList.add("menubutton");
        menuButton2.addEventListener("click", function() {
            loadPage(actualPage.menu[2].load);
        });
        menuButton2.id = "menu2";
        menu.appendChild(menuButton2);
    };
    var menuButton3 = document.createElement("button");
    if (typeof actualPage.menu[3] != 'undefined') {
        menuButton3.innerHTML = actualPage.menu[3].caption;
        menuButton3.classList.add("menubutton");
        menuButton3.addEventListener("click", function() {
            loadPage(actualPage.menu[3].load);
        });
        menu.appendChild(menuButton3);
    };
    var menuButton4 = document.createElement("button");
    if (typeof actualPage.menu[4] != 'undefined') {
        menuButton4.innerHTML = actualPage.menu[4].caption;
        menuButton4.classList.add("menubutton");
        menuButton4.addEventListener("click", function() {
            loadPage(actualPage.menu[4].load);
        });
        menu.appendChild(menuButton4);
    };
    var menuButton5 = document.createElement("button");
    if (typeof actualPage.menu[5] != 'undefined') {
        menuButton5.innerHTML = actualPage.menu[5].caption;
        menuButton5.classList.add("menubutton");
        menuButton5.addEventListener("click", function() {
            loadPage(actualPage.menu[5].load);
        });
        menu.appendChild(menuButton5);
    };
    var menuButton6 = document.createElement("button");
    if (typeof actualPage.menu[6] != 'undefined') {
        menuButton6.innerHTML = actualPage.menu[6].caption;
        menuButton6.classList.add("menubutton");
        menuButton6.addEventListener("click", function() {
            loadPage(actualPage.menu[6].load);
        });
        menu.appendChild(menuButton6);
    };
    var menuButton7 = document.createElement("button");
    if (typeof actualPage.menu[7] != 'undefined') {
        menuButton7.innerHTML = actualPage.menu[7].caption;
        menuButton7.classList.add("menubutton");
        menuButton7.addEventListener("click", function() {
            loadPage(actualPage.menu[7].load);
        });
        menu.appendChild(menuButton7);
    };
    var menuButton8 = document.createElement("button");
    if (typeof actualPage.menu[8] != 'undefined') {
        menuButton8.innerHTML = actualPage.menu[8].caption;
        menuButton8.classList.add("menubutton");
        menuButton8.addEventListener("click", function() {
            loadPage(actualPage.menu[8].load);
        });
        menu.appendChild(menuButton8);
    };
    var menuButton9 = document.createElement("button");
    if (typeof actualPage.menu[9] != 'undefined') {
        menuButton9.innerHTML = actualPage.menu[9].caption;
        menuButton9.classList.add("menubutton");
        menuButton9.addEventListener("click", function() {
            loadPage(actualPage.menu[9].load);
        });
        menu.appendChild(menuButton9);
    };
    document.body.appendChild(menu);
    //Expand menu when focusing button
    var menuButtonfocus = document.getElementsByClassName("menubutton");
    for (i = 0; i < menuButtonfocus.length; i++) {
        menuButtonfocus[i].addEventListener("focus", function() {
            menu.classList.add("buttonbeingfocused");
            menuHeader.classList.add("bluefocus");
        });
        menuButtonfocus[i].addEventListener("blur", function() {
            menu.classList.remove("buttonbeingfocused");
            menuHeader.classList.remove("bluefocus");
        });
    }
}

function createCardFlow() {
    var cardFlow = document.createElement("div");
    cardFlow.id = "cardflow";
    document.body.appendChild(cardFlow);
}

function createConnectCard() {
    var cardFlow = document.getElementById("cardflow");
    var connectCard = document.createElement("div");
    connectCard.classList.add("card");
    connectCard.id = "connectcard";
    var google = document.createElement("div");
    google.id = "gSignInWrapper";
    google.classList.add("connectbutton");
    var google2 = document.createElement("button");
    google2.id = "customBtn";
    google2.classList.add("customGPlusSignIn");
    //var google3 = document.createElement("span");
    //google3.classList.add("icon");
    var google4 = document.createElement("span");
    google4.classList.add("buttonText");
    google4.innerHTML = "Google";
    var facebook = document.createElement("button");
    facebook.id = "facebookbutton";
    facebook.classList.add("connectbutton");
    var facebookSpan = document.createElement("span");
    facebookSpan.innerHTML = "facebook";
    var twitter = document.createElement("button");
    twitter.id = "twitterbutton";
    twitter.classList.add("connectbutton");
    var twitterSpan = document.createElement("span");
    twitterSpan.innerHTML = "twitter";
    var moreImportBoxButton = document.createElement("button");
    moreImportBoxButton.id = "moreimportboxbutton";
    var moreImportBoxOpen = false;
    moreImportBoxButton.addEventListener("click", function() {
        if (moreImportBoxOpen) {
            connectCard.style.height = "80px";
            moreImportBoxOpen = false;
        } else {
            connectCard.style.height = "400px";
            moreImportBoxOpen = true;
        };
    });
    //google2.appendChild(google3);
    google2.appendChild(google4);
    google.appendChild(google2);
    facebook.appendChild(facebookSpan);
    twitter.appendChild(twitterSpan);
    connectCard.appendChild(google);
    connectCard.appendChild(facebook);
    connectCard.appendChild(twitter);
    connectCard.appendChild(moreImportBoxButton);
    cardFlow.appendChild(connectCard);
}

function createCardView() {
    var cardFlow = document.getElementById("cardflow");
    var cardView = document.createElement("div");
    cardView.id = ("cardview");
    cardView.classList.add("card");
    var cardFrontDiv = document.createElement("div");
    cardFrontDiv.id = ("cardfrontdiv");
    cardView.appendChild(cardFrontDiv);
    var cardBackDiv = document.createElement("div");
    cardBackDiv.id = ("cardbackdiv");
    cardView.appendChild(cardBackDiv);
    cardFlow.appendChild(cardView);
    createCardElements();
    cardRenderFront();
}
//CHANGE FUNCTIONS

function changeWindowTitle() {
    document.title = "Cardapp - " + actualPage.windowtitle;
}

function changePageBackground() {
    if (actualPage.bgimage) {
        document.body.style.backgroundImage = "url(" + actualPage.bgimage + ")";
    } else {
        document.body.style.backgroundImage = "";
    };
    if (actualPage.bgcolor) {
        document.body.style.backgroundColor = actualPage.bgcolor;
    };
}

function changeTitleBar() {}

function changeMenu() {
    var menu = document.getElementById("menu");
    menu.innerHTML = "";
    var menuHeader = document.createElement("div");
    menuHeader.id = "menuheader";
    menuHeader.classList.add(actualPage.menuheader.headercolor);
    var pageTitle = document.createElement("span");
    pageTitle.id = "pagetitle";
    menuHeader.appendChild(pageTitle);
    menu.appendChild(menuHeader);
    pageTitle.innerText = actualPage.menuheader.pagetitle;
    var menuButton1 = document.createElement("button");
    if (typeof actualPage.menu[1] != 'undefined') {
        menuButton1.innerHTML = actualPage.menu[1].caption;
        menuButton1.classList.add("menubutton");
        menuButton1.addEventListener("click", function() {
            loadPage(actualPage.menu[1].load);
        });
        menuButton1.id = "menu1";
        menu.appendChild(menuButton1);
    };
    var menuButton2 = document.createElement("button");
    if (typeof actualPage.menu[2] != 'undefined') {
        menuButton2.innerHTML = actualPage.menu[2].caption;
        menuButton2.classList.add("menubutton");
        menuButton2.addEventListener("click", function() {
            loadPage(actualPage.menu[2].load);
        });
        menuButton2.id = "menu2";
        menu.appendChild(menuButton2);
    };
    var menuButton3 = document.createElement("button");
    if (typeof actualPage.menu[3] != 'undefined') {
        menuButton3.innerHTML = actualPage.menu[3].caption;
        menuButton3.classList.add("menubutton");
        menuButton3.addEventListener("click", function() {
            loadPage(actualPage.menu[3].load);
        });
        menu.appendChild(menuButton3);
    };
    var menuButton4 = document.createElement("button");
    if (typeof actualPage.menu[4] != 'undefined') {
        menuButton4.innerHTML = actualPage.menu[4].caption;
        menuButton4.classList.add("menubutton");
        menuButton4.addEventListener("click", function() {
            loadPage(actualPage.menu[4].load);
        });
        menu.appendChild(menuButton4);
    };
    var menuButton5 = document.createElement("button");
    if (typeof actualPage.menu[5] != 'undefined') {
        menuButton5.innerHTML = actualPage.menu[5].caption;
        menuButton5.classList.add("menubutton");
        menuButton5.addEventListener("click", function() {
            loadPage(actualPage.menu[5].load);
        });
        menu.appendChild(menuButton5);
    };
    var menuButton6 = document.createElement("button");
    if (typeof actualPage.menu[6] != 'undefined') {
        menuButton6.innerHTML = actualPage.menu[6].caption;
        menuButton6.classList.add("menubutton");
        menuButton6.addEventListener("click", function() {
            loadPage(actualPage.menu[6].load);
        });
        menu.appendChild(menuButton6);
    };
    var menuButton7 = document.createElement("button");
    if (typeof actualPage.menu[7] != 'undefined') {
        menuButton7.innerHTML = actualPage.menu[7].caption;
        menuButton7.classList.add("menubutton");
        menuButton7.addEventListener("click", function() {
            loadPage(actualPage.menu[7].load);
        });
        menu.appendChild(menuButton7);
    };
    var menuButton8 = document.createElement("button");
    if (typeof actualPage.menu[8] != 'undefined') {
        menuButton8.innerHTML = actualPage.menu[8].caption;
        menuButton8.classList.add("menubutton");
        menuButton8.addEventListener("click", function() {
            loadPage(actualPage.menu[8].load);
        });
        menu.appendChild(menuButton8);
    };
    var menuButton9 = document.createElement("button");
    if (typeof actualPage.menu[9] != 'undefined') {
        menuButton9.innerHTML = actualPage.menu[9].caption;
        menuButton9.classList.add("menubutton");
        menuButton9.addEventListener("click", function() {
            loadPage(actualPage.menu[9].load);
        });
        menu.appendChild(menuButton9);
    };
    //Expand menu when focusing button
    var menuButtonfocus = document.getElementsByClassName("menubutton");
    for (i = 0; i < menuButtonfocus.length; i++) {
        menuButtonfocus[i].addEventListener("focus", function() {
            menu.classList.add("buttonbeingfocused");
            menuHeader.classList.add("bluefocus");
        });
        menuButtonfocus[i].addEventListener("blur", function() {
            menu.classList.remove("buttonbeingfocused");
            menuHeader.classList.remove("bluefocus");
        });
    }
}

function changeCardFlow() {}

function changeconnectCard() {}
//ON PAGE LOAD FUNCTION
(function() {
    var tId = setInterval(function() {
        if (document.readyState == "complete") onComplete()
    }, 11);

    function onComplete() {
        clearInterval(tId);
        window.appWindow = chrome.app.window.current();
        loadPage("indexFirstLoad");
    };
})()