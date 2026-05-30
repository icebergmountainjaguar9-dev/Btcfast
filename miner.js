let balance = 0;
let running = false;
let timer = null;

const btn = document.getElementById("mineBtn");
const balanceDisplay = document.getElementById("balance");

btn.addEventListener("click", () => {

  if (!running) {

    running = true;
    btn.textContent = "⏹ Stop Demo Mining";

    timer = setInterval(() => {

      const reward = Math.floor(Math.random() * 3) + 1;

      balance += reward;

      balanceDisplay.textContent =
        balance + " Demo TWT";

    }, 1000);

  } else {

    running = false;

    btn.textContent =
      "⛏️ Start Demo Mining";

    clearInterval(timer);
  }
});