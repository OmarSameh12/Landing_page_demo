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
var divElementsArr=[];
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
        navbarFragment.appendChild(liEl);
    }
    const ulEl=document.getElementById('navbar__list');
    ulEl.appendChild(navbarFragment);

}

function addScrollEventListener(){
    document.addEventListener('scroll',(e)=>{
        //console.log(e)
        makeActive();
    })
}
function makeActive(){
    for (const section of divElementsArr) {
        const box = section.getBoundingClientRect();
        if(box.y >= -150 && box.y <= 150){
            section.classList.add("ActiveLiElementClass");
        }else{
            section.classList.remove('ActiveLiElementClass');
        }

        // if (box.top <= 150 && box.bottom >= 150) {
        //     console.log("in if value is = ",box);
        // }
        //   else {
        //  }
     }
}
function addScrollOnClickEventListener(){
    for(var i=0;i<divElementsArr.length;i++){
        let linkEl=document.querySelector(`#link${i+1}`);
        linkEl.addEventListener('click',(event)=>{
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


