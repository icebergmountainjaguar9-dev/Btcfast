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