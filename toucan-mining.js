let balance = 0;
let mining = false;
let timer;

function startMining() {

    if (mining) return;

    const wallet =
        document.getElementById("wallet").value;

    if (!wallet.startsWith("0x")) {
        alert("Enter a Polygon wallet address");
        return;
    }

    mining = true;

    document.getElementById("status").innerHTML =
        "Mining Toucan Protocol BCT...";

    timer = setInterval(() => {

        const reward =
            (Math.random() * 0.25).toFixed(4);

        balance += parseFloat(reward);

        document.getElementById("balance").innerHTML =
            balance.toFixed(4) + " BCT";

    }, 2000);
}
let balance = 0;
let progress = 0;
let timer;

function startMining(){

    document.getElementById("status").innerHTML =
        "🌱 Mining BCT...";

    timer = setInterval(() => {

        progress += Math.random() * 15;

        if(progress > 100)
            progress = 0;

        document.getElementById("progressBar").style.width =
            progress + "%";

        const reward =
            Math.random() * 0.45;

        balance += reward;

        document.getElementById("balance").innerHTML =
            balance.toFixed(4) + " BCT";

        addLog(
            "Carbon credit minted +" +
            reward.toFixed(4) +
            " BCT"
        );

    },1200);
}

function addLog(msg){

    const log =
        document.getElementById("miningLog");

    const row =
        document.createElement("div");

    row.className =
        "log-entry";

    row.innerHTML =
        "[" +
        new Date().toLocaleTimeString() +
        "] " +
        msg;

    log.prepend(row);
}
