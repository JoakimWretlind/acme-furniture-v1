/** LOGIC **/
/*
 * Everything is stored in a JSON-file, so first, we get all the stuff from that file. We store this stuff in the localStorage, where it's accessible for use for the rest of the file. 
 */
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");
const carouselContent = document.querySelector(".carousel-inner");
// for es6 we use spread operator
let arrayOfSlides = [...slides];
const threeDOM = document.querySelectorAll('.carousel-dom');

let lengthOfSlide;
let carouselDisplaying;
 window.addEventListener("resize", setScreenSize());
//setScreenSize();

const getThreeProducts = async () => {
    try{
        const res = await fetch('/data/threeD.json');
        const data = await res.json();
        let products = data.items;
        products = products.map(item => {
            const {id, category, header, title, color, price} = item;
            const image = item.image.url;
            return {id, category, header, title, color, price, image}
        })
       
        return products;
    }catch(err){
        console.log(err)
    }
}
/* If you want to target a special 3D item. For example to put in cart */
/*
const getThreeButton=()=>{
    const threeButtons = [...document.querySelectorAll('.card__button')];
        threeButtons.forEach(button => {
            let id = button.dataset.id;
       
            button.addEventListener('click', e => {
                alert("show "+id+" in 3D")
            })
            
        })
}
*/

const saveThreeProducts=(products)=>{
        localStorage.setItem('threeProducts', JSON.stringify(products));
}
const getSavedProducts=(id)=>{
    let products = JSON.parse(localStorage.getItem('threeProducts'));
    return products.find(threeProduct => threeProduct.id === id)
}

// function to add clone
const addClone = () => {
    // clone the last element of the array
    let lastSlide = carouselContent.lastElementChild.cloneNode(true);
    lastSlide.style.left = -lengthOfSlide + "px";
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
};
// function to remove clone
const removeClone =()=>{
    // find and remove the first element (which now is the clone from addClone())
    let firstSlide = carouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide);
};

// how to move to previous slide
const prevSlide = () => {
    let slides = document.querySelectorAll('.slide');
    let slidesArray = [...slides];
    let width = 0;

    slidesArray.forEach(e => {
        e.style.left = width + 'px';
        width += lengthOfSlide;
    });
    addClone();
}
prevSlide();

// how to move to next slide
const nextSlide = () => {
    let slides = document.querySelectorAll('.slide');
    let slidesArray = [...slides];
    slidesArray = slidesArray.reverse();
    let maxWidth = (slidesArray.length - 1) * lengthOfSlide;

    slidesArray.forEach(e => {
        maxWidth -= lengthOfSlide;
        e.style.left = maxWidth + 'px';
    });
}
/******** SCREENSIZE *********/
 // window.addEventListener("resize", setScreenSize);

// fixed widths where changes happens
function setScreenSize() {
    if (window.innerWidth >= 1500) {
        carouselDisplaying = 4;
    } else if (window.innerWidth >= 800) {
        carouselDisplaying = 3;
    } else if (window.innerWidth >= 600) {
        carouselDisplaying = 2;
    } else {
        carouselDisplaying = 1;
  }
  initialPos = [];
  arrayOfSlides.forEach(e => {
      e.style.position = 'absolute';
  })
  getScreenSize();  
}

function getScreenSize() {
  let slides = document.querySelectorAll('slide');
    let slidesArray = [...slides];
    lengthOfSlide = carousel.offsetWidth / carouselDisplaying;
    let initialWidth = -lengthOfSlide;
    slidesArray.forEach(el => {
        el.style.width = lengthOfSlide + 'px';
        el.style.left = initialWidth + 'px';
        initialWidth += lengthOfSlide;
    });
}

/** NAVIGATION */
let moving = true;
const moveToPrevSlide = (click) => {
    if(typeof click !== "boolean"){
        userInteraction = true;
    }
    if(moving) {
        moving= false;
        let lastSlide = carouselContent.lastElementChild;
        lastSlide.parentNode.removeChild(lastSlide);
        carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
        removeClone();

        let firstSlide = carouselContent.firstElementChild;
        firstSlide.addEventListener('transitionend', activateAgain);
        prevSlide();
    }
}

const activateAgain = () => {
    let firstSlide = carouselContent.firstElementChild;
    moving = true;
    firstSlide.removeEventListener('transitionend', activateAgain);
}

const moveToNextSlide = (click) => {
    if(typeof click !== "boolean"){
        userInteraction = true;
    }
    if(moving){
        moving = false;
        removeClone();

        let firstSlide = carouselContent.firstElementChild;
        firstSlide.addEventListener('transitionend', replaceToEnd);
        nextSlide();
    }
}

const replaceToEnd = () => {
    let firstSlide = carouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide);
    carouselContent.appendChild(firstSlide);
    firstSlide.style.left = (arrayOfSlides.length - 1) * lengthOfSlide + 'px';
    addClone();

    moving = true;
    firstSlide.removeEventListener('transitionend', replaceToEnd);
}

const getInitialPos = () => {
    let slides = document.querySelectorAll('.slide');
    let slidesArray = [...slides];
    initialPos = [];

    slidesArray.forEach(el => {
    let left = Math.floor(parseInt(el.style.left.slice(0, -2)));
    initialPos.push(left);
  })  
}

nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener("click", moveToPrevSlide);

document.addEventListener('DOMContentLoaded', ()=> {

    getThreeProducts()
    .then((products) => {
        saveThreeProducts(products)
    })
    /*
    .then(()=>{
        getThreeButton();
    })
    */
})
 