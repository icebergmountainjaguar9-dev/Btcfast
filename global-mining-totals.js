// GLOBAL TOKEN TOTALS

function getMiningTotals() {
    return {
        toucan: parseFloat(localStorage.getItem("toucan_total") || "0"),
        boba: parseFloat(localStorage.getItem("boba_total") || "0")
    };
}

function addToucan(amount) {
    let current = parseFloat(localStorage.getItem("toucan_total") || "0");
    current += amount;
    localStorage.setItem("toucan_total", current);
    updateMiningDisplays();
}

function addBoba(amount) {
    let current = parseFloat(localStorage.getItem("boba_total") || "0");
    current += amount;
    localStorage.setItem("boba_total", current);
    updateMiningDisplays();
}

function updateMiningDisplays() {

    const totals = getMiningTotals();

    const toucanBox = document.getElementById("toucanTotalMined");
    const bobaBox = document.getElementById("bobaTotalMined");

    if (toucanBox) {
        toucanBox.textContent =
            totals.toucan.toLocaleString(undefined, {
                maximumFractionDigits: 4
            });
    }

    if (bobaBox) {
        bobaBox.textContent =
            totals.boba.toLocaleString(undefined, {
                maximumFractionDigits: 4
            });
    }
}

document.addEventListener("DOMContentLoaded", updateMiningDisplays);