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