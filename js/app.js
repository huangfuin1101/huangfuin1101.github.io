// const myDiv = document.getElementsByClassName('nav');
// console.log('Hi! Thank you for checking my portfolio. If you would like to get in touch, please contact me at dorisfuying.huang@gmail.com');
// Open when someone clicks on the i element
function openNav() {
  document.getElementById('navBar').style.width = '100%';
}
//Close when someone clicks on the "x" symbol
function closeNav() {
  document.getElementById('navBar').style.width = '0%';
}
function link() {
  closeNav();
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace('active', '');
  // }
  slides[slideIndex-1].style.display = 'block';
  // dots[slideIndex-1].className += ' active';
}




document.getElementById('content-four').addEventListener('mouseover', mouseOver);
document.getElementById('content-four').addEventListener('mouseout', mouseOut);
document.getElementById('content-three').addEventListener('mouseover', mouseOver);
document.getElementById('content-three').addEventListener('mouseout', mouseOut);
document.getElementById('content-two').addEventListener('mouseover', mouseOver);
document.getElementById('content-two').addEventListener('mouseout', mouseOut);
document.getElementById('content-one').addEventListener('mouseover', mouseOver);
document.getElementById('content-one').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('content-four').style.opacity = '0.8';
  document.getElementById('content-three').style.opacity = '0.8';
  document.getElementById('content-two').style.opacity = '0.8';
  document.getElementById('content-one').style.opacity = '0.8';
}

function mouseOut() {
  document.getElementById('content-four').style.opacity = '0';
  document.getElementById('content-three').style.opacity = '0';
  document.getElementById('content-two').style.opacity = '0';
  document.getElementById('content-one').style.opacity = '0';
}




//
// var coll = document.getElementsByClassName("collapsible");
// var i;
//
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
