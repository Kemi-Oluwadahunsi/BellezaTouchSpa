
// Get DOM elements
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const main = document.querySelector('main')
const go = document.getElementById("go")

// Define variables
let currentIndex = 0;

// Function to show the current slide
function showSlide() {
  // Hide all slides if viewport is greater than or equal to 769px
  if (window.innerWidth >= 769) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
  }

  // Show the current slide
  slides[currentIndex].style.display = "block";
}

// Function to navigate to the previous slide
function goToPreviousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide();
}

// Function to navigate to the next slide
function goToNextSlide() {
  currentIndex++;
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }
  showSlide();
}

// Add event listeners to the buttons
prevButton.addEventListener("click", goToPreviousSlide);
nextButton.addEventListener("click", goToNextSlide);

// Show the initial slide
showSlide();

// Add a listener for the window resize event to handle changes in viewport width
window.addEventListener("resize", () => {
  // If the viewport width is less than 769px, hide the slides
  if (window.innerWidth < 769) {
    slides.forEach((slide) => {
      slide.style.display = "none";
      // main.style.display = "none";
      go.style.display = "block";

    });
  } else {
    // Otherwise, show the current slide
    showSlide();
  }
});




