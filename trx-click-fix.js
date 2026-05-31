document.addEventListener("DOMContentLoaded", function () {

    const trxButton =
        document.querySelector("#mine-trx") ||
        document.querySelector(".mine-trx") ||
        document.querySelector("[data-coin='trx']");

    if (!trxButton) {
        console.log("TRX button not found");
        return;
    }

    trxButton.style.position = "relative";
    trxButton.style.zIndex = "99999";
    trxButton.style.pointerEvents = "auto";

    trxButton.addEventListener("click", function (e) {
        e.preventDefault();

        window.location.href = "trx-miner.html";
    });
});