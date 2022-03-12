
/*************** DOM ELEMENTS FOR NAVIGATION *********************/
let nav = $$('#nav'),
  myPic = $$('#jose'),
  toggleBtn = $$('#toggle-btn');

let navElement, myPicElement, toggleBtnElement;

/*************** DOM ELEMENTS CLASS ******************************/
class dmElement {
    constructor(element , toAdd = [] , toRemove = []){
        this.element = element;
        this.toAdd = toAdd; 
        this.toRemove = toRemove;
    }
}/*************** DOM ELEMENTS FUNCTIONS **************************/

let alterClasses = (domElement, classes, action)
if(action === 'remove'){
    classes.array.forEach(cls => {
        domElement.classList.remove(cls);
    });
}else if(action === 'add'){
    classes.forEach(cls => {
        domElement.classList.add(cls);
    });
};
let classToggler = (...rest) => {
    rest.forEach(obj => {
        let {toAdd, toRemove, element} = obj;
        if(toAdd instanceof Array ) alterClasses(element,toAdd,'add');
        if(toRemove instanceof Array) alterClasses(element,toRemove,'remove');
        obj=null;
    });
};

/******************* WINDOW SCROLL FUNCTION HANDLER *****************************/
function navHandler(){
    if(document.body.scrollTop >25 || document.documentElement.scrollTop > 25){
        (navElement = new dmElement(
            nav, 
            ['navbar-light', 'bg-white', 'shadow-sm'],
            ['navbar-dark', 'py-4']
        ))
    }else{
        (navElement = new dmElement(
            nav,
            ['navbar-dark', 'py-4'],
            ['navbar-light', 'bg-white', 'shadow-sm']
        ))
    }
    classToggler(navElement, myPicElement, toggleBtnElement);
}