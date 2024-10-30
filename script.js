let hunger = 50;
let happiness = 50;
let energy = 50;

const hungerDisplay = document.getElementById("hunger");
const happinessDisplay = document.getElementById("happiness");
const energyDisplay = document.getElementById("energy");

const feedButton = document.getElementById("feed-btn");
const playButton = document.getElementById("play-btn");
const sleepButton = document.getElementById("sleep-btn");

function updateStats() {
  hungerDisplay.textContent = hunger;
  happinessDisplay.textContent = happiness;
  energyDisplay.textContent = energy;
}

feedButton.addEventListener("click", () => {
  hunger = Math.min(100, hunger + 20);
  happiness = Math.min(100, happiness + 5);
  updateStats();
});

playButton.addEventListener("click", () => {
  happiness = Math.min(100, happiness + 20);
  energy = Math.max(0, energy - 10);
  updateStats();
});

sleepButton.addEventListener("click", () => {
  energy = Math.min(100, energy + 20);
  hunger = Math.max(0, hunger - 5);
  updateStats();
});

// Decrease stats over time
setInterval(() => {
  hunger = Math.max(0, hunger - 1);
  happiness = Math.max(0, happiness - 1);
  energy = Math.max(0, energy - 1);
  updateStats();
}, 5000); // Update every 5 seconds
