const btn = document.getElementById("startBtn");
const balance = document.getElementById("balance");

let amount = 0;

btn.addEventListener("click", () => {
  amount += 1;

  balance.textContent =
    amount.toFixed(4) + " Demo TRX";
});