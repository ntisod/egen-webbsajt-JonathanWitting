var isSidepanelOpen = false;

/* Set the width of the sidebar to 250px (show it) */
function showSidepanel() {
    document.getElementById("mySidepanel").style.width = "250px";
    isSidepanelOpen = true;
}
  
/* Set the width of the sidebar to 0 (hide it) */
function hideSidepanel() {
    document.getElementById("mySidepanel").style.width = "0";
    isSidepanelOpen = false;
}

function toggleSidepanel() {
    isSidepanelOpen ? hideSidepanel() : showSidepanel();
}

// Slideshow
// Clickable
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
  var i;
  var slides = document.getElementsByClassName("slide");
//   var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}


// Automatic
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("slideshow");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }