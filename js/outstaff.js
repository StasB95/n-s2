let navMain = document.querySelector('.nav-list');
let navToggle = document.querySelector('.nav__toggle');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav-closed')) {
    navMain.classList.remove('nav-closed');
    navMain.classList.add('nav-opened');
  } else {
    navMain.classList.add('nav-closed');
    navMain.classList.remove('nav-opened');
  }
});

let navService = document.querySelector('.service-tablet');
let navToggleService = document.querySelector('.service-tablet-toggle');


navToggleService.addEventListener('click', function() {
  if (navService.classList.contains('service-tablet-close')) {
    navService.classList.remove('service-tablet-close');
    navService.classList.add('service-tablet-open');
  } else {
    navService.classList.add('service-tablet-close');
    navService.classList.remove('service-tablet-open');
  }
});


// let ddtTitle = document.querySelector('.ddtitle');
// let ddtToggleTitle = document.querySelector('.ddt-faq-subtitle');

// ddtToggleTitle.addEventListener('click', function() {
//   if (ddtTitle.classList.contains('ddt-nonclass')) {
//     ddtTitle.classList.remove('ddt-nonclass');
//     ddtTitle.classList.add('ddt-class');
//   } else {
//     ddtTitle.classList.add('ddt-nonclass');
//     ddtTitle.classList.remove('ddt-class')
//   }
// }) 

// let ddtTitle1 = document.querySelector('.ddtitle1');
// let ddtToggleTitle1 = document.querySelector('.ddt-faq-subtitle1');

// ddtToggleTitle1.addEventListener('click', function() {
//   if (ddtTitle1.classList.contains('ddt-nonclass1')) {
//     ddtTitle1.classList.remove('ddt-nonclass1');
//     ddtTitle1.classList.add('ddt-class1');
//   } else {
//     ddtTitle1.classList.add('ddt-nonclass1');
//     ddtTitle1.classList.remove('ddt-class1')
//   }
// }) 

// let ddtTitle2 = document.querySelector('.ddtitle2');
// let ddtToggleTitle2 = document.querySelector('.ddt-faq-subtitle2');

// ddtToggleTitle2.addEventListener('click', function() {
//   if (ddtTitle2.classList.contains('ddt-nonclass2')) {
//     ddtTitle2.classList.remove('ddt-nonclass2');
//     ddtTitle2.classList.add('ddt-class2');
//   } else {
//     ddtTitle2.classList.add('ddt-nonclass2');
//     ddtTitle2.classList.remove('ddt-class2')
//   }
// }) 

// let ddtTitle3 = document.querySelector('.ddtitle3');
// let ddtToggleTitle3 = document.querySelector('.ddt-faq-subtitle3');

// ddtToggleTitle3.addEventListener('click', function() {
//   if (ddtTitle3.classList.contains('ddt-nonclass3')) {
//     ddtTitle3.classList.remove('ddt-nonclass3');
//     ddtTitle3.classList.add('ddt-class3');
//   } else {
//     ddtTitle3.classList.add('ddt-nonclass3');
//     ddtTitle3.classList.remove('ddt-class3')
//   }
// }) 




let ddtList = document.querySelector('.ddt-faq-inner');
let ddtToggle = document.querySelector('.outstaff-faq-subtitle1');


ddtToggle.addEventListener('click', function() {
  if (ddtList.classList.contains('faq-closed')) {
    ddtList.classList.remove('faq-closed');
    ddtList.classList.add('faq-outstaff-opened');
  } else {
    ddtList.classList.add('faq-closed');
    ddtList.classList.remove('faq-outstaff-opened');
  }
});

let ddtListOne = document.querySelector('.ddt-faq-inner1');
let ddtToggleOne = document.querySelector('.outstaff-faq-subtitle2');


ddtToggleOne.addEventListener('click', function() {
  if (ddtListOne.classList.contains('faq-closed1')) {
    ddtListOne.classList.remove('faq-closed1');
    ddtListOne.classList.add('faq-outstaff-opened1');
  } else {
    ddtListOne.classList.add('faq-closed1');
    ddtListOne.classList.remove('faq-outstaff-opened1');
  }
});

let ddtListTwo = document.querySelector('.ddt-faq-inner2');
let ddtToggleTwo = document.querySelector('.outstaff-faq-subtitle3');


