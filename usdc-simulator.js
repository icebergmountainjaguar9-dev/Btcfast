let balance = 0;
let running = false;
let timer = null;

const btn = document.getElementById("mineUsdcBtn");
const balanceDisplay = document.getElementById("balance");

btn.addEventListener("click", () => {

  if (!running) {

    running = true;
    btn.textContent = "⏹ Stop Demo Simulation";

    timer = setInterval(() => {

      const reward =
        (Math.random() * 0.05).toFixed(4);

      balance += Number(reward);

      balanceDisplay.textContent =
        balance.toFixed(4) + " Demo USDC";

    }, 1000);

  } else {

    running = false;

    btn.textContent =
      "💵 Start Demo USDC Simulation";

    clearInterval(timer);
  }

});