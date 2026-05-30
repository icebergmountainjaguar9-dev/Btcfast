let balance = 0;
let running = false;
let timer = null;

const btn = document.getElementById("mineTrxBtn");
const balanceDisplay = document.getElementById("balance");

btn.addEventListener("click", () => {

  if (!running) {

    running = true;
    btn.textContent = "⏹ Stop Demo Simulation";

    timer = setInterval(() => {

      const reward = Math.random() * 2;

      balance += reward;

      balanceDisplay.textContent =
        balance.toFixed(4) + " Demo TRX";

    }, 1000);

  } else {

    running = false;

    btn.textContent =
      "⚡ Start Demo TRX Simulation";

    clearInterval(timer);

  }

});