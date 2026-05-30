let balance = 0;
let running = false;
let timer = null;

const btn = document.getElementById("mineLtcBtn");
const balanceDisplay = document.getElementById("balance");

btn.addEventListener("click", () => {

  if (!running) {

    running = true;
    btn.textContent = "⏹ Stop Demo Mining";

    timer = setInterval(() => {

      const reward = Math.random() * 0.5;

      balance += reward;

      balanceDisplay.textContent =
        balance.toFixed(4) + " Demo LTC";

      balanceDisplay.classList.add("bounce");

      setTimeout(() => {
        balanceDisplay.classList.remove("bounce");
      }, 500);

    }, 1000);

  } else {

    running = false;

    btn.textContent =
      "⛏️ Mine Demo LTC ₿ (＾▽＾)";

    clearInterval(timer);

  }

});