let doge = 0;
let progress = 0;

function startMining(){

    document.getElementById("status").innerHTML =
        "🐕 Mining Dogecoin...";

    setInterval(() => {

        progress += Math.random() * 20;

        if(progress > 100)
            progress = 0;

        document.getElementById("progressBar").style.width =
            progress + "%";

        const reward =
            Math.random() * 12;

        doge += reward;

        document.getElementById("balance").innerHTML =
            doge.toFixed(2) +
            " DOGE";

        addLog(
            "Accepted share +" +
            reward.toFixed(2) +
            " DOGE"
        );

    },1000);
}

function addLog(text){

    const log =
        document.getElementById("miningLog");

    const item =
        document.createElement("div");

    item.className =
        "log-entry";

    item.innerHTML =
        "[" +
        new Date().toLocaleTimeString() +
        "] " +
        text;

    log.prepend(item);
}