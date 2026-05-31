// mining_engine.js

document.addEventListener("DOMContentLoaded", () => {

  const startButton = document.getElementById("startMining");

  if (!startButton) {
    console.error("Start Mining button not found");
    return;
  }

  let mining = false;
  let balance = 0;

  function updateDisplay() {

    const balanceElement =
      document.getElementById("minedBalance");

    const statusElement =
      document.getElementById("miningStatus");

    if (balanceElement) {
      balanceElement.textContent =
        balance.toFixed(6) + " BCT";
    }

    if (statusElement) {
      statusElement.textContent =
        mining ? "Mining Active" : "Ready";
    }
  }

  function startMining() {

    if (mining) return;

    mining = true;

    updateDisplay();

    window.miningInterval =
      setInterval(() => {

        balance += 0.0001;

        updateDisplay();

      }, 1000);

    console.log("Mining started");
  }

  startButton.addEventListener(
    "click",
    startMining
  );

});