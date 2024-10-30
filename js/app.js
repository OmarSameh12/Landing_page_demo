/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
//array that carries the divs inside section elements 
var divElementsArr=[];
//this function is used to populate the ul created in html
function InitializeNavbar(){
    divElementsArr=document.querySelectorAll('.landing__container');
    const navbarFragment = document.createDocumentFragment();
    for(let i=0;i<divElementsArr.length;i++){
        let liEl=document.createElement('li');
        let aEl=document.createElement('a');
        aEl.textContent = `Section${i+1}`;
        //aEl.href=`#section${i+1}`;
        aEl.classList.add("customAElClass");
        aEl.id=`link${i+1}`;
        liEl.appendChild(aEl);
        liEl.classList.add("customLiElClass");
        navbarFragment.append(liEl);
    }
    const ulEl=document.getElementById('navbar__list');
    ulEl.appendChild(navbarFragment);

}
//function to call the function makeActive when the user scrolls across our webpage
function addScrollEventListener(){
    document.addEventListener('scroll',(e)=>{
        makeActive();
    })
}
//function adds a class to the class list of the section in view port
function makeActive(){
    for (const section of divElementsArr) {
        const box = section.getBoundingClientRect();
        if(box.y >= -150 && box.y <= 150){
            section.classList.add("ActiveLiElementClass");
        }else{
            section.classList.remove('ActiveLiElementClass');
        }
     }
}
//function that scroll through the page until it reaches the section that the user clicked it's navigation li element in the nav bar
function addScrollOnClickEventListener(){
    for(var i=0;i<divElementsArr.length;i++){
        let linkEl=document.querySelector(`#link${i+1}`);
        linkEl.addEventListener('click',(event)=>{
            event.preventDefault();
            const nameOfSection = event.target.textContent;
            const offsetOfSectionClicked = document.getElementById(nameOfSection.toLowerCase()).offsetTop;
            window.scrollTo({
                top: offsetOfSectionClicked,
                left: 0,
                behavior: "smooth",
              });
        });
    }
}


//function to call all the functions of initialization without blocking the access and options of webpage
setTimeout(()=>{
    InitializeNavbar();
    addScrollEventListener();
    addScrollOnClickEventListener();
},0);






/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


