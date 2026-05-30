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
let mining = false;
let balance = 0;
let progress = 0;
let interval;

function startMining() {

    if(mining) return;

    mining = true;

    document.getElementById("status").innerHTML =
        "⛏️ Mining Ethereum...";

    interval = setInterval(() => {

        progress += Math.random() * 12;

        if(progress > 100)
            progress = 0;

        document.getElementById("progressBar").style.width =
            progress + "%";

        const reward =
            Math.random() * 0.0004;

        balance += reward;

        document.getElementById("balance").innerHTML =
            balance.toFixed(6) + " ETH";

        addLog(
            "Block found +" +
            reward.toFixed(6) +
            " ETH"
        );

    },1500);
}

function stopMining(){

    mining = false;

    clearInterval(interval);

    document.getElementById("status").innerHTML =
        "⏹️ Mining stopped";
}

function addLog(text){

    const log =
        document.getElementById("miningLog");

    const div =
        document.createElement("div");

    div.className =
        "log-entry";

    div.innerHTML =
        "[" +
        new Date().toLocaleTimeString() +
        "] " +
        text;

    log.prepend(div);
}