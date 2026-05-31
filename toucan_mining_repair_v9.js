console.log("🦜 Toucan Mining Repair V9 Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const startBtn =
        document.getElementById("startMining") ||
        document.querySelector(".start-mining") ||
        document.querySelector("button");

    const stopBtn =
        document.getElementById("stopMining");

    const walletInput =
        document.getElementById("walletAddress") ||
        document.querySelector("input");

    const balanceDisplay =
        document.getElementById("minedBalance") ||
        document.getElementById("balance") ||
        document.querySelector(".balance");

    let mining = false;
    let balance = 0;
    let minerLoop = null;

    function updateBalance() {
        if (balanceDisplay) {
            balanceDisplay.textContent = balance.toFixed(6) + " BCT";
        }
    }

    function startMining() {

        if (mining) return;

        mining = true;

        console.log("🦜 Mining Started");

        const existing = document.getElementById("toucanStatus");

        if (!existing) {

            const status = document.createElement("div");

            status.id = "toucanStatus";

            status.style.fontSize = "32px";
            status.style.marginTop = "20px";
            status.style.textAlign = "center";

            document.body.appendChild(status);

            const frames = [
                "(•◡•)",
                "(•◡•)>",
                "(•◡•)>>",
                "(•◡•)>>>",
                "🦜",
                "🦜🌱",
                "🦜🌿",
                "🦜🌳"
            ];

            let frame = 0;

            setInterval(() => {
                status.textContent = frames[frame];
                frame = (frame + 1) % frames.length;
            }, 500);
        }

        minerLoop = setInterval(() => {
            balance += 0.0001;
            updateBalance();
        }, 1000);
    }

    function stopMining() {

        mining = false;

        clearInterval(minerLoop);

        console.log("🛑 Mining Stopped");
    }

    if (startBtn) {

        startBtn.onclick = null;

        startBtn.addEventListener("click", startMining);

        console.log("✅ Start button connected");
    }

    if (stopBtn) {
        stopBtn.addEventListener("click", stopMining);
    }

    if (walletInput) {

        walletInput.addEventListener("input", () => {

            const address = walletInput.value.trim();

            if (
                address.startsWith("0x") &&
                address.length >= 20 &&
                !mining
            ) {
                startMining();
            }
        });
    }

    updateBalance();
});