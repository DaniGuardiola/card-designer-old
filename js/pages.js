//PAGE VARIABLES
/*TEMPLATE
"indexpage" : {
    "windowtitle" :"Home",
    "menuheader": {
      "pagetitle":"indexpage",
      "icon":"images/pages/index-32.png",
      "headercolor": "blue"
      },
    "menu": {
    "1": {
      "caption":"New card",
      "load":"cardEditorpage",
    }
    },
    "page": {
      //DELETE PROPERTIES
      //DON'T DELETE A CHILD IF YOU ARE ALREADY DELETING IT'S PARENT
      "deleteBodyContent": false,
      "deleteTitleBar": false,
      "deleteMenu": false,
      "deleteCardFlow": true,
      "deleteConnectCard": false,
      //CREATE PROPERTIES
      "createTitleBar": false,
      "createMenu": false,
      "createCardFlow": false,
      //CHANGE PROPERTIES
      "changeWindowTitle":false,
      "changeTitleBar": false,
      "changeMenu": true,
      "changeCardFlow": false
    },
  }
*/
var pages = {
    "indexFirstLoad": {
        "page": {
            "createTitleBar": true,
            "createMenu": true,
            "createCardFlow": true,
            "createConnectCard": true,
            "changePageBackground": true
        },
        "windowtitle": "Welcome!",
        "bgimage": "images/bg/bg.jpg",
        "bgcolor": false,
        "menuheader": {
            "pagetitle": "Welcome to cardapp",
            "icon": "images/pages/index-32.png",
            "headercolor": "blue"
        },
        "menu": {
            "1": {
                "caption": "Create",
                "load": "cardEditor",
            }
        }
    },
    "index": {
        "page": {
            "deleteCardFlow": true,
            "createCardFlow": true,
            "createConnectCard": true,
            "changeWindowTitle": true,
            "changeMenu": true,
            "changePageBackground": true
        },
        "windowtitle": "Home",
        "bgimage": "images/bg/bg.jpg",
        "bgcolor": false,
        "menuheader": {
            "pagetitle": "Home",
            "icon": "images/pages/index-32.png",
            "headercolor": "blue"
        },
        "menu": {
            "1": {
                "caption": "Create",
                "load": "cardEditor",
            }
        }
    },
    "cardEditor": {
        "page": {
            "deleteCardFlow": true,
            "createCardFlow": true,
            "createConnectCard": true,
            "changeWindowTitle": true,
            "changeMenu": true,
            "createCardView": true
        },
        "windowtitle": "Card editor",
        "bgimage": false,
        "bgcolor": false,
        "menuheader": {
            "pagetitle": "Card editor",
            "icon": "images/pages/index-32.png",
            "headercolor": "blue"
        },
        "menu": {
            "1": {
                "caption": "Home",
                "load": "index"
            }
        }
    }
};
//END