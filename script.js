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

// Slideshow Start
try {
  // Kolla om slides finns innan man kör slide-funktionen
  var slideIndex = 1;
  showSlides(slideIndex);
} catch (error) {
  console.log("No Slides Found")
}

// Next : Previous 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
// Slideshow End