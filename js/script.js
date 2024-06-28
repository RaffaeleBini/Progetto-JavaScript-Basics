// Select the elements in the DOM
  const counterDisplay = document.getElementById('counter');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const resetButton = document.getElementById('reset');

  // Inizialise the value of the counter
  let counterValue = 0;

  // Update the display of the counter
  const updateDisplay = () => {
    counterDisplay.textContent = counterValue;
  };

  // Enable the functions of the buttons
  incrementButton.addEventListener('click', () => {
    counterValue++;
    updateDisplay();
  });

  decrementButton.addEventListener('click', () => {
    counterValue--;
    updateDisplay();
  });

  // Add the reset function
  resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateDisplay();
  });

  // Update the display
  updateDisplay();
