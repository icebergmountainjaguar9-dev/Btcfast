document.addEventListener("DOMContentLoaded", () => {
    console.log("Toucan Mining Repair Loaded");

    const startBtn =
        document.getElementById("startMining") ||
        document.querySelector(".start-mining") ||
        document.querySelector("button");

    const stopBtn =
        document.getElementById("stopMining") ||
        document.querySelector(".stop-mining");

    const walletInput =
        document.getElementById("walletAddress") ||
        document.querySelector('input[type="text"]');

    const amountDisplay =
        document.getElementById("minedAmount") ||
        document.querySelector(".mined-amount");

    const statusDisplay =
        document.getElementById("miningStatus") ||
        document.querySelector(".status");

    let mining = false;
    let balance = 0;
    let timer = null;

    function updateDisplay() {
        if (amountDisplay) {
            amountDisplay.textContent = balance.toFixed(6) + " BCT";
        }
    }

    function startMining() {
        if (mining) return;

        mining = true;

        if (statusDisplay) {
            statusDisplay.textContent = "Mining Active";
        }

        timer = setInterval(() => {
            balance += 0.000125;
            updateDisplay();
        }, 1000);

        const toucan = document.getElementById("toucanAnimation");

        if (toucan) {
            toucan.style.display = "block";
            toucan.classList.add("grow");
        }

        console.log("Mining Started");
    }

    function stopMining() {
        mining = false;

        clearInterval(timer);

        if (statusDisplay) {
            statusDisplay.textContent = "Stopped";
        }

        console.log("Mining Stopped");
    }

    if (startBtn) {
        startBtn.addEventListener("click", startMining);
    }

    if (stopBtn) {
        stopBtn.addEventListener("click", stopMining);
    }

    if (walletInput) {
        walletInput.addEventListener("input", () => {
            if (
                walletInput.value.trim().length > 10 &&
                !mining
            ) {
                startMining();
            }
        });
    }

    updateDisplay();
});