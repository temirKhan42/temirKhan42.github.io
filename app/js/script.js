// Creating parelax effect on the hero 

function paralaxHero() { 
  let scrollElem = document.getElementById('scroll-hero');
  let offsetStart = scrollElem.getBoundingClientRect().top - 100;
  let windStart = 0;

  let quote = document.querySelectorAll(".hero__quote")[0];


  window.addEventListener('scroll', (event) => {
    let windScroll = window.pageYOffset;

    let scrollLength = windScroll - windStart;

    if (scrollLength > 0) {
      offset = offsetStart - scrollLength;
      scrollElem.style.top = offset + "px";
    } else if (scrollLength < 0) {
      offset = offsetStart - scrollLength;
      scrollElem.style.top = offset + "px";
    }

    if (offset < 0) {
      quote.classList.add('opacity');
    } else if (offset > 0) {
      quote.classList.remove('opacity');
    }

    windStart = windScroll; 
    offsetStart = offset;
  });
}

//Add classes for menu fade in 

let hamburger = document.getElementById('hamburger');
let menuMobile = document.getElementById('menu-mobile');

function addEventOnMenuBtn() { 

  hamburger.addEventListener('click', switchMenuBtn );
}

function switchMenuBtn() {
  
  if (menuMobile.classList.contains("fade-in")) {
    menuMobile.classList.remove("fade-in");
    menuMobile.classList.add("fade-out");
  } else {
    menuMobile.classList.remove("fade-out");
    menuMobile.classList.add("fade-in");
  }

  hamburger.classList.toggle("open");
  document.documentElement.classList.toggle("overflow");
}


//make switcher on 'languages' buttons (spans) 
function switchLanguageBtn() {
  let langBtn = document.querySelectorAll('.languages')[0];

  langBtn.addEventListener('click', (event) => {
    let btn = event.target;

    if (btn.children.length) return;
    if (btn.innerHTML.length < 2) return;

    btn.classList.toggle("underline");
    let otherBtn;

    if (btn.nextElementSibling == null) {
      otherBtn = btn.parentElement.firstElementChild;
    } else {
      otherBtn = btn.parentElement.lastElementChild;
    }

    otherBtn.classList.toggle("underline");
  });
}

//Set the print button
function setPrintBtn() { 
  let printBtn = document.getElementById('print-btn');
  printBtn.addEventListener('click', (event) => {
    console.log(window);
    window.print();
  });
}

//when mobile-Menu anchors refer to theyre 
//point elements, the menu-layer, which is 
//cover the window doesn't fade out 

//Debuging mobile-menu buttons behavior
function addEventOnMenuAnchor() {  
  menuMobile.addEventListener('click', (event) => {
    let anchor = event.target;
    
    if (anchor.tagName != "A") return;

    switchMenuBtn();
    console.log(anchor.tagName);
  });
}


paralaxHero();
addEventOnMenuBtn();
switchLanguageBtn();
setPrintBtn();
addEventOnMenuAnchor()
