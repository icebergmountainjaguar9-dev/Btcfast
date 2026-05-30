const startBtn =
  document.getElementById("startBtn");

const progressBar =
  document.getElementById("progressBar");

const result =
  document.getElementById("result");

startBtn.addEventListener(
  "click",
  () => {

    progressBar.style.width = "0%";
    result.innerHTML = "";

    let progress = 0;

    const timer = setInterval(() => {

      progress++;

      progressBar.style.width =
        progress + "%";

      if (progress >= 100) {

        clearInterval(timer);

        const stake =
          Number(
            document.getElementById(
              "stakeAmount"
            ).value
          );

        const annualRate = 0.08;

        const reward =
          stake * annualRate;

        result.innerHTML = `
          <h3>Simulation Complete</h3>
          <p>Stake Amount: ${stake} AVAX</p>
          <p>Estimated Annual Reward:
             ${reward.toFixed(2)} AVAX</p>
          <p>
            This is a simulation only.
          </p>
        `;
      }

    }, 40);

  }
);