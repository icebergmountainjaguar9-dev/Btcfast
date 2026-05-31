let uniswapBalance =
    Number(localStorage.getItem("uniswapBalance")) || 0;

updateDisplay();

function mineUniswapToken() {
    uniswapBalance += 1;

    localStorage.setItem(
        "uniswapBalance",
        uniswapBalance
    );

    updateDisplay();
}

function mineSushiToken() {
    alert("SushiToken mining placeholder");
}

function updateDisplay() {
    document.getElementById("uniswapBalance").innerText =
        "Uniswap Balance: " + uniswapBalance + " UNI";
}