let mining = false;
let balance = 0;
let progress = 0;
let timer;

function startMining() {

    const wallet =
        document.getElementById("wallet").value.trim();

    if (wallet === "") {

        alert(
            "Please enter your Avalanche address first."
        );

        return;
    }

    if (mining) return;

    mining = true;

    document.getElementById("status").innerHTML =
        "⛏️ Mining Avalanche...";

    timer = setInterval(() => {

        progress += Math.random() * 15;

        if (progress > 100)
            progress = 0;

        document.getElementById(
            "progressBar"
        ).style.width =
            progress + "%";

        const hashrate =
            Math.floor(
                Math.random() * 900 + 100
            );

        document.getElementById(
            "hashrate"
        ).innerHTML =
            "Hashrate: " +
            hashrate +
            " MH/s";

        const reward =
            Math.random() * 0.025;

        balance += reward;

        document.getElementById(
            "balance"
        ).innerHTML =
            balance.toFixed(6) +
            " AVAX";

        addLog(
            "Accepted share +" +
            reward.toFixed(6) +
            " AVAX"
        );

    }, 1500);
}

function stopMining() {

    clearInterval(timer);

    mining = false;

    document.getElementById("status").innerHTML =
        "⏹️ Mining Stopped";
}

function addLog(text) {

    const log =
        document.getElementById(
            "miningLog"
        );

    const row =
        document.createElement("div");

    row.className =
        "log-entry";

    row.innerHTML =
        "[" +
        new Date().toLocaleTimeString() +
        "] " +
        text;

    log.prepend(row);
}