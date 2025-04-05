const countDisplay = document.getElementById("counter");
const hitButton = document.getElementById("hit");
const resetButton = document.getElementById("reset");

let count = 0;

function updateDisplay() {
    countDisplay.textContent = count;
}

hitButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
