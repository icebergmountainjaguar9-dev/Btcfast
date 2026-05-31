document.getElementById("mineSushi").addEventListener("click", () => {
    document.getElementById("status").innerHTML =
        "🍣 SushiToken mining started...";
});
const startBtn = document.getElementById("startMiningBtn");
const walletInput = document.getElementById("wallet");
const statusBox = document.getElementById("status");

startBtn.addEventListener("click", () => {

    const wallet = walletInput.value.trim();

    if(wallet.length < 20){
        statusBox.innerHTML =
            "Please enter a valid SushiToken Polygon address.";
        return;
    }

    statusBox.innerHTML =
        "🍣 Mining started for wallet:<br>" + wallet;
});