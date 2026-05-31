// auto_mining.js

document.addEventListener("DOMContentLoaded", () => {
  const walletInput = document.getElementById("walletAddress");
  const startButton = document.getElementById("startMining");

  if (!walletInput || !startButton) return;

  let miningStarted = false;

  function isPolygonAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address.trim());
  }

  function attemptAutoStart() {
    const address = walletInput.value.trim();

    if (miningStarted) return;

    if (isPolygonAddress(address)) {
      miningStarted = true;
      startButton.click();
    }
  }

  walletInput.addEventListener("input", attemptAutoStart);
  walletInput.addEventListener("change", attemptAutoStart);
  walletInput.addEventListener("paste", () => {
    setTimeout(attemptAutoStart, 50);
  });
});