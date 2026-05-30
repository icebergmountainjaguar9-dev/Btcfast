let mining = false;
let balance = 0;
let interval;

function startMining() {

    if (mining) return;

    const wallet =
        document.getElementById("wallet").value;

    if (!wallet.startsWith("0x")) {
        alert("Enter a valid Ethereum wallet");
        return;
    }

    mining = true;

    document.getElementById("status").innerHTML =
        "Mining Ethereum...";

    interval = setInterval(() => {

        const hashrate =
            Math.floor(Math.random() * 900 + 100);

        document.getElementById("hashrate").innerHTML =
            "Hashrate: " + hashrate + " MH/s";

        const reward =
            Math.random() * 0.00025;

        balance += reward;

        document.getElementById("balance").innerHTML =
            balance.toFixed(6) + " ETH";

    }, 2000);
}

function stopMining() {

    clearInterval(interval);

    mining = false;

    document.getElementById("status").innerHTML =
        "Mining Stopped";
}