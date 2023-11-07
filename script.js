


const toggleButton = document.getElementById('toggleButton');
const headSecond = document.querySelector('.headSecond');

toggleButton.addEventListener('click', function (event) {
  // Toggle the 'active' class on the headSecond element to show/hide the links
  headSecond.classList.toggle('active');
  toggleButton.classList.toggle('fa-bars');
  toggleButton.classList.toggle('fa-times');

  // Stop the click event from propagating to the document
  event.stopPropagation();
});

// Add a click event listener to the document
document.addEventListener('click', function (event) {
  const targetElement = event.target;
  const isHeadSecond = targetElement.closest('.headli li'); // Check if the clicked element or its ancestor is part of 'headSecond'

  if (!isHeadSecond) {
    headSecond.classList.remove('active');
    toggleButton.classList.remove('fa-times');
    toggleButton.classList.add('fa-bars');
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("booking-form");

  function showPopup() {
    popup.style.display = "block";
  }

  function hidePopup() {
    popup.style.display = "none";
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const fullName = formData.get("fullname");
    const thankYouMessage = `Thank you ${fullName}, we will contact you soon.`;
    alert(thankYouMessage);
    hidePopup();
  }

  // Get all elements with classes btn, btn-2, btn-btn, and bn3
  const buttons = document.querySelectorAll(".btn, .btn-2, .btn-btn, .btn-3");

  // Loop through each button and add the event listener
  buttons.forEach((button) => {
    button.addEventListener("click", showPopup);
  });

  closeBtn.addEventListener("click", hidePopup);
  form.addEventListener("submit", handleSubmit);
});