ddtToggleTwo.addEventListener('click', function() {
  if (ddtListTwo.classList.contains('faq-closed2')) {
    ddtListTwo.classList.remove('faq-closed2');
    ddtListTwo.classList.add('faq-outstaff-opened2');
  } else {
    ddtListTwo.classList.add('faq-closed2');
    ddtListTwo.classList.remove('faq-outstaff-opened2');
  }
});







// let ddtTitle = document.querySelector('.ddtitle');
// let ddtToggleTitle = document.querySelector('.outstaff-faq-subtitle');

// ddtToggleTitle.addEventListener('click', function() {
//   if (ddtTitle.classList.contains('ddt-nonclass')) {
//     ddtTitle.classList.remove('ddt-nonclass');
//     ddtTitle.classList.add('ddt-class');
//   } else {
//     ddtTitle.classList.add('ddt-nonclass');
//     ddtTitle.classList.remove('ddt-class')
//   }
// }) 

let ddtTitle1 = document.querySelector('.ddtitle1');
let ddtToggleTitle1 = document.querySelector('.outstaff-faq-subtitle1');

ddtToggleTitle1.addEventListener('click', function() {
  if (ddtTitle1.classList.contains('ddt-nonclass1')) {
    ddtTitle1.classList.remove('ddt-nonclass1');
    ddtTitle1.classList.add('ddt-class1');
  } else {
    ddtTitle1.classList.add('ddt-nonclass1');
    ddtTitle1.classList.remove('ddt-class1')
  }
}) 

let ddtTitle2 = document.querySelector('.ddtitle2');
let ddtToggleTitle2 = document.querySelector('.outstaff-faq-subtitle2');

ddtToggleTitle2.addEventListener('click', function() {
  if (ddtTitle2.classList.contains('ddt-nonclass2')) {
    ddtTitle2.classList.remove('ddt-nonclass2');
    ddtTitle2.classList.add('ddt-class2');
  } else {
    ddtTitle2.classList.add('ddt-nonclass2');
    ddtTitle2.classList.remove('ddt-class2')
  }
}) 

let ddtTitle3 = document.querySelector('.ddtitle3');
let ddtToggleTitle3 = document.querySelector('.outstaff-faq-subtitle3');

ddtToggleTitle3.addEventListener('click', function() {
  if (ddtTitle3.classList.contains('ddt-nonclass3')) {
    ddtTitle3.classList.remove('ddt-nonclass3');
    ddtTitle3.classList.add('ddt-class3');
  } else {
    ddtTitle3.classList.add('ddt-nonclass3');
    ddtTitle3.classList.remove('ddt-class3')
  }
}) 


let ddtArrow1 = document.querySelector('.ddt-arrow1');
let ddtToggleArrow1 = document.querySelector('.outstaff-faq-subtitle1');

ddtToggleArrow1.addEventListener('click', function() {
  if (ddtArrow1.classList.contains('ddt-arrow-black')) {
    ddtArrow1.classList.remove('ddt-arrow-black');
    ddtArrow1.classList.add('outstaff-arrow-blue');
  } else {
    ddtArrow1.classList.add('ddt-arrow-black');
    ddtArrow1.classList.remove('outstaff-arrow-blue')
  }
}) 

let ddtArrow2 = document.querySelector('.ddt-arrow2');
let ddtToggleArrow2 = document.querySelector('.outstaff-faq-subtitle2');

ddtToggleArrow2.addEventListener('click', function() {
  if (ddtArrow2.classList.contains('ddt-arrow-black')) {
    ddtArrow2.classList.remove('ddt-arrow-black');
    ddtArrow2.classList.add('outstaff-arrow-blue');
  } else {
    ddtArrow2.classList.add('ddt-arrow-black');
    ddtArrow2.classList.remove('outstaff-arrow-blue')
  }
}) 

let ddtArrow3 = document.querySelector('.ddt-arrow3');
let ddtToggleArrow3 = document.querySelector('.outstaff-faq-subtitle3');

ddtToggleArrow3.addEventListener('click', function() {
  if (ddtArrow3.classList.contains('ddt-arrow-black')) {
    ddtArrow3.classList.remove('ddt-arrow-black');
    ddtArrow3.classList.add('outstaff-arrow-blue');
  } else {
    ddtArrow3.classList.add('ddt-arrow-black');
    ddtArrow3.classList.remove('outstaff-arrow-blue')
  }
}) 
