const container = document.querySelector(".container");
const decreaseButton = document.getElementById("decrease");
const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase");

let counter = 0;

// Function to update the counter value
function updateCounter() {
  counterElement.textContent = counter;
}

// Function to increase the counter value
function increase() {
  counter++;
  updateCounter();
}

// Update counter on page loading
updateCounter();

const resetButton = document.getElementById("reset");

// Function to reset the counter value
function reset() {
  counter = 0;
  updateCounter();
}
// Function to decrease the counter value
function decrease() {
  counter--;
  updateCounter();
}

// Add click events to buttons
increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);
