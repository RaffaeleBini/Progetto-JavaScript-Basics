  // Create the HTML elements
  const counter = document.createElement('div');
  counter.innerHTML = `<h1>COUNTER</h1>
  <div style="text-align: center;"><img src="img/counter.png" alt="Counter"></div>
  <div class="container">
      <button id="decrement">-</button>
      <span id="counter">0</span>
      <button id="increment">+</button>
      <br>
      <button id="reset">RESET</button>
  </div>`;

  document.body.appendChild(counter);

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
