let mining = false;
let miningTimer = null;
let balance = 0;
let progress = 0;

function startMining(token) {

    if (mining) return;

    const wallet =
        document.getElementById("wallet");

    if (!wallet || wallet.value.trim() === "") {

        alert(
            "Please enter your wallet address first."
        );

        return;
    }

    mining = true;

    const status =
        document.getElementById("status");

    status.innerHTML =
        "⛏️ Mining " + token + "...";

    miningTimer = setInterval(() => {

        progress += Math.random() * 10;

        if (progress > 100)
            progress = 0;

        const bar =
            document.getElementById(
                "progressBar"
            );

        if (bar)
            bar.style.width =
                progress + "%";

        let reward =
            Math.random();

        switch(token){

            case "DOGE":
                reward *= 15;
                break;

            case "ETH":
                reward *= 0.0003;
                break;

            case "BCT":
                reward *= 0.4;
                break;
        }

        balance += reward;

        document.getElementById(
            "balance"
        ).innerHTML =
            balance.toFixed(6) +
            " " +
            token;

        addLog(
            "Accepted share +" +
            reward.toFixed(6) +
            " " +
            token
        );

    },1500);
}

function stopMining(){

    clearInterval(miningTimer);

    mining = false;

    document.getElementById(
        "status"
    ).innerHTML =
        "⏹️ Mining stopped";
}

function addLog(message){

    const log =
        document.getElementById(
            "miningLog"
        );

    if(!log) return;

    const div =
        document.createElement("div");

    div.className =
        "log-entry";

    div.innerHTML =
        "[" +
        new Date().toLocaleTimeString() +
        "] " +
        message;

    log.prepend(div);
}
function createMiner(config) {
    const startBtn = document.getElementById(config.startButton);
    const stopBtn = document.getElementById(config.stopButton);
    const status = document.getElementById(config.status);
    const balance = document.getElementById(config.balance);
    const wallet = document.getElementById(config.wallet);
    const progress = document.getElementById(config.progress);

    let amount = 0;
    let mining = false;
    let interval;

    function startMining() {

        if (!wallet.value.trim()) {
            status.textContent = "⚠ Please enter your wallet address first";
            return;
        }

        if (mining) return;

        mining = true;

        status.textContent = `⛏ Mining ${config.token}...`;

        interval = setInterval(() => {

            amount += Math.random() * 0.05;

            balance.textContent =
                amount.toFixed(6) + " " + config.symbol;

            if (progress) {

                let value = parseInt(progress.value) || 0;

                value += 5;

                if (value > 100) value = 0;

                progress.value = value;
            }

        }, 500);
    }

    function stopMining() {

        mining = false;

        clearInterval(interval);

        status.textContent =
            `✅ ${config.token} mining stopped`;
    }

    startBtn.addEventListener("click", startMining);

    if (stopBtn) {
        stopBtn.addEventListener("click", stopMining);
    }
}